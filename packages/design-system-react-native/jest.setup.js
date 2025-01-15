import 'react-native-reanimated/mock';

// Mock react-native-svg
jest.mock('react-native-svg', () => {
  const React = require('react');
  const { View } = require('react-native');
  const MockedSvg = (props) => <View {...props} />;

  return {
    Svg: MockedSvg,
    Circle: MockedSvg,
    Path: MockedSvg,
    Rect: MockedSvg,
  };
});

// Silence the useNativeDriver warning
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
