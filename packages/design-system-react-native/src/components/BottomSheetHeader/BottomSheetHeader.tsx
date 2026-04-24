// Third party dependencies.
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';

// External dependencies.
import { ButtonIcon, ButtonIconSize } from '../ButtonIcon';
import { HeaderBase } from '../HeaderBase';
import { IconName } from '../Icon';

import type { BottomSheetHeaderProps } from './BottomSheetHeader.types';

export const BottomSheetHeader: React.FC<BottomSheetHeaderProps> = ({
  style,
  twClassName,
  children,
  onBack,
  backButtonProps,
  onClose,
  closeButtonProps,
  ...props
}) => {
  const tw = useTailwind();

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
      style={[tw.style('px-4', twClassName), style]}
      startAccessory={startAccessory}
      endAccessory={endAccessory}
    >
      {children}
    </HeaderBase>
  );
};
