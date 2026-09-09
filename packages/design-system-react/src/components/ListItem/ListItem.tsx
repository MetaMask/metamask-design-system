import {
  BoxAlignItems,
  BoxFlexDirection,
  ContentVariant,
} from '@metamask/design-system-shared';
import React, { forwardRef } from 'react';
import type { KeyboardEvent } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Box } from '../Box';
import { Content } from '../Content';

import type { ListItemProps } from './ListItem.types';

export const ListItem = forwardRef<HTMLDivElement, ListItemProps>(
  (
    {
      children,
      isInteractive = false,
      className,
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
      onClick,
      onKeyDown,
      role,
      tabIndex,
      ...props
    },
    ref,
  ) => {
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

    const rootClassName = twMerge(
      'flex w-full px-4 py-3',
      rootSizeClassName,
      isInteractive && 'cursor-pointer active:bg-pressed',
      className,
    );

    const hasRowAccessories = Boolean(startAccessory) || Boolean(endAccessory);

    const content = (
      <Content
        className={hasRowAccessories ? 'min-w-0 flex-1' : undefined}
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
      <Box
        flexDirection={BoxFlexDirection.Row}
        alignItems={accessoryAlignItems}
        gap={accessoryGap}
        className="w-full min-w-0"
      >
        {startAccessory}
        {content}
        {endAccessory}
      </Box>
    ) : (
      content
    );

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      onKeyDown?.(event);
      if (!isInteractive || event.defaultPrevented) {
        return;
      }
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        event.currentTarget.click();
      }
    };

    return (
      <Box
        ref={ref}
        className={rootClassName}
        style={style}
        role={isInteractive ? (role ?? 'button') : role}
        tabIndex={isInteractive ? (tabIndex ?? 0) : tabIndex}
        onClick={onClick}
        onKeyDown={isInteractive ? handleKeyDown : onKeyDown}
        {...props}
      >
        {listContent}
        {children}
      </Box>
    );
  },
);

ListItem.displayName = 'ListItem';
