import React, { useState } from 'react';

import { TextVariant, TextColor } from '../../types';
import { Text, FontWeight } from '../Text';

import type { TextButtonProps } from './TextButton.types';

export const TextButton: React.FC<TextButtonProps> = ({
  children,
  variant = TextVariant.BodyMd,
  fontWeight = FontWeight.Medium,
  twClassName,
  accessibilityRole = 'link',
  onPress,
  onPressIn,
  onPressOut,
  suppressHighlighting = true,
  ...rest
}) => {
  const [pressed, setPressed] = useState(false);

  const handlePressIn: NonNullable<TextButtonProps['onPressIn']> = (e) => {
    setPressed(true);
    onPressIn?.(e);
  };

  const handlePressOut: NonNullable<TextButtonProps['onPressOut']> = (e) => {
    setPressed(false);
    onPressOut?.(e);
  };

  return (
    <Text
      {...rest}
      accessibilityRole={accessibilityRole}
      variant={variant}
      fontWeight={fontWeight}
      color={
        pressed ? TextColor.PrimaryDefaultPressed : TextColor.PrimaryDefault
      }
      twClassName={twClassName}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      suppressHighlighting={suppressHighlighting}
    >
      {children}
    </Text>
  );
};
