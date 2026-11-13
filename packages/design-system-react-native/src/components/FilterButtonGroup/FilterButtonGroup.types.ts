import type { FilterButtonGroupPropsShared } from '@metamask/design-system-shared';
import type { ScrollViewProps } from 'react-native';

/**
 * FilterButtonGroup component props.
 */
export type FilterButtonGroupProps = FilterButtonGroupPropsShared &
  Omit<ScrollViewProps, 'horizontal' | 'showsHorizontalScrollIndicator'> & {
    /**
     * Optional twrnc classes merged into `contentContainerStyle` after the default row layout.
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
