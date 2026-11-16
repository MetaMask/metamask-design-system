import type { BoxPropsShared } from '@metamask/design-system-shared';
import type { ViewProps } from 'react-native';

export type BoxProps = BoxPropsShared &
  ViewProps & {
    /**
     * Optional prop to add twrnc overriding classNames.
     *
     * @deprecated Use `className`.
     */
    twClassName?: string;
    /**
     * Optional prop for additional CSS classes to be applied to the Box component.
     */
    className?: string;
  };
