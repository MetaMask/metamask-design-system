// Third party dependencies.
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';

// External dependencies.
import { ButtonIcon, ButtonIconSize } from '../../ButtonIcon';
import { HeaderBase } from '../../HeaderBase';
import { IconName } from '../../Icon';

// Internal dependencies.
import { BOTTOM_SHEET_HEADER_VARIANT_MAP } from './BottomSheetHeader.constants';
import type { BottomSheetHeaderProps } from './BottomSheetHeader.types';
import { BottomSheetHeaderVariant } from './BottomSheetHeader.types';

export const BottomSheetHeader: React.FC<BottomSheetHeaderProps> = ({
  style,
  twClassName,
  children,
  onBack,
  backButtonProps,
  onClose,
  closeButtonProps,
  variant = BottomSheetHeaderVariant.Compact,
  ...props
}) => {
  const tw = useTailwind();

  const startAccessory = onBack ? (
    <ButtonIcon
      iconName={IconName.ArrowLeft}
      onPress={onBack}
      size={ButtonIconSize.Lg}
      {...backButtonProps}
    />
  ) : undefined;

  const endAccessory = onClose ? (
    <ButtonIcon
      iconName={IconName.Close}
      onPress={onClose}
      size={ButtonIconSize.Lg}
      {...closeButtonProps}
    />
  ) : undefined;

  const headerBaseVariant = BOTTOM_SHEET_HEADER_VARIANT_MAP[variant];

  return (
    <HeaderBase
      style={[tw.style('px-4', twClassName), style]}
      startAccessory={startAccessory}
      endAccessory={endAccessory}
      variant={headerBaseVariant}
      {...props}
    >
      {children}
    </HeaderBase>
  );
};
