import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gamedevdolin.com',
  integrations: [sitemap()],
  vite: {
    server: {
      // fsevents don't reach the dev server when launched from sandboxed
      // tooling (e.g. Claude's preview), so poll for file changes instead
      watch: {
        usePolling: true,
      },
    },
  },
});
