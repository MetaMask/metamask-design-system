// Third party dependencies.
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';

// External dependencies.
import { ButtonIcon, ButtonIconSize } from '../ButtonIcon/index.js';
import { HeaderBase } from '../HeaderBase/index.js';
import { IconName } from '../Icon/index.js';

import type { BottomSheetHeaderProps } from './BottomSheetHeader.types.js';

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
      style={[tw.style('px-2', twClassName), style]}
      startAccessory={startAccessory}
      endAccessory={endAccessory}
    >
      {children}
    </HeaderBase>
  );
};
