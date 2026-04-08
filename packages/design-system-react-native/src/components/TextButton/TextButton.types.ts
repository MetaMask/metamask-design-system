import type { TextButtonPropsShared } from '@metamask/design-system-shared';

import type { TextProps } from '../Text';

/**
 * Props for `TextButton`, a text-only control for links and inline actions.
 * Extends {@link Text} props.
 */
export type TextButtonProps = Omit<
  TextProps,
  'children' | 'color' | 'onPress'
> &
  TextButtonPropsShared & {
    /**
     * Called when the user presses the label. Primary interaction for this control.
     */
    onPress?: TextProps['onPress'];
  };
