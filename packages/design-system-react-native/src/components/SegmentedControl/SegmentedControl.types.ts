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
     * @deprecated Use `className` instead. `twClassName` remains supported for existing callers and will be removed in a future major version.
     */
    twClassName?: string;
    /**
     * Tailwind classes from `@metamask/design-system-twrnc-preset`.
     * Applied after `twClassName` when both are set, so these classes win.
     */
    className?: string;
  };
