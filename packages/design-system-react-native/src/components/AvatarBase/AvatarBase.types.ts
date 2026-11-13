import type { AvatarBasePropsShared } from '@metamask/design-system-shared';
import type { ViewProps, StyleProp, ViewStyle } from 'react-native';

import type { TextProps } from '../Text';

/**
 * AvatarBase component props.
 */
export type AvatarBaseProps = AvatarBasePropsShared &
  Omit<ViewProps, 'children'> & {
    /**
     * Optional props to be passed to the fallbackText when the content
     * fails to render
     */
    fallbackTextProps?: Omit<TextProps, 'children'>;
    /**
     * Optional prop to add twrnc overriding classNames.
     *
     * @deprecated Use `className` instead. `twClassName` remains supported for existing callers and will be removed in a future major version.
     */
    twClassName?: string;
    /**
     * Tailwind classes from `@metamask/design-system-twrnc-preset`.
     * Applied after `twClassName` when both are set, so these classes win.
     */
    className?: string;
    /**
     * Optional prop to control the style.
     */
    style?: StyleProp<ViewStyle>;
  };
