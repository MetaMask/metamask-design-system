import React from 'react';

import { Box } from '../Box';
import { Icon, IconSize } from '../Icon';
import { FontWeight, Text, TextVariant } from '../Text';

import { TagVariant } from '@metamask/design-system-shared';

import { BoxAlignItems, BoxFlexDirection } from '../../types';

import {
  MAP_TAG_VARIANT_BACKGROUND,
  MAP_TAG_VARIANT_ICON_COLOR,
  MAP_TAG_VARIANT_TEXT_COLOR,
} from './Tag.constants';
import type { TagProps } from './Tag.types';

const isTextContent = (content: React.ReactNode): content is string | number =>
  typeof content === 'string' || typeof content === 'number';

export const Tag: React.FC<TagProps> = ({
  children,
  label,
  severity = TagVariant.Neutral,
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
  const backgroundColor = MAP_TAG_VARIANT_BACKGROUND[severity];
  const textColor = MAP_TAG_VARIANT_TEXT_COLOR[severity];
  const iconColor = MAP_TAG_VARIANT_ICON_COLOR[severity];

  const finalStartIconName = startIconName ?? startIconProps?.name;
  const finalEndIconName = endIconName ?? endIconProps?.name;

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

  let content: React.ReactNode;
  if (label !== undefined) {
    content = renderLabelText(label);
  } else if (isTextContent(children)) {
    content = renderLabelText(children);
  } else {
    content = children;
  }

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
      flexDirection={BoxFlexDirection.Row}
      alignItems={BoxAlignItems.Center}
      backgroundColor={backgroundColor}
      twClassName={[
        'rounded-md self-start gap-0.5',
        finalStartIconName ? 'pl-1' : 'pl-1.5',
        finalEndIconName ? 'pr-1' : 'pr-1.5',
        twClassName,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      {renderStartContent()}
      {content}
      {renderEndContent()}
    </Box>
  );
};
