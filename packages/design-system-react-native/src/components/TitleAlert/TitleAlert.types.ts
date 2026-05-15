import type { TitleAlertPropsShared } from '@metamask/design-system-shared';
import type { ViewProps } from 'react-native';

import type { BoxRowProps } from '../BoxRow/BoxRow.types';
import type { TextProps } from '../Text/Text.types';

/**
 * TitleAlert component props (React Native).
 * Extends {@link TitleAlertPropsShared} with platform `Text` passthroughs, `twClassName`, and `View` props
 * forwarded to the root {@link BoxColumn}.
 */
export type TitleAlertProps = TitleAlertPropsShared & {
  /**
   * Optional props spread onto the title row {@link BoxRow}. Omits `children`, `startAccessory`,
   * `endAccessory`, and `textProps` (TitleAlert sets those via `title`, `titleStartAccessory`,
   * `titleEndAccessory`, and `titleProps`). Defaults `justifyContent` to center and `twClassName`
   * to include `self-stretch`; values on this object override those defaults when set.
   */
  titleWrapperProps?: Omit<
    Partial<BoxRowProps>,
    'children' | 'startAccessory' | 'endAccessory' | 'textProps'
  >;
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
