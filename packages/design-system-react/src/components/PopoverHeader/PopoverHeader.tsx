import {
  ButtonIconSize,
  IconName,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import React, { forwardRef } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Box } from '../Box';
import { ButtonIcon } from '../ButtonIcon';
import { Text, TextAlign } from '../Text';

import type { PopoverHeaderProps } from './PopoverHeader.types';

export const PopoverHeader = forwardRef<HTMLElement, PopoverHeaderProps>(
  (props, ref) => {
    const {
      children,
      className,
      startAccessory,
      endAccessory,
      onBack,
      backButtonProps,
      onClose,
      closeButtonProps,
      ...rest
    } = props;

    // The discriminated union on `PopoverHeaderProps` guarantees that whenever
    // `onBack` is set, `backButtonProps` is also set (with a required
    // `ariaLabel`). Same for `onClose` / `closeButtonProps`. The `&&` checks
    // below give TypeScript a narrowing point and double as runtime guards.
    // The auto-rendered icon buttons default to `text-inherit` so they pick
    // up the popover surface color (preserving the legacy `IconColor.inherit`
    // behavior); consumers can still override via `className` on the prop bag.
    const resolvedStartAccessory =
      startAccessory ??
      (onBack && backButtonProps ? (
        <ButtonIcon
          iconName={IconName.ArrowLeft}
          size={ButtonIconSize.Sm}
          onClick={onBack}
          {...backButtonProps}
          className={twMerge('text-inherit', backButtonProps.className)}
        />
      ) : null);

    const resolvedEndAccessory =
      endAccessory ??
      (onClose && closeButtonProps ? (
        <ButtonIcon
          iconName={IconName.Close}
          size={ButtonIconSize.Sm}
          onClick={onClose}
          {...closeButtonProps}
          className={twMerge('text-inherit', closeButtonProps.className)}
        />
      ) : null);

    const titleContent =
      typeof children === 'string' ? (
        <Text
          variant={TextVariant.HeadingSm}
          textAlign={TextAlign.Center}
          color={TextColor.Inherit}
        >
          {children}
        </Text>
      ) : (
        children
      );

    return (
      <header
        ref={ref}
        className={twMerge(
          // Three-column grid keeps the title visually centered regardless of
          // which side accessories are present — same layout primitive as
          // `HeaderBase`, replicated here so the outer element is the
          // semantic `<header>` (no extra wrapper div). Unlike `ModalHeader`,
          // PopoverHeader applies no outer padding — popover surfaces own
          // their own spacing.
          'grid grid-cols-[1fr_auto_1fr] items-center',
          className,
        )}
        {...rest}
      >
        {resolvedStartAccessory && (
          <Box className="col-start-1 justify-self-start">
            {resolvedStartAccessory}
          </Box>
        )}
        {titleContent !== undefined && titleContent !== null && (
          <Box className="col-start-2 col-end-3 w-full">{titleContent}</Box>
        )}
        {resolvedEndAccessory && (
          <Box className="col-start-3 justify-self-end">
            {resolvedEndAccessory}
          </Box>
        )}
      </header>
    );
  },
);

PopoverHeader.displayName = 'PopoverHeader';
