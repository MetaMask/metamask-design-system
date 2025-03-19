import { AvatarGroupSize } from './AvatarGroup.types';
import { TextVariant } from '../text';

import { AvatarFaviconProps } from '../avatar-favicon';
import { AvatarNetworkProps } from '../avatar-network';
import { AvatarTokenProps } from '../avatar-token';

// Mappings
export const AVATAR_GROUP_SIZE_CLASS_MAP: Record<AvatarGroupSize, string> = {
  [AvatarGroupSize.Xs]: 'h-4 w-4',
  [AvatarGroupSize.Sm]: 'h-6 w-6',
  [AvatarGroupSize.Md]: 'h-8 w-8',
  [AvatarGroupSize.Lg]: 'h-10 w-10',
  [AvatarGroupSize.Xl]: 'h-12 w-12',
};

export const AVATAR_GROUP_SIZE_NEGATIVESPACEBETWEENAVATARS_MAP: Record<
  AvatarGroupSize,
  string
> = {
  [AvatarGroupSize.Xs]: 'ml-[-6px]',
  [AvatarGroupSize.Sm]: 'ml-[-10px]',
  [AvatarGroupSize.Md]: 'ml-[-14px]',
  [AvatarGroupSize.Lg]: 'ml-[-18px]',
  [AvatarGroupSize.Xl]: 'ml-[-22px]',
};

export const AVATAR_GROUP_SIZE_NEGATIVESPACEBETWEENAVATARS_MAP_2: Record<
  AvatarGroupSize,
  string
> = {
  [AvatarGroupSize.Xs]: 'gap-[-6px]',
  [AvatarGroupSize.Sm]: 'gap-[-10px]',
  [AvatarGroupSize.Md]: 'gap-[-14px]',
  [AvatarGroupSize.Lg]: 'gap-[-18px]',
  [AvatarGroupSize.Xl]: 'gap-[-22px]',
};

export const AVATAR_GROUP_SIZE_OVERFLOWTEXT_TEXTVARIANT_MAP: Record<
  AvatarGroupSize,
  TextVariant
> = {
  [AvatarGroupSize.Xs]: TextVariant.BodyXs,
  [AvatarGroupSize.Sm]: TextVariant.BodySm,
  [AvatarGroupSize.Md]: TextVariant.BodyMd,
  [AvatarGroupSize.Lg]: TextVariant.HeadingMd,
  [AvatarGroupSize.Xl]: TextVariant.HeadingMd,
};

export const AVATAR_GROUP_SQUARE_BORDER_RADIUS_MAP: Record<
  AvatarGroupSize,
  string
> = {
  [AvatarGroupSize.Xs]: 'rounded-sm', // 4px
  [AvatarGroupSize.Sm]: 'rounded-md', // 6px
  [AvatarGroupSize.Md]: 'rounded-lg', // 8px
  [AvatarGroupSize.Lg]: 'rounded-[10px]', // 10px (No tailwind class for this)
  [AvatarGroupSize.Xl]: 'rounded-xl', // 12px
};

// Sample consts
export const SAMPLE_AVATARGROUP_AVATARFAVICONPROPSARR: AvatarFaviconProps[] = [
  {
    name: 'Metamask',
    src: 'https://metamask.github.io/test-dapp/metamask-fox.svg',
  },
  {
    name: 'Coinbase',
    src: 'https://www.coinbase.com/favicon.ico',
  },
  {
    name: 'Blockchain',
    src: 'https://www.blockchain.com/static/favicon.ico',
  },
  {
    name: 'Trezor',
    src: 'https://trezor.io/favicon.ico',
  },
  {
    name: 'Electrum',
    src: 'https://electrum.org/favicon.ico',
  },
  {
    name: 'Ethereum',
    src: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
  },
];

export const SAMPLE_AVATARGROUP_AVATARNETWORKPROPSARR: AvatarNetworkProps[] = [
  {
    name: 'Cardano',
    src: 'https://cryptologos.cc/logos/cardano-ada-logo.svg',
  },
  {
    name: 'Chainlink',
    src: 'https://cryptologos.cc/logos/chainlink-link-logo.svg',
  },
  {
    name: 'Uniswap',
    src: 'https://cryptologos.cc/logos/uniswap-uni-logo.svg',
  },
  {
    name: 'Flare',
    src: 'https://cryptologos.cc/logos/flare-flr-logo.svg',
  },
  {
    name: 'Ethereum',
    src: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
  },
  {
    name: 'Solana',
    src: 'https://cryptologos.cc/logos/solana-sol-logo.svg',
  },
  {
    name: 'Tether',
    src: 'https://cryptologos.cc/logos/tether-usdt-logo.svg',
  },
];

export const SAMPLE_AVATARGROUP_AVATARTOKENPROPSARR: AvatarTokenProps[] = [
  {
    name: 'Ethereum',
    src: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
  },
  {
    name: 'Solana',
    src: 'https://cryptologos.cc/logos/solana-sol-logo.svg',
  },
  {
    name: 'Tether',
    src: 'https://cryptologos.cc/logos/tether-usdt-logo.svg',
  },
  {
    name: 'Cardano',
    src: 'https://cryptologos.cc/logos/cardano-ada-logo.svg',
  },
  {
    name: 'Chainlink',
    src: 'https://cryptologos.cc/logos/chainlink-link-logo.svg',
  },
  {
    name: 'Uniswap',
    src: 'https://cryptologos.cc/logos/uniswap-uni-logo.svg',
  },
  {
    name: 'Flare',
    src: 'https://cryptologos.cc/logos/flare-flr-logo.svg',
  },
];
