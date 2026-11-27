import type { ButtonFilterPropsShared } from '@metamask/design-system-shared';

import type { ButtonBaseProps } from '../ButtonBase';

export type ButtonFilterProps = Omit<
  ButtonBaseProps,
  'twClassName' | 'textClassName' | 'className'
> &
  ButtonFilterPropsShared & {
    /**
     * Optional prop to add twrnc overriding classNames.
     *
     * @deprecated Use `className` instead.
     */
    twClassName?: string;
    /**
     * Optional Tailwind classes. Merged after the component's own classes and `twClassName`, so `className` wins on conflicts.
     */
    className?: string;
  };
