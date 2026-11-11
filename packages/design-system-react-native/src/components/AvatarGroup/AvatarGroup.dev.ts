import { SAMPLE_AVATARACCOUNT_ADDRESSES } from '../AvatarAccount/AvatarAccount.constants.js';
import type { AvatarAccountProps } from '../AvatarAccount/index.js';
import { AvatarAccountVariant } from '../AvatarAccount/index.js';
import { SAMPLE_AVATARFAVICON_URIS } from '../AvatarFavicon/AvatarFavicon.dev.js';
import type { AvatarFaviconProps } from '../AvatarFavicon/index.js';
import { SAMPLE_AVATARNETWORK_URIS } from '../AvatarNetwork/AvatarNetwork.dev.js';
import type { AvatarNetworkProps } from '../AvatarNetwork/index.js';
import { SAMPLE_AVATARTOKEN_URIS } from '../AvatarToken/AvatarToken.dev.js';
import type { AvatarTokenProps } from '../AvatarToken/index.js';

// Sample consts
export const SAMPLE_AVATARGROUP_AVATARACCOUNTPROPSARR: AvatarAccountProps[] = [
  {
    variant: AvatarAccountVariant.Jazzicon,
    address: SAMPLE_AVATARACCOUNT_ADDRESSES[0],
  },
  {
    variant: AvatarAccountVariant.Blockies,
    address: SAMPLE_AVATARACCOUNT_ADDRESSES[1],
  },
  {
    variant: AvatarAccountVariant.Jazzicon,
    address: SAMPLE_AVATARACCOUNT_ADDRESSES[2],
  },
  {
    variant: AvatarAccountVariant.Jazzicon,
    address: SAMPLE_AVATARACCOUNT_ADDRESSES[3],
  },
  {
    variant: AvatarAccountVariant.Jazzicon,
    address: SAMPLE_AVATARACCOUNT_ADDRESSES[4],
  },
  {
    variant: AvatarAccountVariant.Blockies,
    address: SAMPLE_AVATARACCOUNT_ADDRESSES[5],
  },
  {
    variant: AvatarAccountVariant.Blockies,
    address: SAMPLE_AVATARACCOUNT_ADDRESSES[6],
  },
];
export const SAMPLE_AVATARGROUP_AVATARFAVICONPROPSARR: AvatarFaviconProps[] = [
  {
    src: SAMPLE_AVATARFAVICON_URIS[0],
  },
  {
    src: SAMPLE_AVATARFAVICON_URIS[1],
  },
  {
    src: SAMPLE_AVATARFAVICON_URIS[2],
  },
  {
    src: SAMPLE_AVATARFAVICON_URIS[3],
  },
  {
    src: SAMPLE_AVATARFAVICON_URIS[4],
  },
  {
    src: SAMPLE_AVATARFAVICON_URIS[5],
  },
  {
    src: SAMPLE_AVATARFAVICON_URIS[6],
  },
];

export const SAMPLE_AVATARGROUP_AVATARNETWORKPROPSARR: AvatarNetworkProps[] = [
  {
    src: SAMPLE_AVATARNETWORK_URIS[0],
  },
  {
    src: SAMPLE_AVATARNETWORK_URIS[1],
  },
  {
    src: SAMPLE_AVATARNETWORK_URIS[2],
  },
  {
    src: SAMPLE_AVATARNETWORK_URIS[3],
  },
  {
    src: SAMPLE_AVATARNETWORK_URIS[4],
  },
  {
    src: SAMPLE_AVATARNETWORK_URIS[5],
  },
  {
    src: SAMPLE_AVATARNETWORK_URIS[6],
  },
];

export const SAMPLE_AVATARGROUP_AVATARTOKENPROPSARR: AvatarTokenProps[] = [
  {
    src: SAMPLE_AVATARTOKEN_URIS[0],
  },
  {
    src: SAMPLE_AVATARTOKEN_URIS[1],
  },
  {
    src: SAMPLE_AVATARTOKEN_URIS[2],
  },
  {
    src: SAMPLE_AVATARTOKEN_URIS[3],
  },
  {
    src: SAMPLE_AVATARTOKEN_URIS[4],
  },
  {
    src: SAMPLE_AVATARTOKEN_URIS[5],
  },
  {
    src: SAMPLE_AVATARTOKEN_URIS[6],
  },
];
