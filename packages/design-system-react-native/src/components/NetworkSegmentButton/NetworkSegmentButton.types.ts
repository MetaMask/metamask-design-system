import type { AvatarNetworkProps } from '../AvatarNetwork/AvatarNetwork.types';
import type { SegmentButtonProps } from '../SegmentButton/SegmentButton.types';
import type { ImageOrSvgSrc } from '../temp-components/ImageOrSvg';

export type NetworkSegmentButtonProps = Omit<SegmentButtonProps, 'children'> & {
  networkName?: string;
  networkSrc?: ImageOrSvgSrc;
  avatarNetworkProps?: AvatarNetworkProps;
};
