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

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // Overriding the `call` method to avoid issues with animations
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence warnings related to the Animated API
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

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
