// Third party dependencies.
import {
  BoxBackgroundColor,
  BoxBorderColor,
  ButtonSize,
} from '@metamask/design-system-shared';
import React from 'react';

// External dependencies.
import { BannerBase } from '../BannerBase';
import { IconAlert } from '../IconAlert';

// Internal dependencies.
import { TOAST_SEVERITY_ICON_MAP } from './Toast.constants';
import { ToastSeverity } from './Toast.types';
import type { ToastProps } from './Toast.types';

const renderSeverityAccessory = ({
  iconProps,
  severity,
  startAccessory,
}: Pick<ToastProps, 'iconProps' | 'severity' | 'startAccessory'>) => {
  if (startAccessory !== null && startAccessory !== undefined) {
    return startAccessory;
  }

  if (!severity || severity === ToastSeverity.Default) {
    return undefined;
  }

  const iconAlertSeverity = TOAST_SEVERITY_ICON_MAP[severity];

  return <IconAlert severity={iconAlertSeverity} {...iconProps} />;
};

export const Toast: React.FC<ToastProps> = ({
  actionButtonLabel,
  actionButtonOnPress,
  actionButtonProps,
  children,
  childrenWrapperProps,
  closeButtonProps,
  description,
  descriptionProps,
  onClose,
  iconProps,
  severity = ToastSeverity.Default,
  startAccessory,
  title,
  titleProps,
  twClassName,
  ...props
}) => {
  const shouldShowCloseButton = Boolean(onClose || closeButtonProps);
  const actionProps =
    actionButtonLabel && actionButtonOnPress
      ? {
          actionButtonLabel,
          actionButtonOnPress,
          actionButtonProps: {
            size: ButtonSize.Sm,
            ...actionButtonProps,
          },
        }
      : {};

  return (
    <BannerBase
      {...actionProps}
      backgroundColor={BoxBackgroundColor.BackgroundSection}
      borderColor={BoxBorderColor.BorderMuted}
      borderWidth={1}
      children={children}
      childrenWrapperProps={childrenWrapperProps}
      closeButtonProps={
        shouldShowCloseButton
          ? {
              accessibilityLabel: 'Close toast',
              ...closeButtonProps,
              onPress: (event) => {
                onClose?.();
                closeButtonProps?.onPress?.(event);
              },
            }
          : undefined
      }
      description={description}
      descriptionProps={descriptionProps}
      onClose={undefined}
      startAccessory={renderSeverityAccessory({
        iconProps,
        severity,
        startAccessory,
      })}
      title={title}
      titleProps={titleProps}
      twClassName={twClassName ? `rounded-xl ${twClassName}` : 'rounded-xl'}
      {...props}
    />
  );
};
