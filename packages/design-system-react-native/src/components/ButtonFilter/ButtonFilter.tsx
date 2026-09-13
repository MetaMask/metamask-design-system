import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';

import { ButtonBase } from '../ButtonBase';

import type { ButtonFilterProps } from './ButtonFilter.types';

/**
 * @deprecated Use `FilterButton` instead. This component will be removed
 * in a future major version of the design system.
 *
 * @param props - Component props.
 * @param props.isActive - Whether the filter is in the active state.
 * @param props.twClassName - Tailwind override classes for the container.
 * @param props.textProps - Props forwarded to the internal text element.
 * @param props.style - Style overrides applied to the container.
 * @returns The rendered filter button element.
 */
export const ButtonFilter: React.FC<ButtonFilterProps> = (props) => {
  const {
    isActive = false,
    twClassName,
    textProps,
    style,
    ...restProps
  } = props;
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
    <ButtonBase
      textProps={mergedTextProps}
      style={mergedStyle}
      {...restProps}
    />
  );
};
