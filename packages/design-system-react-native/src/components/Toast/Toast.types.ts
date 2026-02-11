// Third party dependencies.
import { ReactElement } from 'react';
import { ImageSourcePropType } from 'react-native';

// External Dependencies.
import { AvatarAccountVariant } from '../AvatarAccount';
import { ButtonProps } from '../Button';
import { ButtonIconProps } from '../ButtonIcon';
import { IconName } from '../Icon';

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
export interface ToastDescriptionOptions {
  description: string;
}

/**
 * Options for displaying a Link in the toast.
 */
export interface ToastLinkButtonOptions {
  label: string;
  onPress: () => void;
}

/**
 * Common toast option shared between all other options.
 */
interface BaseToastVariants {
  hasNoTimeout: boolean;
  labelOptions: ToastLabelOptions;
  descriptionOptions?: ToastDescriptionOptions;
  linkButtonOptions?: ToastLinkButtonOptions;
  closeButtonOptions?: ToastCloseButtonOptions;
  startAccessory?: ReactElement;
  bottomOffset?: number;
}

export type ToastCloseButtonOptions =
  | ButtonProps
  | (ButtonIconProps & { variant: ButtonIconVariant });

export enum ButtonIconVariant {
  Icon = 'Icon',
}

/**
 * Plain toast option.
 */
interface PlainToastOption extends BaseToastVariants {
  variant: ToastVariant.Plain;
}

/**
 * Account toast option.
 */
interface AccountToastOption extends BaseToastVariants {
  variant: ToastVariant.Account;
  accountAddress: string;
  accountAvatarType: AvatarAccountVariant;
}

/**
 * Network toast option.
 */
interface NetworkToastOption extends BaseToastVariants {
  variant: ToastVariant.Network;
  networkName?: string;
  networkImageSource: ImageSourcePropType;
}

/**
 * App toast option.
 */
interface AppToastOption extends BaseToastVariants {
  variant: ToastVariant.App;
  appIconSource: ImageSourcePropType;
}

interface IconToastOption extends BaseToastVariants {
  variant: ToastVariant.Icon;
  iconName: IconName;
  iconColor?: string;
  backgroundColor?: string;
}

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
export interface ToastRef {
  showToast: (toastOptions: ToastOptions) => void;
  closeToast: () => void;
}

/**
 * Toast context parameters.
 */
export interface ToastContextParams {
  toastRef: React.RefObject<ToastRef> | undefined;
}
