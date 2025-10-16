import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@metamask/design-tokens': path.resolve(
        __dirname,
        '../../packages/design-tokens',
      ),
      '@metamask/design-system-react': path.resolve(
        __dirname,
        '../../packages/design-system-react/src',
      ),
    },
  },
  assetsInclude: ['**/*.md', '**/*.mdx'],
  build: {
    rollupOptions: {
      external: [/\.md$/, /\.mdx$/],
    },
  },
});
