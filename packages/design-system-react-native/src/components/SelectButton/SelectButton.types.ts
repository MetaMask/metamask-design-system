import type { SelectButtonPropsShared } from '@metamask/design-system-shared';

import type { ButtonBaseProps } from '../ButtonBase/ButtonBase.types';
import type { IconProps } from '../Icon/Icon.types';

/**
 * SelectButton component props.
 */
export type SelectButtonProps = SelectButtonPropsShared &
  Omit<ButtonBaseProps, 'endIconName' | 'endIconProps' | 'disabled'> & {
    /**
     * Optional props passed to the trailing arrow `Icon` when `endArrowDirection` is set (excluding `name`, which is derived from `endArrowDirection`).
     */
    endArrowDirectionIconProps?: Partial<Omit<IconProps, 'name'>>;
  };
