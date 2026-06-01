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
        alias: [
          ...(Array.isArray(viteConfig.resolve?.alias)
            ? viteConfig.resolve.alias
            : Object.entries(viteConfig.resolve?.alias ?? {}).map(
                ([find, replacement]) => ({ find, replacement }),
              )),
          // ──────────────────────────────────────────────────────────────
          // react-native-reanimated alias to a local ESM stub.
          //
          // Why this exists:
          //   Reanimated 4 ships a complete web implementation
          //   (`ReanimatedModule/index.web.js`, `workletsModuleInstance.web.js`)
          //   that uses `performance.now()` and `requestAnimationFrame` instead
          //   of the native worklet runtime, and guards initialization with
          //   `IS_WEB = Platform.OS === 'web'`. In theory this works in a
          //   `react-native-web` browser environment with no mocking required.
          //
          // What blocks it:
          //   Reanimated's main `index.js` imports its module as a directory
          //   (`import { ReanimatedModule } from './ReanimatedModule'`).
          //   `vite-plugin-rnw` adds `.web.js` to `resolveExtensions`, but the
          //   extension list is only consulted for direct file imports, not for
          //   directory index resolution. esbuild's pre-bundler loads the
          //   native `ReanimatedModule/index.js` instead of `index.web.js`,
          //   the native module is `null` in the browser, module
          //   initialization throws, and the default `Animated` export is
          //   `undefined` — crashing every consumer at
          //   `Animated.createAnimatedComponent`.
          //
          // What we tried before falling back to a mock:
          //   - Surgical alias for the failing directory path — Vite/esbuild
          //     do not honor regex aliases for relative paths during
          //     pre-bundling.
          //   - Custom Vite `resolveId` plugin to redirect directory imports
          //     to `index.web.js` — never fires for pre-bundled deps because
          //     esbuild handles resolution internally.
          //   - Excluding Reanimated from `optimizeDeps` so Vite plugins fire
          //     for it — triggers a separate upstream bug where the worklets
          //     Babel plugin tries to `readFileSync` source paths that include
          //     Vite's `?v=…` cache-busting query string, throwing ENOENT.
          //
          // Tracked upstream:
          //   https://github.com/dannyhw/vite-plugin-rnw/issues/13
          //   https://github.com/storybookjs/storybook/issues/34768
          //
          // Limitations of the mock:
          //   Animation-driven components (BottomSheet's slide-in,
          //   HeaderStandardAnimated's scroll-linked title, gesture-driven
          //   swipes) render statically. The iOS Storybook remains the source
          //   of truth for animated/interactive behaviour. All non-animated
          //   components render correctly on web.
          //
          // When to remove:
          //   Delete `reanimated-mock.ts` and this alias once either upstream
          //   issue ships a fix. Reanimated's web implementation is already
          //   present in `node_modules`; only the resolution layer is broken.
          //
          // Exact-match regex is required so sub-path imports like
          // `react-native-reanimated/scripts/…` still resolve normally to the
          // real package.
          {
            find: /^react-native-reanimated$/,
            replacement: path.resolve(__dirname, 'reanimated-mock.ts'),
          },
          {
            find: '@metamask/design-system-shared',
            replacement: path.resolve(repoRoot, 'packages/design-system-shared/src'),
          },
          {
            find: '@metamask/design-system-react-native',
            replacement: path.resolve(repoRoot, 'packages/design-system-react-native/src'),
          },
          {
            find: '@metamask/design-system-twrnc-preset',
            replacement: path.resolve(repoRoot, 'packages/design-system-twrnc-preset/src'),
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
