import type { SegmentedControlPropsShared } from '@metamask/design-system-shared';
import type { ViewProps } from 'react-native';

/**
 * SegmentedControl component props.
 */
export type SegmentedControlProps = SegmentedControlPropsShared &
  ViewProps & {
    /**
     * Optional twrnc classes merged into the root container after defaults.
     */
    twClassName?: string;
  };
