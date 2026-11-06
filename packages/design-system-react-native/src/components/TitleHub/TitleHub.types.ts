// Third party dependencies.
import type { TitleHubPropsShared } from '@metamask/design-system-shared';
import type { ViewProps } from 'react-native';

// Internal dependencies.
import type { BoxProps } from '../Box/Box.types';
import type { SensitiveTextProps } from '../SensitiveText';
import type { TextProps } from '../Text/Text.types';

/**
 * TitleHub component props (React Native).
 * Extends {@link TitleHubPropsShared} (requires `title`) with platform `Text` passthroughs, `twClassName`, and `View` props.
 */
export type TitleHubProps = TitleHubPropsShared & {
  /**
   * Optional props merged into the title `Text` when `title` is a string.
   */
  titleProps?: Omit<Partial<TextProps>, 'children'>;
  /**
   * Optional props spread onto the title row {@link Box} (a row with centered items and `gap={1}` by default; values here override those defaults). Omits `children` (TitleHub sets it via `title` and `titleEndAccessory`).
   */
  titleWrapperProps?: Omit<Partial<BoxProps>, 'children'>;
  /**
   * Optional props merged into the amount `Text` when `amount` is a string.
   * Supports Text props plus `isHidden` / `length`.
   */
  amountProps?: Partial<Omit<SensitiveTextProps, 'children'>>;
  /**
   * Optional props spread onto the amount row {@link Box} (a row with centered items and `gap={1}` by default; values here override those defaults). Omits `children` (TitleHub sets it via `amount` and `amountEndAccessory`).
   */
  amountWrapperProps?: Omit<Partial<BoxProps>, 'children'>;
  /**
   * Optional props merged into the bottom label `Text` when `bottomLabel` is a string.
   * Supports Text props plus `isHidden` / `length`.
   */
  bottomLabelProps?: Partial<Omit<SensitiveTextProps, 'children'>>;
  /**
   * Optional props spread onto the bottom label row {@link Box} (a row with centered items and `gap={1}` by default; values here override those defaults). Omits `children` (TitleHub sets it via `bottomLabel` and `bottomLabelEndAccessory`).
   */
  bottomLabelWrapperProps?: Omit<Partial<BoxProps>, 'children'>;
  /**
   * Optional Tailwind class name to apply to the container.
   */
  twClassName?: string;
} & Omit<ViewProps, 'children'>;
