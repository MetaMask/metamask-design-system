import type { TitleAlertPropsShared } from '@metamask/design-system-shared';
import type { ViewProps } from 'react-native';

import type { BoxProps } from '../Box/Box.types';
import type { TextProps } from '../Text/Text.types';

/**
 * TitleAlert component props (React Native).
 * Extends {@link TitleAlertPropsShared} with platform `Text` passthroughs, `twClassName`, and `View` props
 * forwarded to the root {@link Box}.
 */
export type TitleAlertProps = TitleAlertPropsShared & {
  /**
   * Optional props spread onto the title row {@link Box}. Omits `children` (TitleAlert sets it via
   * `title` and `titleProps`). Defaults to a row with centered items, `gap={1}`, `justifyContent`
   * center, and `twClassName` `self-stretch`; values on this object override those defaults when set.
   */
  titleWrapperProps?: Omit<Partial<BoxProps>, 'children'>;
  /**
   * Optional props merged into title row `Text` when `title` is a string.
   */
  titleProps?: Omit<Partial<TextProps>, 'children'>;
  /**
   * Optional props merged into description `Text` when `description` is a string.
   */
  descriptionProps?: Omit<Partial<TextProps>, 'children'>;
  /**
   * Optional Tailwind class name to apply to the container.
   */
  twClassName?: string;
} & Omit<ViewProps, 'children'>;
