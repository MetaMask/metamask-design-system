// Third party dependencies.
import { render } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';

// Internal dependencies.
import Skeleton from './Skeleton';
import {
  SKELETON_TEST_ID,
  SKELETON_ANIMATED_BACKGROUND_TEST_ID,
  SKELETON_CHILDREN_WRAPPER_TEST_ID,
} from './Skeleton.constants';

// Mock animation timers
beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useFakeTimers({ legacyFakeTimers: true });
  jest.clearAllMocks();
});

describe('Skeleton', () => {
  describe('rendering', () => {
    it('renders with default testID', () => {
      const { getByTestId } = render(<Skeleton />);

      expect(getByTestId(SKELETON_TEST_ID)).toBeOnTheScreen();
    });

    it('accepts custom testID', () => {
      const { getByTestId } = render(<Skeleton testID="custom-skeleton" />);

      expect(getByTestId('custom-skeleton')).toBeOnTheScreen();
    });

    it('renders animated background', () => {
      const { getByTestId } = render(<Skeleton />);

      expect(
        getByTestId(SKELETON_ANIMATED_BACKGROUND_TEST_ID),
      ).toBeOnTheScreen();
    });

    it('should match snapshot', () => {
      const { toJSON } = render(<Skeleton />);

      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('dimensions', () => {
    it('applies explicit height and width', () => {
      const { getByTestId } = render(<Skeleton height={100} width={200} />);
      const skeleton = getByTestId(SKELETON_TEST_ID);

      expect(skeleton.props.style).toEqual(
        expect.objectContaining({ height: 100, width: 200 }),
      );
    });

    it('applies string dimensions', () => {
      const { getByTestId } = render(
        <Skeleton height="50%" width="100%" />,
      );
      const skeleton = getByTestId(SKELETON_TEST_ID);

      expect(skeleton.props.style).toEqual(
        expect.objectContaining({ height: '50%', width: '100%' }),
      );
    });

    it('applies custom style', () => {
      const { getByTestId } = render(
        <Skeleton style={{ alignSelf: 'flex-start' }} />,
      );
      const skeleton = getByTestId(SKELETON_TEST_ID);

      expect(skeleton.props.style).toEqual(
        expect.objectContaining({ alignSelf: 'flex-start' }),
      );
    });
  });

  describe('children', () => {
    it('renders children directly when hideChildren is false', () => {
      const { getByTestId, queryByTestId } = render(
        <Skeleton>
          <View testID="child-component" />
        </Skeleton>,
      );

      expect(getByTestId('child-component')).toBeOnTheScreen();
      // Should not render skeleton container when children are visible
      expect(queryByTestId(SKELETON_TEST_ID)).toBeNull();
    });

    it('hides children when hideChildren is true', () => {
      const { getByTestId } = render(
        <Skeleton hideChildren>
          <View testID="child-component" />
        </Skeleton>,
      );

      expect(
        getByTestId(SKELETON_CHILDREN_WRAPPER_TEST_ID),
      ).toBeOnTheScreen();
      expect(getByTestId('child-component')).toBeOnTheScreen();
    });

    it('renders skeleton container when hideChildren is true', () => {
      const { getByTestId } = render(
        <Skeleton hideChildren>
          <View testID="child-component" />
        </Skeleton>,
      );

      expect(getByTestId(SKELETON_TEST_ID)).toBeOnTheScreen();
      expect(
        getByTestId(SKELETON_ANIMATED_BACKGROUND_TEST_ID),
      ).toBeOnTheScreen();
    });
  });

  describe('autoPlay', () => {
    it('defaults autoPlay to true', () => {
      const { getByTestId } = render(<Skeleton />);

      expect(
        getByTestId(SKELETON_ANIMATED_BACKGROUND_TEST_ID),
      ).toBeOnTheScreen();
    });

    it('accepts autoPlay as false', () => {
      const { getByTestId } = render(<Skeleton autoPlay={false} />);

      expect(getByTestId(SKELETON_TEST_ID)).toBeOnTheScreen();
    });
  });

  describe('twClassName', () => {
    it('accepts custom twClassName', () => {
      const { getByTestId } = render(
        <Skeleton twClassName="bg-info-default" />,
      );

      expect(getByTestId(SKELETON_TEST_ID)).toBeOnTheScreen();
    });
  });
});
