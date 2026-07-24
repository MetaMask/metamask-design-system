import {
  BoxAlignItems,
  ContentVariant,
  mergeTwClassName,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { Pressable } from 'react-native';
import type {
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { Box } from '../Box';
import { BoxRow } from '../BoxRow';
import { Content } from '../Content';

import type { ListItemProps } from './ListItem.types';

export const ListItem: React.FC<ListItemProps> = ({
  children,
  isInteractive = false,
  twClassName,
  style,
  startAccessory,
  endAccessory,
  accessoryGap = 0,
  variant = ContentVariant.TwoLines,
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
  const isMultiLine = variant === ContentVariant.MultiLine;
  let rootSizeClassName = 'min-h-[72px] justify-center';
  if (variant === ContentVariant.OneLine) {
    rootSizeClassName = 'min-h-[48px] justify-center';
  } else if (isMultiLine) {
    rootSizeClassName = 'min-h-[88px] justify-start';
  }
  const accessoryAlignItems = isMultiLine
    ? BoxAlignItems.Start
    : BoxAlignItems.Center;

  const rootBaseClassName = mergeTwClassName(
    'w-full px-4 py-3',
    rootSizeClassName,
  );
  const rootTwClassName = mergeTwClassName(rootBaseClassName, twClassName);

  const wrapperStyle = style
    ? [tw.style(rootTwClassName), style]
    : tw.style(rootTwClassName);

  const getPressableStyle = ({
    pressed,
  }: PressableStateCallbackType): StyleProp<ViewStyle> => {
    const baseStyle = tw.style(rootTwClassName, pressed && 'bg-pressed');

    if (!style) {
      return baseStyle;
    }

    const userStyle = typeof style === 'function' ? style({ pressed }) : style;

    return [baseStyle, userStyle];
  };

  const hasRowAccessories = Boolean(startAccessory) || Boolean(endAccessory);

  const content = (
    <Content
      twClassName={hasRowAccessories ? 'flex-1 min-w-0' : undefined}
      variant={variant}
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

  const listContent = hasRowAccessories ? (
    <BoxRow
      startAccessory={startAccessory}
      endAccessory={endAccessory}
      alignItems={accessoryAlignItems}
      gap={accessoryGap}
    >
      {content}
    </BoxRow>
  ) : (
    content
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
