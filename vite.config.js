import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  base: './', // Permite que o site funcione em qualquer subpasta do GitHub Pages
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        essencia: resolve(__dirname, 'essencia.html'),
        servicos: resolve(__dirname, 'servicos.html'),
        portfolio: resolve(__dirname, 'portfolio.html'),
        contato: resolve(__dirname, 'contato.html'),
      },
    },
  },
});
