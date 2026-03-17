import type { BannerBasePropsShared } from '@metamask/design-system-shared';
import type { MouseEventHandler } from 'react';

import type { BoxProps } from '../Box';
import type { ButtonProps } from '../Button';
import type { ButtonIconProps } from '../ButtonIcon';
import type { TextProps } from '../Text';

type BannerBaseActionButtonProps = Omit<
  Partial<ButtonProps>,
  'children' | 'onClick' | 'variant'
>;

type BannerBaseCloseButtonProps = Omit<
  Partial<ButtonIconProps>,
  'iconName' | 'onClick'
> & {
  /**
   * Optional test id for the close button element.
   */
  'data-testid'?: string;
  /**
   * Optional click handler for the close button.
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

type BannerBasePropsBase = BannerBasePropsShared &
  Omit<BoxProps, 'children'> & {
    /**
     * Optional props for the title `Text` when the title is a string.
     */
    titleProps?: Partial<TextProps>;
    /**
     * Optional props for the description `Text` when description is a string.
     */
    descriptionProps?: Partial<TextProps>;
    /**
     * Optional props for the children wrapper `Text` when children is a string.
     */
    childrenWrapperProps?: Partial<TextProps>;
    /**
     * Optional click handler for the close button.
     * If provided, a close button is shown.
     */
    onClose?: MouseEventHandler<HTMLButtonElement>;
    /**
     * Optional props for the close `ButtonIcon`.
     * Providing this also shows a close button.
     */
    closeButtonProps?: BannerBaseCloseButtonProps;
  };

type BannerBaseActionPropsWithHandler = {
  actionButtonOnClick: MouseEventHandler<HTMLButtonElement>;
  actionButtonLabel: string;
  actionButtonProps?: BannerBaseActionButtonProps;
};

type BannerBaseActionPropsWithoutHandler = {
  actionButtonOnClick?: undefined;
  actionButtonLabel?: string;
  actionButtonProps?: BannerBaseActionButtonProps;
};

export type BannerBaseProps = BannerBasePropsBase &
  (BannerBaseActionPropsWithHandler | BannerBaseActionPropsWithoutHandler);
