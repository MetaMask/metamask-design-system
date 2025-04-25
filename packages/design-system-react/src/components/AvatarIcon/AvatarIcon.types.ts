import { AvatarIconSize, AvatarIconSeverity } from '../../types';
import { AvatarBaseProps } from '../AvatarBase';
import { IconName } from '../Icon';
import type { IconProps } from '../Icon';

export type AvatarIconProps = Omit<AvatarBaseProps, 'children' | 'size'> & {
  /**
   * Required icon name from the icon set
   */
  iconName: IconName;
  /**
   * Optional props to be passed to the Icon component
   */
  iconProps?: Omit<IconProps, 'name'>;
  /**
   * Optional prop to control the size of the avatar
   * @default AvatarIconSize.Md
   */
  size?: AvatarIconSize;
  /**
   * Optional prop to control the severity of the avatar
   * @default AvatarIconSeverity.Neutral
   */
  severity?: AvatarIconSeverity;
};
