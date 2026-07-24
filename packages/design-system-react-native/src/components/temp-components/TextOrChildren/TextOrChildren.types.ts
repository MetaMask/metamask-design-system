import type { TextOrChildrenPropsShared } from '@metamask/design-system-shared';

import type { SensitiveTextProps } from '../../SensitiveText';

/**
 * TextOrChildren component props.
 */
export type TextOrChildrenProps = TextOrChildrenPropsShared & {
  /**
   * Optional props to be passed to the SensitiveText component when children is a string.
   * Supports Text props plus `isHidden` / `length`.
   */
  textProps?: Partial<Omit<SensitiveTextProps, 'children'>>;
};
