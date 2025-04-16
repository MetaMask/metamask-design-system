import { AvatarGroupSize } from '../../types';
import { AvatarAccountProps, AvatarAccountVariant } from '../AvatarAccount';
import { SAMPLE_AVATARACCOUNT_ADDRESSES } from '../AvatarAccount/AvatarAccount.constants';
import { AvatarFaviconProps } from '../AvatarFavicon';
import { SAMPLE_AVATARFAVICON_URIS } from '../AvatarFavicon/AvatarFavicon.constants';
import { AvatarNetworkProps } from '../AvatarNetwork';
import { SAMPLE_AVATARNETWORK_URIS } from '../AvatarNetwork/AvatarNetwork.constants';
import { AvatarTokenProps } from '../AvatarToken';
import { SAMPLE_AVATARTOKEN_URIS } from '../AvatarToken/AvatarToken.constants';
import { TextVariant } from '../Text';

// Mappings
export const MAP_AVATARGROUP_SIZE_SPACEBETWEENAVATARS: Record<
  AvatarGroupSize,
  number
> = {
  [AvatarGroupSize.Xs]: -6,
  [AvatarGroupSize.Sm]: -10,
  [AvatarGroupSize.Md]: -14,
  [AvatarGroupSize.Lg]: -18,
  [AvatarGroupSize.Xl]: -22,
};

export const MAP_AVATARGROUP_SIZE_OVERFLOWTEXT_TEXTVARIANT: Record<
  AvatarGroupSize,
  TextVariant
> = {
  [AvatarGroupSize.Xs]: TextVariant.BodyXs,
  [AvatarGroupSize.Sm]: TextVariant.BodySm,
  [AvatarGroupSize.Md]: TextVariant.BodyMd,
  [AvatarGroupSize.Lg]: TextVariant.HeadingMd,
  [AvatarGroupSize.Xl]: TextVariant.HeadingMd,
};

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
    src: {
      uri: SAMPLE_AVATARFAVICON_URIS[0],
    },
  },
  {
    src: {
      uri: SAMPLE_AVATARFAVICON_URIS[1],
    },
  },
  {
    src: {
      uri: SAMPLE_AVATARFAVICON_URIS[2],
    },
  },
  {
    src: {
      uri: SAMPLE_AVATARFAVICON_URIS[3],
    },
  },
  {
    src: {
      uri: SAMPLE_AVATARFAVICON_URIS[4],
    },
  },
  {
    src: {
      uri: SAMPLE_AVATARFAVICON_URIS[5],
    },
  },
  {
    src: {
      uri: SAMPLE_AVATARFAVICON_URIS[6],
    },
  },
];

export const SAMPLE_AVATARGROUP_AVATARNETWORKPROPSARR: AvatarNetworkProps[] = [
  {
    src: {
      uri: SAMPLE_AVATARNETWORK_URIS[0],
    },
  },
  {
    src: {
      uri: SAMPLE_AVATARNETWORK_URIS[1],
    },
  },
  {
    src: {
      uri: SAMPLE_AVATARNETWORK_URIS[2],
    },
  },
  {
    src: {
      uri: SAMPLE_AVATARNETWORK_URIS[3],
    },
  },
  {
    src: {
      uri: SAMPLE_AVATARNETWORK_URIS[4],
    },
  },
  {
    src: {
      uri: SAMPLE_AVATARNETWORK_URIS[5],
    },
  },
  {
    src: {
      uri: SAMPLE_AVATARNETWORK_URIS[6],
    },
  },
];

export const SAMPLE_AVATARGROUP_AVATARTOKENPROPSARR: AvatarTokenProps[] = [
  {
    src: {
      uri: SAMPLE_AVATARTOKEN_URIS[0],
    },
  },
  {
    src: {
      uri: SAMPLE_AVATARTOKEN_URIS[1],
    },
  },
  {
    src: {
      uri: SAMPLE_AVATARTOKEN_URIS[2],
    },
  },
  {
    src: {
      uri: SAMPLE_AVATARTOKEN_URIS[3],
    },
  },
  {
    src: {
      uri: SAMPLE_AVATARTOKEN_URIS[4],
    },
  },
  {
    src: {
      uri: SAMPLE_AVATARTOKEN_URIS[5],
    },
  },
  {
    src: {
      uri: SAMPLE_AVATARTOKEN_URIS[6],
    },
  },
];
