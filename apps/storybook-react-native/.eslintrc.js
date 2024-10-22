/* eslint-disable import/unambiguous */
module.exports = {
  extends: [
    '../../.eslintrc.js', // Extends the root configuration
    '@react-native-community', // React Native ESLint rules
  ],
  overrides: [
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
