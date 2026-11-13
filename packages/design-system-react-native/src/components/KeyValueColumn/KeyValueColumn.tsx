import {
  BoxAlignItems,
  BoxFlexDirection,
  ButtonIconSize,
  FontWeight,
  IconColor,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import React from 'react';

import { Box } from '../Box';
import { ButtonIcon } from '../ButtonIcon';
import { TextOrChildren } from '../temp-components/TextOrChildren';

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
  className,
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
    <Box
      flexDirection={BoxFlexDirection.Row}
      alignItems={BoxAlignItems.Center}
      gap={1}
      twClassName="w-full min-w-0"
    >
      {keyStartAccessory}
      <TextOrChildren
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
      </TextOrChildren>
      {keyEndAccessoryNode}
    </Box>
  );

  const valueBox = (
    <Box
      flexDirection={BoxFlexDirection.Row}
      alignItems={BoxAlignItems.Center}
      gap={1}
      twClassName="w-full min-w-0"
    >
      {valueStartAccessory}
      <TextOrChildren
        textProps={{
          variant: TextVariant.BodyMd,
          fontWeight: FontWeight.Medium,
          color: TextColor.TextDefault,
          numberOfLines: 1,
          ellipsizeMode: 'tail',
          ...valueTextProps,
        }}
      >
        {valueContent}
      </TextOrChildren>
      {valueEndAccessoryNode}
    </Box>
  );

  return (
    <Box
      flexDirection={BoxFlexDirection.Column}
      twClassName={twClassName}
      className={className}
      {...viewProps}
    >
      {keyBox}
      {valueBox}
    </Box>
  );
};

KeyValueColumn.displayName = 'KeyValueColumn';
