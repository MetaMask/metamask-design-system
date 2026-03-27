import type { ReactNode } from 'react';

import type { BoxProps } from '../Box/Box.types';
import type { TextOrChildrenProps } from '../temp-components/TextOrChildren/TextOrChildren.types';

/**
 * BoxHorizontal component props.
 */
export type BoxHorizontalProps = TextOrChildrenProps &
  Omit<BoxProps, 'children' | 'flexDirection'> & {
    /**
     * Optional node rendered before the text/children (e.g. icon, avatar).
     */
    startAccessory?: ReactNode;
    /**
     * Optional node rendered after the text/children (e.g. icon, badge).
     */
    endAccessory?: ReactNode;
  };
