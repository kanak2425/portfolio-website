import type { VercelRequest, VercelResponse } from '@vercel/node';

type LeadPayload = {
  name?: unknown;
  email?: unknown;
  instagram?: unknown;
  website_type?: unknown;
  message?: unknown;
};

function asText(value: unknown, maxLength: number): string {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) {
    console.error('Lead API configuration is missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.');
    return res.status(500).json({ error: 'The contact form is not configured yet. Please try again later.' });
  }

  const body = (req.body && typeof req.body === 'object' ? req.body : {}) as LeadPayload;
  const name = asText(body.name, 120);
  const email = asText(body.email, 254);
  const instagram = asText(body.instagram, 200) || null;
  const websiteType = asText(body.website_type, 120);
  const message = asText(body.message, 5000);

  if (!name || !email || !websiteType || !message) {
    return res.status(400).json({ error: 'Please complete all required fields and try again.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  try {
    const baseUrl = supabaseUrl.replace(/\/+$/, '');
    const response = await fetch(`${baseUrl}/rest/v1/agency_leads`, {
      method: 'POST',
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({
        name,
        email,
        instagram,
        website_type: websiteType,
        message,
        source: 'ai-adda-agency-portfolio',
      }),
    });

    if (!response.ok) {
      const details = await response.text();
      console.error('Supabase lead insert failed:', response.status, details.slice(0, 500));
      return res.status(502).json({ error: 'Your note could not be saved right now. Please try again shortly.' });
    }

    return res.status(201).json({ ok: true });
  } catch (error) {
    console.error('Lead API request failed:', error);
    return res.status(502).json({ error: 'A connection problem stopped your note from being saved. Please try again.' });
  }
}
