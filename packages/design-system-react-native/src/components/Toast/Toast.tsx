// Third party dependencies.
import {
  BannerAlertSeverity,
  BoxBackgroundColor,
  BoxBorderColor,
} from '@metamask/design-system-shared';
import React from 'react';

// External dependencies.
import { IconColor, IconName, IconSize } from '../../types';
import { BannerBase } from '../BannerBase';
import { Icon } from '../Icon';

// Internal dependencies.
import type { ToastProps } from './Toast.types';

const TOAST_SEVERITY_ICON_MAP = {
  [BannerAlertSeverity.Info]: {
    color: IconColor.PrimaryDefault,
    name: IconName.Info,
  },
  [BannerAlertSeverity.Success]: {
    color: IconColor.SuccessDefault,
    name: IconName.Confirmation,
  },
  [BannerAlertSeverity.Warning]: {
    color: IconColor.WarningDefault,
    name: IconName.Danger,
  },
  [BannerAlertSeverity.Danger]: {
    color: IconColor.ErrorDefault,
    name: IconName.Danger,
  },
} as const;

const renderSeverityAccessory = ({
  iconProps,
  severity,
  startAccessory,
}: Pick<ToastProps, 'iconProps' | 'severity' | 'startAccessory'>) => {
  if (startAccessory !== null && startAccessory !== undefined) {
    return startAccessory;
  }

  if (!severity) {
    return undefined;
  }

  const { color, name } = TOAST_SEVERITY_ICON_MAP[severity];

  return <Icon color={color} name={name} size={IconSize.Lg} {...iconProps} />;
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
  severity,
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
          actionButtonProps,
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
