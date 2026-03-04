export {
  extractAccountAddress,
  generateSeedEthereum,
  generateSeedNonEthereum,
  isEthereumAddress,
  generateIconSeed,
} from './utils/caip-address';

// BadgeCount types (ADR-0003 + ADR-0004)
export { BadgeCountSize, type BadgeCountPropsShared } from './types/BadgeCount';

// BadgeStatus types (ADR-0003 + ADR-0004)
export {
  BadgeStatusStatus,
  BadgeStatusSize,
  type BadgeStatusPropsShared,
} from './types/BadgeStatus';
