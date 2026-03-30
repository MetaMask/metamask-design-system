import type { KeyValuePairPropsShared } from '@metamask/design-system-shared';
import type { ViewProps } from 'react-native';

import type { ButtonIconProps } from '../ButtonIcon/ButtonIcon.types';
import type { TextProps } from '../Text/Text.types';

export type KeyValuePairProps = KeyValuePairPropsShared &
  Omit<ViewProps, 'children'> & {
    /** Optional props for the key Text when key is a string. */
    keyProps?: Partial<Omit<TextProps, 'children'>>;
    /** Optional props for the value Text when value is a string. */
    valueProps?: Partial<Omit<TextProps, 'children'>>;
    /** Optional Tailwind class names applied to the outer BoxHorizontal or BoxVertical. Merged with base styles. */
    twClassName?: string;
    /** When set, renders a ButtonIcon as the key endAccessory (takes precedence over keyEndAccessory). */
    keyEndButtonIconProps?: Partial<ButtonIconProps>;
    /** When set, renders a ButtonIcon as the value endAccessory (takes precedence over valueEndAccessory). */
    valueEndButtonIconProps?: Partial<ButtonIconProps>;
  };
