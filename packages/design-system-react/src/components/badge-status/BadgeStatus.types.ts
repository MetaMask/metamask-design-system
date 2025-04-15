import type { ComponentProps } from 'react';

import { BadgeStatusStatus, BadgeStatusSize } from '../../types';

/**
 * BadgeStatus component props.
 */
export type BadgeStatusProps = ComponentProps<'div'> & {
  /**
   * Optional prop to control the status of the badge
   * Possible values:
   * - BadgeStatusStatus.Active.
   * - BadgeStatusStatus.PartiallyActive.
   * - BadgeStatusStatus.Inactive.
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
   * Optional prop for additional CSS classes to be applied to the BadgeStatus component.
   * These classes will be merged with the component's default classes using twMerge.
   */
  className?: string;
  /**
   * Optional CSS styles to be applied to the component.
   * Should be used sparingly and only for dynamic styles that can't be achieved with className.
   */
  style?: React.CSSProperties;
};
