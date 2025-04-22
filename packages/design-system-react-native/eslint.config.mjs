import { createConfig } from '@metamask/eslint-config';

const config = createConfig(
  {
    extends: ['../../eslint.config.mjs'],
    env: {
      browser: true,
      node: false,
    },
    rules: {
      'no-restricted-globals': 'off',
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
    rules: {
      'import/default': 'off',
    },
  },
  {
    ignores: [
      'src/components/Icon/icons/*', // Auto-generated icons
      '.eslintrc.js',
      '**.config.js',
      '**.d.ts',
      '**.setup.js',
      '**.scripts.ts',
      'svgMock.js',
      'scripts/',
    ],
  },
);

export default config;
