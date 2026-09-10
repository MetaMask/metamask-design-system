import {
  ButtonBaseSize,
  IconSize,
  TextVariant,
} from '@metamask/design-system-shared';

export const TWCLASSMAP_BUTTONBASE_SIZE_DIMENSION: Record<
  ButtonBaseSize,
  string
> = {
  [ButtonBaseSize.Sm]: 'h-8', // size (32px).
  [ButtonBaseSize.Md]: 'h-10', // size (40px).
  [ButtonBaseSize.Lg]: 'h-12', // size (48px).
};

export const MAP_BUTTONBASE_SIZE_ICONSIZE: Record<ButtonBaseSize, IconSize> = {
  [ButtonBaseSize.Sm]: IconSize.Sm,
  [ButtonBaseSize.Md]: IconSize.Sm,
  [ButtonBaseSize.Lg]: IconSize.Md,
};

export const MAP_BUTTONBASE_SIZE_TEXT_VARIANT: Record<
  ButtonBaseSize,
  TextVariant
> = {
  [ButtonBaseSize.Sm]: TextVariant.BodySm,
  [ButtonBaseSize.Md]: TextVariant.BodyMd,
  [ButtonBaseSize.Lg]: TextVariant.BodyMd,
};

export const getButtonBaseHorizontalPaddingTwClasses = (
  hasStart: boolean,
  hasEnd: boolean,
): string => {
  // Icons sit closer to the edge than a label, so each accessory pulls its own
  // side in from 16px to 12px.
  if (hasStart && hasEnd) {
    return 'px-3';
  }
  if (hasStart) {
    return 'pl-3 pr-4';
  }
  if (hasEnd) {
    return 'pl-4 pr-3';
  }
  return 'px-4';
};
