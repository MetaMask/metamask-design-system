import type { ComponentProps } from 'react';

import { AvatarAccountVariant, AvatarAccountSize } from '../../types';
import { AvatarBaseProps } from '../avatar-base';
import type { Jazzicon } from '../jazzicon';
import type { Blockies } from '../blockies';

export type AvatarAccountProps = Omit<
  ComponentProps<'img'>,
  'children' | 'size'
> &
  Omit<AvatarBaseProps, 'children' | 'size'> & {
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
