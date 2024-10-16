module.exports = {
  root: true,
  extends: ['@metamask/eslint-config', '@metamask/eslint-config-nodejs'],
  ignorePatterns: [
    '!.eslintrc.js',
    '!jest.config.js',
    'node_modules',
    '**/dist',
    '**/docs',
    '**/coverage',
    'merged-packages',
    'scripts/create-package/package-template',
  ],
  overrides: [
    {
      files: ['*.test.{ts,js}'],
      extends: ['@metamask/eslint-config-jest'],
    },
    {
      files: ['*.js', '*.cjs'],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: '2020',
      },
    },
    {
      files: ['*.ts'],
      extends: ['@metamask/eslint-config-typescript'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.packages.json'],
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'error',
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/naming-convention': 'warn',
        'import/unambiguous': 'off',
      },
    },
    {
      files: ['scripts/**/*.ts'],
      rules: {
        'import/no-unassigned-import': 'off',
        'n/no-sync': 'off',
        // All scripts will have shebangs.
        'n/shebang': 'off',
      },
    },
  ],
  rules: {
    camelcase: 'off',
    'id-length': 'off',
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'jsdoc/match-description': [
      'off',
      { matchDescription: '^[A-Z`\\d_][\\s\\S]*[.?!`>)}]$' },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
    jsdoc: {
      mode: 'typescript',
    },
  },
};
