import { createRequire } from 'node:module';
import path, { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/react-native-web-vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import babel from '@rolldown/plugin-babel';
import { designSystemBarrelImportsPlugin } from './vite-plugin-design-system-barrel-imports';

const __filename = fileURLToPath(import.meta.url);

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
    options: {
      modulesToTranspile: ['react-native-reanimated', 'react-native-worklets'],
      pluginReactOptions: {
        babel: {
          plugins: ['react-native-worklets/plugin'],
        },
      },
    },
  },
  viteFinal: async (viteConfig) => {
    const filteredPlugins = (viteConfig.plugins ?? []).filter(
      (plugin) => plugin?.name !== 'vite-tsconfig-paths',
    );

    // Apply the worklets Babel plugin during Rolldown's dep-optimization phase
    // so it runs on the original source files (before they're pre-bundled into
    // a single file). This is necessary because:
    //   1. The Storybook preset's modulesToTranspile exclude regex matches
    //      `.cache/storybook/.../sb-vite/deps/` paths (the outer `/node_modules/`
    //      segment), so the plugin never fires during the transform phase.
    //   2. Running Babel on the pre-bundled giant file is also much slower.
    //
    // `disableSourceMaps: true` is belt-and-suspenders alongside the
    // react-native-worklets patch that strips `?v=...` from readFileSync paths.
    //
    // Tracked upstream: https://github.com/dannyhw/vite-plugin-rnw/issues/13
    const rolldownOptions = viteConfig.optimizeDeps?.rolldownOptions ?? {};
    const rolldownPlugins: unknown[] = Array.isArray(rolldownOptions.plugins)
      ? rolldownOptions.plugins
      : [];
    rolldownPlugins.push(
      babel({
        exclude:
          /node_modules\/(?!.*(react-native-reanimated|react-native-worklets))/,
        plugins: [
          ['react-native-worklets/plugin', { disableSourceMaps: true }],
        ],
        babelrc: false,
        configFile: false,
      }),
    );

    return {
      ...viteConfig,
      plugins: [
        // Example stories import from the package barrel to mirror production usage, but the
        // static build must not resolve those through `src/index.ts`. Rolldown otherwise emits
        // a shared orchestrator chunk that inits Avatar/Badge (and other) modules before the
        // components a story actually renders, which races on cold CDN preloads → React #130.
        // This plugin rewrites barrel imports to component subpaths at build time only.
        designSystemBarrelImportsPlugin(
          path.resolve(
            repoRoot,
            'packages/design-system-react-native/src/components/index.ts',
          ),
        ),
        svgr({
          include: '**/*.svg',
        }),
        tsconfigPaths({
          ignoreConfigErrors: true,
          projects: [
            path.resolve(repoRoot, 'apps/storybook-react-native/tsconfig.json'),
          ],
        }),
        ...filteredPlugins,
      ],
      assetsInclude: ['**/*.woff2', '**/*.woff', '**/*.ttf', '**/*.otf'],
      optimizeDeps: {
        ...viteConfig.optimizeDeps,
        exclude: [
          ...(viteConfig.optimizeDeps?.exclude ?? []),
          '@metamask/design-system-shared',
          '@metamask/design-system-react-native',
          '@metamask/design-system-twrnc-preset',
          '@metamask/design-tokens',
        ],
        rolldownOptions: {
          ...rolldownOptions,
          plugins: rolldownPlugins,
        },
      },
      resolve: {
        ...viteConfig.resolve,
        alias: [
          ...(Array.isArray(viteConfig.resolve?.alias)
            ? viteConfig.resolve.alias
            : Object.entries(viteConfig.resolve?.alias ?? {}).map(
                ([find, replacement]) => ({ find, replacement }),
              )),
          {
            find: '@metamask/design-system-shared',
            replacement: path.resolve(
              repoRoot,
              'packages/design-system-shared/src',
            ),
          },
          {
            find: '@metamask/design-system-react-native',
            replacement: path.resolve(
              repoRoot,
              'packages/design-system-react-native/src',
            ),
          },
          {
            find: '@metamask/design-system-twrnc-preset',
            replacement: path.resolve(
              repoRoot,
              'packages/design-system-twrnc-preset/src',
            ),
          },
          {
            find: '@metamask/design-tokens',
            replacement: path.resolve(repoRoot, 'packages/design-tokens/src'),
          },
        ],
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
