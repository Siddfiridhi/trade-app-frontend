import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        host: '0.0.0.0', // Bind to 0.0.0.0 for Render to detect
        port: process.env.PORT ? parseInt(process.env.PORT) : 5173, // Use Render's port or default to 5173
    },
});
