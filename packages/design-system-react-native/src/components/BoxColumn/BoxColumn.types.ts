import type { BoxColumnPropsShared } from '@metamask/design-system-shared';

import type { BoxProps } from '../Box/Box.types.js';
import type { TextProps } from '../Text/index.js';

/**
 * BoxColumn component props.
 */
export type BoxColumnProps = BoxColumnPropsShared &
  Omit<BoxProps, 'children' | 'flexDirection'> & {
    /**
     * Optional props passed to `Text` when `children` is a string.
     */
    textProps?: Omit<Partial<TextProps>, 'children'>;
  };
