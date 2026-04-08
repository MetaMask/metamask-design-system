import { KeyValueRowVariant } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
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
import { ButtonIcon } from '../ButtonIcon';

import type { KeyValueRowProps } from './KeyValueRow.types';

export const KeyValueRow = ({
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
  variant = KeyValueRowVariant.Summary,
  twClassName,
  style,
  ...viewProps
}: KeyValueRowProps) => {
  const tw = useTailwind();

  const keyEndAccessoryNode =
    keyEndButtonIconProps?.iconName !== undefined &&
    keyEndButtonIconProps.iconName !== null ? (
      <ButtonIcon
        size={ButtonIconSize.Sm}
        {...keyEndButtonIconProps}
        iconName={keyEndButtonIconProps.iconName}
        iconProps={{
          color: IconColor.IconAlternative,
          ...keyEndButtonIconProps.iconProps,
        }}
      />
    ) : (
      keyEndAccessory
    );

  const valueEndAccessoryNode =
    valueEndButtonIconProps?.iconName !== undefined &&
    valueEndButtonIconProps.iconName !== null ? (
      <ButtonIcon
        size={ButtonIconSize.Sm}
        {...valueEndButtonIconProps}
        iconName={valueEndButtonIconProps.iconName}
        iconProps={{
          color: IconColor.IconDefault,
          ...valueEndButtonIconProps.iconProps,
        }}
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
      twClassName="flex-1 min-w-0 justify-end"
    >
      {valueContent}
    </BoxHorizontal>
  );

  return (
    <BoxHorizontal
      endAccessory={valueBox}
      gap={4}
      style={[
        tw.style(
          variant === KeyValueRowVariant.Input ? 'h-12' : 'h-10',
          twClassName,
        ),
        style,
      ]}
      {...viewProps}
    >
      <Box twClassName="shrink-0">{keyBox}</Box>
    </BoxHorizontal>
  );
};

KeyValueRow.displayName = 'KeyValueRow';
