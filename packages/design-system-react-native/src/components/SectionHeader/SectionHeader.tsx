import {
  IconColor,
  IconName,
  IconSize,
  mergeTwClassName,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { Pressable } from 'react-native';

import { Box } from '../Box';
import { BoxRow } from '../BoxRow';
import { Icon } from '../Icon';

import type { SectionHeaderProps } from './SectionHeader.types';

/**
 * Horizontal section header: optional start/end icons or accessories, and a title row with optional inline accessory.
 * When `isInteractive` is `true`, the header is wrapped in a `Pressable` and remaining `PressableProps` are forwarded to it.
 * Otherwise, remaining `View` props are forwarded to the outer {@link BoxRow}.
 *
 * @param sectionHeaderProps - Component props
 * @param sectionHeaderProps.title - Title content for the inner row (required)
 * @param sectionHeaderProps.titleAccessory - Optional inline metadata beside `title` in the inner row (not for trailing chevrons; use `endIconName` / `endIconProps`)
 * @param sectionHeaderProps.children - Optional full-width content below the header row
 * @param sectionHeaderProps.titleProps - Optional props merged into inner row `Text` when `title` is a string
 * @param sectionHeaderProps.titleWrapperProps - Optional props spread onto the inner `BoxRow`
 * @param sectionHeaderProps.startAccessory - Optional custom node before the title row on the outer row; used when no start icon is resolved
 * @param sectionHeaderProps.startIconName - Optional start icon; takes precedence over `startAccessory` when set
 * @param sectionHeaderProps.startIconProps - Props merged into the start `Icon` (defaults include medium size and default icon color)
 * @param sectionHeaderProps.endAccessory - Optional custom node after the title row on the outer row; used when no end icon is resolved
 * @param sectionHeaderProps.endIconName - Optional end icon on the outer header row (trailing chevrons, disclosure arrows); takes precedence over `endAccessory` when set. Defaults to `IconName.ArrowRight` when `isInteractive` is `true` and no end icon or `endAccessory` is provided
 * @param sectionHeaderProps.endIconProps - Props merged into the end `Icon`
 * @param sectionHeaderProps.isInteractive - When `true`, wraps the header in a `Pressable` with reduced opacity on press
 * @param sectionHeaderProps.style - Optional style on the outer wrapper (`View` or `Pressable` style, including function form when interactive)
 * @param sectionHeaderProps.twClassName - Optional Tailwind classes on the outer row
 *
 * @returns The rendered SectionHeader layout.
 */
export const SectionHeader: React.FC<SectionHeaderProps> = (
  sectionHeaderProps,
) => {
  const {
    title,
    children,
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
    ...props
  } = sectionHeaderProps;

  const tw = useTailwind();
  const resolvedEndIconName =
    endIconName ??
    (isInteractive && !endAccessory ? IconName.ArrowRight : undefined);

  const resolvedStartAccessory = startIconName ? (
    <Icon
      size={IconSize.Sm}
      color={IconColor.IconDefault}
      twClassName="shrink-0"
      {...startIconProps}
      name={startIconName}
    />
  ) : (
    startAccessory
  );

  const resolvedEndAccessory = resolvedEndIconName ? (
    <Icon
      size={IconSize.Sm}
      color={IconColor.IconAlternative}
      twClassName="shrink-0"
      {...endIconProps}
      name={resolvedEndIconName}
    />
  ) : (
    endAccessory
  );

  const hasAccessories =
    Boolean(resolvedStartAccessory) || Boolean(resolvedEndAccessory);

  const titleRow = title ? (
    <BoxRow
      {...titleWrapperProps}
      gap={1}
      endAccessory={titleAccessory}
      twClassName={mergeTwClassName(
        hasAccessories && 'w-full shrink min-w-0',
        titleWrapperProps?.twClassName,
      )}
      textProps={{
        variant: TextVariant.HeadingMd,
        color: TextColor.TextDefault,
        ...titleProps,
      }}
    >
      {title}
    </BoxRow>
  ) : null;

  const mainContent = titleRow ? (
    hasAccessories ? (
      <Box twClassName="shrink min-w-0">{titleRow}</Box>
    ) : (
      titleRow
    )
  ) : null;

  const headerRow = (
    <BoxRow
      gap={1}
      startAccessory={resolvedStartAccessory}
      endAccessory={resolvedEndAccessory}
    >
      {mainContent}
    </BoxRow>
  );

  const body = children ? (
    <Box gap={1}>
      {headerRow}
      {children}
    </Box>
  ) : (
    headerRow
  );

  if (isInteractive) {
    const { disabled, accessibilityRole = 'button' } = sectionHeaderProps;
    const isDisabled = Boolean(disabled);

    return (
      <Pressable
        accessibilityRole={accessibilityRole}
        style={({ pressed }) => {
          const baseStyle = tw.style(
            'px-4 pb-2 pt-3',
            twClassName,
            pressed && !isDisabled && 'opacity-70',
          );
          const additionalStyle =
            typeof style === 'function' ? style({ pressed }) : style;

          return additionalStyle ? [baseStyle, additionalStyle] : baseStyle;
        }}
        {...props}
      >
        {body}
      </Pressable>
    );
  }

  if (children) {
    return (
      <Box
        {...props}
        gap={1}
        style={style}
        twClassName={mergeTwClassName('px-4 pb-2 pt-3', twClassName)}
      >
        {headerRow}
        {children}
      </Box>
    );
  }

  return (
    <BoxRow
      {...props}
      gap={1}
      style={style}
      twClassName={mergeTwClassName('px-4 pb-2 pt-3', twClassName)}
      startAccessory={resolvedStartAccessory}
      endAccessory={resolvedEndAccessory}
    >
      {mainContent}
    </BoxRow>
  );
};

SectionHeader.displayName = 'SectionHeader';
