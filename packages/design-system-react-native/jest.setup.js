// Reanimated 4.5+ ships ESM-only entrypoints; mock before any component import.
// Upstream mock.ts allocates a new `{ value: init }` on every call, so rerenders
// reset SharedValues to the latest prop. Production only uses `init` on mount.
jest.mock('react-native-reanimated', () => {
  const React = require('react');
  const Reanimated = jest.requireActual('react-native-reanimated/mock');

  const useSharedValue = (init) => {
    const ref = React.useRef(null);
    if (ref.current === null) {
      ref.current = Reanimated.useSharedValue(init);
    }
    return ref.current;
  };

  return {
    ...Reanimated,
    useSharedValue,
  };
});

jest.mock('react-native-worklets', () => {
  const Worklets = jest.requireActual('react-native-worklets/src/mock');

  return {
    ...Worklets,
    scheduleOnRN: (fn, ...args) => fn(...args),
  };
});

require('react-native-reanimated/mock').setUpTests();

jest.mock('expo-image', () => {
  const { Image } = require('react-native');

  return {
    Image,
  };
});

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
