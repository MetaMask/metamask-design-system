import {
  BoxAlignItems,
  BoxFlexDirection,
  ButtonIconSize,
  FontWeight,
  IconColor,
  KeyValueRowVariant,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';

import { Box } from '../Box';
import { ButtonIcon } from '../ButtonIcon';
import { TextOrChildren } from '../temp-components/TextOrChildren';

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
  className,
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
    <Box
      flexDirection={BoxFlexDirection.Row}
      alignItems={BoxAlignItems.Center}
      gap={1}
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
      twClassName="flex-1 min-w-0 justify-end"
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
      flexDirection={BoxFlexDirection.Row}
      alignItems={BoxAlignItems.Center}
      gap={4}
      style={[
        tw.style(
          'px-4',
          variant === KeyValueRowVariant.Input ? 'h-12' : 'h-10',
          twClassName,
          className,
        ),
        style,
      ]}
      {...viewProps}
    >
      <Box twClassName="shrink-0">{keyBox}</Box>
      {valueBox}
    </Box>
  );
};

KeyValueRow.displayName = 'KeyValueRow';
