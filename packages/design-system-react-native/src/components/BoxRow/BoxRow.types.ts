import type { BoxRowPropsShared } from '@metamask/design-system-shared';

import type { BoxProps } from '../Box/Box.types';
import type { TextProps } from '../Text';

/**
 * BoxRow component props.
 */
export type BoxRowProps = BoxRowPropsShared &
  Omit<BoxProps, 'children' | 'flexDirection'> & {
    /**
     * Optional props passed to `Text` when `children` is a string.
     */
    textProps?: Omit<Partial<TextProps>, 'children'>;
  };
