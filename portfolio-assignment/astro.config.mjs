// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';



export default defineConfig({

  integrations: [
    svelte(), 
    tailwind()
  ],

  i18n: {
    locales: ['en', 'el'],
    defaultLocale: 'el', 
    routing: {
      prefixDefaultLocale: true
    }
  },


});