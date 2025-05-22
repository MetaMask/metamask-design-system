import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@metamask/design-system-react-native': resolve(
        __dirname,
        '../../../packages/design-system-react-native/src',
      ),
      '@metamask/design-system-twrnc-preset': resolve(
        __dirname,
        '../../../packages/design-system-twrnc-preset/src',
      ),
      '@metamask/design-tokens': resolve(
        __dirname,
        '../../../packages/design-tokens/src',
      ),
      'react-native': 'react-native-web',
      'react-native-svg': 'react-native-svg-web',
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-native-web'],
    exclude: ['react-native', '@react-native/assets-registry'],
  },
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react',
    loader: 'jsx',
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(
      process.env.NODE_ENV || 'development',
    ),
    global: 'globalThis',
  },
});
