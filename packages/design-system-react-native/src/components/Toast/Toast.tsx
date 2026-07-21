// Third party dependencies.
import {
  BoxBackgroundColor,
  BoxBorderColor,
  ButtonSize,
  IconSize,
  mergeTwClassName,
  TextColor,
} from '@metamask/design-system-shared';
import { Theme, useTheme } from '@metamask/design-system-twrnc-preset';
import { lightTheme } from '@metamask/design-tokens';
import React from 'react';

// External dependencies.
import { BannerBase } from '../BannerBase';
import { IconAlert } from '../IconAlert';

// Internal dependencies.
import { TOAST_SEVERITY_ICON_MAP } from './Toast.constants';
import { ToastSeverity } from './Toast.types';
import type { ToastProps } from './Toast.types';

const renderSeverityAccessory = ({
  iconAlertProps,
  severity,
  startAccessory,
}: Pick<ToastProps, 'iconAlertProps' | 'severity' | 'startAccessory'>) => {
  if (startAccessory !== null && startAccessory !== undefined) {
    return startAccessory;
  }

  if (!severity || severity === ToastSeverity.Default) {
    return undefined;
  }

  const iconAlertSeverity = TOAST_SEVERITY_ICON_MAP[severity];

  return (
    <IconAlert
      severity={iconAlertSeverity}
      size={IconSize.Lg}
      {...iconAlertProps}
    />
  );
};

export const Toast: React.FC<ToastProps> = ({
  actionButtonLabel,
  actionButtonOnPress,
  actionButtonProps,
  children,
  childrenWrapperProps,
  closeButtonProps,
  description,
  descriptionProps = { color: TextColor.TextAlternative },
  onClose,
  iconAlertProps,
  severity = ToastSeverity.Default,
  startAccessory,
  style,
  title,
  titleProps,
  twClassName,
  ...props
}) => {
  const theme = useTheme();
  const isLightTheme = theme === Theme.Light;
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
  // TODO: Remove this conditional once BannerBase only renders a close button
  // from onClose. At that point Toast can pass closeButtonProps directly.
  const resolvedCloseButtonProps =
    onClose || closeButtonProps
      ? {
          accessibilityLabel: 'Close toast',
          ...closeButtonProps,
        }
      : undefined;

  return (
    <BannerBase
      {...actionProps}
      {...props}
      backgroundColor={
        isLightTheme
          ? BoxBackgroundColor.BackgroundDefault
          : BoxBackgroundColor.BackgroundSection
      }
      borderColor={BoxBorderColor.BorderMuted}
      borderWidth={1}
      children={children}
      childrenWrapperProps={childrenWrapperProps}
      closeButtonProps={resolvedCloseButtonProps}
      description={description}
      descriptionProps={descriptionProps}
      onClose={onClose}
      startAccessory={renderSeverityAccessory({
        iconAlertProps,
        severity,
        startAccessory,
      })}
      style={[isLightTheme ? lightTheme.shadows.size.md : undefined, style]}
      title={title}
      titleProps={titleProps}
      twClassName={mergeTwClassName('rounded-2xl', twClassName)}
    />
  );
};
