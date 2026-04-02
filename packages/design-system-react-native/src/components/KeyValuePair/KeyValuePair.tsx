import { KeyValuePairOrientation } from '@metamask/design-system-shared';
import React from 'react';

import {
  ButtonIconSize,
  FontWeight,
  IconColor,
  TextColor,
  TextVariant,
} from '../../types';
import { Box } from '../Box';
import { BoxHorizontal } from '../BoxHorizontal';
import { BoxVertical } from '../BoxVertical';
import { ButtonIcon } from '../ButtonIcon';

import type { KeyValuePairProps } from './KeyValuePair.types';

export const KeyValuePair = ({
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
      twClassName={isHorizontal ? undefined : 'w-full min-w-0'}
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
      twClassName={
        isHorizontal ? 'flex-1 min-w-0 justify-end' : 'w-full min-w-0'
      }
    >
      {valueContent}
    </BoxHorizontal>
  );

  if (isHorizontal) {
    return (
      <BoxHorizontal
        endAccessory={valueBox}
        gap={4}
        twClassName={twClassName ? `h-10 ${twClassName}` : 'h-10'}
        {...viewProps}
      >
        <Box twClassName="shrink-0">{keyBox}</Box>
      </BoxHorizontal>
    );
  }

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

KeyValuePair.displayName = 'KeyValuePair';
