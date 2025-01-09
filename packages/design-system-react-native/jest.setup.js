import 'react-native-reanimated/mock';

// Mock react-native-svg
jest.mock('react-native-svg', () => {
  const React = require('react');
  const { View } = require('react-native');
  return {
    Svg: (props) => <View {...props} />,
    Circle: (props) => <View {...props} />,
    Path: (props) => <View {...props} />,
    Rect: (props) => <View {...props} />,
  };
});

// Silence the useNativeDriver warning
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
