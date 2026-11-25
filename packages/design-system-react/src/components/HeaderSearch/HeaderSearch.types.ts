import type {
  HeaderSearchInlinePropsShared,
  HeaderSearchScreenPropsShared,
} from '@metamask/design-system-shared';

import type { BoxProps } from '../Box';
import type { ButtonProps } from '../Button';
import type { ButtonIconProps } from '../ButtonIcon';
import type { TextFieldSearchProps } from '../TextFieldSearch';

/**
 * TextFieldSearch prop bag. Adds `data-*` so consumers can pass `data-testid`
 * through `Omit`/`Partial` indirection.
 */
type HeaderSearchTextFieldSearchProps = Omit<TextFieldSearchProps, 'style'> & {
  [key: `data-${string}`]: string | undefined;
};

/**
 * Back ButtonIcon prop bag. `iconName` and `onClick` are controlled by
 * HeaderSearch. `ariaLabel` defaults to `"Back"` in the implementation;
 * override it here for localization.
 */
type HeaderSearchBackButtonProps = Omit<
  ButtonIconProps,
  'iconName' | 'onClick' | 'ariaLabel'
> & {
  /**
   * Accessible label for the back button. Defaults to `"Back"` in the
   * implementation; override here to provide a localized label.
   */
  ariaLabel?: string;
  [key: `data-${string}`]: string | undefined;
};

/**
 * Cancel Button prop bag. `variant` and `onClick` are controlled by
 * HeaderSearch. `children` defaults to `"Cancel"` in the implementation;
 * override it here to provide a localized label.
 */
type HeaderSearchCancelButtonProps = Omit<
  ButtonProps,
  'variant' | 'onClick' | 'children'
> & {
  /**
   * Label for the cancel button. Defaults to `"Cancel"` in the
   * implementation; override here to provide a localized label.
   */
  children?: ButtonProps['children'];
  [key: `data-${string}`]: string | undefined;
};

type HeaderSearchBaseProps = Omit<BoxProps, 'children'> & {
  /**
   * Props forwarded to `TextFieldSearch` (except `style`, so layout stays
   * consistent with the header row).
   */
  textFieldSearchProps: HeaderSearchTextFieldSearchProps;
};

/**
 * Screen variant props.
 * Renders a back `ButtonIcon` (`ArrowLeft`) on the start edge.
 */
export type HeaderSearchScreenProps = HeaderSearchScreenPropsShared &
  HeaderSearchBaseProps & {
    /**
     * Called when the back button is clicked.
     */
    onClickBackButton: () => void;
    /**
     * Optional props for the back `ButtonIcon`. `iconName` and `onClick` are
     * controlled by HeaderSearch.
     */
    backButtonProps?: HeaderSearchBackButtonProps;
  };

/**
 * Inline variant props.
 * Renders a tertiary **Cancel** `Button` on the end edge.
 */
export type HeaderSearchInlineProps = HeaderSearchInlinePropsShared &
  HeaderSearchBaseProps & {
    /**
     * Called when the cancel button is clicked.
     */
    onClickCancelButton: () => void;
    /**
     * Optional props for the cancel `Button`. `variant` and `onClick` are
     * controlled by HeaderSearch. `children` defaults to `"Cancel"` and can
     * be overridden for localization.
     */
    cancelButtonProps?: HeaderSearchCancelButtonProps;
  };

/**
 * HeaderSearch component props (discriminated by `variant`).
 */
export type HeaderSearchProps =
  | HeaderSearchScreenProps
  | HeaderSearchInlineProps;
