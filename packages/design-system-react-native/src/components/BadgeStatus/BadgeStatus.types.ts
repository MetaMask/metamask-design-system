import { ViewProps } from 'react-native';

/**
 * The status of BadgeStatus
 */
export enum BadgeStatusStatus {
  Active = 'active',
  PartiallyActive = 'partiallyactive',
  Inactive = 'inactive',
  New = 'new',
  Attention = 'attention',
}
/**
 * The size of BadgeStatus
 */
export enum BadgeStatusSize {
  /**
   * Represents a medium badge status size (8px).
   */
  Md = 'Md',
  /**
   * Represents a large avatar size (10px).
   */
  Lg = 'Lg',
}
/**
 * BadgeStatus component props.
 */
export type BadgeStatusProps = {
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
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;
} & Omit<ViewProps, 'children'>;
