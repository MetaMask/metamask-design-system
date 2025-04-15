import type { ComponentProps } from 'react';

import { AvatarFaviconSize } from '../../types';
import { AvatarBaseProps } from '../avatar-base';
import type { TextProps } from '../text';

export type AvatarFaviconProps = Omit<
  ComponentProps<'img'>,
  'children' | 'size'
> &
  Omit<AvatarBaseProps, 'children' | 'size'> & {
    /**
     * Required name of the dapp
     * Used as alt text for image and first letter is used as fallback if no fallbackText provided
     */
    name: string;
    /**
     * Optional URL for the dapp favicon/logo
     * When provided, displays the image instead of fallback text
     */
    src?: string;
    /**
     * Optional prop to pass to the underlying img element
     * Useful for overriding the default alt text which is the dapp name
     */
    imageProps?: ComponentProps<'img'>;
    /**
     * Optional prop to control the size of the avatar
     * @default AvatarFaviconSize.Md
     */
    size?: AvatarFaviconSize;
    /**
     * Optional text to display when no image is provided
     * If not provided, first letter of name will be used
     */
    fallbackText?: string;
    /**
     * Optional props to be passed to the Text component when rendering fallback text
     * Only used when src is not provided
     */
    fallbackTextProps?: Partial<
      React.HTMLAttributes<HTMLSpanElement> & TextProps
    >;
    /**
     * Optional additional CSS classes to be applied to the component
     */
    className?: string;
  };
