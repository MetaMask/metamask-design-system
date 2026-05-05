import {
  BoxBackgroundColor,
  IconColor,
  TagSeverity,
  TextColor,
} from '@metamask/design-system-shared';

export const MAP_TAG_SEVERITY_BACKGROUND: Record<
  TagSeverity,
  BoxBackgroundColor
> = {
  [TagSeverity.Neutral]: BoxBackgroundColor.BackgroundMuted,
  [TagSeverity.Success]: BoxBackgroundColor.SuccessMuted,
  [TagSeverity.Error]: BoxBackgroundColor.ErrorMuted,
  [TagSeverity.Warning]: BoxBackgroundColor.WarningMuted,
  [TagSeverity.Info]: BoxBackgroundColor.InfoMuted,
};

export const MAP_TAG_SEVERITY_TEXT_COLOR: Record<TagSeverity, TextColor> = {
  [TagSeverity.Neutral]: TextColor.TextDefault,
  [TagSeverity.Success]: TextColor.SuccessDefault,
  [TagSeverity.Error]: TextColor.ErrorDefault,
  [TagSeverity.Warning]: TextColor.WarningDefault,
  [TagSeverity.Info]: TextColor.InfoDefault,
};

export const MAP_TAG_SEVERITY_ICON_COLOR: Record<TagSeverity, IconColor> = {
  [TagSeverity.Neutral]: IconColor.IconDefault,
  [TagSeverity.Success]: IconColor.SuccessDefault,
  [TagSeverity.Error]: IconColor.ErrorDefault,
  [TagSeverity.Warning]: IconColor.WarningDefault,
  [TagSeverity.Info]: IconColor.InfoDefault,
};
