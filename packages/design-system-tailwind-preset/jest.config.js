/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const baseConfig = require('../../jest.config.packages');

const displayName = path.basename(new URL('.', import.meta.url).pathname);

export default {
  // Spread the base configuration to inherit all default settings
  ...baseConfig,

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

  // In jest.config.packages.js we are ignoring all index.ts files e.g. coveragePathIgnorePatterns: ['./src/index.ts'],
  // We want to include index.ts in coverage so we override the coveragePathIgnorePatterns
  coveragePathIgnorePatterns: [],
};
