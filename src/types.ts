export interface Project {
  id: string;
  name: string;
  client: string;
  category: string;
  industry: string;
  year: string;
  tagline: string;
  description: string;
  image: string;
  aspectRatio: string;
  deliverables: string[];
  metrics: {
    label: string;
    value: string;
  };
  colorPalette: {
    name: string;
    hex: string;
  }[];
  overview: string;
  challenges: string;
  solution: string;
  liveUrl: string;
}

export interface Service {
  id: string;
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  duration: string;
  priceStarting: string;
  idealFor: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  rotation: string;
  avatarSeed: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  note: string;
}
