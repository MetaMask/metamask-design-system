// Third party dependencies.
import type { ReactElement } from 'react';
import type { ViewProps } from 'react-native';

// External Dependencies.
import type { AvatarAccountVariant } from '../AvatarAccount';
import type { ButtonProps } from '../Button';
import type { ButtonIconProps } from '../ButtonIcon';
import type { IconName } from '../Icon';
import type { ImageOrSvgSrc } from '../temp-components/ImageOrSvg';

/**
 * Toast variants.
 */
export enum ToastVariant {
  Plain = 'Plain',
  Account = 'Account',
  Network = 'Network',
  App = 'App',
  Icon = 'Icon',
}

/**
 * Options for the main text in the toast.
 */
export type ToastLabelOptions = {
  label: string;
  isBold?: boolean;
}[];

/**
 * Options for the description text in the toast.
 */
export type ToastDescriptionOptions = {
  description: string;
};

/**
 * Options for displaying a Link in the toast.
 */
export type ToastLinkButtonOptions = {
  label: string;
  onPress: () => void;
};

/**
 * Common toast option shared between all other options.
 */
type BaseToastVariants = {
  hasNoTimeout: boolean;
  labelOptions: ToastLabelOptions;
  descriptionOptions?: ToastDescriptionOptions;
  linkButtonOptions?: ToastLinkButtonOptions;
  closeButtonOptions?: ToastCloseButtonOptions;
  startAccessory?: ReactElement;
  bottomOffset?: number;
};

export type ToastCloseButtonOptions =
  | ButtonProps
  | (ButtonIconProps & { variant: ButtonIconVariant });

export enum ButtonIconVariant {
  Icon = 'Icon',
}

/**
 * Plain toast option.
 */
type PlainToastOption = {
  variant: ToastVariant.Plain;
} & BaseToastVariants;

/**
 * Account toast option.
 */
type AccountToastOption = {
  variant: ToastVariant.Account;
  accountAddress: string;
  accountAvatarType: AvatarAccountVariant;
} & BaseToastVariants;

/**
 * Network toast option.
 */
type NetworkToastOption = {
  variant: ToastVariant.Network;
  networkName?: string;
  networkImageSource: ImageOrSvgSrc;
} & BaseToastVariants;

/**
 * App toast option.
 */
type AppToastOption = {
  variant: ToastVariant.App;
  appIconSource: ImageOrSvgSrc;
} & BaseToastVariants;

type IconToastOption = {
  variant: ToastVariant.Icon;
  iconName: IconName;
  iconColor?: string;
  backgroundColor?: string;
} & BaseToastVariants;

/**
 * Different toast options combined in a union type.
 */
export type ToastOptions =
  | PlainToastOption
  | AccountToastOption
  | NetworkToastOption
  | AppToastOption
  | IconToastOption;

/**
 * Toast component reference.
 */
export type ToastRef = {
  showToast: (toastOptions: ToastOptions) => void;
  closeToast: () => void;
};

/**
 * Toast component props.
 * Extends ViewProps to inherit standard React Native props such as testID and accessibilityLabel.
 */
export type ToastProps = {
  /**
   * Optional Tailwind CSS classes for the toast container.
   */
  twClassName?: string;
  /**
   * Props spread to the labels container View (e.g., testID for testing).
   */
  labelsContainerProps?: Omit<ViewProps, 'children' | 'style'>;
} & Omit<ViewProps, 'style'>;

/**
 * Toast context parameters.
 */
export type ToastContextParams = {
  toastRef: React.RefObject<ToastRef> | undefined;
};
