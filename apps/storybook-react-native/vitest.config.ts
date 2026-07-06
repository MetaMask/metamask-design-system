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
      // Run story files sequentially to avoid CI resource contention when
      // many modules are loaded in parallel via the Vite dev server.
      fileParallelism: false,
      projects: [
        {
          plugins: [
            storybookTest({
              configDir: path.join(dirname, '.storybook'),
              storybookScript: 'yarn storybook:web --ci',
            }),
          ],
          test: {
            name: 'storybook',
            retry: 2,
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
