import type { ButtonFilterPropsShared } from '@metamask/design-system-shared';

import type { ButtonBaseProps } from '../ButtonBase';

export type ButtonFilterProps = Omit<
  ButtonBaseProps,
  'twClassName' | 'textClassName'
> &
  ButtonFilterPropsShared & {
    /**
     * Optional prop to add twrnc overriding classNames.
     */
    twClassName?: string;
  };
