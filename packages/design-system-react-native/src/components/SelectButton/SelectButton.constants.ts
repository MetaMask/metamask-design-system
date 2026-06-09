import { IconName, SelectButtonEndArrow } from '@metamask/design-system-shared';

export const MAP_SELECTBUTTON_END_ARROW_DIRECTION_TO_ICON_NAME: Record<
  (typeof SelectButtonEndArrow)[keyof typeof SelectButtonEndArrow],
  IconName
> = {
  [SelectButtonEndArrow.Up]: IconName.ArrowUp,
  [SelectButtonEndArrow.Down]: IconName.ArrowDown,
  [SelectButtonEndArrow.Left]: IconName.ArrowLeft,
  [SelectButtonEndArrow.Right]: IconName.ArrowRight,
};
