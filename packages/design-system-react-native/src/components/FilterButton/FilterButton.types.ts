import type { FilterButtonPropsShared } from '@metamask/design-system-shared';

import type { ButtonBaseProps } from '../ButtonBase/ButtonBase.types.js';

/**
 * FilterButton component props.
 */
export type FilterButtonProps = FilterButtonPropsShared &
  Omit<ButtonBaseProps, 'onPress'> & {
    onPress?: ButtonBaseProps['onPress'];
  };
