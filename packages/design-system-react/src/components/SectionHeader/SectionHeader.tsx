import {
  BoxAlignItems,
  BoxFlexDirection,
  IconColor,
  IconName,
  IconSize,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import React, { forwardRef } from 'react';
import type { KeyboardEvent, MouseEvent, ReactNode } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Box } from '../Box';
import { Icon } from '../Icon';
import { Text } from '../Text';

import type { SectionHeaderProps } from './SectionHeader.types';

/**
 * Horizontal section header: optional start/end icons or accessories, and a
 * title row with optional inline accessory. When `isInteractive` is `true`,
 * the root is focusable and clickable. Pressed and hover feedback use 70%
 * opacity. Hover applies on web only.
 *
 * Implemented with direct `Box` / `Text` / `Icon` (no `BoxRow`).
 */
export const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  (
    {
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
      isInteractive = false,
      className,
      style,
      onClick,
      onKeyDown,
      role,
      tabIndex,
      disabled,
      ...props
    },
    ref,
  ) => {
    const isDisabled = Boolean(disabled);
    const resolvedEndIconName =
      endIconName ??
      (isInteractive && !endAccessory ? IconName.ArrowRight : undefined);

    const resolvedStartAccessory = startIconName ? (
      <Icon
        color={IconColor.IconDefault}
        {...startIconProps}
        name={startIconName}
        size={startIconProps?.size ?? IconSize.Md}
        className={twMerge('shrink-0', startIconProps?.className)}
      />
    ) : (
      startAccessory
    );

    const resolvedEndAccessory = resolvedEndIconName ? (
      <Icon
        color={IconColor.IconAlternative}
        {...endIconProps}
        name={resolvedEndIconName}
        size={endIconProps?.size ?? IconSize.Md}
        className={twMerge('shrink-0', endIconProps?.className)}
      />
    ) : (
      endAccessory
    );

    const hasAccessories =
      Boolean(resolvedStartAccessory) || Boolean(resolvedEndAccessory);

    const titleContent =
      typeof title === 'string' ? (
        <Text
          variant={TextVariant.HeadingMd}
          color={TextColor.TextDefault}
          {...titleProps}
        >
          {title}
        </Text>
      ) : (
        title
      );

    const titleRow = title ? (
      <Box
        flexDirection={BoxFlexDirection.Row}
        alignItems={BoxAlignItems.Center}
        gap={1}
        {...titleWrapperProps}
        className={twMerge(
          hasAccessories ? 'w-full min-w-0 shrink' : undefined,
          titleWrapperProps?.className,
        )}
      >
        {titleContent}
        {titleAccessory}
      </Box>
    ) : null;

    let mainContent: ReactNode = null;
    if (titleRow) {
      mainContent = hasAccessories ? (
        <Box className="min-w-0 shrink">{titleRow}</Box>
      ) : (
        titleRow
      );
    }

    const headerRow = (
      <>
        {resolvedStartAccessory}
        {mainContent}
        {resolvedEndAccessory}
      </>
    );

    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
      if (isDisabled) {
        event.preventDefault();
        return;
      }
      onClick?.(event);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      onKeyDown?.(event);
      if (!isInteractive || isDisabled || event.defaultPrevented) {
        return;
      }
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        event.currentTarget.click();
      }
    };

    const rootClassName = twMerge(
      'px-4 pb-2 pt-3',
      isInteractive &&
        !isDisabled &&
        'cursor-pointer hover:opacity-70 active:opacity-70',
      className,
    );

    const interactiveProps = isInteractive
      ? {
          role: role ?? 'button',
          tabIndex: tabIndex ?? (isDisabled ? -1 : 0),
          'aria-disabled': isDisabled || undefined,
          onClick: handleClick,
          onKeyDown: handleKeyDown,
        }
      : {
          role,
          tabIndex,
          onClick,
          onKeyDown,
        };

    if (children) {
      return (
        <Box
          ref={ref}
          {...props}
          {...interactiveProps}
          flexDirection={BoxFlexDirection.Column}
          gap={1}
          className={rootClassName}
          style={style}
        >
          <Box
            flexDirection={BoxFlexDirection.Row}
            alignItems={BoxAlignItems.Center}
            gap={1}
          >
            {headerRow}
          </Box>
          {children}
        </Box>
      );
    }

    return (
      <Box
        ref={ref}
        {...props}
        {...interactiveProps}
        flexDirection={BoxFlexDirection.Row}
        alignItems={BoxAlignItems.Center}
        gap={1}
        className={rootClassName}
        style={style}
      >
        {headerRow}
      </Box>
    );
  },
);

SectionHeader.displayName = 'SectionHeader';
