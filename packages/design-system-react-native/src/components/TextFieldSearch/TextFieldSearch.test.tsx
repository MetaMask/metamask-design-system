import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';

import { TEXTFIELDSEARCH_TEST_ID } from './TextFieldSearch.constants';
import TextFieldSearch from './TextFieldSearch';

describe('TextFieldSearch', () => {
  const mockOnPressClearButton = jest.fn();

  beforeEach(() => {
    mockOnPressClearButton.mockClear();
  });

  it('renders with default settings', () => {
    render(<TextFieldSearch onPressClearButton={mockOnPressClearButton} />);

    expect(screen.getByTestId(TEXTFIELDSEARCH_TEST_ID)).toBeOnTheScreen();
  });

  it('renders TextField with testID', () => {
    render(<TextFieldSearch onPressClearButton={mockOnPressClearButton} />);

    const textField = screen.getByTestId(TEXTFIELDSEARCH_TEST_ID);
    expect(textField).toBeOnTheScreen();
  });

  it('calls onPressClearButton when clear button is pressed and value exists', () => {
    render(
      <TextFieldSearch
        value="search text"
        onPressClearButton={mockOnPressClearButton}
        clearButtonProps={{ testID: 'clear-button' }}
      />,
    );

    const clearButton = screen.getByTestId('clear-button');
    fireEvent.press(clearButton);

    expect(mockOnPressClearButton).toHaveBeenCalledTimes(1);
  });

  it('does not render clear button when value is empty', () => {
    render(
      <TextFieldSearch
        onPressClearButton={mockOnPressClearButton}
        clearButtonProps={{ testID: 'clear-button' }}
      />,
    );

    expect(screen.queryByTestId('clear-button')).toBeNull();
  });

  it('does not render clear button when value is empty string', () => {
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
