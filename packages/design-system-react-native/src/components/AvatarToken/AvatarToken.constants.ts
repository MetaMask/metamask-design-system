import type { AvatarTokenProps } from './AvatarToken.types';
import { AvatarSize, AvatarShape } from '../../shared/enums';

// Defaults
export const DEFAULT_AVATARTOKEN_PROPS: Required<
  Pick<AvatarTokenProps, 'size' | 'shape' | 'width' | 'height'>
> = {
  size: AvatarSize.Md,
  shape: AvatarShape.Circle,
  width: '100%',
  height: '100%',
};

// Sample Token URIs
export const SAMPLE_AVATARTOKEN_URIS = [
  'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
  'https://cryptologos.cc/logos/solana-sol-logo.svg',
  'https://cryptologos.cc/logos/tether-usdt-logo.svg',
  'https://cryptologos.cc/logos/cardano-ada-logo.svg',
  'https://cryptologos.cc/logos/chainlink-link-logo.svg',
  'https://cryptologos.cc/logos/uniswap-uni-logo.svg',
  'https://cryptologos.cc/logos/flare-flr-logo.svg',
];
