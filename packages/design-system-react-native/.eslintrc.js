module.exports = {
  extends: ['../../.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  settings: {
    'import/resolver': {
      typescript: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
      },
    },
  },
  ignorePatterns: [
    '.eslintrc.js',
    '**.config.js',
    '**.d.ts',
    '**.setup.js',
    '**.scripts.ts',
    'svgMock.js',
    'scripts/',
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'import/default': [
          'off',
          {
            patterns: {
              'react-native-reanimated': false,
            },
          },
        ],
      },
    },
  ],
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
};
