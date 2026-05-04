// Third party dependencies.
import {
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
import { ToastSeverity } from './Toast.types';

const TOAST_SEVERITY_ICON_MAP = {
  [ToastSeverity.Default]: {
    color: IconColor.IconDefault,
    name: IconName.FullCircle,
  },
  [ToastSeverity.Success]: {
    color: IconColor.SuccessDefault,
    name: IconName.Confirmation,
  },
  [ToastSeverity.Warning]: {
    color: IconColor.WarningDefault,
    name: IconName.Danger,
  },
  [ToastSeverity.Error]: {
    color: IconColor.ErrorDefault,
    name: IconName.Error,
  },
} as const;

const renderSeverityAccessory = (props: ToastProps) => {
  if (props.startAccessory !== null && props.startAccessory !== undefined) {
    return props.startAccessory;
  }

  const severity = props.severity ?? ToastSeverity.Default;
  const { color, name } = TOAST_SEVERITY_ICON_MAP[severity];

  return <Icon color={color} name={name} size={IconSize.Lg} />;
};

export const Toast: React.FC<ToastProps> = ({
  actionText,
  closeButtonProps,
  description,
  onActionPress,
  onClose,
  severity,
  startAccessory,
  text,
  twClassName,
  ...props
}) => {
  const handleClosePress = (
    event: Parameters<
      NonNullable<NonNullable<typeof closeButtonProps>['onPress']>
    >[0],
  ) => {
    onClose();
    closeButtonProps?.onPress?.(event);
  };

  const actionProps =
    actionText && onActionPress
      ? {
          actionButtonLabel: actionText,
          actionButtonOnPress: onActionPress,
        }
      : {};

  return (
    <BannerBase
      {...actionProps}
      backgroundColor={BoxBackgroundColor.BackgroundSection}
      borderColor={BoxBorderColor.BorderMuted}
      borderWidth={1}
      closeButtonProps={{
        accessibilityLabel: 'Close toast',
        ...closeButtonProps,
        onPress: handleClosePress,
      }}
      description={description}
      startAccessory={renderSeverityAccessory({
        ...props,
        actionText,
        closeButtonProps,
        description,
        onActionPress,
        onClose,
        severity,
        startAccessory,
        text,
        twClassName,
      })}
      title={text}
      twClassName={twClassName ? `rounded-xl ${twClassName}` : 'rounded-xl'}
      {...props}
    />
  );
};
