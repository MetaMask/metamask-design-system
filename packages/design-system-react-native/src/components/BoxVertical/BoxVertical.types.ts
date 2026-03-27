import type { ReactNode } from 'react';

import type { BoxProps } from '../Box/Box.types';
import type { TextOrChildrenProps } from '../temp-components/TextOrChildren/TextOrChildren.types';

/**
 * BoxVertical component props.
 */
export type BoxVerticalProps = TextOrChildrenProps &
  Omit<BoxProps, 'children' | 'flexDirection'> & {
    /**
     * Optional node rendered above the text/children.
     */
    topAccessory?: ReactNode;
    /**
     * Optional node rendered below the text/children.
     */
    bottomAccessory?: ReactNode;
  };
