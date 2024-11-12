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
  ignorePatterns: ['.eslintrc.js', 'jest.config.js', 'babel.config.js'],

  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'always',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
