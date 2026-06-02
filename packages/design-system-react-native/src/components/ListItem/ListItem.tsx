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
import { Content } from '../Content';

import type { ListItemProps } from './ListItem.types';

export const ListItemRoot: React.FC<ListItemProps> = ({
  isInteractive = false,
  twClassName,
  style,
  children,
  startAccessory,
  endAccessory,
  topAccessory,
  bottomAccessory,
  verticalAlignment = ContentVerticalAlignment.Center,
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
  ...wrapperRest
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
    if (!style) return baseStyle;
    const userStyle = typeof style === 'function' ? style({ pressed }) : style;
    return [baseStyle, userStyle];
  };

  // When slot sub-components are used as children, they render in-place — the
  // engineer controls layout using Box, BoxRow, and Tailwind classnames.
  // When no children are present, flat props drive Content directly.
  const content = children ?? (
    <Content
      startAccessory={startAccessory}
      endAccessory={endAccessory}
      topAccessory={topAccessory}
      bottomAccessory={bottomAccessory}
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

  if (isInteractive) {
    return (
      <Pressable style={getPressableStyle} {...wrapperRest}>
        {content}
      </Pressable>
    );
  }

  return (
    <Box style={wrapperStyle} {...wrapperRest}>
      {content}
    </Box>
  );
};

ListItemRoot.displayName = 'ListItem';
