import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  server: {
    allowedHosts: ['goadingly-unspared-tera.ngrok-free.dev'],
  },
  vite: {
    plugins: [tailwindcss()],
    preview: {
      allowedHosts: ['goadingly-unspared-tera.ngrok-free.dev'],
    },
  },
});
