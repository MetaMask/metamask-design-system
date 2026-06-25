// This file has been automatically migrated to valid ESM format by Storybook.
import { createRequire } from 'node:module';
import { fileURLToPath } from 'url';
import type { StorybookConfig } from '@storybook/react-vite';
import path, { join, dirname } from 'path';

const require = createRequire(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that are set up within a monorepo.
 *
 * @param value
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}

// Check if we're running in test mode (Vitest)
const isTestMode = process.env.VITEST === 'true';

// In dev both servers run simultaneously: React on 6006, RN web on 6007.
// In production the RN static build is nested at /react-native on the same host.
const rnStorybookUrl =
  process.env.STORYBOOK_RN_URL ??
  (process.env.NODE_ENV === 'production'
    ? './react-native'
    : 'http://localhost:6007');

const config: StorybookConfig = {
  features: {
    componentsManifest: true,
  },
  refs: {
    'react-native': {
      title: 'React Native Components',
      url: rnStorybookUrl,
      expanded: false,
    },
  },
  stories: [
    '../stories/',
    // Only include MDX documentation files when not in test mode
    ...(isTestMode
      ? []
      : [
          '../../../packages/design-tokens/stories/Introduction.mdx',
          '../../../packages/design-tokens/stories/IntroductionColor.mdx',
          '../../../packages/design-system-react/src/components/Introduction.mdx',
        ]),
    '../../../packages/design-system-react/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/design-tokens/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-vitest'),
    getAbsolutePath('@storybook/addon-mcp'),
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

    // Add optimizeDeps configuration to handle workspace packages
    config.optimizeDeps = {
      ...config.optimizeDeps,
      exclude: [
        '@metamask/design-tokens',
        '@metamask/design-system-react',
        '@metamask/design-system-tailwind-preset',
      ],
    };

    return config;
  },
};

export default config;
