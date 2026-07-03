import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

const repoRoot = path.resolve(dirname, '../..');

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@metamask/design-system-shared': path.resolve(
        repoRoot,
        'packages/design-system-shared/src',
      ),
      '@metamask/design-system-react-native': path.resolve(
        repoRoot,
        'packages/design-system-react-native/src',
      ),
      '@metamask/design-system-twrnc-preset': path.resolve(
        repoRoot,
        'packages/design-system-twrnc-preset/src',
      ),
      '@metamask/design-tokens': path.resolve(
        repoRoot,
        'packages/design-tokens/src',
      ),
    },
  },
  assetsInclude: ['**/*.woff2', '**/*.woff', '**/*.ttf', '**/*.otf'],
});
