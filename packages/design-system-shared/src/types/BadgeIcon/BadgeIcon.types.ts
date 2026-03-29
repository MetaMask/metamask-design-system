/**
 * BadgeIcon component shared props (ADR-0004)
 * Platform-independent properties shared across React and React Native
 */
export type BadgeIconPropsShared = {
  /**
   * Required prop to specify an icon to show.
   * Use the platform-specific `IconName` type to provide values.
   */
  iconName: string;
};
