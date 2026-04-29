import { createRequire } from 'node:module';
import path, { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/react-native-web-vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

const require = createRequire(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '../../..');

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/design-system-react-native/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [getAbsolutePath('@storybook/addon-docs')],
  framework: {
    name: getAbsolutePath('@storybook/react-native-web-vite'),
    options: {},
  },
  viteFinal: async (viteConfig) => {
    const filteredPlugins = (viteConfig.plugins ?? []).filter(
      (plugin) => plugin?.name !== 'vite-tsconfig-paths',
    );

    return {
      ...viteConfig,
      plugins: [
        svgr({
          include: '**/*.svg',
        }),
        tsconfigPaths({
          ignoreConfigErrors: true,
          projects: [path.resolve(repoRoot, 'apps/storybook-react-native/tsconfig.json')],
        }),
        ...filteredPlugins,
      ],
      assetsInclude: [
        '**/*.woff2',
        '**/*.woff',
        '**/*.ttf',
        '**/*.otf',
      ],
      optimizeDeps: {
        ...viteConfig.optimizeDeps,
        exclude: [
          ...(viteConfig.optimizeDeps?.exclude ?? []),
          '@metamask/design-system-shared',
          '@metamask/design-system-react-native',
          '@metamask/design-system-twrnc-preset',
          '@metamask/design-tokens',
        ],
      },
      resolve: {
        ...viteConfig.resolve,
        alias: {
          ...(viteConfig.resolve?.alias ?? {}),
          '@metamask/design-system-shared': path.resolve(
            repoRoot,
            'packages/design-system-shared/src',
          ),
          '@metamask/design-system-react-native': path.resolve(
            repoRoot,
            'packages/design-system-react-native/src',
          ),
          '@metamask/design-system-twrnc-preset': path.resolve(
            repoRoot,
            'packages/design-system-twrnc-preset/src',
          ),
          '@metamask/design-tokens': path.resolve(
            repoRoot,
            'packages/design-tokens/src',
          ),
        },
      },
      server: {
        ...viteConfig.server,
        fs: {
          ...viteConfig.server?.fs,
          allow: [
            ...(viteConfig.server?.fs?.allow ?? []),
            repoRoot,
            path.resolve(repoRoot, 'packages'),
          ],
        },
      },
    };
  },
};

export default config;
