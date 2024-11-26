import type { StorybookConfig } from '@storybook/react-vite';

import path, { join, dirname } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that are set up within a monorepo.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
  stories: [
    '../stories/Introduction.mdx',
    '../../../packages/design-tokens/stories/Introduction.mdx',
    '../../../packages/design-tokens/stories/IntroductionColor.mdx',
    '../../../packages/design-system-react/src/components/Introduction.mdx',
    '../../../packages/design-system-react/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/design-tokens/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: [
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-a11y'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  viteFinal: (config) => {
    // This will ensure Vite knows how to resolve modules outside the storybook folder
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@metamask/design-tokens': path.resolve(
          __dirname,
          '../../../packages/design-tokens',
        ),
        '@metamask/design-system-react': path.resolve(
          __dirname,
          '../../../packages/design-system-react/src',
        ),
      };
    }
    return config;
  },
};
export default config;
