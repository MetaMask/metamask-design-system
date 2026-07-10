import { BoxAlignItems, ContentVariant } from '@metamask/design-system-shared';
import { typography } from '@metamask/design-tokens';

/** ListItem vertical padding total (`py-3` = 12px top + 12px bottom). */
export const LIST_ITEM_PADDING_Y_TOTAL_PX = 24;

/**
 * Default Content text line heights from design tokens (BodyMd / BodySm).
 * Min-height math uses these defaults even when consumers override text via
 * `titleProps`, `descriptionProps`, etc.
 */
export const CONTENT_LINE_HEIGHT = {
  primary: typography.sBodyMD.lineHeight as number,
  secondary: typography.sBodySM.lineHeight as number,
} as const;

type ContentVariantLayout = {
  listItemMinHeight: string;
  listItemJustify: string;
  alignItems: BoxAlignItems;
  showDescription: boolean;
  showSubvalue: boolean;
};

export const CONTENT_VARIANT_LAYOUT: Record<
  ContentVariant,
  ContentVariantLayout
> = {
  [ContentVariant.OneLine]: {
    listItemMinHeight: 'min-h-[48px]',
    listItemJustify: 'justify-center',
    alignItems: BoxAlignItems.Center,
    showDescription: false,
    showSubvalue: false,
  },
  [ContentVariant.TwoLines]: {
    listItemMinHeight: 'min-h-[72px]',
    listItemJustify: 'justify-center',
    alignItems: BoxAlignItems.Center,
    showDescription: true,
    showSubvalue: true,
  },
  [ContentVariant.MultiLine]: {
    listItemMinHeight: 'min-h-[88px]',
    listItemJustify: 'justify-start',
    alignItems: BoxAlignItems.Start,
    showDescription: true,
    showSubvalue: true,
  },
};

export const getContentVariantLayout = (
  variant: ContentVariant,
): ContentVariantLayout => CONTENT_VARIANT_LAYOUT[variant];
