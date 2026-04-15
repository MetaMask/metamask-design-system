import { PickerBaseEndArrow } from '@metamask/design-system-shared';

import { IconName } from '../../types';

export const MAP_PICKERBASE_END_ARROW_TO_ICON_NAME: Record<
  (typeof PickerBaseEndArrow)[keyof typeof PickerBaseEndArrow],
  IconName
> = {
  [PickerBaseEndArrow.Up]: IconName.ArrowUp,
  [PickerBaseEndArrow.Down]: IconName.ArrowDown,
  [PickerBaseEndArrow.Left]: IconName.ArrowLeft,
  [PickerBaseEndArrow.Right]: IconName.ArrowRight,
};
