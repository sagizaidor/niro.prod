// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://sagizaidor.github.io',
  base: '/niro.prod/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
