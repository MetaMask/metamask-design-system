import { SegmentedControlSize } from '@metamask/design-system-shared';

export const TWCLASSMAP_SEGMENTEDCONTROL_BORDER_RADIUS: Record<
  SegmentedControlSize,
  string
> = {
  [SegmentedControlSize.Sm]: 'rounded-12',
  [SegmentedControlSize.Md]: 'rounded-16',
  [SegmentedControlSize.Lg]: 'rounded-16',
};

export const getSegmentedControlBorderRadiusTwClass = (
  size: SegmentedControlSize,
): string => TWCLASSMAP_SEGMENTEDCONTROL_BORDER_RADIUS[size];
