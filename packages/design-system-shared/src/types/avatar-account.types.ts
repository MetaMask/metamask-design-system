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
 * AvatarAccount - size
 * 
 * This enum defines the unified size values used across both React and React Native.
 * Both platforms now use the same string values ('xs', 'sm', 'md', 'lg', 'xl').
 */
export enum AvatarAccountSize {
  /** Extra small avatar size (16px) */
  Xs = 'xs',
  /** Small avatar size (24px) */
  Sm = 'sm',
  /** Medium avatar size (32px) - default */
  Md = 'md',
  /** Large avatar size (40px) */
  Lg = 'lg',
  /** Extra large avatar size (48px) */
  Xl = 'xl',
}

/**
 * Avatar - shape
 * 
 * This enum defines the shape options available for avatar components.
 */
export enum AvatarShape {
  /** Circular avatar */
  Circle = 'circle',
  /** Square avatar */
  Square = 'square',
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
  /**
   * Optional prop to control the size of the avatar
   *
   * @default AvatarAccountSize.Md
   */
  size?: AvatarAccountSize;
}