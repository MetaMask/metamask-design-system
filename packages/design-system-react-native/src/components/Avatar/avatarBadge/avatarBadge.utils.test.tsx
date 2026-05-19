import {
  AvatarBaseShape,
  BadgeStatusStatus,
  BadgeWrapperPosition,
  BadgeWrapperPositionAnchorShape,
  IconName,
} from '@metamask/design-system-shared';

import { AVATAR_BADGE_POSITION } from './avatarBadge.constants';
import {
  getPositionAnchorShape,
  resolveAccountAvatarBadge,
  resolveFaviconAvatarBadge,
  resolveTokenOrNftAvatarBadge,
} from './avatarBadge.utils';

describe('avatarBadge.utils', () => {
  describe('getPositionAnchorShape', () => {
    it('maps circle to circular anchor shape', () => {
      expect(getPositionAnchorShape(AvatarBaseShape.Circle)).toBe(
        BadgeWrapperPositionAnchorShape.Circular,
      );
    });

    it('maps square to rectangular anchor shape', () => {
      expect(getPositionAnchorShape(AvatarBaseShape.Square)).toBe(
        BadgeWrapperPositionAnchorShape.Rectangular,
      );
    });
  });

  describe('resolveTokenOrNftAvatarBadge', () => {
    const networkBadge = { src: { uri: 'https://example.com/eth.png' } };
    const iconBadge = { iconName: IconName.Add };

    it('returns network badge at bottom-right', () => {
      const resolved = resolveTokenOrNftAvatarBadge({ networkBadge });
      expect(resolved).toEqual({
        badge: { type: 'network', ...networkBadge },
        position: AVATAR_BADGE_POSITION.network,
      });
      expect(resolved?.position).toBe(BadgeWrapperPosition.BottomRight);
    });

    it('returns icon badge at bottom-right', () => {
      const resolved = resolveTokenOrNftAvatarBadge({ iconBadge });
      expect(resolved).toEqual({
        badge: { type: 'icon', iconName: IconName.Add },
        position: AVATAR_BADGE_POSITION.icon,
      });
    });

    it('prefers networkBadge over iconBadge', () => {
      const resolved = resolveTokenOrNftAvatarBadge({
        networkBadge,
        iconBadge,
      });
      expect(resolved?.badge.type).toBe('network');
    });

    it('returns undefined when no badge props are provided', () => {
      expect(resolveTokenOrNftAvatarBadge({})).toBeUndefined();
    });
  });

  describe('resolveFaviconAvatarBadge', () => {
    const networkBadge = { src: { uri: 'https://example.com/eth.png' } };
    const statusBadge = { status: BadgeStatusStatus.Active };

    it('returns network badge at bottom-right', () => {
      const resolved = resolveFaviconAvatarBadge({ networkBadge });
      expect(resolved?.badge.type).toBe('network');
      expect(resolved?.position).toBe(BadgeWrapperPosition.BottomRight);
    });

    it('returns status badge at top-right', () => {
      const resolved = resolveFaviconAvatarBadge({ statusBadge });
      expect(resolved).toEqual({
        badge: { type: 'status', status: BadgeStatusStatus.Active },
        position: AVATAR_BADGE_POSITION.status,
      });
      expect(resolved?.position).toBe(BadgeWrapperPosition.TopRight);
    });

    it('prefers networkBadge over statusBadge', () => {
      const resolved = resolveFaviconAvatarBadge({
        networkBadge,
        statusBadge,
      });
      expect(resolved?.badge.type).toBe('network');
    });
  });

  describe('resolveAccountAvatarBadge', () => {
    it('returns network badge at bottom-right', () => {
      const networkBadge = { src: { uri: 'https://example.com/eth.png' } };
      const resolved = resolveAccountAvatarBadge({ networkBadge });
      expect(resolved?.badge.type).toBe('network');
      expect(resolved?.position).toBe(BadgeWrapperPosition.BottomRight);
    });

    it('returns undefined when networkBadge is omitted', () => {
      expect(resolveAccountAvatarBadge({})).toBeUndefined();
    });
  });
});
