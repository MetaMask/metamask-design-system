/* eslint-disable import/unambiguous */
module.exports = {
  extends: [
    '../../.eslintrc.js', // Extends the root configuration
    '@react-native-community', // React Native ESLint rules
  ],
  ignorePatterns: ['node_modules/', 'ios/', 'android/'],
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module', // Allows ES6 import/export syntax
      },
      rules: {
        // Add any package-specific rules here
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: ['@metamask/eslint-config-typescript'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
      rules: {
        // Add any TypeScript-specific rules here
      },
    },
  ],
};
