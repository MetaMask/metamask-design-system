// Third party dependencies.
import type { TitleStandardPropsShared } from '@metamask/design-system-shared';
import type { ViewProps } from 'react-native';

// Internal dependencies.
import type { BoxProps } from '../Box/Box.types';
import type { TextProps } from '../Text/Text.types';

/**
 * TitleStandard component props (React Native).
 * Extends {@link TitleStandardPropsShared} (requires `title`) with platform `Text` passthroughs, `twClassName`, and `View` props.
 */
export type TitleStandardProps = TitleStandardPropsShared & {
  /**
   * Optional props merged into the title `Text` when `title` is a string.
   */
  titleProps?: Omit<Partial<TextProps>, 'children'>;
  /**
   * Optional props forwarded to the title row {@link Box} (a row with centered items and `gap={2}` by default; values here override those defaults). Excludes `children`, which is controlled by this component.
   */
  titleWrapperProps?: Omit<Partial<BoxProps>, 'children'>;
  /**
   * Optional props merged into the bottom label `Text` when `bottomLabel` is a string.
   */
  bottomLabelProps?: Omit<Partial<TextProps>, 'children'>;
  /**
   * Optional props forwarded to the bottom label row {@link Box} when `bottomLabel` is renderable (a row with centered items and `gap={2}` by default; values here override those defaults). Excludes `children`, which is controlled by this component.
   */
  bottomLabelWrapperProps?: Omit<Partial<BoxProps>, 'children'>;
  /**
   * Optional Tailwind class name to apply to the container.
   *
   * @deprecated Use `className` instead. `twClassName` remains supported for existing callers and will be removed in a future major version.
   */
  twClassName?: string;
  /**
   * Tailwind classes from `@metamask/design-system-twrnc-preset`.
   * Applied after `twClassName` when both are set, so these classes win.
   */
  className?: string;
} & Omit<ViewProps, 'children'>;
