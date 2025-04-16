import { AvatarGroupSize } from '../../types';
import { TextVariant } from '../Text';
import { AvatarAccountProps, AvatarAccountVariant } from '../AvatarAccount';
import { AvatarFaviconProps } from '../AvatarFavicon';
import { AvatarNetworkProps } from '../AvatarNetwork';
import { AvatarTokenProps } from '../AvatarToken';

// Mappings
export const AVATAR_GROUP_SIZE_CLASS_MAP: Record<AvatarGroupSize, string> = {
  [AvatarGroupSize.Xs]: 'h-[17px] w-[17px]', // 16px with 1px border
  [AvatarGroupSize.Sm]: 'h-[25px] w-[25px]', // 24px with 1px border
  [AvatarGroupSize.Md]: 'h-[33px] w-[33px]', // 32px with 1px border
  [AvatarGroupSize.Lg]: 'h-[42px] w-[42px]', // 40px with 2px border
  [AvatarGroupSize.Xl]: 'h-[50px] w-[50px]', // 48px with 2px border
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

export const AVATAR_GROUP_SIZE_ISREVERSE_NEGATIVESPACEBETWEENAVATARS_MAP: Record<
  AvatarGroupSize,
  string
> = {
  [AvatarGroupSize.Xs]: 'mr-[-6px]',
  [AvatarGroupSize.Sm]: 'mr-[-10px]',
  [AvatarGroupSize.Md]: 'mr-[-14px]',
  [AvatarGroupSize.Lg]: 'mr-[-18px]',
  [AvatarGroupSize.Xl]: 'mr-[-22px]',
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
export const SAMPLE_AVATARGROUP_AVATARACCOUNTPROPSARR: AvatarAccountProps[] = [
  {
    variant: AvatarAccountVariant.Jazzicon,
    address: '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8',
  },
  {
    variant: AvatarAccountVariant.Blockies,
    address: '0xb9b81f6bd23B953c5257C3b5E2F0c03B07E944eB',
  },
  {
    variant: AvatarAccountVariant.Jazzicon,
    address: '0x360507dfEC4Bf0c03495f91154A78C672599F308',
  },
  {
    variant: AvatarAccountVariant.Jazzicon,
    address: '0x50cA820Ff810F7687E7d0aDb23A830e3ac6032C3',
  },
  {
    variant: AvatarAccountVariant.Jazzicon,
    address: '0x840C9Eb73729E626673714D6E4dA8afc8Ccc90d3',
  },
  {
    variant: AvatarAccountVariant.Blockies,
    address: '0xCA0361BE89B7d47a6233d1875F0727ddeAB23377',
  },
  {
    variant: AvatarAccountVariant.Blockies,
    address: '0xD78CBcA88eCd65c6128511e46a518CDc6c66fC74',
  },
];
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
