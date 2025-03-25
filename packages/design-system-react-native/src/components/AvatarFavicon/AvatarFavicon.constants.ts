import type { AvatarFaviconProps } from './AvatarFavicon.types';
import { AvatarSize, AvatarShape } from '../../shared/enums';

// Defaults
export const DEFAULT_AVATARFAVICON_PROPS: Required<
  Pick<AvatarFaviconProps, 'size' | 'shape' | 'width' | 'height'>
> = {
  size: AvatarSize.Md,
  shape: AvatarShape.Circle,
  width: '100%',
  height: '100%',
};

// Sample Favicon URIs
export const SAMPLE_AVATARFAVICON_URIS = [
  'https://metamask.github.io/test-dapp/metamask-fox.svg',
  'https://www.coinbase.com/favicon.ico',
  'https://www.myetherwallet.com/favicon.ico',
  'https://www.blockchain.com/static/favicon.ico',
  'https://trezor.io/favicon.ico',
  'https://electrum.org/favicon.ico',
  'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
];
