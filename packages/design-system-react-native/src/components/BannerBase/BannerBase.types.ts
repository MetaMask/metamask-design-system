import type { BannerBasePropsShared } from '@metamask/design-system-shared';
import type { GestureResponderEvent } from 'react-native';

import type { BoxProps } from '../Box';
import type { ButtonProps } from '../Button';
import type { ButtonIconProps } from '../ButtonIcon';
import type { TextProps } from '../Text';

type BannerBaseActionButtonProps = Omit<
  Partial<ButtonProps>,
  'children' | 'onPress' | 'variant'
>;

type BannerBaseCloseButtonProps = Omit<
  Partial<ButtonIconProps>,
  'iconName' | 'onPress'
> & {
  /**
   * Optional press handler for the close button.
   */
  onPress?: (event: GestureResponderEvent) => void;
};

type BannerBasePropsBase = BannerBasePropsShared &
  Omit<BoxProps, 'children'> & {
    /**
     * Optional props for the title `Text` when title is a string.
     */
    titleProps?: Omit<Partial<TextProps>, 'children'>;
    /**
     * Optional props for the description `Text` when description is a string.
     */
    descriptionProps?: Omit<Partial<TextProps>, 'children'>;
    /**
     * Optional props for the children wrapper `Text` when children is a string.
     */
    childrenWrapperProps?: Omit<Partial<TextProps>, 'children'>;
    /**
     * Optional callback for the close button.
     * If provided, a close button is shown.
     */
    onClose?: () => void;
    /**
     * Optional props for the close `ButtonIcon`.
     * Providing this also shows a close button.
     */
    closeButtonProps?: BannerBaseCloseButtonProps;
  };

type BannerBaseActionPropsWithHandler = {
  actionButtonOnPress: (event: GestureResponderEvent) => void;
  actionButtonLabel: string;
  actionButtonProps?: BannerBaseActionButtonProps;
};

type BannerBaseActionPropsWithoutHandler = {
  actionButtonOnPress?: undefined;
  actionButtonLabel?: string;
  actionButtonProps?: BannerBaseActionButtonProps;
};

/**
 * BannerBase component props.
 */
export type BannerBaseProps = BannerBasePropsBase &
  (BannerBaseActionPropsWithHandler | BannerBaseActionPropsWithoutHandler);
