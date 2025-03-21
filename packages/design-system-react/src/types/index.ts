/**
 * The size of all Avatars
 */
export enum AvatarSize {
  /**
   * Represents an extra small avatar size (16px).
   */
  Xs = 'xs',
  /**
   * Represents a small avatar size (24px).
   */
  Sm = 'sm',
  /**
   * Represents a medium avatar size (32px).
   */
  Md = 'md',
  /**
   * Represents a large avatar size (40px).
   */
  Lg = 'lg',
  /**
   * Represents an extra large avatar size (48px).
   */
  Xl = 'xl',
}
export { AvatarSize as AvatarAccountSize };
export { AvatarSize as AvatarBaseSize };
export { AvatarSize as AvatarFaviconSize };
export { AvatarSize as AvatarGroupSize };
export { Omit<AvatarSize, 'Xs'> as AvatarIconSize };
export { AvatarSize as AvatarNetworkSize };
export { AvatarSize as AvatarTokenSize };

/**
 * The shape of all Avatars
 */
export enum AvatarShape {
  /**
   * Represents a circular Avatar.
   */
  Circle = 'circle',
  /**
   * Represents a squared Avatar
   */
  Square = 'square',
}
export { AvatarShape as AvatarBaseShape };
