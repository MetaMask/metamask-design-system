import React from 'react';

import { Box } from '../Box';
import { BoxRow } from '../BoxRow';
import { Icon, IconSize } from '../Icon';
import { FontWeight, TextVariant } from '../Text';

import { TagSeverity } from '@metamask/design-system-shared';

import {
  MAP_TAG_SEVERITY_BACKGROUND,
  MAP_TAG_SEVERITY_ICON_COLOR,
  MAP_TAG_SEVERITY_TEXT_COLOR,
} from './Tag.constants';
import type { TagProps } from './Tag.types';

export const Tag: React.FC<TagProps> = ({
  children,
  severity = TagSeverity.Neutral,
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
  const backgroundColor = MAP_TAG_SEVERITY_BACKGROUND[severity];
  const textColor = MAP_TAG_SEVERITY_TEXT_COLOR[severity];
  const iconColor = MAP_TAG_SEVERITY_ICON_COLOR[severity];

  const finalStartIconName = startIconName ?? startIconProps?.name;
  const finalEndIconName = endIconName ?? endIconProps?.name;

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
      backgroundColor={backgroundColor}
      twClassName={[
        'rounded-md self-start',
        finalStartIconName ? 'pl-1' : 'pl-1.5',
        finalEndIconName ? 'pr-1' : 'pr-1.5',
        twClassName,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      <BoxRow
        textProps={{
          color: textColor,
          variant: TextVariant.BodyXs,
          fontWeight: FontWeight.Medium,
        }}
        startAccessory={renderStartContent()}
        endAccessory={renderEndContent()}
      >
        {typeof children === 'number' ? String(children) : children}
      </BoxRow>
    </Box>
  );
};
