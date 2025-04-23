import { AvatarAccountProps, AvatarAccountVariant } from '../AvatarAccount';
import { AvatarFaviconProps } from '../AvatarFavicon';
import { SAMPLE_AVATARFAVICON_URIS } from '../AvatarFavicon/AvatarFavicon.dev';
import { AvatarNetworkProps } from '../AvatarNetwork';
import { SAMPLE_AVATARNETWORK_URIS } from '../AvatarNetwork/AvatarNetwork.dev';
import { AvatarTokenProps } from '../AvatarToken';
import { SAMPLE_AVATARTOKEN_URIS } from '../AvatarToken/AvatarToken.dev';

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
    name: 'Adobe',
    src: SAMPLE_AVATARFAVICON_URIS[0],
  },
  {
    name: 'Github',
    src: SAMPLE_AVATARFAVICON_URIS[1],
  },
  {
    name: 'Google',
    src: SAMPLE_AVATARFAVICON_URIS[2],
  },
  {
    name: 'Metamask',
    src: SAMPLE_AVATARFAVICON_URIS[3],
  },
  {
    name: 'Reddit',
    src: SAMPLE_AVATARFAVICON_URIS[4],
  },
  {
    name: 'Slack',
    src: SAMPLE_AVATARFAVICON_URIS[5],
  },
  {
    name: 'Zoom',
    src: SAMPLE_AVATARFAVICON_URIS[6],
  },
];

export const SAMPLE_AVATARGROUP_AVATARNETWORKPROPSARR: AvatarNetworkProps[] = [
  {
    name: 'Arbitrum',
    src: SAMPLE_AVATARNETWORK_URIS[0],
  },
  {
    name: 'Avalanche',
    src: SAMPLE_AVATARNETWORK_URIS[1],
  },
  {
    name: 'BNB',
    src: SAMPLE_AVATARNETWORK_URIS[2],
  },
  {
    name: 'Ethereum',
    src: SAMPLE_AVATARNETWORK_URIS[3],
  },
  {
    name: 'Linea',
    src: SAMPLE_AVATARNETWORK_URIS[4],
  },
  {
    name: 'Optimism',
    src: SAMPLE_AVATARNETWORK_URIS[5],
  },
  {
    name: 'Polygon',
    src: SAMPLE_AVATARNETWORK_URIS[6],
  },
];

export const SAMPLE_AVATARGROUP_AVATARTOKENPROPSARR: AvatarTokenProps[] = [
  {
    name: 'BTC',
    src: SAMPLE_AVATARTOKEN_URIS[0],
  },
  {
    name: 'ETH',
    src: SAMPLE_AVATARTOKEN_URIS[1],
  },
  {
    name: 'FLOKI',
    src: SAMPLE_AVATARTOKEN_URIS[2],
  },
  {
    name: 'DOT',
    src: SAMPLE_AVATARTOKEN_URIS[3],
  },
  {
    name: 'MEW',
    src: SAMPLE_AVATARTOKEN_URIS[4],
  },
  {
    name: 'SHIB',
    src: SAMPLE_AVATARTOKEN_URIS[5],
  },
  {
    name: 'USDC',
    src: SAMPLE_AVATARTOKEN_URIS[6],
  },
];
