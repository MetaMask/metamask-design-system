import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';

import { BottomSheetHeader } from './BottomSheetHeader';
import { BottomSheetHeaderVariant } from './BottomSheetHeader.types';

describe('BottomSheetHeader', () => {
  describe('rendering', () => {
    it('renders correctly with default props', () => {
      const { getByTestId } = render(
        <BottomSheetHeader testID="header">Header Title</BottomSheetHeader>,
      );
      expect(getByTestId('header')).toBeDefined();
    });
  });

  describe('testID', () => {
    it('applies testID to the root container via ViewProps', () => {
      const { getByTestId } = render(
        <BottomSheetHeader testID="my-header">Title</BottomSheetHeader>,
      );
      expect(getByTestId('my-header')).toBeDefined();
    });

    it('passes through accessibilityLabel via ViewProps', () => {
      const { getByLabelText } = render(
        <BottomSheetHeader accessibilityLabel="Sheet header">
          Title
        </BottomSheetHeader>,
      );
      expect(getByLabelText('Sheet header')).toBeDefined();
    });
  });

  describe('variant', () => {
    it('renders with Compact variant by default', () => {
      const { getByTestId } = render(
        <BottomSheetHeader testID="header">Title</BottomSheetHeader>,
      );
      expect(getByTestId('header')).toBeDefined();
    });

    it('renders with Display variant', () => {
      const { getByTestId } = render(
        <BottomSheetHeader
          testID="header"
          variant={BottomSheetHeaderVariant.Display}
        >
          Title
        </BottomSheetHeader>,
      );
      expect(getByTestId('header')).toBeDefined();
    });
  });

  describe('onBack', () => {
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

    it('does not render back button when onBack is not provided', () => {
      const { queryByTestId } = render(
        <BottomSheetHeader backButtonProps={{ testID: 'back-button' }}>
          Header Title
        </BottomSheetHeader>,
      );
      expect(queryByTestId('back-button')).toBeNull();
    });
  });

  describe('onClose', () => {
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

    it('does not render close button when onClose is not provided', () => {
      const { queryByTestId } = render(
        <BottomSheetHeader closeButtonProps={{ testID: 'close-button' }}>
          Header Title
        </BottomSheetHeader>,
      );
      expect(queryByTestId('close-button')).toBeNull();
    });
  });

  describe('backButtonProps and closeButtonProps', () => {
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
  });

  describe('twClassName', () => {
    it('accepts twClassName for custom styling', () => {
      const { getByTestId } = render(
        <BottomSheetHeader testID="header" twClassName="pb-2">
          Title
        </BottomSheetHeader>,
      );
      expect(getByTestId('header')).toBeDefined();
    });
  });

  describe('style', () => {
    it('accepts custom style prop', () => {
      const { getByTestId } = render(
        <BottomSheetHeader testID="header" style={{ marginBottom: 8 }}>
          Title
        </BottomSheetHeader>,
      );
      expect(getByTestId('header')).toBeDefined();
    });
  });
});
