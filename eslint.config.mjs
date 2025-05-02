import base, { createConfig } from '@metamask/eslint-config';
import jest from '@metamask/eslint-config-jest';
import nodejs from '@metamask/eslint-config-nodejs';
import typescript from '@metamask/eslint-config-typescript';

// Start with a basic configuration following the Core repo pattern
const config = createConfig([
  // First spread the base configuration (like Core does)
  ...base,
  // Basic ignores section
  {
    ignores: [
      '**/dist/**',
      '**/docs/**',
      '**/coverage/**',
      'merged-packages/**',
      '.yarn/**',
      'scripts/create-package/package-template/**',
      'yarn.lock',
      '**/**.map',
      '**/**.tsbuildinfo',
      '**/*.json',
      '**/*.md',
      '**/LICENSE',
      '**/*.sh',
      '**/.DS_Store',
      // Design system specific ignores (from the original config)
      'apps/storybook-react-native/.storybook/FontLoader.js',
      'apps/storybook-react-native/.storybook/config.js',
      'packages/design-system-react-native/jest.setup.js',
    ],
  },
  // Common rule overrides and settings (from Core)
  {
    rules: {
      // Common rule customizations
      camelcase: 'off',
      'id-length': 'off',
    },
    settings: {
      jsdoc: {
        mode: 'typescript',
      },
    },
  },
  // Node.js files config (from Core)
  {
    files: [
      '**/*.{js,cjs,mjs}',
      '**/*.test.{js,ts}',
      '**/tests/**/*.{js,ts}',
      'scripts/*.ts',
      'scripts/create-package/**/*.ts',
    ],
    extends: [nodejs],
  },
  // Test files config (from Core)
  {
    files: ['**/*.test.{js,ts,tsx}', '**/tests/**/*.{js,ts,tsx}'],
    extends: [jest],
    rules: {
      'jest/no-conditional-in-test': 'warn',
      'jest/prefer-lowercase-title': 'warn',
      'jest/prefer-strict-equal': 'warn',
    },
  },
  // Test helper files (from Core)
  {
    files: ['**/tests/**/*.{js,ts,tsx}'],
    ignores: ['**/*.test.{js,ts,tsx}'],
    rules: {
      'jest/no-export': 'off',
      'jest/require-top-level-describe': 'off',
      'jest/no-if': 'off',
    },
  },
  // JavaScript files config (using ** patterns like Core)
  {
    files: ['**/*.{js,cjs}'],
    languageOptions: {
      sourceType: 'script',
      ecmaVersion: 2020,
    },
  },
  // TypeScript files config (notice the ** pattern as in Core)
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [typescript],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        project: './tsconfig.packages.json',
        // Disable projectService like Core does
        projectService: false,
      },
    },
    rules: {
      // Add other typescript rules from Core
      // This should really be in `@metamask/eslint-config-typescript`
      '@typescript-eslint/no-explicit-any': 'error',

      // TODO: re-enable most of these rules
      '@typescript-eslint/promise-function-async': 'off',
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
  // TypeScript declaration files (from Core)
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/naming-convention': 'warn',
      'import-x/unambiguous': 'off',
    },
  },
  // Scripts with shebangs (from Core)
  {
    files: ['scripts/*.ts'],
    rules: {
      // Scripts may be self-executable and thus have hashbangs
      'n/hashbang': 'off',
    },
  },
  // Additional configuration for Jest environment files
  {
    files: ['**/jest.environment.js'],
    rules: {
      // These files run under Node, and thus `require(...)` is expected
      'n/global-require': 'off',
    },
  },
  // Module files (from Core)
  {
    files: ['**/*.mjs'],
    languageOptions: {
      sourceType: 'module',
    },
  },
]);

export default config;
