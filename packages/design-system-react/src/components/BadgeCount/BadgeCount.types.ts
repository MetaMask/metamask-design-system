// Import shared type for extension
import type { BadgeCountPropsShared } from '@metamask/design-system-shared';
import type { ComponentProps } from 'react';

import type { TextProps } from '../Text';

/**
 * BadgeCount component props (React platform-specific)
 * Extends shared props with React-specific platform concerns
 */
export type BadgeCountProps = ComponentProps<'div'> &
  BadgeCountPropsShared & {
    /**
     * Optional props to be passed to the Text component used by count
     */
    textProps?: Partial<TextProps>;
    /**
     * Optional prop for additional CSS classes to be applied to the BadgeCount component.
     * These classes will be merged with the component's default classes using twMerge.
     */
    className?: string;
    /**
     * Optional CSS styles to be applied to the component.
     * Should be used sparingly and only for dynamic styles that can't be achieved with className.
     */
    style?: React.CSSProperties;
  };
