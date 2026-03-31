import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';

import { TextFieldSearch } from './TextFieldSearch';

describe('TextFieldSearch', () => {
  const mockOnPressClearButton = jest.fn();

  beforeEach(() => {
    mockOnPressClearButton.mockClear();
  });

  it('renders on screen', () => {
    render(
      <TextFieldSearch value="" onPressClearButton={mockOnPressClearButton} />,
    );

    expect(screen.getByTestId('textfieldsearch')).toBeOnTheScreen();
  });

  it('calls onPressClearButton when clear button is pressed and value exists', () => {
    render(
      <TextFieldSearch
        value="search text"
        onPressClearButton={mockOnPressClearButton}
        clearButtonProps={{ testID: 'clear-button' }}
      />,
    );

    fireEvent.press(screen.getByTestId('clear-button'));

    expect(mockOnPressClearButton).toHaveBeenCalledTimes(1);
  });

  it('does not render clear button when value is empty', () => {
    render(
      <TextFieldSearch
        value=""
        onPressClearButton={mockOnPressClearButton}
        clearButtonProps={{ testID: 'clear-button' }}
      />,
    );

    expect(screen.queryByTestId('clear-button')).toBeNull();
  });
});
