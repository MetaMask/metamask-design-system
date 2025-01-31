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
  {
    ignores: ['src/components/icon/icons/*'], // Auto-generated icons
  },
);

export default config;
