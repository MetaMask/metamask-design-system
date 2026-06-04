import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';

import { Text } from '../Text';

import { TextFieldSearch } from './TextFieldSearch';

describe('TextFieldSearch', () => {
  const mockOnPressClearButton = jest.fn();

  beforeEach(() => {
    mockOnPressClearButton.mockClear();
  });

  it('renders on screen', async () => {
    await render(
      <TextFieldSearch value="" onPressClearButton={mockOnPressClearButton} />,
    );

    expect(screen.getByTestId('textfieldsearch')).toBeOnTheScreen();
  });

  it('calls onPressClearButton when clear button is pressed and value exists', async () => {
    await render(
      <TextFieldSearch
        value="search text"
        onPressClearButton={mockOnPressClearButton}
        clearButtonProps={{ testID: 'clear-button' }}
      />,
    );

    await fireEvent.press(screen.getByTestId('clear-button'));

    expect(mockOnPressClearButton).toHaveBeenCalledTimes(1);
  });

  it('does not render clear button when value is empty', async () => {
    await render(
      <TextFieldSearch
        value=""
        onPressClearButton={mockOnPressClearButton}
        clearButtonProps={{ testID: 'clear-button' }}
      />,
    );

    expect(screen.queryByTestId('clear-button')).toBeNull();
  });

  it('uses startAccessory when provided', async () => {
    await render(
      <TextFieldSearch
        value=""
        onPressClearButton={mockOnPressClearButton}
        startAccessory={<Text testID="custom-start">S</Text>}
      />,
    );

    expect(screen.getByTestId('custom-start')).toBeOnTheScreen();
  });

  it('uses endAccessory when provided instead of clear button', async () => {
    await render(
      <TextFieldSearch
        value="search text"
        onPressClearButton={mockOnPressClearButton}
        clearButtonProps={{ testID: 'clear-button' }}
        endAccessory={<Text testID="custom-end">E</Text>}
      />,
    );

    expect(screen.getByTestId('custom-end')).toBeOnTheScreen();
    expect(screen.queryByTestId('clear-button')).toBeNull();
  });
});
