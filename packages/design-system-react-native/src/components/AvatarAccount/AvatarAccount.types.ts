import type { AvatarAccountPropsShared } from '@metamask/design-system-shared';

import type { AvatarBaseProps } from '../AvatarBase/index.js';
import type { BlockiesProps } from '../temp-components/Blockies/index.js';
import type { JazziconProps } from '../temp-components/Jazzicon/index.js';
import type { MaskiconProps } from '../temp-components/Maskicon/index.js';

/**
 * AvatarAccount component props.
 */
export type AvatarAccountProps = AvatarAccountPropsShared & {
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
} & Omit<AvatarBaseProps, 'children' | 'fallbackText' | 'fallbackTextProps'>;
