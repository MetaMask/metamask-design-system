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
    'jest.config.js',
    'babel.config.js',
    'tailwind.config.js',
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
