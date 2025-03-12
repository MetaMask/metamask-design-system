import type { AvatarNetworkProps } from './AvatarNetwork.types';
import { AvatarSize, AvatarShape } from '../../shared/enums';

// Defaults
export const DEFAULT_AVATARNETWORK_PROPS: Required<
  Pick<AvatarNetworkProps, 'size' | 'shape' | 'width' | 'height'>
> = {
  size: AvatarSize.Md,
  shape: AvatarShape.Square,
  width: '100%',
  height: '100%',
};

// Sample Network URIs
export const SAMPLE_AVATARNETWORK_URIS = [
  'https://cryptologos.cc/logos/cardano-ada-logo.svg',
  'https://cryptologos.cc/logos/chainlink-link-logo.svg',
  'https://cryptologos.cc/logos/uniswap-uni-logo.svg',
  'https://cryptologos.cc/logos/flare-flr-logo.svg',
  'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
  'https://cryptologos.cc/logos/solana-sol-logo.svg',
  'https://cryptologos.cc/logos/tether-usdt-logo.svg',
];
