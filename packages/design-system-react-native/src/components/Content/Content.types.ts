import type { ContentPropsShared } from '@metamask/design-system-shared';

import type { BoxProps } from '../Box/Box.types';
import type { SensitiveTextProps } from '../SensitiveText';
import type { TextProps } from '../Text/Text.types';

/**
 * Content component props.
 *
 * Props-only layout for the inner list row (`title`, `avatar`, inline row accessories, etc.).
 */
export type ContentProps = Omit<BoxProps, 'children'> &
  ContentPropsShared & {
    /**
     * Optional props for the title Text when `title` is a string.
     * Default: TextVariant.BodyMd, FontWeight.Medium, TextColor.TextDefault.
     */
    titleProps?: Partial<Omit<TextProps, 'children'>>;
    /**
     * Optional props for the description SensitiveText when `description` is a string.
     * Supports Text props plus `isHidden` / `length`.
     * Default: TextVariant.BodySm, FontWeight.Medium, TextColor.TextAlternative.
     */
    descriptionProps?: Partial<Omit<SensitiveTextProps, 'children'>>;
    /**
     * Optional props for the value SensitiveText when `value` is a string.
     * Supports Text props plus `isHidden` / `length`.
     * Default: TextVariant.BodyMd, FontWeight.Medium, TextColor.TextDefault.
     */
    valueProps?: Partial<Omit<SensitiveTextProps, 'children'>>;
    /**
     * Optional props for the subvalue SensitiveText when `subvalue` is a string.
     * Supports Text props plus `isHidden` / `length`.
     * Default: TextVariant.BodySm, FontWeight.Medium, TextColor.TextAlternative.
     */
    subvalueProps?: Partial<Omit<SensitiveTextProps, 'children'>>;
  };
