// Third party dependencies.
import type { TitleHubPropsShared } from '@metamask/design-system-shared';
import type { ViewProps } from 'react-native';

// Internal dependencies.
import type { BoxRowProps } from '../BoxRow/BoxRow.types';
import type { TextProps } from '../Text/Text.types';

/**
 * TitleHub component props (React Native).
 * Extends {@link TitleHubPropsShared} (requires `title`) with platform `Text` passthroughs, `twClassName`, and `View` props.
 */
export type TitleHubProps = TitleHubPropsShared & {
  /**
   * Optional props merged into {@link BoxRow} `textProps` when `title` is a string.
   */
  titleProps?: Omit<Partial<TextProps>, 'children'>;
  /**
   * Optional props spread onto the title row {@link BoxRow}. Omits `children`, `endAccessory`, and `textProps` (TitleHub sets those via `title`, `titleEndAccessory`, and `titleProps`).
   */
  titleWrapperProps?: Omit<
    Partial<BoxRowProps>,
    'children' | 'endAccessory' | 'textProps'
  >;
  /**
   * Optional props merged into {@link BoxRow} `textProps` when `amount` is a string.
   */
  amountProps?: Omit<Partial<TextProps>, 'children'>;
  /**
   * Optional props spread onto the amount row {@link BoxRow}. Omits `children`, `endAccessory`, and `textProps` (TitleHub sets those via `amount`, `amountEndAccessory`, and `amountProps`).
   */
  amountWrapperProps?: Omit<
    Partial<BoxRowProps>,
    'children' | 'endAccessory' | 'textProps'
  >;
  /**
   * Optional props merged into {@link BoxRow} `textProps` when `bottomLabel` is a string.
   */
  bottomLabelProps?: Omit<Partial<TextProps>, 'children'>;
  /**
   * Optional props spread onto the bottom label row {@link BoxRow}. Omits `children`, `endAccessory`, and `textProps` (TitleHub sets those via `bottomLabel`, `bottomLabelEndAccessory`, and `bottomLabelProps`).
   */
  bottomLabelWrapperProps?: Omit<
    Partial<BoxRowProps>,
    'children' | 'endAccessory' | 'textProps'
  >;
  /**
   * Optional Tailwind class name to apply to the container.
   */
  twClassName?: string;
} & Omit<ViewProps, 'children'>;
