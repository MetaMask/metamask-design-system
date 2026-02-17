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

const {
  expectStyleIncludes,
  expectResolvedStyle,
} = require('./src/test-utils/styles');

expect.extend({
  toIncludeStyle(receivedStyle, expectedStyle) {
    try {
      expectStyleIncludes(receivedStyle, expectedStyle);
      return {
        pass: true,
        message: () =>
          `Expected style not to include ${JSON.stringify(expectedStyle)}`,
      };
    } catch (error) {
      return {
        pass: false,
        message: () =>
          `Expected style to include ${JSON.stringify(expectedStyle)}.\n${
            error instanceof Error ? error.message : String(error)
          }`,
      };
    }
  },
  toResolveToStyle(receivedStyle, expectedStyle) {
    try {
      expectResolvedStyle(receivedStyle, expectedStyle);
      return {
        pass: true,
        message: () =>
          `Expected resolved style not to include ${JSON.stringify(expectedStyle)}`,
      };
    } catch (error) {
      return {
        pass: false,
        message: () =>
          `Expected resolved style to include ${JSON.stringify(expectedStyle)}.\n${
            error instanceof Error ? error.message : String(error)
          }`,
      };
    }
  },
});
