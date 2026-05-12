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
      ...props
    },
    ref,
  ) => {
    const isHorizontal = buttonsAlignment === ButtonsAlignment.Horizontal;
    const buttonClassName = isHorizontal ? 'flex-1' : 'w-full';
    const hasButtons = Boolean(primaryButtonProps || secondaryButtonProps);

    return (
      <footer ref={ref} className={twMerge('px-4 pt-4', className)} {...props}>
        {children}
        {hasButtons && (
          <Box
            flexDirection={
              isHorizontal ? BoxFlexDirection.Row : BoxFlexDirection.Column
            }
            gap={4}
          >
            {secondaryButtonProps && (
              <Button
                size={ButtonSize.Lg}
                {...secondaryButtonProps}
                variant={ButtonVariant.Secondary}
                className={twMerge(
                  buttonClassName,
                  secondaryButtonProps.className,
                )}
              />
            )}
            {primaryButtonProps && (
              <Button
                size={ButtonSize.Lg}
                {...primaryButtonProps}
                variant={ButtonVariant.Primary}
                className={twMerge(
                  buttonClassName,
                  primaryButtonProps.className,
                )}
              />
            )}
          </Box>
        )}
      </footer>
    );
  },
);

ModalFooter.displayName = 'ModalFooter';
