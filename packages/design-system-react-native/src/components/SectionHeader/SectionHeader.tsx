import {
  IconColor,
  IconName,
  IconSize,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { Pressable } from 'react-native';

import { BoxRow } from '../BoxRow';
import { Icon } from '../Icon';

import type { SectionHeaderProps } from './SectionHeader.types';

/**
 * Horizontal section header: optional start/end icons or accessories, and a title row with optional inline accessory.
 * When `isInteractive` is `true`, the header is wrapped in a `Pressable` and remaining `PressableProps` are forwarded to it.
 * Otherwise, remaining `View` props are forwarded to the outer {@link BoxRow}.
 *
 * @param props - Component props
 * @param props.title - Title content for the inner row (required)
 * @param props.titleAccessory - Optional node to the right of `title` in the inner row
 * @param props.titleProps - Optional props merged into inner row `Text` when `title` is a string
 * @param props.titleWrapperProps - Optional props spread onto the inner `BoxRow`
 * @param props.startAccessory - Optional custom node before the title row on the outer row; used when no start icon is resolved
 * @param props.startIconName - Optional start icon; takes precedence over `startAccessory` when resolved
 * @param props.startIconProps - Props merged into the start `Icon` (defaults include medium size and default icon color)
 * @param props.endAccessory - Optional custom node after the title row on the outer row; used when no end icon is resolved
 * @param props.endIconName - Optional end icon; takes precedence over `endAccessory` when resolved. Defaults to `IconName.ArrowRight` when `isInteractive` is `true` and no end icon or `endAccessory` is provided
 * @param props.endIconProps - Props merged into the end `Icon`
 * @param props.isInteractive - When `true`, wraps the header in a `Pressable` with reduced opacity on press
 * @param props.style - Optional style on the outer wrapper (`View` or `Pressable` style, including function form when interactive)
 * @param props.twClassName - Optional Tailwind classes on the outer row
 *
 * @returns The rendered SectionHeader layout.
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  titleAccessory,
  titleProps,
  titleWrapperProps,
  startAccessory,
  startIconName,
  startIconProps,
  endAccessory,
  endIconName,
  endIconProps,
  isInteractive,
  twClassName = '',
  style,
  ...wrapperRest
}) => {
  const tw = useTailwind();
  const finalStartIconName = startIconName ?? startIconProps?.name;
  const finalEndIconName =
    endIconName ??
    endIconProps?.name ??
    (isInteractive && !endAccessory ? IconName.ArrowRight : undefined);

  const resolvedStartAccessory = finalStartIconName ? (
    <Icon
      size={IconSize.Md}
      color={IconColor.IconDefault}
      twClassName="shrink-0"
      {...startIconProps}
      name={finalStartIconName}
    />
  ) : (
    startAccessory
  );

  const resolvedEndAccessory = finalEndIconName ? (
    <Icon
      size={IconSize.Md}
      color={IconColor.IconAlternative}
      twClassName="shrink-0"
      {...endIconProps}
      name={finalEndIconName}
    />
  ) : (
    endAccessory
  );

  const titleRow = title ? (
    <BoxRow
      {...titleWrapperProps}
      gap={1}
      endAccessory={titleAccessory}
      textProps={{
        variant: TextVariant.HeadingMd,
        color: TextColor.TextDefault,
        ...titleProps,
      }}
    >
      {title}
    </BoxRow>
  ) : null;

  if (isInteractive) {
    return (
      <Pressable
        style={({ pressed }) => {
          const baseStyle = tw.style(
            'px-4 pb-2 pt-3',
            twClassName,
            pressed && 'opacity-70',
          );
          const additionalStyle =
            typeof style === 'function' ? style({ pressed }) : style;

          return additionalStyle ? [baseStyle, additionalStyle] : baseStyle;
        }}
        {...wrapperRest}
      >
        <BoxRow
          gap={1}
          startAccessory={resolvedStartAccessory}
          endAccessory={resolvedEndAccessory}
        >
          {titleRow}
        </BoxRow>
      </Pressable>
    );
  }

  return (
    <BoxRow
      {...wrapperRest}
      gap={1}
      style={style}
      twClassName={`px-4 pb-2 pt-3 ${twClassName}`}
      startAccessory={resolvedStartAccessory}
      endAccessory={resolvedEndAccessory}
    >
      {titleRow}
    </BoxRow>
  );
};

SectionHeader.displayName = 'SectionHeader';
