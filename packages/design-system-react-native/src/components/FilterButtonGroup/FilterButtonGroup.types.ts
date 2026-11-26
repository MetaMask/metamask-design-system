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
     * @deprecated Use `className` instead.
     */
    twClassName?: string;
    /**
     * Optional Tailwind classes. Merged after the component's own classes and `twClassName`, so `className` wins on conflicts.
     */
    className?: string;
  };
