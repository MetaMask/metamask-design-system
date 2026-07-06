import type { BadgeNetworkPropsShared } from '@metamask/design-system-shared';

import type { AvatarNetworkProps } from '../AvatarNetwork';

/**
 * BadgeNetwork component props (React Native platform-specific)
 * Extends shared props from @metamask/design-system-shared with React Native-specific platform concerns
 */
export type BadgeNetworkProps = Omit<AvatarNetworkProps, 'size' | 'shape'> &
  BadgeNetworkPropsShared;
