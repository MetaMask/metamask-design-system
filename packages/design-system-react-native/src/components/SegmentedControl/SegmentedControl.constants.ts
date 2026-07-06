import { SegmentedControlSize } from '@metamask/design-system-shared';

export const TWCLASSMAP_SEGMENTEDCONTROL_BORDER_RADIUS: Record<
  SegmentedControlSize,
  string
> = {
  [SegmentedControlSize.Sm]: 'rounded-xl',
  [SegmentedControlSize.Md]: 'rounded-2xl',
  [SegmentedControlSize.Lg]: 'rounded-2xl',
};

export const getSegmentedControlBorderRadiusTwClass = (
  size: SegmentedControlSize,
): string => TWCLASSMAP_SEGMENTEDCONTROL_BORDER_RADIUS[size];
