export {
  extractAccountAddress,
  generateSeedEthereum,
  generateSeedNonEthereum,
  isEthereumAddress,
  generateIconSeed,
} from './utils/caip-address';

// AvatarBase types (ADR-0003 + ADR-0004)
export {
  AvatarBaseSize,
  AvatarBaseShape,
  type AvatarBasePropsShared,
} from './types/AvatarBase';

// BadgeCount types (ADR-0003 + ADR-0004)
export { BadgeCountSize, type BadgeCountPropsShared } from './types/BadgeCount';

// BadgeStatus types (ADR-0003 + ADR-0004)
export {
  BadgeStatusStatus,
  BadgeStatusSize,
  type BadgeStatusPropsShared,
} from './types/BadgeStatus';

// BannerBase types (ADR-0004)
export { type BannerBasePropsShared } from './types/BannerBase';

// ButtonFilter types (ADR-0004)
export { type ButtonFilterPropsShared } from './types/ButtonFilter';

// AvatarNetwork types (ADR-0004)
export { type AvatarNetworkPropsShared } from './types/AvatarNetwork';

// BannerAlert types (ADR-0003 + ADR-0004)
export {
  BannerAlertSeverity,
  type BannerAlertPropsShared,
} from './types/BannerAlert';
