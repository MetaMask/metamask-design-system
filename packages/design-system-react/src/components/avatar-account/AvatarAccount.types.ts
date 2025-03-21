import type { ComponentProps } from 'react';

import type { TextProps } from '../text';
import type { Jazzicon } from '../jazzicon';
import type { Blockies } from '../blockies';

export enum AvatarAccountSize {
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

export enum AvatarAccountVariant {
  Jazzicon = 'jazzicon',
  Blockies = 'blockies',
}

export type AvatarAccountProps = Omit<
  ComponentProps<'img'>,
  'children' | 'size'
> & {
  /**
   * Required address used as a unique identifier to generate the AvatarAccount art.
   */
  address: string;
  /**
   * Optional prop to control the variant of the avatar account
   * @default AvatarAccountVariant.Jazzicon
   */
  variant?: AvatarAccountVariant;
  /**
   * Optional prop to control the size of the avatar
   * @default AvatarAccountSize.Md
   */
  size?: AvatarAccountSize;
  /**
   * Optional additional CSS classes to be applied to the component
   */
  className?: string;
  /**
   * Optional props to be passed to the Jazzicon component
   */
  jazziconProps?: Partial<ComponentProps<typeof Jazzicon>>;
  /**
   * Optional props to be passed to the Blockies component
   */
  blockiesProps?: Partial<ComponentProps<typeof Blockies>>;
};
