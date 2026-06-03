// Third party dependencies.
import type { SectionHeaderPropsShared } from '@metamask/design-system-shared';
import type { PressableProps, ViewProps } from 'react-native';

// Internal dependencies.
import type { BoxRowProps } from '../BoxRow/BoxRow.types';
import type { IconProps } from '../Icon';
import type { TextProps } from '../Text/Text.types';

type SectionHeaderPropsBase = SectionHeaderPropsShared & {
  /**
   * Optional props merged into {@link BoxRow} `textProps` when `title` is a string.
   */
  titleProps?: Omit<Partial<TextProps>, 'children'>;
  /**
   * Optional props spread onto the title row {@link BoxRow}. Omits `children`, `endAccessory`, and `textProps` (SectionHeader sets those via `title`, `titleAccessory`, and `titleProps`).
   */
  titleWrapperProps?: Omit<
    Partial<BoxRowProps>,
    'children' | 'endAccessory' | 'textProps'
  >;
  /**
   * Optional prop to pass additional properties to the start icon.
   */
  startIconProps?: Partial<IconProps>;
  /**
   * Optional prop to pass additional properties to the end icon.
   */
  endIconProps?: Partial<IconProps>;
  /**
   * Optional Tailwind class name to apply to the outer row.
   */
  twClassName?: string;
};

/**
 * SectionHeader component props (React Native).
 * Extends {@link SectionHeaderPropsShared} with platform `Text` / `Icon` passthroughs, `twClassName`, and wrapper props.
 * When `isInteractive` is `true`, the outer wrapper is a `Pressable`; otherwise it is a {@link BoxRow} with `ViewProps`.
 */
export type SectionHeaderProps =
  | (SectionHeaderPropsBase & {
      isInteractive?: false;
    } & Omit<ViewProps, 'children'>)
  | (SectionHeaderPropsBase & {
      isInteractive: true;
    } & Omit<PressableProps, 'children'>);
