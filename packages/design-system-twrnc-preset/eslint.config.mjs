import { createConfig } from '@metamask/eslint-config';

const config = createConfig(
  {
    extends: ['../../eslint.config.mjs'],
    rules: {
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'always',
          jsx: 'always',
          ts: 'never',
          tsx: 'never',
        },
      ],
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
    ignores: [
      '.eslintrc.js',
      'jest.config.js',
      'babel.config.js',
      'tailwind.config.js',
    ],
  },
);

export default config;
