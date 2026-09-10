/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

const merge = require('deepmerge');
const path = require('path');

const baseConfig = require('../../jest.config.packages');

const displayName = path.basename(__dirname);

module.exports = merge(baseConfig, {
  // The display name when running multiple projects
  displayName,

  // Use V8 coverage to avoid Babel JSX parsing in non-RN tests
  coverageProvider: 'v8',

  // An object that configures minimum threshold enforcement for coverage results
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 70,
      lines: 84,
      statements: 84,
    },
  },
  // Exclude pure type files from coverage since they contain no executable code
  // Also exclude enum files that Jest has difficulty tracking coverage for
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'typography\\.types\\.ts$',
    'Theme\\.types\\.ts$',
    // Exclude non-color modules from this package's initial test scope
    'src/(ThemeProvider|ThemeContext|hooks|tailwind\\.config|typography)\\.(ts|tsx)$',
  ],
  moduleNameMapper: {
    // Prefer local source for monorepo package resolution
    '^@metamask/design-tokens$': '<rootDir>/../design-tokens/src',
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/../../tsconfig.packages.json',
      isolatedModules: true,
    },
  },
});
