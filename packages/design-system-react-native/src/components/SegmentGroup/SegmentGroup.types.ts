import type { SegmentGroupPropsShared } from '@metamask/design-system-shared';

import type { BoxProps } from '../Box/Box.types';

/**
 * SegmentGroup component props.
 */
export type SegmentGroupProps = SegmentGroupPropsShared &
  Omit<BoxProps, 'gap' | 'flexDirection'>;
