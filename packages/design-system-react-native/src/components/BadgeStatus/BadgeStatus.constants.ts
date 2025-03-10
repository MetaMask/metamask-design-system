import type { BadgeStatusProps } from './BadgeStatus.types';
import { BadgeStatusStatus, BadgeStatusSize } from './BadgeStatus.types';

// Mappings
export const TWCLASSMAP_BADGESTATUS_STATUS_BACKGROUNDCOLOR: Record<
  BadgeStatusStatus,
  string
> = {
  [BadgeStatusStatus.Active]: 'bg-success-default',
  [BadgeStatusStatus.PartiallyActive]: 'bg-background-default',
  [BadgeStatusStatus.Inactive]: 'bg-icon-muted',
  [BadgeStatusStatus.New]: 'bg-primary-default',
  [BadgeStatusStatus.Attention]: 'bg-error-default',
};

export const TWCLASSMAP_BADGESTATUS_STATUS_INNER_BORDERCOLOR: Record<
  BadgeStatusStatus,
  string
> = {
  [BadgeStatusStatus.Active]: 'border-success-default',
  [BadgeStatusStatus.PartiallyActive]: 'border-success-default',
  [BadgeStatusStatus.Inactive]: 'border-icon-muted',
  [BadgeStatusStatus.New]: 'border-primary-default',
  [BadgeStatusStatus.Attention]: 'border-error-default',
};

// Defaults
export const DEFAULT_BADGESTATUS_PROPS: Required<
  Pick<BadgeStatusProps, 'size' | 'hasBorder'>
> = {
  size: BadgeStatusSize.Md,
  hasBorder: true,
};
