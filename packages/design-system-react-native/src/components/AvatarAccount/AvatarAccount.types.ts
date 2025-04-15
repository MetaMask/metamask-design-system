import { AvatarBaseProps } from '../../primitives/AvatarBase';
import { AvatarAccountVariant } from '../../types';

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
} & Omit<AvatarBaseProps, 'children' | 'fallbackText' | 'fallbackTextProps'>;
