import { AvatarBaseProps } from '../../primitives/AvatarBase';
import { IconName, IconProps } from '../Icon';

export enum AvatarIconSeverity {
  Default = 'default',
  Info = 'info',
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
}

/**
 * AvatarIcon component props.
 */
export type AvatarIconProps = {
  /**
   * Optional prop to control the severity of the avatar
   * @default AvatarIconSeverity.Default
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
