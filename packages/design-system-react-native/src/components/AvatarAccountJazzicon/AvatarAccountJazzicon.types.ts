import { AvatarBaseProps } from '../../primitives/AvatarBase';

/**
 * AvatarAccountJazzicon component props.
 */
export type AvatarAccountJazziconProps = {
  /**
   * Optional account address used to generate a Jazzicon
   */
  address: string;
} & Omit<AvatarBaseProps, 'children' | 'fallbackText' | 'fallbackTextProps'>;
