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
      typescript: {
        // Specify the path to the TypeScript configuration file
        project: './tsconfig.packages.json',
        // Define additional paths for module resolution to match TypeScript paths
        paths: ['apps/*', 'packages/*'],
        /**
         * The 'paths' option allows ESLint to understand module aliases defined in TypeScript.
         * Here, 'apps/*' and 'packages/*' correspond to the directories where your workspace packages reside.
         * This should align with the 'paths' defined in your TypeScript compilerOptions.
         */
      },
      node: {
        // Specify file extensions that ESLint should consider when resolving modules
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        // Include workspace directories to help ESLint resolve modules within these folders
        paths: ['apps', 'packages'],
        /**
         * The 'node' resolver is configured to recognize JavaScript and TypeScript file extensions.
         * The 'paths' array includes 'apps' and 'packages' directories, aligning with the workspace structure.
         * This ensures that modules imported from these directories are correctly resolved by ESLint.
         */
      },
    },
    jsdoc: {
      mode: 'typescript',
    },
  },
};
