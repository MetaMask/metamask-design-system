export {
  AvatarBaseSize,
  AvatarBaseShape,
} from '@metamask/design-system-shared';
/**
 * TODO: Remove the following exports and update imports in components to import directly from `@metamask/design-system-shared` once all components have been migrated to React Native.
 */
export { IconColor, IconName, IconSize } from '@metamask/design-system-shared';
export { AvatarBaseSize as AvatarGroupSize } from '@metamask/design-system-shared';
export { AvatarBaseSize as AvatarNetworkSize } from '@metamask/design-system-shared';
export { AvatarBaseSize as AvatarSize } from '@metamask/design-system-shared';

/**
 * AvatarGroup - variant
 */
export enum AvatarGroupVariant {
  Account = 'account',
  Favicon = 'favicon',
  Network = 'network',
  Token = 'token',
}
