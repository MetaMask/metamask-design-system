import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';

import { ButtonBase } from '../ButtonBase';

import type { ButtonFilterProps } from './ButtonFilter.types';

export const ButtonFilter: React.FC<ButtonFilterProps> = ({
  isActive = false,
  twClassName,
  textProps,
  style,
  ...props
}) => {
  const tw = useTailwind();

  const mergedStyle = [
    tw.style(isActive ? 'bg-icon-default' : 'bg-background-muted', twClassName),
    style,
  ];

  const mergedTextProps = {
    ...textProps,
    twClassName: [
      isActive ? 'text-icon-inverse' : 'text-default',
      textProps?.twClassName,
    ]
      .filter(Boolean)
      .join(' '),
  };

  return (
    <ButtonBase textProps={mergedTextProps} style={mergedStyle} {...props} />
  );
};
