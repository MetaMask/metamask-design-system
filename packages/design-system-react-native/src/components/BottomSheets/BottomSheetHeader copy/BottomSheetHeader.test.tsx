import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';

import { BottomSheetHeader } from './BottomSheetHeader';

describe('BottomSheetHeader', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(
      <BottomSheetHeader testID="header">Header Title</BottomSheetHeader>,
    );
    expect(getByTestId('header')).toBeDefined();
  });

  it('renders back button when onBack is provided', () => {
    const { getByTestId } = render(
      <BottomSheetHeader
        onBack={() => null}
        backButtonProps={{ testID: 'back-button' }}
      >
        Header Title
      </BottomSheetHeader>,
    );
    expect(getByTestId('back-button')).toBeDefined();
  });

  it('calls onBack when back button is pressed', () => {
    const onBack = jest.fn();
    const { getByTestId } = render(
      <BottomSheetHeader
        onBack={onBack}
        backButtonProps={{ testID: 'back-button' }}
      >
        Header Title
      </BottomSheetHeader>,
    );

    fireEvent.press(getByTestId('back-button'));
    expect(onBack).toHaveBeenCalledTimes(1);
  });

  it('renders close button when onClose is provided', () => {
    const { getByTestId } = render(
      <BottomSheetHeader
        onClose={() => null}
        closeButtonProps={{ testID: 'close-button' }}
      >
        Header Title
      </BottomSheetHeader>,
    );
    expect(getByTestId('close-button')).toBeDefined();
  });

  it('calls onClose when close button is pressed', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <BottomSheetHeader
        onClose={onClose}
        closeButtonProps={{ testID: 'close-button' }}
      >
        Header Title
      </BottomSheetHeader>,
    );

    fireEvent.press(getByTestId('close-button'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('renders both buttons with configurable testIDs and accessibility labels', () => {
    const onBack = jest.fn();
    const onClose = jest.fn();
    const { getByTestId } = render(
      <BottomSheetHeader
        testID="header"
        onBack={onBack}
        backButtonProps={{
          testID: 'custom-back',
          accessibilityLabel: 'Go back',
        }}
        onClose={onClose}
        closeButtonProps={{
          testID: 'custom-close',
          accessibilityLabel: 'Close modal',
        }}
      >
        Header Title
      </BottomSheetHeader>,
    );

    // Root element testID from ViewProps
    expect(getByTestId('header')).toBeDefined();

    // Interactive element testIDs from button props
    const backButton = getByTestId('custom-back');
    const closeButton = getByTestId('custom-close');
    expect(backButton).toBeDefined();
    expect(closeButton).toBeDefined();
    expect(backButton.props.accessibilityLabel).toBe('Go back');
    expect(closeButton.props.accessibilityLabel).toBe('Close modal');
  });

  it('does not render back button when onBack is not provided', () => {
    const { queryByTestId } = render(
      <BottomSheetHeader backButtonProps={{ testID: 'back-button' }}>
        Header Title
      </BottomSheetHeader>,
    );
    expect(queryByTestId('back-button')).toBeNull();
  });

  it('does not render close button when onClose is not provided', () => {
    const { queryByTestId } = render(
      <BottomSheetHeader closeButtonProps={{ testID: 'close-button' }}>
        Header Title
      </BottomSheetHeader>,
    );
    expect(queryByTestId('close-button')).toBeNull();
  });
});
