import { createConfig } from '@metamask/eslint-config';

const config = createConfig(
  {
    extends: ['../../eslint.config.mjs'],
  },
  {
    env: {
      browser: true,
      node: false,
    },
    rules: {
      'no-restricted-globals': 'off',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    parserOptions: {
      tsconfigRootDir: import.meta.dirname,
      project: ['./tsconfig.json'],
    },
  },
  // Icon files need special handling for naming conventions
  {
    files: ['src/components/Icon/icons/**/*.{ts,tsx}'],
    rules: {
      // Disable naming convention rules for icon files
      '@typescript-eslint/naming-convention': 'off',
      // Disable no-shadow rule for icon files - they often match global names
      '@typescript-eslint/no-shadow': 'off',
      // Disable return type requirement for icon components
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
);

export default config;
