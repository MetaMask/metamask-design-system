import type { PickerBasePropsShared } from '@metamask/design-system-shared';
import type { PressableProps, StyleProp, ViewStyle } from 'react-native';

import type { IconProps } from '../Icon/Icon.types';
import type { TextProps } from '../Text';

/**
 * PickerBase component props.
 */
export type PickerBaseProps = Omit<PressableProps, 'children' | 'disabled'> &
  PickerBasePropsShared & {
    /**
     * Optional props passed to `Text` when `children` is a string.
     */
    textProps?: Omit<Partial<TextProps>, 'children'>;
    /**
     * Optional props passed to the trailing arrow `Icon` when `endArrow` is set (excluding `name`, which is derived from `endArrow`).
     */
    endArrowIconProps?: Partial<Omit<IconProps, 'name'>>;
    /**
     * Optional twrnc class names merged onto the root row.
     */
    twClassName?: string;
    /**
     * Optional style for the root `Pressable`.
     */
    style?: StyleProp<ViewStyle>;
  };
