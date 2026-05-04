import {
  ButtonBaseShape,
  ButtonBaseSize,
} from '@metamask/design-system-shared';

export const TWCLASSMAP_BUTTONBASE_SIZE_DIMENSION: Record<
  ButtonBaseSize,
  string
> = {
  [ButtonBaseSize.Sm]: 'h-8', // size (32px).
  [ButtonBaseSize.Md]: 'h-10', // size (40px).
  [ButtonBaseSize.Lg]: 'h-12', // size (48px).
};

export const TWCLASSMAP_BUTTONBASE_BORDER_RADIUS: Record<
  ButtonBaseSize,
  string
> = {
  [ButtonBaseSize.Sm]: 'rounded-lg', // 8px.
  [ButtonBaseSize.Md]: 'rounded-xl', // 12px.
  [ButtonBaseSize.Lg]: 'rounded-xl', // 12px.
};

export const getButtonBaseBorderRadiusTwClass = (
  size: ButtonBaseSize,
  shape: ButtonBaseShape,
): string => {
  if (shape === ButtonBaseShape.Pill) {
    return 'rounded-full';
  }
  return TWCLASSMAP_BUTTONBASE_BORDER_RADIUS[size];
};

export const getButtonBaseHorizontalPaddingTwClasses = (
  buttonSize: ButtonBaseSize,
  hasStart: boolean,
  hasEnd: boolean,
): string => {
  if (buttonSize !== ButtonBaseSize.Lg || (hasStart && hasEnd)) {
    return 'px-3';
  }
  if (!hasStart && !hasEnd) {
    return 'px-4';
  }
  if (hasStart) {
    return 'pl-3 pr-4';
  }
  return 'pl-4 pr-3';
};
