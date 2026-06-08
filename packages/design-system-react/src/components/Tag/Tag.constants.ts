import {
  BoxBackgroundColor,
  TagSeverity,
  TextColor,
} from '@metamask/design-system-shared';

import { IconColor } from '../../types';

export const MAP_TAG_SEVERITY_BACKGROUND: Record<
  TagSeverity,
  BoxBackgroundColor
> = {
  [TagSeverity.Neutral]: BoxBackgroundColor.BackgroundMuted,
  [TagSeverity.Success]: BoxBackgroundColor.SuccessMuted,
  [TagSeverity.Danger]: BoxBackgroundColor.ErrorMuted,
  [TagSeverity.Warning]: BoxBackgroundColor.WarningMuted,
  [TagSeverity.Info]: BoxBackgroundColor.InfoMuted,
};

export const MAP_TAG_SEVERITY_TEXT_COLOR: Record<TagSeverity, TextColor> = {
  [TagSeverity.Neutral]: TextColor.TextDefault,
  [TagSeverity.Success]: TextColor.SuccessDefault,
  [TagSeverity.Danger]: TextColor.ErrorDefault,
  [TagSeverity.Warning]: TextColor.WarningDefault,
  [TagSeverity.Info]: TextColor.InfoDefault,
};

export const MAP_TAG_SEVERITY_ICON_COLOR: Record<TagSeverity, IconColor> = {
  [TagSeverity.Neutral]: IconColor.IconDefault,
  [TagSeverity.Success]: IconColor.SuccessDefault,
  [TagSeverity.Danger]: IconColor.ErrorDefault,
  [TagSeverity.Warning]: IconColor.WarningDefault,
  [TagSeverity.Info]: IconColor.InfoDefault,
};
