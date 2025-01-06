/* eslint-disable import/prefer-default-export */
// Internal dependencies.
import type { IconProps } from './Icon.types';
import { IconName, IconSize, IconColor } from './Icon.types';

// Defaults
export const DEFAULT_ICON_ICONSIZE = IconSize.Md;
export const DEFAULT_ICON_ICONCOLOR = IconColor.IconDefault;
export const DEFAULT_ICON_ICONNAME = IconName.Add;

// Mappings
export const TWCLASSMAP_ICON_ICONCOLOR: Record<IconColor, string> = {
  [IconColor.IconDefault]: 'text-icon-default',
  [IconColor.IconAlternative]: 'text-icon-alternative',
  [IconColor.IconMuted]: 'text-icon-muted',
  [IconColor.OverlayInverse]: 'text-overlay-inverse',
  [IconColor.PrimaryDefault]: 'text-primary-default',
  [IconColor.PrimaryInverse]: 'text-primary-inverse',
  [IconColor.ErrorDefault]: 'text-error-default',
  [IconColor.ErrorInverse]: 'text-error-inverse',
  [IconColor.SuccessDefault]: 'text-success-default',
  [IconColor.SuccessInverse]: 'text-success-inverse',
  [IconColor.WarningDefault]: 'text-warning-default',
  [IconColor.WarningInverse]: 'text-warning-inverse',
  [IconColor.InfoDefault]: 'text-info-default',
  [IconColor.InfoInverse]: 'text-info-inverse',
};

export const TWCLASSMAP_ICON_ICONSIZE: Record<IconSize, string> = {
  [IconSize.Xs]: 'w-[12px] h-[12px]',
  [IconSize.Sm]: 'w-[16px] h-[16px]',
  [IconSize.Md]: 'w-[20px] h-[20px]',
  [IconSize.Lg]: 'w-[24px] h-[24px]',
  [IconSize.Xl]: 'w-[32px] h-[32px]',
};

// Sample consts
export const SAMPLE_ICON_PROPS: IconProps = {
  name: DEFAULT_ICON_ICONNAME,
  size: DEFAULT_ICON_ICONSIZE,
  color: DEFAULT_ICON_ICONCOLOR,
};
