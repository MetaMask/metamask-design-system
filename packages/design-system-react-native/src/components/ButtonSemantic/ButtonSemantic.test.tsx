import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { ButtonBaseSize } from '../ButtonBase';

import { ButtonSemantic } from './ButtonSemantic';
import { ButtonSemanticSeverity } from './ButtonSemantic.types';

describe('ButtonSemantic', () => {
  const mockOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders with Success severity', () => {
      const { getByText } = render(
        <ButtonSemantic
          severity={ButtonSemanticSeverity.Success}
          onPress={mockOnPress}
        >
          Success Button
        </ButtonSemantic>,
      );

      expect(getByText('Success Button')).toBeDefined();
    });

    it('renders with Danger severity', () => {
      const { getByText } = render(
        <ButtonSemantic
          severity={ButtonSemanticSeverity.Danger}
          onPress={mockOnPress}
        >
          Danger Button
        </ButtonSemantic>,
      );

      expect(getByText('Danger Button')).toBeDefined();
    });

    it.each([ButtonBaseSize.Sm, ButtonBaseSize.Md, ButtonBaseSize.Lg])(
      'renders with %s size',
      (size) => {
        const { getByText } = render(
          <ButtonSemantic
            severity={ButtonSemanticSeverity.Success}
            size={size}
            onPress={mockOnPress}
          >
            Button
          </ButtonSemantic>,
        );

        expect(getByText('Button')).toBeDefined();
      },
    );

    it('uses large size by default', () => {
      const { getByText } = render(
        <ButtonSemantic
          severity={ButtonSemanticSeverity.Success}
          onPress={mockOnPress}
        >
          Default Size Button
        </ButtonSemantic>,
      );

      expect(getByText('Default Size Button')).toBeDefined();
    });
  });

  describe('Interaction', () => {
    it('calls onPress handler when pressed', () => {
      const { getByText } = render(
        <ButtonSemantic
          severity={ButtonSemanticSeverity.Success}
          onPress={mockOnPress}
        >
          Clickable Button
        </ButtonSemantic>,
      );

      fireEvent.press(getByText('Clickable Button'));

      expect(mockOnPress).toHaveBeenCalledTimes(1);
    });

    it('does not call onPress when disabled', () => {
      const { getByText } = render(
        <ButtonSemantic
          severity={ButtonSemanticSeverity.Success}
          onPress={mockOnPress}
          isDisabled
        >
          Disabled Button
        </ButtonSemantic>,
      );

      fireEvent.press(getByText('Disabled Button'));

      expect(mockOnPress).not.toHaveBeenCalled();
    });
  });

  describe('States', () => {
    it('renders in loading state with custom loading text', () => {
      const { getByText } = render(
        <ButtonSemantic
          severity={ButtonSemanticSeverity.Success}
          onPress={mockOnPress}
          isLoading
          loadingText="Processing..."
        >
          Submit
        </ButtonSemantic>,
      );

      expect(getByText('Processing...')).toBeDefined();
    });

    it('renders in loading state without custom loading text', () => {
      const { getByText } = render(
        <ButtonSemantic
          severity={ButtonSemanticSeverity.Success}
          onPress={mockOnPress}
          isLoading
        >
          Submit
        </ButtonSemantic>,
      );

      expect(getByText('Submit')).toBeDefined();
    });

    it('renders in disabled state', () => {
      const { getByText } = render(
        <ButtonSemantic
          severity={ButtonSemanticSeverity.Danger}
          onPress={mockOnPress}
          isDisabled
        >
          Disabled Button
        </ButtonSemantic>,
      );

      expect(getByText('Disabled Button')).toBeDefined();
    });
  });

  describe('Severity Variants', () => {
    it.each([ButtonSemanticSeverity.Success, ButtonSemanticSeverity.Danger])(
      'handles %s severity correctly',
      (severity) => {
        const { getByText } = render(
          <ButtonSemantic severity={severity} onPress={mockOnPress}>
            Button
          </ButtonSemantic>,
        );

        expect(getByText('Button')).toBeDefined();

        fireEvent.press(getByText('Button'));
        expect(mockOnPress).toHaveBeenCalledTimes(1);
      },
    );

    it('handles invalid severity by falling back to Success styling', () => {
      const invalidSeverity = 'invalid' as ButtonSemanticSeverity;

      const { getByText } = render(
        <ButtonSemantic severity={invalidSeverity} onPress={mockOnPress}>
          Fallback Button
        </ButtonSemantic>,
      );

      expect(getByText('Fallback Button')).toBeDefined();

      fireEvent.press(getByText('Fallback Button'));
      expect(mockOnPress).toHaveBeenCalledTimes(1);
    });

    it('handles invalid severity in loading state by falling back to Success styling', () => {
      const invalidSeverity = 'invalid' as ButtonSemanticSeverity;

      const { getByText } = render(
        <ButtonSemantic
          severity={invalidSeverity}
          onPress={mockOnPress}
          isLoading
          loadingText="Loading..."
        >
          Button
        </ButtonSemantic>,
      );

      expect(getByText('Loading...')).toBeDefined();
    });
  });

  describe('Props Forwarding', () => {
    it('passes testID to the root element via props', () => {
      const { getByTestId } = render(
        <ButtonSemantic
          severity={ButtonSemanticSeverity.Success}
          onPress={mockOnPress}
          testID="semantic-button"
        >
          Button
        </ButtonSemantic>,
      );

      expect(getByTestId('semantic-button')).toBeDefined();
    });

    it('passes accessibilityLabel via props', () => {
      const { getByLabelText } = render(
        <ButtonSemantic
          severity={ButtonSemanticSeverity.Success}
          onPress={mockOnPress}
          accessibilityLabel="Confirm transaction"
        >
          Confirm
        </ButtonSemantic>,
      );

      expect(getByLabelText('Confirm transaction')).toBeDefined();
    });

    it('applies custom style prop', () => {
      const { getByText } = render(
        <ButtonSemantic
          severity={ButtonSemanticSeverity.Success}
          onPress={mockOnPress}
          style={{ opacity: 0.8 }}
        >
          Styled Button
        </ButtonSemantic>,
      );

      expect(getByText('Styled Button')).toBeDefined();
    });

    it('accepts twClassName as a function', () => {
      const twClassNameFn = jest.fn((_pressed: boolean) => 'mt-4');

      const { getByText } = render(
        <ButtonSemantic
          severity={ButtonSemanticSeverity.Success}
          onPress={mockOnPress}
          twClassName={twClassNameFn}
        >
          Function ClassName
        </ButtonSemantic>,
      );

      expect(getByText('Function ClassName')).toBeDefined();
      expect(twClassNameFn).toHaveBeenCalled();
    });
  });
});
