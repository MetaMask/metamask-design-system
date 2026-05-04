import type { TitleAlertPropsShared } from '@metamask/design-system-shared';
import type { ViewProps } from 'react-native';

import type { TextProps } from '../Text/Text.types';

/**
 * TitleAlert component props (React Native).
 * Extends {@link TitleAlertPropsShared} with platform `Text` passthroughs, `twClassName`, and `View` props.
 */
export type TitleAlertProps = TitleAlertPropsShared & {
  /**
   * Optional props merged into title row `Text` when `title` is a string.
   */
  titleProps?: Omit<Partial<TextProps>, 'children'>;
  /**
   * Optional Tailwind class name to apply to the container.
   */
  twClassName?: string;
} & Omit<ViewProps, 'children'>;
