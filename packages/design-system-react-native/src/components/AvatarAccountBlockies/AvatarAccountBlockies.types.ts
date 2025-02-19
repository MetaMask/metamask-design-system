import { AvatarBaseProps } from '../../primitives/AvatarBase';

/**
 * AvatarAccountBlockies component props.
 */
export type AvatarAccountBlockiesProps = {
  /**
   * Optional account address used to generate a Blockies
   */
  address: string;
} & Omit<AvatarBaseProps, 'children' | 'fallbackText' | 'fallbackTextProps'>;
