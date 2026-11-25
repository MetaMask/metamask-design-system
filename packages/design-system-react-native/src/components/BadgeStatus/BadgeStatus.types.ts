import type { BadgeStatusPropsShared } from '@metamask/design-system-shared';
import type { ViewProps } from 'react-native';

/**
 * BadgeStatus component props (React Native platform-specific)
 * Extends shared props from @metamask/design-system-shared with React Native specific platform concerns
 */
export type BadgeStatusProps = BadgeStatusPropsShared &
  Omit<ViewProps, 'children'> & {
    /**
     * Optional prop to add twrnc overriding classNames.
     *
     * @deprecated Use `className` instead.
     */
    twClassName?: string;
    /**
     * Optional Tailwind classes. Merged after the component's own classes and `twClassName`, so `className` wins on conflicts.
     */
    className?: string;
  };
