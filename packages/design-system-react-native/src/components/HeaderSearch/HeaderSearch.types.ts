// External dependencies.
import type { BoxProps } from '../Box';
import type { ButtonIconProps } from '../ButtonIcon';
import type { ButtonProps } from '../Button';

// Internal dependencies.
import type { TextFieldSearchProps } from '../TextFieldSearch';

export const HeaderSearchVariant = {
  Screen: 'screen',
  Inline: 'inline',
} as const;

export type HeaderSearchVariant =
  (typeof HeaderSearchVariant)[keyof typeof HeaderSearchVariant];

type HeaderSearchBaseProps = Omit<BoxProps, 'children'> & {
  /**
   * Props to pass to the TextFieldSearch component.
   */
  textFieldSearchProps: Omit<TextFieldSearchProps, 'style'>;
};

/**
 * Screen variant props.
 * Renders a back button (ArrowLeft) on the left side.
 */
export type HeaderSearchScreenProps = HeaderSearchBaseProps & {
  variant: typeof HeaderSearchVariant.Screen;
  onPressBackButton: () => void;
  backButtonProps?: Omit<ButtonIconProps, 'iconName' | 'onPress'>;
};

/**
 * Inline variant props.
 * Renders a cancel button on the right side.
 */
export type HeaderSearchInlineProps = HeaderSearchBaseProps & {
  variant: typeof HeaderSearchVariant.Inline;
  onPressCancelButton: () => void;
  cancelButtonProps?: Omit<ButtonProps, 'variant' | 'onPress' | 'children'>;
};

/**
 * HeaderSearch component props.
 */
export type HeaderSearchProps =
  | HeaderSearchScreenProps
  | HeaderSearchInlineProps;
