import type { SegmentGroupPropsShared } from '@metamask/design-system-shared';
import type { ScrollViewProps } from 'react-native';

/**
 * SegmentGroup component props.
 */
export type SegmentGroupProps = SegmentGroupPropsShared &
  Omit<ScrollViewProps, 'horizontal' | 'showsHorizontalScrollIndicator'> & {
    /**
     * Optional twrnc classes merged into `contentContainerStyle` after the default row layout.
     */
    twClassName?: string;
  };
