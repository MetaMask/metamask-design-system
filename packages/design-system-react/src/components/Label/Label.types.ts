import type { ComponentProps, ReactNode } from 'react';

import type { TextProps } from '../Text';

/**
 * `Label` extends `TextProps` so consumers can pass any Text styling override
 * (`color`, `fontWeight`, `variant`, `textAlign`, etc.) directly. The `asChild`
 * prop is owned by the component (it always renders into a semantic
 * `<label>` element) and is intentionally excluded.
 */
export type LabelProps = Omit<TextProps, 'asChild' | 'children'> &
  Omit<ComponentProps<'label'>, keyof TextProps | 'className'> & {
    /**
     * The `id` of the form input this label is associated with. When set,
     * clicking the label focuses the corresponding input — the standard HTML
     * `<label htmlFor>` form-association behavior. The component also adds
     * `cursor-pointer` to communicate the affordance.
     */
    htmlFor?: string;
    /**
     * Optional prop for additional CSS classes applied to the `<label>`
     * element. Merged with the component's defaults via `twMerge`.
     */
    className?: string;
    /**
     * The label content.
     */
    children: ReactNode;
  };
