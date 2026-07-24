import type { BoxRowPropsShared } from '@metamask/design-system-shared';

import type { BoxProps } from '../Box/Box.types';
import type { SensitiveTextProps } from '../SensitiveText';

/**
 * BoxRow component props.
 */
export type BoxRowProps = BoxRowPropsShared &
  Omit<BoxProps, 'children' | 'flexDirection'> & {
    /**
     * Optional props passed to `SensitiveText` when `children` is a string.
     * Supports Text props plus `isHidden` / `length`.
     */
    textProps?: Partial<Omit<SensitiveTextProps, 'children'>>;
  };
