import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
// eslint-disable-next-line import-x/no-nodejs-modules
import path from 'node:path';
// eslint-disable-next-line import-x/no-nodejs-modules
import { fileURLToPath } from 'node:url';
import { defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      projects: [
        {
          plugins: [
            storybookTest({
              configDir: path.join(dirname, '.storybook'),
              storybookScript: 'yarn storybook:web --ci',
              storybookUrl: 'http://localhost:6007',
            }),
          ],
          test: {
            name: 'storybook',
            fileParallelism: false,
            retry: 2,
            testTimeout: 60_000,
            hookTimeout: 60_000,
            server: {
              deps: {
                inline: [
                  '@metamask/design-system-react-native',
                  'react-native-web',
                ],
              },
            },
            browser: {
              enabled: true,
              provider: playwright(),
              headless: true,
              instances: [{ browser: 'chromium' }],
            },
          },
        },
      ],
    },
  }),
);
