import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  base: "/fitnhub",
  integrations: [react()],
});