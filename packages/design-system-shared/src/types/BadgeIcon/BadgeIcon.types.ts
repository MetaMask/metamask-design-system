import type { IconName } from '../Icon';

/**
 * BadgeIcon component shared props (ADR-0004)
 * Platform-independent properties shared across React and React Native
 */
export type BadgeIconPropsShared = {
  /**
   * Required prop to specify an icon to show.
   * Uses shared IconName because the shared package owns icon names.
   */
  iconName: IconName;
};
