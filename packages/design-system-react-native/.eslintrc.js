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
    'svgMock.js',
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
