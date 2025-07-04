import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
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
              storybookScript: 'yarn storybook --ci',
            }),
          ],
          test: {
            name: 'storybook',
            browser: {
              enabled: true,
              provider: 'playwright',
              headless: true,
              instances: [{ browser: 'chromium' }],
            },
            setupFiles: ['./.storybook/vitest.setup.ts'],
          },
        },
      ],
    },
  }),
);
