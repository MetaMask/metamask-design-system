import React from 'react';

import {
  BoxAlignItems,
  BoxFlexDirection,
  FontWeight,
  TextColor,
  TextVariant,
} from '../../types';
import { Box } from '../Box';
import { BoxHorizontal } from '../temp-components/BoxHorizontal';
import { BoxVertical } from '../temp-components/BoxVertical';
import { TextOrChildren } from '../temp-components/TextOrChildren';

import type { ListItemBaseProps } from './ListItemBase.types';

const DEFAULT_TITLE_PROPS = {
  variant: TextVariant.BodyMd,
  fontWeight: FontWeight.Medium,
  color: TextColor.TextDefault,
} as const;

const DEFAULT_SUBTITLE_PROPS = {
  variant: TextVariant.BodySm,
  fontWeight: FontWeight.Medium,
  color: TextColor.TextAlternative,
} as const;

const hasContent = (content: React.ReactNode) =>
  content !== null && content !== undefined;

export const ListItemBase = ({
  startAccessory,
  twClassName,
  title,
  titleProps,
  titleStartAccessory,
  titleEndAccessory,
  subtitle,
  subtitleProps,
  subtitleStartAccessory,
  subtitleEndAccessory,
  value,
  valueProps,
  valueStartAccessory,
  valueEndAccessory,
  supporting,
  supportingProps,
  supportingStartAccessory,
  supportingEndAccessory,
  ...rest
}: ListItemBaseProps) => {
  const titleRow = hasContent(title) ? (
    <BoxHorizontal
      startAccessory={titleStartAccessory}
      endAccessory={titleEndAccessory}
    >
      <TextOrChildren textProps={{ ...DEFAULT_TITLE_PROPS, ...titleProps }}>
        {title}
      </TextOrChildren>
    </BoxHorizontal>
  ) : null;

  const subtitleRow = hasContent(subtitle) ? (
    <BoxHorizontal
      startAccessory={subtitleStartAccessory}
      endAccessory={subtitleEndAccessory}
    >
      <TextOrChildren
        textProps={{ ...DEFAULT_SUBTITLE_PROPS, ...subtitleProps }}
      >
        {subtitle}
      </TextOrChildren>
    </BoxHorizontal>
  ) : null;

  const leftColumn = (
    <BoxVertical twClassName="flex-1 min-w-0" bottomAccessory={subtitleRow}>
      {titleRow}
    </BoxVertical>
  );

  const valueRow = hasContent(value) ? (
    <BoxHorizontal
      startAccessory={valueStartAccessory}
      endAccessory={valueEndAccessory}
    >
      <TextOrChildren textProps={{ ...DEFAULT_TITLE_PROPS, ...valueProps }}>
        {value}
      </TextOrChildren>
    </BoxHorizontal>
  ) : null;

  const supportingRow = hasContent(supporting) ? (
    <BoxHorizontal
      startAccessory={supportingStartAccessory}
      endAccessory={supportingEndAccessory}
    >
      <TextOrChildren
        textProps={{ ...DEFAULT_SUBTITLE_PROPS, ...supportingProps }}
      >
        {supporting}
      </TextOrChildren>
    </BoxHorizontal>
  ) : null;

  const rightColumn =
    hasContent(value) || hasContent(supporting) ? (
      <BoxVertical bottomAccessory={supportingRow}>{valueRow}</BoxVertical>
    ) : null;

  return (
    <Box
      flexDirection={BoxFlexDirection.Row}
      alignItems={BoxAlignItems.Center}
      gap={4}
      twClassName={twClassName}
      {...rest}
    >
      {startAccessory != null && (
        <Box twClassName="w-10 items-center justify-center">
          {startAccessory}
        </Box>
      )}
      {leftColumn}
      {rightColumn}
    </Box>
  );
};

ListItemBase.displayName = 'ListItemBase';
