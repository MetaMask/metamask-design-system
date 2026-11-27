import type { KeyValueRowPropsShared } from '@metamask/design-system-shared';

import type { BoxProps } from '../Box';
import type { ButtonIconProps } from '../ButtonIcon';
import type { SensitiveTextProps } from '../SensitiveText';
import type { TextProps } from '../Text';

/**
 * KeyValueRow component props (React platform-specific).
 *
 * Extends {@link KeyValueRowPropsShared} with React `Box`, `Text`,
 * `SensitiveText`, and `ButtonIcon` passthroughs. Uses `className` /
 * `style` via {@link BoxProps}.
 */
export type KeyValueRowProps = Omit<BoxProps, 'children'> &
  KeyValueRowPropsShared & {
    /**
     * Optional props for the key {@link Text} when `keyLabel` is a string.
     * Defaults: BodyMd, Medium, TextAlternative, `ellipsis`.
     */
    keyTextProps?: Partial<Omit<TextProps, 'children'>>;
    /**
     * Optional props for the value {@link SensitiveText} when `value` is a
     * string. Supports Text props plus `isHidden` / `length`.
     * Defaults: BodyMd, Medium, TextDefault, `ellipsis`.
     */
    valueTextProps?: Partial<Omit<SensitiveTextProps, 'children'>>;
    /**
     * When set with an `iconName`, renders a {@link ButtonIcon} as the key
     * end accessory (takes precedence over `keyEndAccessory`). Pass
     * `ariaLabel` for accessibility. Defaults: size Sm, icon color
     * IconAlternative.
     */
    keyEndButtonIconProps?: Partial<ButtonIconProps>;
    /**
     * When set with an `iconName`, renders a {@link ButtonIcon} as the value
     * end accessory (takes precedence over `valueEndAccessory`). Pass
     * `ariaLabel` for accessibility. Defaults: size Sm, icon color
     * IconDefault.
     */
    valueEndButtonIconProps?: Partial<ButtonIconProps>;
  };
