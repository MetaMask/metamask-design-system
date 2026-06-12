import { ContentVerticalAlignment } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { Pressable } from 'react-native';
import type {
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { Box } from '../Box';
import { BoxColumn } from '../BoxColumn';
import { BoxRow } from '../BoxRow';
import { Content } from '../Content';
import { VERTICAL_ALIGNMENT_MAP } from '../Content/Content.constants';

import type { ListItemProps } from './ListItem.types';

export const ListItem: React.FC<ListItemProps> = ({
  children,
  isInteractive = false,
  twClassName,
  style,
  startAccessory,
  endAccessory,
  topAccessory,
  bottomAccessory,
  verticalAlignment,
  avatar,
  title,
  titleProps,
  titleStartAccessory,
  titleEndAccessory,
  description,
  descriptionProps,
  descriptionStartAccessory,
  descriptionEndAccessory,
  value,
  valueProps,
  valueStartAccessory,
  valueEndAccessory,
  subvalue,
  subvalueProps,
  subvalueStartAccessory,
  subvalueEndAccessory,
  accessibilityRole,
  ...props
}) => {
  const tw = useTailwind();

  const wrapperStyle = style
    ? [tw.style('px-4 py-3', twClassName), style]
    : tw.style('px-4 py-3', twClassName);

  const getPressableStyle = ({
    pressed,
  }: PressableStateCallbackType): StyleProp<ViewStyle> => {
    const baseStyle = tw.style(
      'w-full px-4 py-3',
      twClassName,
      pressed && 'bg-pressed',
    );

    if (!style) {
      return baseStyle;
    }

    const userStyle = typeof style === 'function' ? style({ pressed }) : style;

    return [baseStyle, userStyle];
  };

  const hasColumnShell = Boolean(topAccessory) || Boolean(bottomAccessory);
  const hasRowAccessories = Boolean(startAccessory) || Boolean(endAccessory);
  const rowAlignment =
    VERTICAL_ALIGNMENT_MAP[
      verticalAlignment ?? ContentVerticalAlignment.Center
    ];

  const content = (
    <Content
      twClassName={hasRowAccessories ? 'flex-1 min-w-0' : undefined}
      verticalAlignment={verticalAlignment}
      avatar={avatar}
      title={title}
      titleProps={titleProps}
      titleStartAccessory={titleStartAccessory}
      titleEndAccessory={titleEndAccessory}
      description={description}
      descriptionProps={descriptionProps}
      descriptionStartAccessory={descriptionStartAccessory}
      descriptionEndAccessory={descriptionEndAccessory}
      value={value}
      valueProps={valueProps}
      valueStartAccessory={valueStartAccessory}
      valueEndAccessory={valueEndAccessory}
      subvalue={subvalue}
      subvalueProps={subvalueProps}
      subvalueStartAccessory={subvalueStartAccessory}
      subvalueEndAccessory={subvalueEndAccessory}
    />
  );

  const contentRow = hasRowAccessories ? (
    <BoxRow
      startAccessory={startAccessory}
      endAccessory={endAccessory}
      alignItems={rowAlignment}
      gap={0}
      twClassName="min-h-[46px] w-full"
    >
      {content}
    </BoxRow>
  ) : (
    content
  );

  const listContent = hasColumnShell ? (
    <BoxColumn
      gap={1}
      topAccessory={topAccessory}
      bottomAccessory={bottomAccessory}
    >
      {contentRow}
    </BoxColumn>
  ) : (
    contentRow
  );

  if (isInteractive) {
    return (
      <Pressable
        accessibilityRole={accessibilityRole ?? 'button'}
        style={getPressableStyle}
        {...props}
      >
        {listContent}
        {children}
      </Pressable>
    );
  }

  return (
    <Box style={wrapperStyle} {...props}>
      {listContent}
      {children}
    </Box>
  );
};

ListItem.displayName = 'ListItem';
