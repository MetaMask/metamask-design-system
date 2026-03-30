import { KeyValuePairOrientation } from '@metamask/design-system-shared';
import React from 'react';

import { Box } from '../Box';
import { ButtonIcon } from '../ButtonIcon';
import { BoxHorizontal } from '../BoxHorizontal';
import { BoxVertical } from '../BoxVertical';
import {
  ButtonIconSize,
  FontWeight,
  IconColor,
  TextColor,
  TextVariant,
} from '../../types';

import type { KeyValuePairProps } from './KeyValuePair.types';

export const KeyValuePair = ({
  keyStartAccessory,
  keyEndAccessory,
  keyEndButtonIconProps,
  keyLabel: keyContent,
  keyProps,
  valueStartAccessory,
  valueEndAccessory,
  valueEndButtonIconProps,
  value: valueContent,
  valueProps,
  orientation = KeyValuePairOrientation.Horizontal,
  twClassName,
  ...viewProps
}: KeyValuePairProps) => {
  const isHorizontal = orientation === KeyValuePairOrientation.Horizontal;

  const keyEndAccessoryNode =
    keyEndButtonIconProps?.iconName != null ? (
      <ButtonIcon
        size={ButtonIconSize.Sm}
        iconProps={{ color: IconColor.IconAlternative }}
        {...keyEndButtonIconProps}
        iconName={keyEndButtonIconProps.iconName}
      />
    ) : (
      keyEndAccessory
    );

  const valueEndAccessoryNode =
    valueEndButtonIconProps?.iconName != null ? (
      <ButtonIcon
        size={ButtonIconSize.Sm}
        iconProps={{ color: IconColor.IconDefault }}
        {...valueEndButtonIconProps}
        iconName={valueEndButtonIconProps.iconName}
      />
    ) : (
      valueEndAccessory
    );

  const keyRow = (
    <BoxHorizontal
      startAccessory={keyStartAccessory}
      endAccessory={keyEndAccessoryNode}
      textProps={{
        variant: TextVariant.BodyMd,
        fontWeight: FontWeight.Medium,
        color: TextColor.TextAlternative,
        ...keyProps,
      }}
      twClassName={isHorizontal ? 'flex-1 min-w-0' : undefined}
    >
      {keyContent}
    </BoxHorizontal>
  );

  const valueRow = (
    <BoxHorizontal
      startAccessory={valueStartAccessory}
      endAccessory={valueEndAccessoryNode}
      textProps={{
        variant: TextVariant.BodyMd,
        fontWeight: FontWeight.Medium,
        color: TextColor.TextDefault,
        ...valueProps,
      }}
    >
      {valueContent}
    </BoxHorizontal>
  );

  if (isHorizontal) {
    return (
      <BoxHorizontal
        endAccessory={valueRow}
        gap={4}
        twClassName={twClassName}
        {...viewProps}
      >
        <Box twClassName="flex-1 min-w-0">{keyRow}</Box>
      </BoxHorizontal>
    );
  }

  return (
    <BoxVertical
      bottomAccessory={valueRow}
      twClassName={twClassName}
      {...viewProps}
    >
      {keyRow}
    </BoxVertical>
  );
};

KeyValuePair.displayName = 'KeyValuePair';
