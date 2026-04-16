import React from 'react';

import { ButtonBase } from '../ButtonBase';
import { IconSize } from '../Icon';

import { MAP_PICKERBASE_END_ARROW_TO_ICON_NAME } from './PickerBase.constants';
import type { PickerBaseProps } from './PickerBase.types';

export const PickerBase = ({
  children,
  textProps,
  startAccessory,
  endArrow,
  endAccessory,
  isDisabled = false,
  endArrowIconProps,
  ...buttonBaseRest
}: PickerBaseProps) => (
  <ButtonBase
    isDisabled={isDisabled}
    children={children}
    textProps={textProps}
    startAccessory={startAccessory}
    endAccessory={endArrow ? undefined : endAccessory}
    endIconName={
      endArrow ? MAP_PICKERBASE_END_ARROW_TO_ICON_NAME[endArrow] : undefined
    }
    endIconProps={
      endArrow ? { size: IconSize.Sm, ...endArrowIconProps } : undefined
    }
    {...buttonBaseRest}
  />
);

PickerBase.displayName = 'PickerBase';
