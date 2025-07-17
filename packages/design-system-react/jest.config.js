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

  // An object that configures minimum threshold enforcement for coverage results
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },

  // Add coverage ignore patterns
  coveragePathIgnorePatterns: [
    'index.ts',
    '\\.d\\.ts$',
    '\\.constants\\.ts$', // ignore all .constants.ts files
    '\\.dev\\.ts$', // ignore all .dev.ts files
    '\\.figma\\.tsx', // Figma code connect files
    'src/components/Icon/icons/', // Auto-generated icons
    'scripts/create-component/ComponentName/', // component template
  ],

  // Add test match ignore patterns
  testPathIgnorePatterns: ['scripts/create-component/ComponentName/'],

  // Include setup file that configures testing utilities like @testing-library/react
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // Use jsdom environment to simulate a browser-like DOM for testing React components
  testEnvironment: 'jsdom',
});
