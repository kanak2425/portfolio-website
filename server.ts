import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);

app.use(express.json());

// Serve static assets from the built Vite client
const distPath = path.resolve('dist');

if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));

  // SPA fallback for client-side routing
  app.get('*', (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
} else {
  app.get('*', (_req, res) => {
    res.status(200).send('Application ready.');
  });
}

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});

server.on('error', (err: NodeJS.ErrnoException) => {
  if (err.code === 'EADDRINUSE') {
    console.warn(`Port ${PORT} is already in use.`);
  } else {
    console.error('Server error:', err);
  }
});
