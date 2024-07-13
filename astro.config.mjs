import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://special-palm-tree-9gr4579v7x6hx4jp-4321.app.github.dev/',
  integrations: [svelte()],
});
