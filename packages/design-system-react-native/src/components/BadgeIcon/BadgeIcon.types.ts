import { ViewProps } from 'react-native';
import { IconName, IconProps } from '../Icon';

export enum BadgeIconVariant {
  Custom = 'custom',
  Snaps = 'snaps',
  Send = 'send',
  Stake = 'stake',
  Bridge = 'bridge',
}

/**
 * BadgeIcon component props.
 */
type BaseBadgeIconProps = {
  /**
   * Optional prop to control the variant of the Badge.
   * This dictates the iconName to be used.
   * @default BadgeIconVariant.Default
   */
  variant: BadgeIconVariant;
  /**
   * Optional prop to pass additional properties to the icon
   */
  iconProps?: Omit<IconProps, 'name'>;
  /**
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;
} & Omit<ViewProps, 'children'>;

export type BadgeIconProps = BaseBadgeIconProps &
  (
    | {
        /**
         * Require prop to control the variant of the Badge. This dictates the iconName to be used.
         * @default BadgeIconVariant.Default
         */
        variant: BadgeIconVariant.Custom;
        /**
         * Required prop to specify an icon to show when BadgeIconVariant is Custom.
         */
        iconName: IconName;
      }
    | {
        /**
         * Require prop to control the variant of the Badge. This dictates the iconName to be used.
         * @default BadgeIconVariant.Default
         */
        variant:
          | BadgeIconVariant.Snaps
          | BadgeIconVariant.Send
          | BadgeIconVariant.Stake
          | BadgeIconVariant.Bridge;
      }
  );
