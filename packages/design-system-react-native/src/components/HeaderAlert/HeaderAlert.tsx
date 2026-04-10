// Third party dependencies.
import React, { useMemo } from 'react';

// External dependencies.
import { IconSize } from '../../types';
import type { ButtonIconProps } from '../ButtonIcon';
import { HeaderBase } from '../HeaderBase';
import { IconName } from '../Icon';
import { IconAlert } from '../IconAlert';

// Internal dependencies.
import type { HeaderAlertProps } from './HeaderAlert.types';

export const HeaderAlert: React.FC<HeaderAlertProps> = ({
  severity,
  iconAlertProps,
  onBack,
  backButtonProps,
  onClose,
  closeButtonProps,
  endButtonIconProps,
  startButtonIconProps,
  twClassName = '',
  testID,
  ...headerBaseProps
}) => {
  const resolvedStartButtonIconProps = useMemo(() => {
    if (startButtonIconProps) {
      return startButtonIconProps;
    }
    if (onBack || backButtonProps) {
      const startProps: ButtonIconProps = {
        iconName: IconName.ArrowLeft,
        ...(backButtonProps ?? {}),
        onPress: backButtonProps?.onPress ?? onBack,
      };
      return startProps;
    }
    return undefined;
  }, [onBack, backButtonProps, startButtonIconProps]);

  const resolvedEndButtonIconProps = useMemo(() => {
    const props: ButtonIconProps[] = [];

    if (onClose || closeButtonProps) {
      const closeProps: ButtonIconProps = {
        iconName: IconName.Close,
        ...(closeButtonProps || {}),
        onPress: closeButtonProps?.onPress ?? onClose,
      };
      props.push(closeProps);
    }

    if (endButtonIconProps) {
      props.push(...endButtonIconProps);
    }
    return props.length > 0 ? props : undefined;
  }, [endButtonIconProps, onClose, closeButtonProps]);

  return (
    <HeaderBase
      testID={testID}
      startButtonIconProps={resolvedStartButtonIconProps}
      endButtonIconProps={resolvedEndButtonIconProps}
      {...headerBaseProps}
      twClassName={`px-2 ${twClassName}`}
    >
      <IconAlert {...iconAlertProps} severity={severity} size={IconSize.Lg} />
    </HeaderBase>
  );
};

HeaderAlert.displayName = 'HeaderAlert';
