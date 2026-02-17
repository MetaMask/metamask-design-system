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
    'Icon.assets.ts', // Exclude Icon.assets file
    'Blockies.utilities.ts', // Exclude Blockies.utilities file
  ],

  // Ignore template files from test discovery
  testPathIgnorePatterns: ['scripts/create-component/ComponentName/'],

  preset: 'react-native',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!react-native|@react-native|react-native-reanimated|@react-navigation|react-native-safe-area-context)',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/__mocks__/svgMock.js',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
});
