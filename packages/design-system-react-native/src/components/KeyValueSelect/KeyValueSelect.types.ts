import type {
  KeyValueSelectPropsShared,
  KeyValueSelectSelectButtonPropsShared,
} from '@metamask/design-system-shared';
import type { PressableProps } from 'react-native';

import type { ButtonIconProps } from '../ButtonIcon/ButtonIcon.types';
import type { IconProps } from '../Icon/Icon.types';
import type { KeyValueRowProps } from '../KeyValueRow/KeyValueRow.types';
import type { TextProps } from '../Text/Text.types';

/**
 * SelectButton-only props for KeyValueSelect (RN).
 * Size is always Md and variant is always Secondary.
 */
export type KeyValueSelectSelectButtonProps =
  KeyValueSelectSelectButtonPropsShared & {
    /**
     * Optional props passed to the SelectButton trailing arrow Icon when a trailing
     * arrow is shown (excluding `name`, which is derived from the resolved direction).
     */
    endArrowDirectionIconProps?: Partial<Omit<IconProps, 'name'>>;
  };

/**
 * KeyValueRow shell / ViewProps escape hatch.
 * Owned KeyValueSelect content props are omitted so the public API stays the source of truth.
 */
export type KeyValueSelectKeyValueRowProps = Omit<
  KeyValueRowProps,
  | 'keyLabel'
  | 'keyStartAccessory'
  | 'keyEndAccessory'
  | 'keyTextProps'
  | 'keyEndButtonIconProps'
  | 'value'
  | 'valueStartAccessory'
  | 'valueEndAccessory'
  | 'valueTextProps'
  | 'valueEndButtonIconProps'
  | 'variant'
>;

/**
 * KeyValueSelect component props.
 *
 * Pressable KeyValueRow with a SelectButton value. Value-side KeyValueRow props
 * map onto SelectButton; SelectButton-only options use `selectButtonProps`.
 * Use `keyValueRowProps` for inner KeyValueRow shell props (e.g. `testID`, `twClassName`).
 */
export type KeyValueSelectProps = Omit<
  KeyValueSelectPropsShared,
  'selectButtonProps'
> &
  Omit<PressableProps, 'children' | 'disabled'> & {
    /** Optional props for the key Text when key is a string. */
    keyTextProps?: Partial<Omit<TextProps, 'children'>>;
    /** When set, renders a ButtonIcon as the key endAccessory (takes precedence over keyEndAccessory). */
    keyEndButtonIconProps?: Partial<ButtonIconProps>;
    /** Optional props for the SelectButton label Text. Mapped from KeyValueRow `valueTextProps`. */
    valueTextProps?: Partial<Omit<TextProps, 'children'>>;
    /** SelectButton-only props (placeholder and caret controls). */
    selectButtonProps: KeyValueSelectSelectButtonProps;
    /**
     * Optional props forwarded to the inner KeyValueRow (e.g. `testID`, `twClassName`, `style`,
     * accessibility props). Owned content props are set by KeyValueSelect and are not available here.
     */
    keyValueRowProps?: KeyValueSelectKeyValueRowProps;
    /** Optional Tailwind class names applied to the outer Pressable. */
    twClassName?: string;
  };
