import type { SectionBasePropsShared } from '@metamask/design-system-shared';

import type { BoxProps } from '../Box';
import type { TextProps } from '../Text';

/**
 * SectionBase component props.
 */
export type SectionBaseProps = SectionBasePropsShared &
  Omit<BoxProps, 'children'> & {
    /**
     * Optional props for the title when title is a string.
     * Default: TextVariant.HeadingLg, TextColor.TextDefault.
     */
    titleProps?: Omit<Partial<TextProps>, 'children'>;
    /**
     * Optional props for the description when description is a string.
     * Default: TextVariant.BodyMd, TextColor.TextAlternative.
     */
    descriptionProps?: Omit<Partial<TextProps>, 'children'>;
    /**
     * Optional Tailwind class names applied to the root Box.
     */
    twClassName?: string;
    /**
     * Optional children rendered below the description.
     */
    children?: React.ReactNode;
  };
