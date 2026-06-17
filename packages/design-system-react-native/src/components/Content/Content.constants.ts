import {
  BoxAlignItems,
  ContentVerticalAlignment,
} from '@metamask/design-system-shared';

export const VERTICAL_ALIGNMENT_MAP: Record<
  ContentVerticalAlignment,
  BoxAlignItems
> = {
  [ContentVerticalAlignment.Top]: BoxAlignItems.Start,
  [ContentVerticalAlignment.Center]: BoxAlignItems.Center,
};
