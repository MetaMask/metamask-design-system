import {
  AvatarBaseShape,
  BadgeWrapperPositionAnchorShape,
  type AvatarBadge,
  type AvatarIconBadgeShared,
  type AvatarNetworkBadgeShared,
  type AvatarStatusBadgeShared,
  type BadgeWrapperPosition,
} from '@metamask/design-system-shared';
import React from 'react';

import { BadgeWrapper } from '../../BadgeWrapper';

import { AVATAR_BADGE_POSITION } from './avatarBadge.constants';
import { renderAvatarBadge } from './avatarBadge.render';

export type ResolvedAvatarBadge = {
  badge: AvatarBadge;
  position: BadgeWrapperPosition;
};

export const getPositionAnchorShape = (
  shape: AvatarBaseShape,
): BadgeWrapperPositionAnchorShape =>
  shape === AvatarBaseShape.Circle
    ? BadgeWrapperPositionAnchorShape.Circular
    : BadgeWrapperPositionAnchorShape.Rectangular;

const toNetworkAvatarBadge = (
  networkBadge: AvatarNetworkBadgeShared,
): AvatarBadge => ({
  type: 'network',
  src: networkBadge.src,
  name: networkBadge.name,
  fallbackText: networkBadge.fallbackText,
});

export const resolveTokenOrNftAvatarBadge = (props: {
  networkBadge?: AvatarNetworkBadgeShared;
  iconBadge?: AvatarIconBadgeShared;
}): ResolvedAvatarBadge | undefined => {
  if (props.networkBadge) {
    return {
      badge: toNetworkAvatarBadge(props.networkBadge),
      position: AVATAR_BADGE_POSITION.network,
    };
  }
  if (props.iconBadge) {
    return {
      badge: { type: 'icon', iconName: props.iconBadge.iconName },
      position: AVATAR_BADGE_POSITION.icon,
    };
  }
  return undefined;
};

export const resolveFaviconAvatarBadge = (props: {
  networkBadge?: AvatarNetworkBadgeShared;
  statusBadge?: AvatarStatusBadgeShared;
}): ResolvedAvatarBadge | undefined => {
  if (props.networkBadge) {
    return {
      badge: toNetworkAvatarBadge(props.networkBadge),
      position: AVATAR_BADGE_POSITION.network,
    };
  }
  if (props.statusBadge) {
    return {
      badge: { type: 'status', status: props.statusBadge.status },
      position: AVATAR_BADGE_POSITION.status,
    };
  }
  return undefined;
};

export const resolveAccountAvatarBadge = (props: {
  networkBadge?: AvatarNetworkBadgeShared;
}): ResolvedAvatarBadge | undefined => {
  if (!props.networkBadge) {
    return undefined;
  }
  return {
    badge: toNetworkAvatarBadge(props.networkBadge),
    position: AVATAR_BADGE_POSITION.network,
  };
};

export const withAvatarBadge = (
  children: React.ReactNode,
  shape: AvatarBaseShape,
  resolved?: ResolvedAvatarBadge,
): React.ReactNode => {
  if (!resolved) {
    return children;
  }

  return (
    <BadgeWrapper
      badge={renderAvatarBadge(resolved.badge)}
      position={resolved.position}
      positionAnchorShape={getPositionAnchorShape(shape)}
    >
      {children}
    </BadgeWrapper>
  );
};
