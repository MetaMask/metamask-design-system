import type { ContentPropsShared } from '@metamask/design-system-shared';

import type { BoxProps } from '../Box/Box.types';
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
     * Optional props for the description Text when `description` is a string.
     * Default: TextVariant.BodySm, FontWeight.Medium, TextColor.TextAlternative.
     */
    descriptionProps?: Partial<Omit<TextProps, 'children'>>;
    /**
     * Optional props for the value Text when `value` is a string.
     * Default: TextVariant.BodyMd, FontWeight.Medium, TextColor.TextDefault.
     */
    valueProps?: Partial<Omit<TextProps, 'children'>>;
    /**
     * Optional props for the subvalue Text when `subvalue` is a string.
     * Default: TextVariant.BodySm, FontWeight.Medium, TextColor.TextAlternative.
     */
    subvalueProps?: Partial<Omit<TextProps, 'children'>>;
  };
