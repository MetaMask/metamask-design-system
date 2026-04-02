/**
 * AvatarAccount - variant
 * ADR-0003: Const object with derived string union type instead of TypeScript enum.
 */
export const AvatarAccountVariant = {
  /**
   * Displays a Blockies-generated avatar.
   */
  Blockies: 'blockies',
  /**
   * Displays a Jazzicon-generated avatar.
   */
  Jazzicon: 'jazzicon',
  /**
   * Displays a Maskicon-generated avatar.
   */
  Maskicon: 'maskicon',
} as const;

export type AvatarAccountVariant =
  (typeof AvatarAccountVariant)[keyof typeof AvatarAccountVariant];

/**
 * AvatarAccount component shared props (ADR-0004)
 * Platform-independent properties shared across React and React Native.
 * Note: AvatarAccountSize is not included here because it inherits from
 * AvatarBaseSize which differs between platforms (DSYS-473).
 */
export type AvatarAccountPropsShared = {
  /**
   * Required address used as a unique identifier to generate the AvatarAccount art.
   */
  address: string;
  /**
   * Optional prop to control the variant of the avatar account.
   *
   * @default AvatarAccountVariant.Jazzicon
   */
  variant?: AvatarAccountVariant;
};
