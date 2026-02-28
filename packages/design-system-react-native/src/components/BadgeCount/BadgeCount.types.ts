// Import shared type for extension
import type { BadgeCountPropsShared } from '@metamask/design-system-shared';
import type { ViewProps, StyleProp, ViewStyle } from 'react-native';

import type { TextProps } from '../Text';

/**
 * BadgeCount component props (React Native platform-specific)
 * Extends shared props with React Native-specific platform concerns
 */
export type BadgeCountProps = BadgeCountPropsShared &
  Omit<ViewProps, 'children'> & {
    /**
     * Optional props to be passed to the Text component used by count
     */
    textProps?: Partial<TextProps>;
    /**
     * Optional prop to add twrnc overriding classNames.
     */
    twClassName?: string;
    /**
     * Optional prop to control the style.
     */
    style?: StyleProp<ViewStyle>;
  };
