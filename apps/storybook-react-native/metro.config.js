/* eslint-disable import/unambiguous */
// eslint-disable-next-line import/no-unresolved
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

const projectRoot = __dirname;
const monorepoRoot = path.resolve(__dirname, '../../');

const defaultConfig = getDefaultConfig(projectRoot);

const config = {
  // Project root is the package's directory
  projectRoot,

  // Watch the monorepo root for changes in shared code
  watchFolders: [monorepoRoot],

  // Other configurations can be added here
};

module.exports = mergeConfig(defaultConfig, config);
