import {
  BoxBackgroundColor,
  BoxBorderColor,
  ButtonSize,
  IconSize,
  ToastSeverity,
} from '@metamask/design-system-shared';
import React, { forwardRef } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { BannerBase } from '../BannerBase';
import { Icon } from '../Icon';

import { TOAST_SEVERITY_ICON_MAP } from './Toast.constants';
import type { ToastProps } from './Toast.types';

const renderSeverityAccessory = ({
  severity,
  startAccessory,
  iconProps,
}: Pick<ToastProps, 'severity' | 'startAccessory' | 'iconProps'>) => {
  if (startAccessory !== null && startAccessory !== undefined) {
    return startAccessory;
  }

  if (!severity || severity === ToastSeverity.Default) {
    return undefined;
  }

  const { name, color } = TOAST_SEVERITY_ICON_MAP[severity];

  return <Icon name={name} color={color} size={IconSize.Lg} {...iconProps} />;
};

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      actionButtonLabel,
      actionButtonOnClick,
      actionButtonProps,
      className,
      closeButtonProps,
      iconProps,
      onClose,
      severity = ToastSeverity.Default,
      startAccessory,
      ...props
    },
    ref,
  ) => {
    // Only pass action props through when both the label and handler are set so
    // BannerBase can keep its action button contract simple.
    const resolvedActionProps =
      actionButtonLabel && actionButtonOnClick
        ? {
            actionButtonLabel,
            actionButtonOnClick,
            actionButtonProps: {
              size: ButtonSize.Sm,
              ...actionButtonProps,
            },
          }
        : {};

    // Derive the close button config from the Toast API, keeping the button
    // visible whenever the consumer provides dismiss behavior or overrides.
    const resolvedCloseButtonProps =
      onClose || closeButtonProps
        ? {
            ariaLabel: 'Close toast',
            ...closeButtonProps,
          }
        : undefined;

    // Toast reuses BannerBase so the web surface stays aligned with the shared
    // banner layout and the React Native Toast API.
    return (
      <BannerBase
        ref={ref}
        {...resolvedActionProps}
        {...props}
        backgroundColor={BoxBackgroundColor.BackgroundSection}
        borderColor={BoxBorderColor.BorderMuted}
        borderWidth={1}
        className={twMerge('rounded-xl', className)}
        closeButtonProps={resolvedCloseButtonProps}
        onClose={onClose}
        startAccessory={renderSeverityAccessory({
          severity,
          startAccessory,
          iconProps,
        })}
      />
    );
  },
);

Toast.displayName = 'Toast';
