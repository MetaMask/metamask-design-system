import type { StorybookConfig } from '@storybook/react-vite';
import path, { join, dirname } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that are set up within a monorepo.
 *
 * @param value
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  stories: [
    '../stories/',
    '../../../packages/design-tokens/stories/Introduction.mdx',
    '../../../packages/design-tokens/stories/IntroductionColor.mdx',
    '../../../packages/design-system-react/src/components/Introduction.mdx',
    '../../../packages/design-system-react/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/design-tokens/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-vitest'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  docs: {
    defaultName: 'Documentation',
  },
  viteFinal: (config) => {
    // This will ensure Vite knows how to resolve modules outside the storybook folder
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        // Map the styles.css to the built version for consistency
        '@metamask/design-tokens/styles.css': path.resolve(
          __dirname,
          '../../../packages/design-tokens/dist/styles.css',
        ),
        // Map the package to the source for immediate updates
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

    // Add asset inclusion for font files so that Vite processes them correctly.
    config.assetsInclude = ['**/*.woff2', '**/*.woff', '**/*.ttf', '**/*.otf'];

    return config;
  },
};

export default config;
