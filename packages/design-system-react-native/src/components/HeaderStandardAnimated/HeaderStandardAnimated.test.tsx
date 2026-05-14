// Third party dependencies.
import { render } from '@testing-library/react-native';
import React from 'react';
import type { SharedValue } from 'react-native-reanimated';

// Internal dependencies.
import { HeaderStandardAnimated } from './HeaderStandardAnimated';

jest.mock('react-native-reanimated', () => {
  const ReanimatedModule = jest.requireActual('react-native-reanimated/mock');
  const mockUseAnimatedStyle = jest.fn((fn: unknown) => (fn as () => object)());
  jest
    .spyOn(ReanimatedModule, 'useSharedValue')
    .mockImplementation((initial: unknown) => ({
      value: initial as number,
    }));
  return Object.assign(ReanimatedModule, {
    useAnimatedStyle: mockUseAnimatedStyle,
  });
});

const getUseAnimatedStyleMock = () =>
  jest.requireMock<typeof import('react-native-reanimated')>(
    'react-native-reanimated',
  ).useAnimatedStyle as jest.Mock;

const CONTAINER_TEST_ID = 'header-standard-animated-container';
const TITLE_TEST_ID = 'header-standard-animated-title';

const createMockSharedValue = (initial: number): SharedValue<number> => {
  const ref = { value: initial };
  return {
    get value() {
      return ref.value;
    },
    set value(v: number) {
      ref.value = v;
    },
    get: () => ref.value,
    set: (v: number | ((prev: number) => number)) => {
      ref.value = typeof v === 'function' ? v(ref.value) : v;
    },
    addListener: jest.fn(),
    removeListener: jest.fn(),
    modify: jest.fn(),
  };
};

const defaultProps = {
  scrollY: createMockSharedValue(0),
  titleSectionHeight: createMockSharedValue(100),
};

describe('HeaderStandardAnimated', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('smoke', () => {
    it('renders title and optional subtitle', () => {
      const { getByText } = render(
        <HeaderStandardAnimated
          {...defaultProps}
          title="Test Title"
          subtitle="Sub"
        />,
      );

      expect(getByText('Test Title')).toBeOnTheScreen();
      expect(getByText('Sub')).toBeOnTheScreen();
    });

    it('forwards testID and titleProps.testID', () => {
      const { getByTestId } = render(
        <HeaderStandardAnimated
          {...defaultProps}
          title="T"
          testID={CONTAINER_TEST_ID}
          titleProps={{ testID: TITLE_TEST_ID }}
        />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toBeOnTheScreen();
      expect(getByTestId(TITLE_TEST_ID)).toBeOnTheScreen();
    });

    it('omits center title when title is not provided', () => {
      const { queryByText } = render(
        <HeaderStandardAnimated {...defaultProps} />,
      );

      expect(queryByText('Test Title')).not.toBeOnTheScreen();
    });
  });

  describe('scroll-linked center animation', () => {
    it('registers useAnimatedStyle for the center block', () => {
      render(<HeaderStandardAnimated {...defaultProps} title="X" />);

      expect(getUseAnimatedStyleMock()).toHaveBeenCalled();
    });

    it('sets full opacity when scrolled past measured title section', () => {
      const scrollY = createMockSharedValue(150);
      const titleSectionHeight = createMockSharedValue(100);
      render(
        <HeaderStandardAnimated
          scrollY={scrollY}
          titleSectionHeight={titleSectionHeight}
          title="T"
        />,
      );

      const styleFn = getUseAnimatedStyleMock().mock.calls[0][0];
      const style = (
        styleFn as () => {
          opacity: number;
          transform: { translateY: number }[];
        }
      )();

      expect(style.opacity).toBe(1);
      expect(style.transform).toStrictEqual([{ translateY: 0 }]);
    });

    it('hides center styles when scroll is within title section', () => {
      const scrollY = createMockSharedValue(30);
      const titleSectionHeight = createMockSharedValue(100);
      render(
        <HeaderStandardAnimated
          scrollY={scrollY}
          titleSectionHeight={titleSectionHeight}
          title="T"
        />,
      );

      const styleFn = getUseAnimatedStyleMock().mock.calls[0][0];
      const style = (
        styleFn as () => {
          opacity: number;
          transform: { translateY: number }[];
        }
      )();

      expect(style.opacity).toBe(0);
      expect(style.transform).toStrictEqual([{ translateY: 8 }]);
    });
  });

  describe('displayName', () => {
    it('is set for debugging', () => {
      expect(HeaderStandardAnimated.displayName).toBe('HeaderStandardAnimated');
    });
  });
});
