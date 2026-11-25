import type { BoxPropsShared } from '@metamask/design-system-shared';
import type { ViewProps } from 'react-native';

export type BoxProps = BoxPropsShared &
  ViewProps & {
    /**
     * @deprecated Use `className` instead.
     */
    twClassName?: string;
    /**
     * Optional Tailwind classes. Merged after the component's own classes and `twClassName`, so `className` wins on conflicts.
     */
    className?: string;
  };
