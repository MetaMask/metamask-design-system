import { ViewProps } from 'react-native';

import { BadgeStatusStatus, BadgeStatusSize } from '../../types';

/**
 * BadgeStatus component props.
 */
export type BadgeStatusProps = {
  /**
   * Optional prop to control the status of the badge
   * Possible values:
   * - BadgeStatusStatus.Active. (Connected)
   * - BadgeStatusStatus.Inactive. (Connected)
   * - BadgeStatusStatus.Disconnected.
   * - BadgeStatusStatus.New.
   * - BadgeStatusStatus.Attention.
   */
  status: BadgeStatusStatus;
  /**
   * Optional prop to determine whether the badge should display a border
   * @default true
   */
  hasBorder?: boolean;
  /**
   * Optional prop to control the size of the BadgeStatus
   * Possible values:
   * - BadgeStatusSize.Md (8px),
   * - BadgeStatusSize.Lg (10px),
   * @default AvatarBaseSize.Md
   */
  size?: BadgeStatusSize;
  /**
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;
} & Omit<ViewProps, 'children'>;
