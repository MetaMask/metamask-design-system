import { ButtonBaseSize } from '@metamask/design-system-shared';

export const TWCLASSMAP_SEGMENTEDCONTROL_BORDER_RADIUS: Record<
  ButtonBaseSize,
  string
> = {
  [ButtonBaseSize.Sm]: 'rounded-xl',
  [ButtonBaseSize.Md]: 'rounded-2xl',
  [ButtonBaseSize.Lg]: 'rounded-2xl',
};

export const getSegmentedControlBorderRadiusTwClass = (
  size: ButtonBaseSize,
): string => TWCLASSMAP_SEGMENTEDCONTROL_BORDER_RADIUS[size];
