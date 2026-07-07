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
    // useAnimatedScrollHandler wraps onScroll in a Reanimated worklet; Jest uses the
    // reanimated mock, which does not execute that worklet body. Scroll logic is covered
    // via updateScrollYFromEvent unit tests, but the hook line that forwards scrollEvent
    // into updateScrollYFromEvent stays uncovered here—so statements/lines/functions sit
    // below 100% while branches remain fully exercised.
    // The onScroll worklet callback inside useAnimatedScrollHandler runs on the
    // UI thread and is not invoked by Reanimated's Jest mock — it is untestable in Jest.
    './src/components/HeaderStandardAnimated/useHeaderStandardAnimated.ts': {
      branches: 100,
      functions: 65,
      lines: 85,
      statements: 85,
    },
    // pressed && !isDisabled branch in getPressableStyle is not unit-testable without
    // react-test-renderer internals (see https://github.com/MetaMask/metamask-design-system/issues/1182).
    // Verified visually via Storybook on device.
    './src/components/ActionListItem/ActionListItem.tsx': {
      branches: 85,
    },
    // pressed && !isDisabled && 'opacity-70' branch in Pressable style callback is not fully
    // unit-testable without react-test-renderer internals (see https://github.com/MetaMask/metamask-design-system/issues/1182).
    // Pressed opacity when enabled/disabled is covered via style callback tests; verified visually via Storybook on device.
    './src/components/SectionHeader/SectionHeader.tsx': {
      branches: 85,
    },
    // Gesture handler callbacks (onStart/onUpdate/onEnd) contain the swipe physics
    // logic. Tests that directly invoked these via the mock only asserted
    // toBeDefined() on the handler reference — no behavioral signal.
    // Gesture behavior is verified via Storybook on device.
    './src/components/BottomSheetDialog/BottomSheetDialog.tsx': {
      branches: 60,
      functions: 83,
      lines: 67,
      statements: 67,
    },
    // Pan/tap gesture worklet callbacks run on the UI thread and are not invoked
    // by Reanimated's Jest mock. Label-press and layout paths are covered in tests;
    // drag behavior is verified via Storybook on device.
    './src/components/Slider/useSliderGesture.ts': {
      branches: 68,
      functions: 48,
      lines: 60,
      statements: 60,
    },
  },

  // Add coverage ignore patterns
  coveragePathIgnorePatterns: [
    'index.ts',
    '/test-utils/', // shared test utilities
    '\\.d\\.ts$',
    '\\.constants\\.ts$', // ignore all .constants.ts files
    '\\.dev\\.ts$', // ignore all .dev.ts files
    '\\.figma\\.tsx', // Figma code connect files
    '\\.types\\.ts$', // type-only modules
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
    'node_modules/(?!(react-native|@react-native|react-native-reanimated|react-native-worklets|@react-navigation|react-native-jazzicon|react-native-gesture-handler|react-native-safe-area-context)/)',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/__mocks__/svgMock.js',
  },
  setupFiles: ['react-native-gesture-handler/jestSetup'],
  setupFilesAfterEnv: ['./jest.setup.js'],
});
