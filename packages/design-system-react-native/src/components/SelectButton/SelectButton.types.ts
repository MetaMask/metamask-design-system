import type { SelectButtonPropsShared } from '@metamask/design-system-shared';

import type { ButtonBaseProps } from '../ButtonBase/ButtonBase.types';
import type { IconProps } from '../Icon/Icon.types';

/**
 * SelectButton component props.
 */
export type SelectButtonProps = SelectButtonPropsShared &
  Omit<
    ButtonBaseProps,
    'children' | 'endIconName' | 'endIconProps' | 'disabled'
  > & {
    /**
     * Optional props passed to the trailing arrow `Icon` when a trailing arrow is shown (excluding `name`, which is derived from the resolved direction).
     */
    endArrowDirectionIconProps?: Partial<Omit<IconProps, 'name'>>;
  };
