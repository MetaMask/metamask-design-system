require('react-native-reanimated').setUpTests();

global.__fbBatchedBridgeConfig = {
  remoteModuleConfig: [],
};

// Mock Platform before any other imports
jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'ios',
  Version: '0.0.0',
  select: (obj) => obj.ios || obj.default,
}));

jest.mock(
  'react-native/Libraries/Utilities/NativePlatformConstantsIOS',
  () => ({
    __esModule: true,
    default: {
      getConstants: () => ({
        forceTouchAvailable: false,
        interfaceIdiom: 'handset',
        isTesting: true,
        osVersion: '0.0.0',
        reactNativeVersion: { major: 0, minor: 0, patch: 0, prerelease: null },
        systemName: 'iOS',
      }),
    },
  }),
);

jest.mock('react-native-svg', () => {
  const React = require('react');
  const { View } = require('react-native');
  const MockedSvg = (props) => <View {...props} />;

  return {
    Svg: MockedSvg,
    SvgXml: MockedSvg,
    Circle: MockedSvg,
    Path: MockedSvg,
    Rect: MockedSvg,
  };
});

jest.mock(
  'react-native-safe-area-context',
  () => require('react-native-safe-area-context/jest/mock').default,
);

// something is re-mocking RNSAC, so we override it for each test
beforeEach(() => {
  const {
    useSafeAreaInsets,
    useSafeAreaFrame,
  } = require('react-native-safe-area-context');
  useSafeAreaInsets.mockReturnValue({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  });
  useSafeAreaFrame.mockReturnValue({
    y: 0,
    x: 0,
    height: 0,
    width: 0,
  });
});
