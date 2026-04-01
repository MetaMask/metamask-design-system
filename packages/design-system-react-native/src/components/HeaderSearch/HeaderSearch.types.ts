import type {
  HeaderSearchInlinePropsShared,
  HeaderSearchScreenPropsShared,
} from '@metamask/design-system-shared';

import type { BoxProps } from '../Box';
import type { ButtonProps } from '../Button';
import type { ButtonIconProps } from '../ButtonIcon';
import type { TextFieldSearchProps } from '../TextFieldSearch';

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
export type HeaderSearchScreenProps = HeaderSearchScreenPropsShared &
  HeaderSearchBaseProps & {
    backButtonProps?: Omit<ButtonIconProps, 'iconName' | 'onPress'>;
  };

/**
 * Inline variant props.
 * Renders a cancel button on the right side.
 */
export type HeaderSearchInlineProps = HeaderSearchInlinePropsShared &
  HeaderSearchBaseProps & {
    cancelButtonProps?: Omit<ButtonProps, 'variant' | 'onPress' | 'children'>;
  };

/**
 * HeaderSearch component props.
 */
export type HeaderSearchProps =
  | HeaderSearchScreenProps
  | HeaderSearchInlineProps;
