export {
  extractAccountAddress,
  generateSeedEthereum,
  generateSeedNonEthereum,
  isEthereumAddress,
  generateIconSeed,
} from './utils/caip-address';

// AvatarIcon types (ADR-0003 + ADR-0004)
export {
  AvatarIconSeverity,
  type AvatarIconPropsShared,
} from './types/AvatarIcon';

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

// BannerAlert types (ADR-0003 + ADR-0004)
export {
  BannerAlertSeverity,
  type BannerAlertPropsShared,
} from './types/BannerAlert';
