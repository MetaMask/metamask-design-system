import { getAvatarInitials } from '@metamask/design-system-shared';
import React from 'react';

import { AvatarBase } from '../../../AvatarBase';
import { FontWeight, Text, TextColor, TextVariant } from '../../../Text';

import type { AvatarInitialsProps } from './AvatarInitials.types';

export const AvatarInitials = ({
  label,
  textProps,
  ...props
}: AvatarInitialsProps) => {
  const initials = getAvatarInitials(label);

  return (
    <AvatarBase {...props}>
      <Text
        color={TextColor.TextMuted}
        variant={TextVariant.BodySm}
        fontWeight={FontWeight.Medium}
        {...textProps}
        twClassName={`uppercase ${textProps?.twClassName ? ` ${textProps.twClassName}` : ''}`.trim()}
      >
        {initials}
      </Text>
    </AvatarBase>
  );
};
