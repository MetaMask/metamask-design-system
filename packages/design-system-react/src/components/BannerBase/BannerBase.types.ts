import type { BannerBasePropsShared } from '@metamask/design-system-shared';
import type { MouseEventHandler } from 'react';

import type { BoxProps } from '../Box/index.js';
import type { ButtonProps } from '../Button/index.js';
import type { ButtonIconProps } from '../ButtonIcon/index.js';
import type { TextProps } from '../Text/index.js';

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
     * Only used when `onClose` is provided.
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
