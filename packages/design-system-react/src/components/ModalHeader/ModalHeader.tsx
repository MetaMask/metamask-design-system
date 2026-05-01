import React, { forwardRef } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Box } from '../Box';
import { ButtonIcon, ButtonIconSize } from '../ButtonIcon';
import { IconName } from '../Icon';
import { Text, TextAlign, TextVariant } from '../Text';

import type { ModalHeaderProps } from './ModalHeader.types';

export const ModalHeader = forwardRef<HTMLElement, ModalHeaderProps>(
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

    // The discriminated union on `ModalHeaderProps` guarantees that whenever
    // `onBack` is set, `backButtonProps` is also set (with a required
    // `ariaLabel`). Same for `onClose` / `closeButtonProps`. The `&&` checks
    // below give TypeScript a narrowing point and double as runtime guards.
    const resolvedStartAccessory =
      startAccessory ??
      (onBack && backButtonProps ? (
        <ButtonIcon
          iconName={IconName.ArrowLeft}
          size={ButtonIconSize.Md}
          onClick={onBack}
          {...backButtonProps}
        />
      ) : null);

    const resolvedEndAccessory =
      endAccessory ??
      (onClose && closeButtonProps ? (
        <ButtonIcon
          iconName={IconName.Close}
          size={ButtonIconSize.Md}
          onClick={onClose}
          {...closeButtonProps}
        />
      ) : null);

    const titleContent =
      typeof children === 'string' ? (
        <Text variant={TextVariant.HeadingSm} textAlign={TextAlign.Center}>
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
          // semantic `<header>` (no extra wrapper div).
          'grid grid-cols-[1fr_auto_1fr] items-center px-4 pb-4',
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

ModalHeader.displayName = 'ModalHeader';
