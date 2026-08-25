import { defineConfig } from 'vite';
import path from 'path';

// Do not add @vitejs/plugin-react here — @storybook/react-native-web-vite already
// registers it. A second copy injects react-refresh twice and breaks the preview iframe.
export default defineConfig({
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
      'expo-image': path.resolve(__dirname, '.storybook/expo-image-shim.ts'),
    },
  },
  assetsInclude: ['**/*.woff2', '**/*.woff', '**/*.ttf', '**/*.otf'],
});
