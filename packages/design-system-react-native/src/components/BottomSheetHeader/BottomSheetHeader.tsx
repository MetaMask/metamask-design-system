import { mergeTwClassName } from '@metamask/design-system-shared';
import React from 'react';

// External dependencies.
import { ButtonIcon, ButtonIconSize } from '../ButtonIcon';
import { HeaderBase } from '../HeaderBase';
import { IconName } from '../Icon';

import type { BottomSheetHeaderProps } from './BottomSheetHeader.types';

export const BottomSheetHeader: React.FC<BottomSheetHeaderProps> = ({
  style,
  twClassName,
  className,
  children,
  onBack,
  backButtonProps,
  onClose,
  closeButtonProps,
  ...props
}) => {
  const startAccessory = onBack ? (
    <ButtonIcon
      iconName={IconName.ArrowLeft}
      onPress={onBack}
      size={ButtonIconSize.Md}
      {...backButtonProps}
    />
  ) : undefined;

  const endAccessory = onClose ? (
    <ButtonIcon
      iconName={IconName.Close}
      onPress={onClose}
      size={ButtonIconSize.Md}
      {...closeButtonProps}
    />
  ) : undefined;
  return (
    <HeaderBase
      {...props}
      twClassName={mergeTwClassName('px-2', twClassName)}
      className={className}
      style={style}
      startAccessory={startAccessory}
      endAccessory={endAccessory}
    >
      {children}
    </HeaderBase>
  );
};
