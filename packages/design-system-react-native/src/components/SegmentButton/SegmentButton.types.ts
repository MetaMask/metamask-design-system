import type { SegmentButtonPropsShared } from '@metamask/design-system-shared';

import type { ButtonBaseProps } from '../ButtonBase/ButtonBase.types';

/**
 * SegmentButton component props.
 */
export type SegmentButtonProps = SegmentButtonPropsShared &
  Omit<ButtonBaseProps, 'onPress'> & {
    onPress?: ButtonBaseProps['onPress'];
  };
