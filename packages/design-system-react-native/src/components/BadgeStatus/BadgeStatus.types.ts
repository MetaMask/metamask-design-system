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
     * @deprecated Use `className` instead. `twClassName` remains supported for existing callers and will be removed in a future major version.
     */
    twClassName?: string;
    /**
     * Tailwind classes from `@metamask/design-system-twrnc-preset`.
     * Applied after `twClassName` when both are set, so these classes win.
     */
    className?: string;
  };
