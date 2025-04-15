import type { ComponentProps } from 'react';

import type { TextProps } from '../Text';
import { AvatarNetworkSize } from '.';

export type AvatarNetworkProps = Omit<
  ComponentProps<'img'>,
  'children' | 'size'
> & {
  /**
   * Required name of the network
   * Used as alt text for image and first letter is used as fallback if no fallbackText provided
   */
  name: string;
  /**
   * Optional URL for the network image
   * When provided, displays the image instead of fallback text
   */
  src?: string;
  /**
   * Optional prop to pass to the underlying img element
   * Useful for overriding the default alt text which is the network name
   */
  imageProps?: ComponentProps<'img'>;
  /**
   * Optional prop to control the size of the avatar
   * @default AvatarNetworkSize.Md
   */
  size?: AvatarNetworkSize;
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
