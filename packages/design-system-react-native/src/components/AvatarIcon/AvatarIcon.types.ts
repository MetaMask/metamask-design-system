import type { AvatarIconSeverity } from '../../types';
import type { AvatarBaseProps } from '../AvatarBase';
import type { IconName, IconProps } from '../Icon';

/**
 * AvatarIcon component props.
 */
export type AvatarIconProps = {
  /**
   * Optional prop to control the severity of the avatar
   *
   * @default AvatarIconSeverity.Neutral
   */
  severity?: AvatarIconSeverity;
  /**
   * Optional prop to specify an icon to show
   */
  iconName: IconName;
  /**
   * Optional prop to pass additional properties to the icon
   */
  iconProps?: Omit<IconProps, 'name'>;
} & Omit<AvatarBaseProps, 'children' | 'fallbackText' | 'fallbackTextProps'>;
