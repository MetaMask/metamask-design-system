import type { ComponentProps } from 'react';
import type { IconProps } from '../icon';

import type { TextProps } from '../text';
import type { AvatarBaseProps } from '../avatar-base';

export enum AvatarTokenSize {
  /**
   * Extra small size (16px)
   */
  Xs = 'xs',
  /**
   * Small size (24px)
   */
  Sm = 'sm',
  /**
   * Medium size (32px)
   */
  Md = 'md',
  /**
   * Large size (40px)
   */
  Lg = 'lg',
  /**
   * Extra large size (48px)
   */
  Xl = 'xl',
}

export type AvatarTokenProps = Omit<AvatarBaseProps, 'size'> & {
  /**
   * Required name of the token
   * Used as alt text for image and first letter is used as fallback if no fallbackText provided
   */
  name: string;
  /**
   * Optional URL for the token image
   * When provided, displays the image instead of fallback text
   */
  src?: string;
  /**
   * Optional prop to pass to the underlying img element
   * Useful for overriding the default alt text which is the token name
   */
  imageProps?: ComponentProps<'img'>;
  /**
   * Optional prop to control the size of the avatar
   * @default AvatarTokenSize.Md
   */
  size?: AvatarTokenSize;
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
