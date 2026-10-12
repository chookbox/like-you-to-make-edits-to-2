// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Required for canonical URLs, sitemap output and absolute OG URLs.
  // Update when the site moves to its final domain.
  site: 'https://markpachucki.info',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx(), sitemap()],

  build: {
    // Emit /work/slug/index.html so URLs carry a trailing slash consistently.
    format: 'directory',
  },
});
