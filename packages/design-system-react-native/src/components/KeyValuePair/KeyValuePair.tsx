import { KeyValuePairOrientation } from '@metamask/design-system-shared';
import React from 'react';

import { Box } from '../Box';
import { ButtonIcon } from '../ButtonIcon';
import { BoxHorizontal } from '../temp-components/BoxHorizontal';
import {
  BoxAlignItems,
  BoxFlexDirection,
  FontWeight,
  TextColor,
  TextVariant,
} from '../../types';
import { ButtonIconSize, IconColor } from '../../types';

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
        size={ButtonIconSize.Xs}
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
        size={isHorizontal ? ButtonIconSize.Xs : ButtonIconSize.Sm}
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
        variant: TextVariant.BodySm,
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
        variant: isHorizontal ? TextVariant.BodySm : TextVariant.BodyMd,
        fontWeight: FontWeight.Medium,
        color: TextColor.TextDefault,
        ...valueProps,
      }}
    >
      {valueContent}
    </BoxHorizontal>
  );

  return (
    <Box
      flexDirection={
        isHorizontal ? BoxFlexDirection.Row : BoxFlexDirection.Column
      }
      alignItems={isHorizontal ? BoxAlignItems.Center : undefined}
      gap={isHorizontal ? 4 : undefined}
      twClassName={twClassName}
      {...viewProps}
    >
      {isHorizontal ? <Box twClassName="flex-1 min-w-0">{keyRow}</Box> : keyRow}
      {valueRow}
    </Box>
  );
};

KeyValuePair.displayName = 'KeyValuePair';
