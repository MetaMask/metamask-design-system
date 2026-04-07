import type { TextOrChildrenPropsShared } from '@metamask/design-system-shared';

import type { TextProps } from '../../Text';

/**
 * TextOrChildren component props.
 */
export type TextOrChildrenProps = TextOrChildrenPropsShared & {
  /**
   * Optional props to be passed to the Text component when children is a string
   */
  textProps?: Omit<Partial<TextProps>, 'children'>;
};
