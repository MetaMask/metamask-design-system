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
  collectCoverageFrom: [
    '!**/*.scripts.{js,ts}', // Exclude .scripts files
    '!**/node_modules/**', // Exclude node_modules
    '!**/dist/**', // Exclude build outputs
    '!**/*.constants.{js,ts}', // Exclude .constants files
    '!**/*.dev.{js,ts}', // Exclude .dev files
    '!**/*.assets.{js,ts}', // Exclude .assets files
    '!**/*.types.{js,ts}', // Exclude .types files
  ],
  preset: 'react-native',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!react-native|@react-native|react-native-reanimated|@react-navigation)',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/__mocks__/svgMock.js',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
});
