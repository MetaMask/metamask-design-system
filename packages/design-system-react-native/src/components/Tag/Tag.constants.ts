import {
  BoxAlignItems,
  BoxBackgroundColor,
  BoxFlexDirection,
  IconColor,
  TextColor,
} from '../../types';

export const TagVariant = {
  Neutral: 'neutral',
  Success: 'success',
  Error: 'error',
  Warning: 'warning',
  Info: 'info',
} as const;
export type TagVariant = (typeof TagVariant)[keyof typeof TagVariant];

export const MAP_TAG_VARIANT_BACKGROUND: Record<
  TagVariant,
  BoxBackgroundColor
> = {
  [TagVariant.Neutral]: BoxBackgroundColor.BackgroundMuted,
  [TagVariant.Success]: BoxBackgroundColor.SuccessMuted,
  [TagVariant.Error]: BoxBackgroundColor.ErrorMuted,
  [TagVariant.Warning]: BoxBackgroundColor.WarningMuted,
  [TagVariant.Info]: BoxBackgroundColor.InfoMuted,
};

export const MAP_TAG_VARIANT_TEXT_COLOR: Record<TagVariant, TextColor> = {
  [TagVariant.Neutral]: TextColor.TextDefault,
  [TagVariant.Success]: TextColor.SuccessDefault,
  [TagVariant.Error]: TextColor.ErrorDefault,
  [TagVariant.Warning]: TextColor.WarningDefault,
  [TagVariant.Info]: TextColor.InfoDefault,
};

export const MAP_TAG_VARIANT_ICON_COLOR: Record<TagVariant, IconColor> = {
  [TagVariant.Neutral]: IconColor.IconDefault,
  [TagVariant.Success]: IconColor.SuccessDefault,
  [TagVariant.Error]: IconColor.ErrorDefault,
  [TagVariant.Warning]: IconColor.WarningDefault,
  [TagVariant.Info]: IconColor.InfoDefault,
};

/** Vertical padding (Tailwind `py-*`) */
export const TAG_PADDING_VERTICAL_TW = 'py-0';

export const TAG_LAYOUT = {
  flexDirection: BoxFlexDirection.Row,
  alignItems: BoxAlignItems.Center,
  twClassName: 'rounded-md self-start gap-0.5',
} as const;
