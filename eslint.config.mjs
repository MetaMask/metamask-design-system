import base, { createConfig } from '@metamask/eslint-config';
import jest from '@metamask/eslint-config-jest';
import nodejs from '@metamask/eslint-config-nodejs';
import typescript from '@metamask/eslint-config-typescript';
import tailwind from 'eslint-plugin-tailwindcss';

const NODE_LTS_VERSION = 22;

const config = createConfig([
  ...base,
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/docs/**',
      '**/coverage/**',
      'merged-packages/**',
      '.yarn/**',
      'scripts/create-package/package-template/**',
      /**
       * Design System specific ignores
       * TODO review these ignores and re-enable them
       */
      // design system react
      'packages/design-system-react/src/components/Icon/icons/*.tsx',
      'packages/design-system-react/src/components/Icon/icons/index.ts',
      // design system react native
      'packages/design-system-react-native/metro.config.js',
      'packages/design-system-react-native/jest.setup.js',
      'packages/design-system-react-native/src/components/temp-components/Blockies/Blockies.test.tsx',
      'packages/design-system-react-native/src/components/temp-components/Blockies/Blockies.tsx',
      'packages/design-system-react-native/src/components/temp-components/ButtonAnimated/ButtonAnimated.tsx',
      'packages/design-system-react-native/src/components/temp-components/ImageOrSvg/ImageOrSvg.stories.tsx',
      'packages/design-system-react-native/src/components/temp-components/ImageOrSvg/ImageOrSvg.test.tsx',
      'packages/design-system-react-native/src/components/temp-components/ImageOrSvg/ImageOrSvg.tsx',
      'packages/design-system-react-native/src/components/temp-components/Spinner/Spinner.tsx',
      // storybook react
      'apps/storybook-react/.storybook/*.ts',
      'apps/storybook-react/.storybook/*.tsx',
      'apps/storybook-react/vite.config.ts',
      'apps/storybook-react/postcss.config.js',
      'apps/storybook-react/tailwind.config.js',
      // storybook react native
      'apps/storybook-react-native/.storybook/**/*.js',
      'apps/storybook-react-native/*.js',
    ],
  },
  {
    rules: {
      // TODO: re-enble most of these rules
      'id-length': 'off',
      'id-denylist': 'off',
      'import-x/no-unassigned-import': 'off',
      'no-negated-condition': 'off',
      'no-param-reassign': 'off',
      'no-restricted-syntax': 'off',
      'require-atomic-updates': 'off',
      'jsdoc/match-description': [
        'off',
        { matchDescription: '^[A-Z`\\d_][\\s\\S]*[.?!`>)}]$' },
      ],
    },
    settings: {
      jsdoc: {
        mode: 'typescript',
      },
    },
  },
  {
    files: [
      '**/*.{js,cjs,mjs}',
      '**/*.test.{js,ts}',
      '**/tests/**/*.{js,ts}',
      'scripts/*.ts',
      'scripts/create-package/**/*.ts',
    ],
    extends: [nodejs],
    rules: {
      // TODO: Re-enable this
      'n/no-sync': 'off',
      // TODO: Re-enable these rules. Enabling them with error suppression
      // breaks `--fix`, because the autofixer for these rules do not work very
      // well.
      'jsdoc/require-jsdoc': 'off',
      'jsdoc/check-tag-names': 'off',
    },
  },
  {
    files: ['**/*.test.{js,ts,tsx}'],
    extends: [jest],
    settings: {
      node: {
        version: `^${NODE_LTS_VERSION}`,
      },
    },
  },
  {
    files: ['**/*.{js,cjs}'],
    languageOptions: {
      sourceType: 'script',
      ecmaVersion: 2020,
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [typescript],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        project: './tsconfig.packages.json',
        // Disable `projectService` because we run into out-of-memory issues.
        // See this ticket for inspiration out how to solve this:
        // <https://github.com/typescript-eslint/typescript-eslint/issues/1192>
        projectService: false,
      },
    },
    rules: {
      // These rules have been customized from their defaults.
      '@typescript-eslint/switch-exhaustiveness-check': [
        'error',
        {
          considerDefaultExhaustiveForUnions: true,
        },
      ],
      // Enable rules that are disabled in `@metamask/eslint-config-typescript`
      '@typescript-eslint/no-explicit-any': 'error',

      // TODO: auto-fix breaks stuff
      '@typescript-eslint/promise-function-async': 'off',

      // TODO: re-enable most of these rules
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-unnecessary-type-assertion': 'off',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/prefer-enum-initializers': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/prefer-optional-chain': 'off',
      '@typescript-eslint/prefer-reduce-type-parameter': 'off',
      'no-restricted-syntax': 'off',
      'no-restricted-globals': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',

      // TODO: Re-enable these rules. Enabling them with error suppression
      // breaks `--fix`, because the autofixer for these rules do not work very
      // well.
      'jsdoc/require-jsdoc': 'off',
      'jsdoc/check-tag-names': 'off',

      // Overrides eslint base config which isn't following outer most pattern. Can be removed once this issue is resolved and eslint config updated
      // issue: https://github.com/MetaMask/eslint-config/issues/403
      'import-x/order': [
        'error',
        {
          // Require newlines between different groups
          'newlines-between': 'always',
          // Define groups in order of "outermost inward" pattern
          groups: [
            // External libraries first (Node.js builtins and node_modules)
            ['builtin', 'external'],
            // Then parent imports (../../)
            ['parent'],
            // Then sibling imports (../)
            ['sibling'],
            // Then local imports (./) including index
            ['index', 'internal'],
          ],
          // Alphabetically sort within each group
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  {
    files: ['tests/setupAfterEnv/matchers.ts'],
    languageOptions: {
      sourceType: 'script',
    },
  },
  // This should really be in `@metamask/eslint-config-typescript`
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/naming-convention': 'error',
      'import-x/unambiguous': 'off',
    },
  },
  {
    files: ['scripts/*.ts'],
    rules: {
      // Scripts may be self-executable and thus have hashbangs.
      'n/hashbang': 'off',
    },
  },
  {
    files: ['**/jest.environment.js'],
    rules: {
      // These files run under Node, and thus `require(...)` is expected.
      'n/global-require': 'off',
    },
  },
  {
    files: ['**/*.mjs'],
    languageOptions: {
      sourceType: 'module',
    },
  },
  // Tailwind ESLint for React Web
  {
    files: [
      'packages/design-tokens/stories/**',
      'packages/design-system-react/src/**',
      'apps/storybook-react/stories/**',
    ],
    plugins: {
      tailwindcss: tailwind,
    },
    rules: {
      'tailwindcss/classnames-order': 'error',
      'tailwindcss/enforces-negative-arbitrary-values': 'error',
      'tailwindcss/enforces-shorthand': 'error',
      'tailwindcss/no-arbitrary-value': 'off', // There are legitimate reasons to use arbitrary values but we should specifically error on static colors
      'tailwindcss/no-custom-classname': 'error',
      'tailwindcss/no-contradicting-classname': 'error',
      'tailwindcss/no-unnecessary-arbitrary-value': 'error',
    },
    settings: {
      tailwindcss: {
        callees: ['twMerge'],
        config: 'apps/storybook-react/tailwind.config.js',
        classRegex: ['^(class(Name)?|twClassName)$'],
      },
    },
  },
  // Tailwind ESLint for React Native
  {
    files: [
      'packages/design-system-react-native/src/**',
      'apps/storybook-react-native/stories/**',
    ],
    plugins: {
      tailwindcss: tailwind,
    },
    rules: {
      'tailwindcss/classnames-order': 'error',
      'tailwindcss/enforces-negative-arbitrary-values': 'error',
      'tailwindcss/enforces-shorthand': 'error',
      'tailwindcss/no-arbitrary-value': 'off', // There are legitimate reasons to use arbitrary values but we should specifically error on static colors
      'tailwindcss/no-custom-classname': 'error',
      'tailwindcss/no-contradicting-classname': 'error',
      'tailwindcss/no-unnecessary-arbitrary-value': 'error',
    },
    settings: {
      tailwindcss: {
        callees: ['twClassName', 'tw'],
        config: 'apps/storybook-react-native/tailwind-intellisense.config.js',
        tags: ['tw'], // Enable template literal support for tw`classnames`
      },
    },
  },
]);

export default config;
