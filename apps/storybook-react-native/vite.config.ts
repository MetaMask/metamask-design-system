import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react/jsx-dev-runtime',
      'react-native-web',
    ],
  },
  resolve: {
    alias: {
      '@metamask/design-system-shared': path.resolve(
        __dirname,
        '../../packages/design-system-shared/src',
      ),
      '@metamask/design-system-react-native': path.resolve(
        __dirname,
        '../../packages/design-system-react-native/src',
      ),
      '@metamask/design-system-twrnc-preset': path.resolve(
        __dirname,
        '../../packages/design-system-twrnc-preset/src',
      ),
      '@metamask/design-tokens': path.resolve(
        __dirname,
        '../../packages/design-tokens/src',
      ),
    },
  },
  assetsInclude: ['**/*.woff2', '**/*.woff', '**/*.ttf', '**/*.otf'],
});
