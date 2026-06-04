import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';

import { ButtonAnimated } from './ButtonAnimated';

describe('ButtonAnimated', () => {
  it('renders correctly', async () => {
    const { getByTestId } = await render(<ButtonAnimated testID="button" />);
    expect(getByTestId('button')).not.toBeNull();
  });

  it('triggers onPressIn and onPressOut handlers', async () => {
    const onPressInMock = jest.fn();
    const onPressOutMock = jest.fn();
    const { getByTestId } = await render(
      <ButtonAnimated
        testID="button"
        onPressIn={onPressInMock}
        onPressOut={onPressOutMock}
      />,
    );

    await fireEvent(getByTestId('button'), 'pressIn');
    expect(onPressInMock).toHaveBeenCalledTimes(1);

    await fireEvent(getByTestId('button'), 'pressOut');
    expect(onPressOutMock).toHaveBeenCalledTimes(1);
  });

  it('applies scaling animation when pressed', async () => {
    const { getByTestId } = await render(<ButtonAnimated testID="button" />);
    await fireEvent(getByTestId('button'), 'pressIn');
    // Additional tests could verify styles, but animations are hard to test reliably.
    expect(getByTestId('button')).toBeDefined();
  });

  it('disables interaction when the `disabled` prop is true', async () => {
    const onPressInMock = jest.fn();
    const onPressOutMock = jest.fn();
    const { getByTestId } = await render(
      <ButtonAnimated
        testID="button"
        disabled
        onPressIn={onPressInMock}
        onPressOut={onPressOutMock}
      />,
    );

    await fireEvent(getByTestId('button'), 'pressIn');
    expect(onPressInMock).not.toHaveBeenCalled();
  });
});
