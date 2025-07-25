import type { BaseAvatarAccountProps } from '@metamask/design-system-shared';

import type { AvatarBaseProps } from '../AvatarBase';
import type { BlockiesProps } from '../temp-components/Blockies';
import type { JazziconProps } from '../temp-components/Jazzicon';
import type { MaskiconProps } from '../temp-components/Maskicon';

/**
 * AvatarAccount component props.
 */
export type AvatarAccountProps = BaseAvatarAccountProps & {
  /**
   * Optional props to be passed to the Blockies component
   */
  blockiesProps?: Partial<BlockiesProps>;
  /**
   * Optional props to be passed to the Jazzicon component
   */
  jazziconProps?: Partial<JazziconProps>;
  /**
   * Optional props to be passed to the Maskicon component
   */
  maskiconProps?: Partial<MaskiconProps>;
} & Omit<AvatarBaseProps, 'children' | 'fallbackText' | 'fallbackTextProps' | 'size'>;
