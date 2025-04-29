import { AvatarAccountVariant } from '../../types';
import { AvatarBaseProps } from '../AvatarBase';
import { BlockiesProps } from '../temp-components/Blockies';
import { JazziconProps } from '../temp-components/Jazzicon';
import { MaskiconProps } from '../temp-components/Maskicon';

/**
 * AvatarAccount component props.
 */
export type AvatarAccountProps = {
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
