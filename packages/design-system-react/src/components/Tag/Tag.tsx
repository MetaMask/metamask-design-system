import {
  BoxAlignItems,
  BoxFlexDirection,
  FontWeight,
  TagSeverity,
  TextVariant,
} from '@metamask/design-system-shared';
import React, { forwardRef } from 'react';

import { IconSize } from '../../types';
import { twMerge } from '../../utils/tw-merge';
import { Box } from '../Box';
import { Icon } from '../Icon';
import { Text } from '../Text';

import {
  MAP_TAG_SEVERITY_BACKGROUND,
  MAP_TAG_SEVERITY_ICON_COLOR,
  MAP_TAG_SEVERITY_TEXT_COLOR,
} from './Tag.constants';
import type { TagProps } from './Tag.types';

const isTextContent = (content: React.ReactNode): content is string | number =>
  typeof content === 'string' || typeof content === 'number';

export const Tag = forwardRef<HTMLDivElement, TagProps>(
  (
    {
      children,
      severity = TagSeverity.Neutral,
      startIconName,
      startIconProps,
      startAccessory,
      endIconName,
      endIconProps,
      endAccessory,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const backgroundColor = MAP_TAG_SEVERITY_BACKGROUND[severity];
    const textColor = MAP_TAG_SEVERITY_TEXT_COLOR[severity];
    const iconColor = MAP_TAG_SEVERITY_ICON_COLOR[severity];

    const finalStartIconName = startIconName ?? startIconProps?.name;
    const finalEndIconName = endIconName ?? endIconProps?.name;

    const resolvedStartAccessory = finalStartIconName ? (
      <Icon
        name={finalStartIconName}
        color={iconColor}
        size={IconSize.Xs}
        className="shrink-0"
        {...startIconProps}
      />
    ) : (
      startAccessory ?? null
    );

    const resolvedEndAccessory = finalEndIconName ? (
      <Icon
        name={finalEndIconName}
        color={iconColor}
        size={IconSize.Xs}
        className="shrink-0"
        {...endIconProps}
      />
    ) : (
      endAccessory ?? null
    );

    const content = isTextContent(children) ? (
      <Text
        variant={TextVariant.BodyXs}
        color={textColor}
        fontWeight={FontWeight.Medium}
      >
        {children}
      </Text>
    ) : (
      children
    );

    const mergedClassName = twMerge(
      'inline-flex self-start rounded-md',
      finalStartIconName ? 'pl-1' : 'pl-1.5',
      finalEndIconName ? 'pr-1' : 'pr-1.5',
      className,
    );

    return (
      <Box
        ref={ref}
        flexDirection={BoxFlexDirection.Row}
        alignItems={BoxAlignItems.Center}
        gap={1}
        backgroundColor={backgroundColor}
        className={mergedClassName}
        style={style}
        {...props}
      >
        {resolvedStartAccessory}
        {content}
        {resolvedEndAccessory}
      </Box>
    );
  },
);

Tag.displayName = 'Tag';
