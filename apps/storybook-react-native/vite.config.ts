// eslint-disable-next-line import-x/no-nodejs-modules
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    global: 'globalThis',
  },
  resolve: {
    alias: {
      'react-native': path.resolve(__dirname, 'node_modules/react-native-web'),
    },
  },
  plugins: [
    {
      name: 'react-native-web-alias-fix',
      configResolved(config) {
        // Override any existing react-native alias to use absolute path
        if (config.resolve?.alias) {
          if (Array.isArray(config.resolve.alias)) {
            const existingIndex = config.resolve.alias.findIndex(
              (alias: { find: string }) => alias.find === 'react-native',
            );
            if (existingIndex >= 0) {
              config.resolve.alias[existingIndex] = {
                find: 'react-native',
                replacement: path.resolve(
                  __dirname,
                  'node_modules/react-native-web',
                ),
              };
            }
          } else {
            config.resolve.alias['react-native'] = path.resolve(
              __dirname,
              'node_modules/react-native-web',
            );
          }
        }
      },
    },
  ],
});
