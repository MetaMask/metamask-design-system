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
