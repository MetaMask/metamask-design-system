/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

const path = require('path');

const baseConfig = require('../../jest.config.packages');

const displayName = path.basename(__dirname);

module.exports = {
  // Spread the base configuration to inherit all default settings
  ...baseConfig,

  // The display name when running multiple projects
  displayName,

  // Add coverage ignore patterns
  coveragePathIgnorePatterns: ['index.ts'],

  // An object that configures minimum threshold enforcement for coverage results
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
