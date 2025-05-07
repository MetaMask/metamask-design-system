import base, { createConfig } from '@metamask/eslint-config';
import nodejs from '@metamask/eslint-config-nodejs';
import jest from '@metamask/eslint-config-jest';
import typescript from '@metamask/eslint-config-typescript';

const config = createConfig(
  {
    ignores: [
      'yarn.lock',
      '**/**.map',
      '**/**.tsbuildinfo',
      '**/*.json',
      '**/*.md',
      '**/LICENSE',
      '**/*.sh',
      '**/.DS_Store',
      '**/dist/**',
      '**/docs/**',
      '**/coverage/**',
      'merged-packages/**',
      '.yarn/**',
      'scripts/create-package/package-template/**',
      'apps/storybook-react-native/.storybook/FontLoader.js',
      'apps/storybook-react-native/.storybook/config.js',
      'packages/design-system-react-native/jest.setup.js',
    ],
  },
  ...base,
  {
    settings: {
      jsdoc: {
        mode: 'typescript',
      },
    },
  },
  {
    files: [
      '**/jest.config.js',
      '**/jest.environment.js',
      '**/tests/**/*.{ts,js,tsx}',
      '*.js',
      '*.test.{ts,js,tsx}',
      'scripts/*.ts',
      'scripts/create-package/*.ts',
      'yarn.config.cjs',
    ],
    extends: [nodejs],
  },
  {
    files: ['*.test.{ts,js,tsx}', '**/tests/**/*.{ts,js,tsx}'],
    extends: [jest],
  },
  {
    // These files are test helpers, not tests. We still use the Jest ESLint
    // config here to ensure that ESLint expects a test-like environment, but
    // various rules meant just to apply to tests have been disabled.
    files: ['**/tests/**/*.{ts,js,tsx}', '!*.test.{ts,js,tsx}'],
    rules: {
      'jest/no-export': 'off',
      'jest/require-top-level-describe': 'off',
      'jest/no-if': 'off',
    },
  },
  {
    files: ['*.js', '*.cjs'],
    parserOptions: {
      sourceType: 'script',
      ecmaVersion: '2020',
    },
  },
  {
    files: ['*.ts', '*.tsx'],
    extends: [typescript],
    parserOptions: {
      tsconfigRootDir: import.meta.dirname,
      project: ['./tsconfig.packages.json'],
    },
    rules: {
      // Enable rules that are disabled in `@metamask/eslint-config-typescript`
      '@typescript-eslint/no-explicit-any': 'error',

      // Set to ban interfaces due to their incompatibility with Record<string, unknown>.
      // See: https://github.com/Microsoft/TypeScript/issues/15300#issuecomment-702872440
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

      // TODO: auto-fix breaks stuff
      '@typescript-eslint/promise-function-async': 'off',

      // TODO: re-enable most of these rules
      '@typescript-eslint/no-unnecessary-type-assertion': 'off',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/prefer-enum-initializers': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/prefer-optional-chain': 'off',
      '@typescript-eslint/prefer-reduce-type-parameter': 'off',
      'no-restricted-syntax': 'off',
      'no-restricted-globals': 'off',
    },
  },
  {
    files: ['tests/setupAfterEnv/matchers.ts'],
    parserOptions: {
      sourceType: 'script',
    },
  },
  {
    files: ['*.d.ts'],
    rules: {
      '@typescript-eslint/naming-convention': 'warn',
      'import/unambiguous': 'off',
    },
  },
  {
    files: ['scripts/*.ts'],
    rules: {
      // All scripts will have shebangs.
      'n/shebang': 'off',
    },
  },
  {
    files: ['**/jest.environment.js'],
    rules: {
      // These files run under Node, and thus `require(...)` is expected.
      'n/global-require': 'off',
    },
  },
);

export default config;
