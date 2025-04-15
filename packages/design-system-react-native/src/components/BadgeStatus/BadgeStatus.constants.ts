import { BadgeStatusStatus, BadgeStatusSize } from '../../types';

// Mappings
export const TWCLASSMAP_BADGESTATUS_STATUS_CIRCLE: Record<
  BadgeStatusStatus,
  string
> = {
  [BadgeStatusStatus.Active]: 'bg-success-default border-success-default',
  [BadgeStatusStatus.PartiallyActive]:
    'bg-background-default border-success-default',
  [BadgeStatusStatus.Inactive]: 'bg-icon-muted border-icon-muted',
  [BadgeStatusStatus.New]: 'bg-primary-default border-primary-default',
  [BadgeStatusStatus.Attention]: 'bg-error-default border-error-default',
};

export const TWCLASSMAP_BADGESTATUS_SIZE: Record<BadgeStatusSize, string> = {
  [BadgeStatusSize.Md]: 'h-2 w-2', // 8px width and height
  [BadgeStatusSize.Lg]: 'h-2.5 w-2.5', // 10px width and height
};
