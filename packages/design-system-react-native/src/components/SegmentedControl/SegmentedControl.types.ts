import type { SegmentedControlPropsShared } from '@metamask/design-system-shared';
import type { ViewProps } from 'react-native';

/**
 * SegmentedControl component props.
 */
export type SegmentedControlProps = SegmentedControlPropsShared &
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
