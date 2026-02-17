// Import shared type for extension
import type { BadgeStatusPropsShared } from '@metamask/design-system-shared';
import type { ComponentProps } from 'react';

// Re-export shared types from centralized package (ADR-0004)
export {
  BadgeStatusStatus,
  BadgeStatusSize,
  type BadgeStatusPropsShared,
} from '@metamask/design-system-shared';

/**
 * BadgeStatus component props (React platform-specific)
 * Extends shared props with React-specific platform concerns
 */
export type BadgeStatusProps = ComponentProps<'div'> &
  BadgeStatusPropsShared & {
    /**
     * Optional prop for additional CSS classes to be applied to the BadgeStatus component.
     * These classes will be merged with the component's default classes using twMerge.
     */
    className?: string;
    /**
     * Optional CSS styles to be applied to the component.
     * Should be used sparingly and only for dynamic styles that can't be achieved with className.
     */
    style?: React.CSSProperties;
  };
