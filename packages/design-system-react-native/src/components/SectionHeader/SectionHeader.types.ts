// Third party dependencies.
import type { SectionHeaderPropsShared } from '@metamask/design-system-shared';
import type { PressableProps, ViewProps } from 'react-native';

// Internal dependencies.
import type { BoxProps } from '../Box/Box.types';
import type { IconProps } from '../Icon';
import type { TextProps } from '../Text/Text.types';

type SectionHeaderPropsBase = SectionHeaderPropsShared & {
  /**
   * Optional props merged into the title `Text` when `title` is a string.
   */
  titleProps?: Omit<Partial<TextProps>, 'children'>;
  /**
   * Optional props spread onto the title row {@link Box} (a row with centered items and `gap={1}` by default; values here override those defaults). Omits `children` (SectionHeader sets it via `title` and `titleAccessory`).
   */
  titleWrapperProps?: Omit<Partial<BoxProps>, 'children'>;
  /**
   * Optional prop to pass additional properties to the start icon.
   */
  startIconProps?: Omit<Partial<IconProps>, 'name'>;
  /**
   * Optional prop to pass additional properties to the end icon.
   */
  endIconProps?: Omit<Partial<IconProps>, 'name'>;
  /**
   * Optional Tailwind class name to apply to the outer row.
   */
  twClassName?: string;
};

/**
 * SectionHeader component props (React Native).
 * Extends {@link SectionHeaderPropsShared} with platform `Text` / `Icon` passthroughs, `twClassName`, and wrapper props.
 * When `isInteractive` is `true`, the outer wrapper is a `Pressable`; otherwise it is a row {@link Box} with `ViewProps`.
 */
export type SectionHeaderProps =
  | (SectionHeaderPropsBase & {
      isInteractive?: false;
    } & Omit<ViewProps, 'children'>)
  | (SectionHeaderPropsBase & {
      isInteractive: true;
    } & Omit<PressableProps, 'children'>);
