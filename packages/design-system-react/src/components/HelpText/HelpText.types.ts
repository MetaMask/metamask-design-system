import type { HelpTextPropsShared } from '@metamask/design-system-shared';

import type { TextProps } from '../Text/index.js';

export type HelpTextProps = HelpTextPropsShared &
  Omit<TextProps, 'variant'> & {
    /**
     * Optional CSS class to merge with the component's default classes.
     */
    className?: string;
  };
