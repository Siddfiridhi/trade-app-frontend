import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',  // Ensure base URL is set correctly
  build: {
    outDir: 'dist',  // Ensure output directory is 'dist'
  },
  server: {
    host: '0.0.0.0',  // Make sure the server is listening on all network interfaces
  },
});

