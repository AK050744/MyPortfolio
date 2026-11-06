import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  outDir: './dist',
  site: 'https://ak050744.github.io',
  base: process.env.GITHUB_PAGES === 'true' ? '/MyPortfolio' : '/',
  build: {
    format: 'directory'
  }
});
