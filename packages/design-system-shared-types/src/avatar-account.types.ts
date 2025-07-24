/**
 * AvatarAccount - variant
 * 
 * This enum defines the different visual styles/variants available for AvatarAccount components.
 * It's shared between React and React Native packages as the values are identical.
 */
export enum AvatarAccountVariant {
  /** Blockies identicon style */
  Blockies = 'blockies',
  /** Jazzicon identicon style */
  Jazzicon = 'jazzicon',  
  /** Maskicon identicon style */
  Maskicon = 'maskicon',
}

/**
 * AvatarAccount - size keys
 * 
 * This enum defines the size keys that are consistent across platforms.
 * The actual pixel values differ between React ('xs', 'sm', etc.) and React Native ('16', '24', etc.),
 * but the semantic size names remain the same.
 */
export enum AvatarAccountSizeKey {
  /** Extra small avatar size */
  Xs = 'Xs',
  /** Small avatar size */
  Sm = 'Sm', 
  /** Medium avatar size (default) */
  Md = 'Md',
  /** Large avatar size */
  Lg = 'Lg',
  /** Extra large avatar size */
  Xl = 'Xl',
}

/**
 * Base props that are common to AvatarAccount components across platforms
 */
export interface BaseAvatarAccountProps {
  /**
   * Required address used as a unique identifier to generate the AvatarAccount art.
   */
  address: string;
  /**
   * Optional prop to control the variant of the avatar account
   *
   * @default AvatarAccountVariant.Jazzicon
   */
  variant?: AvatarAccountVariant;
}