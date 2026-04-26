import type { SegmentButtonProps } from '../SegmentButton/SegmentButton.types';

export type ChartSegmentButtonProps = Omit<
  SegmentButtonProps,
  'size' | 'variant'
>;
