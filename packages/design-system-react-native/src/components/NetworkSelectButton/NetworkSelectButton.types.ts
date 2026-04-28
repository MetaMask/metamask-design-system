import type { AvatarNetworkProps } from '../AvatarNetwork/AvatarNetwork.types';
import type { SelectButtonProps } from '../SelectButton/SelectButton.types';
import type { ImageOrSvgSrc } from '../temp-components/ImageOrSvg';

export type NetworkSelectButtonProps = Omit<SelectButtonProps, 'value'> & {
  networkName?: string;
  networkSrc?: ImageOrSvgSrc;
  avatarNetworkProps?: AvatarNetworkProps;
};
