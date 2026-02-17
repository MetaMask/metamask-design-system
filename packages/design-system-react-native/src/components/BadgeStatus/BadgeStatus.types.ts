// Import shared type for extension
import type { BadgeStatusPropsShared } from '@metamask/design-system-shared';
import type { ViewProps } from 'react-native';

// Re-export shared types from centralized package (ADR-0004)
export {
  BadgeStatusStatus,
  BadgeStatusSize,
  type BadgeStatusPropsShared,
} from '@metamask/design-system-shared';

/**
 * BadgeStatus component props (React Native platform-specific)
 * Extends shared props with React Native-specific platform concerns
 */
export type BadgeStatusProps = BadgeStatusPropsShared &
  Omit<ViewProps, 'children'> & {
    /**
     * Optional prop to add twrnc overriding classNames.
     */
    twClassName?: string;
  };
