import type { CardPropsShared } from '@metamask/design-system-shared';
import type { MouseEventHandler } from 'react';

import type { BoxProps } from '../Box';

/**
 * Card component props (React platform-specific).
 * Extends shared props from @metamask/design-system-shared with Box layout
 * props and React-specific platform concerns.
 */
export type CardProps = CardPropsShared &
  Omit<BoxProps, 'children' | 'onClick'> & {
    /**
     * Optional click handler. When provided, the card renders as a button
     * so it is keyboard-accessible.
     */
    onClick?: MouseEventHandler<HTMLButtonElement>;
  };
