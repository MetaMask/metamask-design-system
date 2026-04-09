import type { BadgeNetworkPropsShared } from '@metamask/design-system-shared';

import type { AvatarNetworkProps } from '../AvatarNetwork';

/**
 * BadgeNetwork component props (React platform-specific)
 * Extends shared props from @metamask/design-system-shared with React-specific platform concerns
 */
export type BadgeNetworkProps = Omit<AvatarNetworkProps, 'size' | 'shape'> &
  BadgeNetworkPropsShared;
