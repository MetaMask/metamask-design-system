import React, { forwardRef } from 'react';

import { ButtonSize, ButtonVariant } from '../../types';
import { twMerge } from '../../utils/tw-merge';
import { Box, BoxAlignItems, BoxFlexWrap } from '../Box';
import { Button } from '../Button';

import type { ModalFooterProps } from './ModalFooter.types';

const FOOTER_BUTTON_CLASSNAME = 'flex-[1_0_auto]';

export const ModalFooter = forwardRef<HTMLElement, ModalFooterProps>(
  (
    {
      className,
      children,
      onSubmit,
      submitButtonProps,
      onCancel,
      cancelButtonProps,
      containerProps,
      ...props
    },
    ref,
  ) => (
    <footer ref={ref} className={twMerge('px-4 pt-4', className)} {...props}>
      {children}
      <Box
        flexWrap={BoxFlexWrap.Wrap}
        alignItems={BoxAlignItems.Center}
        gap={4}
        {...containerProps}
        className={twMerge(
          'mx-auto flex max-w-[360px]',
          containerProps?.className,
        )}
      >
        {onCancel && (
          <Button
            size={ButtonSize.Lg}
            variant={ButtonVariant.Secondary}
            onClick={onCancel}
            {...cancelButtonProps}
            className={twMerge(
              FOOTER_BUTTON_CLASSNAME,
              cancelButtonProps?.className,
            )}
          >
            {cancelButtonProps?.children ?? 'Cancel'}
          </Button>
        )}
        {onSubmit && (
          <Button
            size={ButtonSize.Lg}
            onClick={onSubmit}
            {...submitButtonProps}
            className={twMerge(
              FOOTER_BUTTON_CLASSNAME,
              submitButtonProps?.className,
            )}
          >
            {submitButtonProps?.children ?? 'Confirm'}
          </Button>
        )}
      </Box>
    </footer>
  ),
);

ModalFooter.displayName = 'ModalFooter';
