import { AccountAvatarVariant } from '@metamask/design-system-shared';

import type { AccountAvatarProps } from '../AccountAvatar';
import { SAMPLE_AVATARACCOUNT_ADDRESSES } from '../AccountAvatar/AccountAvatar.constants';
import type { FaviconAvatarProps } from '../FaviconAvatar';
import { SAMPLE_AVATARFAVICON_URIS } from '../FaviconAvatar/FaviconAvatar.dev';
import type { NetworkAvatarProps } from '../NetworkAvatar';
import { SAMPLE_AVATARNETWORK_URIS } from '../NetworkAvatar/NetworkAvatar.dev';
import type { TokenAvatarProps } from '../TokenAvatar';
import { SAMPLE_AVATARTOKEN_URIS } from '../TokenAvatar/TokenAvatar.dev';

// Sample consts
export const SAMPLE_AVATARGROUP_AVATARACCOUNTPROPSARR: AccountAvatarProps[] = [
  {
    variant: AccountAvatarVariant.Jazzicon,
    address: SAMPLE_AVATARACCOUNT_ADDRESSES[0],
  },
  {
    variant: AccountAvatarVariant.Blockies,
    address: SAMPLE_AVATARACCOUNT_ADDRESSES[1],
  },
  {
    variant: AccountAvatarVariant.Jazzicon,
    address: SAMPLE_AVATARACCOUNT_ADDRESSES[2],
  },
  {
    variant: AccountAvatarVariant.Jazzicon,
    address: SAMPLE_AVATARACCOUNT_ADDRESSES[3],
  },
  {
    variant: AccountAvatarVariant.Jazzicon,
    address: SAMPLE_AVATARACCOUNT_ADDRESSES[4],
  },
  {
    variant: AccountAvatarVariant.Blockies,
    address: SAMPLE_AVATARACCOUNT_ADDRESSES[5],
  },
  {
    variant: AccountAvatarVariant.Blockies,
    address: SAMPLE_AVATARACCOUNT_ADDRESSES[6],
  },
];
export const SAMPLE_AVATARGROUP_AVATARFAVICONPROPSARR: FaviconAvatarProps[] = [
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

export const SAMPLE_AVATARGROUP_AVATARNETWORKPROPSARR: NetworkAvatarProps[] = [
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

export const SAMPLE_AVATARGROUP_AVATARTOKENPROPSARR: TokenAvatarProps[] = [
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
