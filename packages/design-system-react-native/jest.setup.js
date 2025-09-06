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
