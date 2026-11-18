import type { SegmentedControlPropsShared } from '@metamask/design-system-shared';
import type { ViewProps } from 'react-native';

/**
 * SegmentedControl component props.
 */
export type SegmentedControlProps = SegmentedControlPropsShared &
  ViewProps & {
    /**
     * Optional twrnc classes merged into the root container after defaults.
     *
     * @deprecated Use `className`.
     */
    twClassName?: string;
    /**
     * Optional CSS classes on the root. Replaces `twClassName` when set.
     */
    className?: string;
  };
