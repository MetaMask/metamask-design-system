// Third party dependencies.
import type { TitleSubpagePropsShared } from '@metamask/design-system-shared';
import type { ViewProps } from 'react-native';

// Internal dependencies.
import type { BoxProps } from '../Box/Box.types';
import type { BoxRowProps } from '../BoxRow/BoxRow.types';
import type { TextProps } from '../Text/Text.types';

/**
 * TitleSubpage component props (React Native).
 * Extends {@link TitleSubpagePropsShared} (requires `title` and `titleAvatar`) with platform `Text` passthroughs, `twClassName`, and `View` props.
 */
export type TitleSubpageProps = TitleSubpagePropsShared & {
  /**
   * Optional props spread onto the identity {@link BoxRow} (excluding `children`, `startAccessory`, and `textProps`, which the component owns).
   */
  identityRowProps?: Omit<
    Partial<BoxRowProps>,
    'children' | 'startAccessory' | 'textProps'
  >;
  /**
   * Optional props spread onto the title/subtitle column {@link Box} (excluding `children`, which the component owns).
   */
  titleColumnProps?: Omit<Partial<BoxProps>, 'children'>;
  /**
   * Optional props spread onto the bottom label {@link BoxRow} (excluding `children`, `endAccessory`, and `textProps`, which the component owns).
   */
  bottomLabelWrapperProps?: Omit<
    Partial<BoxRowProps>,
    'children' | 'endAccessory' | 'textProps'
  >;
  /**
   * Optional props merged into {@link BoxRow} `textProps` when `amount` is a string.
   */
  amountProps?: Omit<Partial<TextProps>, 'children'>;
  /**
   * Optional props merged into {@link BoxRow} `textProps` when `title` is a string.
   */
  titleProps?: Omit<Partial<TextProps>, 'children'>;
  /**
   * Optional props merged into {@link BoxRow} `textProps` when `subtitle` is a string.
   */
  subtitleProps?: Omit<Partial<TextProps>, 'children'>;
  /**
   * Optional props merged into {@link BoxRow} `textProps` when `bottomLabel` is a string.
   */
  bottomLabelProps?: Omit<Partial<TextProps>, 'children'>;
  /**
   * Optional Tailwind class name to apply to the container.
   */
  twClassName?: string;
} & Omit<ViewProps, 'children'>;
