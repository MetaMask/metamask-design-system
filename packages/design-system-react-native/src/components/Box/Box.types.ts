import type { BoxPropsShared } from '@metamask/design-system-shared';
import type { ViewProps } from 'react-native';

export type BoxProps = BoxPropsShared &
  ViewProps & {
    /**
     * Optional prop to add twrnc overriding classNames.
     */
    twClassName?: string;
  };
