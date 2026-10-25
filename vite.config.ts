import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, Plugin} from 'vite';

const apiLeadsPlugin = (): Plugin => ({
  name: 'api-leads-handler',
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      if (req.url === '/api/leads' && req.method === 'POST') {
        let bodyStr = '';
        req.on('data', (chunk) => {
          bodyStr += chunk;
        });
        req.on('end', async () => {
          try {
            const body = bodyStr ? JSON.parse(bodyStr) : {};
            const { default: handler } = await server.ssrLoadModule('/api/leads.ts');
            const mockReq = { method: req.method, body, headers: req.headers };
            const mockRes = {
              statusCode: 200,
              setHeader(name: string, val: string) {
                res.setHeader(name, val);
              },
              status(code: number) {
                this.statusCode = code;
                res.statusCode = code;
                return this;
              },
              json(data: any) {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(data));
              },
            };
            await handler(mockReq, mockRes);
          } catch (err: any) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: err?.message || 'Internal server error' }));
          }
        });
        return;
      }
      next();
    });
  },
});

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), apiLeadsPlugin()],
    resolve: {
      alias: {
        '@': path.resolve('.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
