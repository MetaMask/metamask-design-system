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
    onPressBackButton: () => void;
    backButtonProps?: Omit<ButtonIconProps, 'iconName' | 'onPress'>;
  };

/**
 * Inline variant props.
 * Renders a cancel button on the right side.
 */
export type HeaderSearchInlineProps = HeaderSearchInlinePropsShared &
  HeaderSearchBaseProps & {
    onPressCancelButton: () => void;
    /**
     * Optional props for the cancel `Button`. `variant` and `onPress` are
     * controlled by HeaderSearch. `children` defaults to `"Cancel"` and can
     * be overridden for localization.
     */
    cancelButtonProps?: Omit<
      ButtonProps,
      'variant' | 'onPress' | 'children'
    > & {
      children?: ButtonProps['children'];
    };
  };

/**
 * HeaderSearch component props.
 */
export type HeaderSearchProps =
  | HeaderSearchScreenProps
  | HeaderSearchInlineProps;
