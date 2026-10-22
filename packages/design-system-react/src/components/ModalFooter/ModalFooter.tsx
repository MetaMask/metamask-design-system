import { ButtonSize, ButtonVariant } from '@metamask/design-system-shared';
import React, { forwardRef } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Box, BoxFlexDirection } from '../Box';
import { Button } from '../Button';

import { ButtonsAlignment } from './ModalFooter.types';
import type { ModalFooterProps } from './ModalFooter.types';

export const ModalFooter = forwardRef<HTMLElement, ModalFooterProps>(
  (
    {
      className,
      children,
      buttonsAlignment = ButtonsAlignment.Horizontal,
      primaryButtonProps,
      secondaryButtonProps,
      tertiaryButtonProps,
      ...props
    },
    ref,
  ) => {
    const isHorizontal = buttonsAlignment === ButtonsAlignment.Horizontal;
    const buttonClassName = isHorizontal ? 'flex-1' : 'w-full';
    const hasActionButtons = Boolean(
      primaryButtonProps || secondaryButtonProps,
    );
    const hasButtons = hasActionButtons || Boolean(tertiaryButtonProps);
    // Tertiary always sits at the bottom. When primary and secondary share a
    // row, that row is stacked above the tertiary button.
    const pinTertiaryToBottom =
      Boolean(tertiaryButtonProps) && isHorizontal && hasActionButtons;

    const secondaryButton = secondaryButtonProps && (
      <Button
        size={ButtonSize.Lg}
        {...secondaryButtonProps}
        variant={ButtonVariant.Secondary}
        className={twMerge(buttonClassName, secondaryButtonProps.className)}
      />
    );

    const primaryButton = primaryButtonProps && (
      <Button
        size={ButtonSize.Lg}
        {...primaryButtonProps}
        variant={ButtonVariant.Primary}
        className={twMerge(buttonClassName, primaryButtonProps.className)}
      />
    );

    const tertiaryButton = tertiaryButtonProps && (
      <Button
        size={ButtonSize.Lg}
        {...tertiaryButtonProps}
        variant={ButtonVariant.Tertiary}
        className={twMerge(
          pinTertiaryToBottom ? 'w-full' : buttonClassName,
          tertiaryButtonProps.className,
        )}
      />
    );

    return (
      <footer ref={ref} className={twMerge('px-4 pt-4', className)} {...props}>
        {children}
        {pinTertiaryToBottom && (
          <Box flexDirection={BoxFlexDirection.Column} gap={4}>
            <Box flexDirection={BoxFlexDirection.Row} gap={4}>
              {secondaryButton}
              {primaryButton}
            </Box>
            {tertiaryButton}
          </Box>
        )}
        {hasButtons && !pinTertiaryToBottom && (
          <Box
            flexDirection={
              isHorizontal ? BoxFlexDirection.Row : BoxFlexDirection.Column
            }
            gap={4}
          >
            {secondaryButton}
            {primaryButton}
            {tertiaryButton}
          </Box>
        )}
      </footer>
    );
  },
);

ModalFooter.displayName = 'ModalFooter';
