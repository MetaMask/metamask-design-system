// Third party dependencies.
import { mergeTwClassName } from '@metamask/design-system-shared';
import React, { useMemo } from 'react';

// External dependencies.
import type { ButtonIconProps } from '../ButtonIcon';
import { HeaderBase } from '../HeaderBase';
import { IconName } from '../Icon';
import { HeaderStandardCenterColumn } from '../temp-components/HeaderStandardCenterColumn';

// Internal dependencies.
import type { HeaderStandardProps } from './HeaderStandard.types';

export const HeaderStandard: React.FC<HeaderStandardProps> = ({
  title,
  titleProps,
  subtitle,
  subtitleProps,
  children,
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

  const renderContent = () => {
    if (children) {
      return children;
    }
    if (title) {
      return (
        <HeaderStandardCenterColumn
          title={title}
          titleProps={titleProps}
          subtitle={subtitle}
          subtitleProps={subtitleProps}
        />
      );
    }
    return null;
  };

  return (
    <HeaderBase
      testID={testID}
      startButtonIconProps={resolvedStartButtonIconProps}
      endButtonIconProps={resolvedEndButtonIconProps}
      {...headerBaseProps}
      twClassName={mergeTwClassName('px-2', twClassName)}
    >
      {renderContent()}
    </HeaderBase>
  );
};

HeaderStandard.displayName = 'HeaderStandard';
