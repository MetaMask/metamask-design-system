import { render } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';

import Skeleton from './Skeleton';

describe('Skeleton', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useFakeTimers('legacy');
    jest.clearAllMocks();
  });

  describe('rendering', () => {
    it('renders with testID from ViewProps', () => {
      const { getByTestId } = render(<Skeleton testID="skeleton" />);

      expect(getByTestId('skeleton')).toBeDefined();
    });

    it('renders animated background with configurable testID', () => {
      const { getByTestId } = render(
        <Skeleton
          testID="skeleton"
          animatedViewProps={{ testID: 'skeleton-bg' }}
        />,
      );

      expect(getByTestId('skeleton')).toBeDefined();
      expect(getByTestId('skeleton-bg')).toBeDefined();
    });
  });

  describe('dimensions', () => {
    it('applies explicit height and width', () => {
      const { getByTestId } = render(
        <Skeleton testID="skeleton" height={100} width={200} />,
      );
      const skeleton = getByTestId('skeleton');

      expect(skeleton.props.style).toStrictEqual(
        expect.arrayContaining([{ height: 100 }, { width: 200 }]),
      );
    });

    it('applies string dimensions', () => {
      const { getByTestId } = render(
        <Skeleton testID="skeleton" height="50%" width="100%" />,
      );
      const skeleton = getByTestId('skeleton');

      expect(skeleton.props.style).toStrictEqual(
        expect.arrayContaining([{ height: '50%' }, { width: '100%' }]),
      );
    });

    it('applies custom style', () => {
      const { getByTestId } = render(
        <Skeleton testID="skeleton" style={{ alignSelf: 'flex-start' }} />,
      );
      const skeleton = getByTestId('skeleton');

      expect(skeleton.props.style).toStrictEqual(
        expect.arrayContaining([{ alignSelf: 'flex-start' }]),
      );
    });
  });

  describe('children', () => {
    it('renders children directly when hideChildren is false', () => {
      const { getByTestId, queryByTestId } = render(
        <Skeleton testID="skeleton">
          <View testID="child-component" />
        </Skeleton>,
      );

      expect(getByTestId('child-component')).toBeDefined();
      expect(queryByTestId('skeleton')).toBeNull();
    });

    it('hides children when hideChildren is true', () => {
      const { getByTestId } = render(
        <Skeleton
          testID="skeleton"
          hideChildren
          childrenWrapperProps={{ testID: 'children-wrapper' }}
        >
          <View testID="child-component" />
        </Skeleton>,
      );
      const hidden = { includeHiddenElements: true };

      expect(getByTestId('children-wrapper', hidden)).toBeDefined();
      expect(getByTestId('child-component', hidden)).toBeDefined();
    });

    it('disables interactions on hidden children', () => {
      const { getByTestId } = render(
        <Skeleton
          testID="skeleton"
          hideChildren
          childrenWrapperProps={{ testID: 'children-wrapper' }}
        >
          <View testID="child-component" />
        </Skeleton>,
      );
      const hidden = { includeHiddenElements: true };
      const wrapper = getByTestId('children-wrapper', hidden);

      expect(wrapper.props.pointerEvents).toBe('none');
      expect(wrapper.props.accessibilityElementsHidden).toBe(true);
      expect(wrapper.props.importantForAccessibility).toBe(
        'no-hide-descendants',
      );
    });

    it('renders skeleton container when hideChildren is true', () => {
      const { getByTestId } = render(
        <Skeleton
          testID="skeleton"
          hideChildren
          animatedViewProps={{ testID: 'skeleton-bg' }}
        >
          <View testID="child-component" />
        </Skeleton>,
      );

      expect(getByTestId('skeleton')).toBeDefined();
      expect(getByTestId('skeleton-bg')).toBeDefined();
    });

    it('preserves internal styles when wrapper props include style', () => {
      const { getByTestId } = render(
        <Skeleton
          testID="skeleton"
          hideChildren
          childrenWrapperProps={{
            testID: 'children-wrapper',
            style: { marginTop: 8 },
          }}
          animatedViewProps={{
            testID: 'skeleton-bg',
            style: { borderRadius: 4 },
          }}
        >
          <View testID="child-component" />
        </Skeleton>,
      );
      const hidden = { includeHiddenElements: true };
      const wrapper = getByTestId('children-wrapper', hidden);
      const animatedBg = getByTestId('skeleton-bg');

      expect(wrapper.props.style).toStrictEqual(
        expect.arrayContaining([{ marginTop: 8 }]),
      );
      expect(animatedBg.props.style).toStrictEqual(
        expect.objectContaining({ borderRadius: 4 }),
      );
    });
  });

  describe('autoPlay', () => {
    it('renders skeleton with animation by default', () => {
      const { getByTestId } = render(
        <Skeleton
          testID="skeleton"
          animatedViewProps={{ testID: 'skeleton-bg' }}
        />,
      );

      expect(getByTestId('skeleton-bg')).toBeDefined();
    });

    it('renders skeleton when autoPlay is false', () => {
      const { getByTestId } = render(
        <Skeleton testID="skeleton" autoPlay={false} />,
      );

      expect(getByTestId('skeleton')).toBeDefined();
    });

    it('stops animation on unmount', () => {
      const { unmount, getByTestId } = render(<Skeleton testID="skeleton" />);

      expect(getByTestId('skeleton')).toBeDefined();
      jest.advanceTimersByTime(700);
      unmount();
    });
  });

  describe('twClassName', () => {
    it('accepts custom twClassName', () => {
      const { getByTestId } = render(
        <Skeleton testID="skeleton" twClassName="bg-info-default" />,
      );

      expect(getByTestId('skeleton')).toBeDefined();
    });
  });

  describe('ViewProps extension', () => {
    it('passes through accessibilityLabel', () => {
      const { getByTestId } = render(
        <Skeleton testID="skeleton" accessibilityLabel="Loading content" />,
      );
      const skeleton = getByTestId('skeleton');

      expect(skeleton.props.accessibilityLabel).toBe('Loading content');
    });
  });
});
