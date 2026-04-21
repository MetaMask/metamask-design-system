import {
  FontWeight,
  TagSeverity,
  TextVariant,
} from '@metamask/design-system-shared';
import React from 'react';

import { Box } from '../Box';
import { BoxRow } from '../BoxRow';
import { Icon, IconSize } from '../Icon';

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

  return (
    <Box
      {...props}
      backgroundColor={backgroundColor}
      twClassName={`rounded-md self-start ${(startIconName ?? startIconProps?.name) ? 'pl-1' : 'pl-1.5'} ${(endIconName ?? endIconProps?.name) ? 'pr-1' : 'pr-1.5'}${twClassName ? ` ${twClassName}` : ''}`.trim()}
      style={style}
    >
      <BoxRow
        textProps={{
          color: textColor,
          variant: TextVariant.BodyXs,
          fontWeight: FontWeight.Medium,
        }}
        startAccessory={(() => {
          const name = startIconName ?? startIconProps?.name;
          if (!name) {
            return startAccessory ?? null;
          }
          return (
            <Icon
              name={name}
              color={iconColor}
              size={IconSize.Xs}
              twClassName="shrink-0"
              {...startIconProps}
            />
          );
        })()}
        endAccessory={(() => {
          const name = endIconName ?? endIconProps?.name;
          if (!name) {
            return endAccessory ?? null;
          }
          return (
            <Icon
              name={name}
              color={iconColor}
              size={IconSize.Xs}
              twClassName="shrink-0"
              {...endIconProps}
            />
          );
        })()}
      >
        {typeof children === 'number' ? String(children) : children}
      </BoxRow>
    </Box>
  );
};
