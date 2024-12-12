module.exports = {
  extends: ['../../.eslintrc.js'],
  env: {
    browser: true,
    node: false,
  },
  rules: {
    'no-restricted-globals': 'off',
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
    },
  ],
  ignorePatterns: ['src/components/icon/icons/*'], // Auto-generated icons
};
