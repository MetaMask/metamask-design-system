import type { BoxColumnPropsShared } from '@metamask/design-system-shared';

import type { BoxProps } from '../Box/Box.types';
import type { TextProps } from '../Text';

/**
 * BoxColumn component props.
 *
 * @deprecated Use `BoxProps` instead. `BoxColumn` will be removed in a future major version.
 */
export type BoxColumnProps = BoxColumnPropsShared &
  Omit<BoxProps, 'children' | 'flexDirection'> & {
    /**
     * Optional props passed to `Text` when `children` is a string.
     */
    textProps?: Omit<Partial<TextProps>, 'children'>;
  };
