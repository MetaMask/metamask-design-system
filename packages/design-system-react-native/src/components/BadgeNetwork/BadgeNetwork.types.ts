import { AvatarNetworkProps } from '../AvatarNetwork';

export type BadgeNetworkProps = Omit<AvatarNetworkProps, 'size' | 'shape'>;
