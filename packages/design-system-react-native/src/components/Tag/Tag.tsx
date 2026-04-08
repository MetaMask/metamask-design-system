import React from 'react';

import { Box } from '../Box';
import { Icon, IconSize } from '../Icon';
import { FontWeight, Text, TextVariant } from '../Text';

import {
  MAP_TAG_VARIANT_BACKGROUND,
  MAP_TAG_VARIANT_ICON_COLOR,
  MAP_TAG_VARIANT_TEXT_COLOR,
  TAG_LAYOUT,
  TAG_PADDING_VERTICAL_TW,
  TagVariant,
} from './Tag.constants';
import type { TagProps } from './Tag.types';

const isTextContent = (content: React.ReactNode): content is string | number =>
  typeof content === 'string' || typeof content === 'number';

export const Tag: React.FC<TagProps> = ({
  children,
  label,
  variant = TagVariant.Neutral,
  textProps,
  startIconName,
  startIconProps,
  startAccessory,
  endIconName,
  endIconProps,
  endAccessory,
  twClassName,
  style,
  ...props
}) => {
  const backgroundColor = MAP_TAG_VARIANT_BACKGROUND[variant];
  const textColor = MAP_TAG_VARIANT_TEXT_COLOR[variant];
  const iconColor = MAP_TAG_VARIANT_ICON_COLOR[variant];

  const finalStartIconName = startIconName ?? startIconProps?.name;
  const finalEndIconName = endIconName ?? endIconProps?.name;

  const horizontalPaddingTw = [
    finalStartIconName ? 'pl-1' : 'pl-1.5',
    finalEndIconName ? 'pr-1' : 'pr-1.5',
  ].join(' ');

  const renderLabelText = (value: string | number) => (
    <Text
      color={textColor}
      variant={TextVariant.BodyXs}
      fontWeight={FontWeight.Medium}
      {...textProps}
    >
      {value}
    </Text>
  );

  const content =
    label !== undefined
      ? renderLabelText(label)
      : isTextContent(children)
        ? renderLabelText(children)
        : children;

  const mergedTwClassName = [
    TAG_LAYOUT.twClassName,
    horizontalPaddingTw,
    TAG_PADDING_VERTICAL_TW,
    twClassName,
  ]
    .filter(Boolean)
    .join(' ');

  const renderStartContent = () => {
    if (finalStartIconName) {
      return (
        <Icon
          name={finalStartIconName}
          color={iconColor}
          size={IconSize.Xs}
          twClassName="shrink-0"
          {...startIconProps}
        />
      );
    }
    return startAccessory ?? null;
  };

  const renderEndContent = () => {
    if (finalEndIconName) {
      return (
        <Icon
          name={finalEndIconName}
          color={iconColor}
          size={IconSize.Xs}
          twClassName="shrink-0"
          {...endIconProps}
        />
      );
    }
    return endAccessory ?? null;
  };

  return (
    <Box
      {...props}
      flexDirection={TAG_LAYOUT.flexDirection}
      alignItems={TAG_LAYOUT.alignItems}
      backgroundColor={backgroundColor}
      twClassName={mergedTwClassName}
      style={style}
    >
      {renderStartContent()}
      {content}
      {renderEndContent()}
    </Box>
  );
};
