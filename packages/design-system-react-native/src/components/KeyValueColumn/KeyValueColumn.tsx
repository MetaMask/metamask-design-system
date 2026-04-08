import React from 'react';

import {
  ButtonIconSize,
  FontWeight,
  IconColor,
  TextColor,
  TextVariant,
} from '../../types';
import { BoxHorizontal } from '../BoxHorizontal';
import { BoxVertical } from '../BoxVertical';
import { ButtonIcon } from '../ButtonIcon';

import type { KeyValueColumnProps } from './KeyValueColumn.types';

export const KeyValueColumn = ({
  keyStartAccessory,
  keyEndAccessory,
  keyEndButtonIconProps,
  keyLabel: keyContent,
  keyTextProps,
  valueStartAccessory,
  valueEndAccessory,
  valueEndButtonIconProps,
  value: valueContent,
  valueTextProps,
  twClassName,
  ...viewProps
}: KeyValueColumnProps) => {
  const keyEndAccessoryNode =
    keyEndButtonIconProps?.iconName !== undefined &&
    keyEndButtonIconProps.iconName !== null ? (
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
    valueEndButtonIconProps?.iconName !== undefined &&
    valueEndButtonIconProps.iconName !== null ? (
      <ButtonIcon
        size={ButtonIconSize.Sm}
        iconProps={{ color: IconColor.IconDefault }}
        {...valueEndButtonIconProps}
        iconName={valueEndButtonIconProps.iconName}
      />
    ) : (
      valueEndAccessory
    );

  const keyBox = (
    <BoxHorizontal
      startAccessory={keyStartAccessory}
      endAccessory={keyEndAccessoryNode}
      textProps={{
        variant: TextVariant.BodyMd,
        fontWeight: FontWeight.Medium,
        color: TextColor.TextAlternative,
        numberOfLines: 1,
        ellipsizeMode: 'tail',
        ...keyTextProps,
      }}
      twClassName="w-full min-w-0"
    >
      {keyContent}
    </BoxHorizontal>
  );

  const valueBox = (
    <BoxHorizontal
      startAccessory={valueStartAccessory}
      endAccessory={valueEndAccessoryNode}
      textProps={{
        variant: TextVariant.BodyMd,
        fontWeight: FontWeight.Medium,
        color: TextColor.TextDefault,
        numberOfLines: 1,
        ellipsizeMode: 'tail',
        ...valueTextProps,
      }}
      twClassName="w-full min-w-0"
    >
      {valueContent}
    </BoxHorizontal>
  );

  return (
    <BoxVertical
      bottomAccessory={valueBox}
      twClassName={twClassName}
      {...viewProps}
    >
      {keyBox}
    </BoxVertical>
  );
};

KeyValueColumn.displayName = 'KeyValueColumn';
