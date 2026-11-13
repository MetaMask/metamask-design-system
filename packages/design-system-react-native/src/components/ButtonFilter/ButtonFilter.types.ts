import type { ButtonFilterPropsShared } from '@metamask/design-system-shared';

import type { ButtonBaseProps } from '../ButtonBase';

export type ButtonFilterProps = Omit<
  ButtonBaseProps,
  'className' | 'twClassName' | 'textClassName'
> &
  ButtonFilterPropsShared & {
    /**
     * Optional prop to add twrnc overriding classNames.
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
