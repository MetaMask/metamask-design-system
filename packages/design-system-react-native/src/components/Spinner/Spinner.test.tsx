import { render } from '@testing-library/react-native';
import React from 'react';
import { Animated } from 'react-native';

import { Spinner } from './Spinner';

describe('Spinner', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders the spinner icon', () => {
    const { getByTestId, queryByText } = render(<Spinner />);
    const iconElement = getByTestId('spinner-icon');

    expect(iconElement).toBeDefined();
    expect(queryByText('Loading...')).toBeNull();
  });

  it('renders the loading text when provided', () => {
    const loadingText = 'Loading...';
    const { getByText } = render(<Spinner loadingText={loadingText} />);

    expect(getByText(loadingText)).toBeDefined();
  });

  it('renders with animation applied to the spinner', () => {
    const { getByTestId } = render(<Spinner />);
    const animatedView = getByTestId('spinner-animated-view');

    expect(animatedView.props.style).toBeDefined();
  });

  describe('rotation animation', () => {
    const mockLoop = () => {
      const start = jest.fn();
      const stop = jest.fn();
      const loopSpy = jest.spyOn(Animated, 'loop').mockReturnValue({
        start,
        stop,
        reset: jest.fn(),
      });
      return { start, stop, loopSpy };
    };

    it('starts a looping rotation when mounted', () => {
      const { start, loopSpy } = mockLoop();

      render(<Spinner />);

      expect(loopSpy).toHaveBeenCalledTimes(1);
      expect(start).toHaveBeenCalledTimes(1);
    });

    it('runs the rotation on the native driver', () => {
      const timingSpy = jest.spyOn(Animated, 'timing');
      mockLoop();

      render(<Spinner />);

      expect(timingSpy).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({ useNativeDriver: true }),
      );
    });

    it('stops the rotation when unmounted', () => {
      const { stop } = mockLoop();
      const { unmount } = render(<Spinner />);

      unmount();

      expect(stop).toHaveBeenCalledTimes(1);
    });
  });
});
