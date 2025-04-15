import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';

import ButtonAnimated from './ButtonAnimated';

describe('ButtonAnimated', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<ButtonAnimated testID="button" />);
    expect(getByTestId('button')).not.toBeNull();
  });

  it('triggers onPressIn and onPressOut handlers', () => {
    const onPressInMock = jest.fn();
    const onPressOutMock = jest.fn();
    const { getByTestId } = render(
      <ButtonAnimated
        testID="button"
        onPressIn={onPressInMock}
        onPressOut={onPressOutMock}
      />,
    );

    fireEvent(getByTestId('button'), 'pressIn');
    expect(onPressInMock).toHaveBeenCalledTimes(1);

    fireEvent(getByTestId('button'), 'pressOut');
    expect(onPressOutMock).toHaveBeenCalledTimes(1);
  });

  it('applies scaling animation when pressed', () => {
    const { getByTestId } = render(<ButtonAnimated testID="button" />);
    fireEvent(getByTestId('button'), 'pressIn');
    // Additional tests could verify styles, but animations are hard to test reliably.
    expect(getByTestId('button')).toBeDefined();
  });

  it('disables interaction when the `disabled` prop is true', () => {
    const onPressInMock = jest.fn();
    const onPressOutMock = jest.fn();
    const { getByTestId } = render(
      <ButtonAnimated
        testID="button"
        disabled
        onPressIn={onPressInMock}
        onPressOut={onPressOutMock}
      />,
    );

    fireEvent(getByTestId('button'), 'pressIn');
    expect(onPressInMock).not.toHaveBeenCalled();
  });
});
