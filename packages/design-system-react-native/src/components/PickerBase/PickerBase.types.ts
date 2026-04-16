import type { PickerBasePropsShared } from '@metamask/design-system-shared';

import type { ButtonBaseProps } from '../ButtonBase/ButtonBase.types';
import type { IconProps } from '../Icon/Icon.types';

/**
 * PickerBase component props.
 */
export type PickerBaseProps = PickerBasePropsShared &
  Omit<ButtonBaseProps, 'endIconName' | 'endIconProps' | 'disabled'> & {
    /**
     * Optional props passed to the trailing arrow `Icon` when `endArrow` is set (excluding `name`, which is derived from `endArrow`).
     */
    endArrowIconProps?: Partial<Omit<IconProps, 'name'>>;
  };
