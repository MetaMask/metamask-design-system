import React, { useCallback } from 'react';

import { ButtonBase } from '../ButtonBase';
import { IconSize } from '../Icon';
import { TextVariant, FontWeight } from '../Text';

import {
  TWCLASSMAP_BUTTONSEMANTIC_BG,
  TWCLASSMAP_BUTTONSEMANTIC_BG_PRESSED,
  TWCLASSMAP_BUTTONSEMANTIC_TEXT,
} from './ButtonSemantic.constants';
import type { ButtonSemanticProps } from './ButtonSemantic.types';
import { ButtonSemanticSeverity } from './ButtonSemantic.types';

export const ButtonSemantic = ({
  severity,
  children,
  textProps,
  spinnerProps,
  startIconProps,
  endIconProps,
  isLoading = false,
  twClassName = '',
  style,
  ...props
}: ButtonSemanticProps) => {
  const getContainerClassName = useCallback(
    (pressed: boolean): string => {
      const classNameStr =
        typeof twClassName === 'function' ? twClassName(pressed) : twClassName;

      const bgClass =
        pressed || isLoading
          ? (TWCLASSMAP_BUTTONSEMANTIC_BG_PRESSED[severity] ??
            TWCLASSMAP_BUTTONSEMANTIC_BG_PRESSED[
              ButtonSemanticSeverity.Success
            ])
          : (TWCLASSMAP_BUTTONSEMANTIC_BG[severity] ??
            TWCLASSMAP_BUTTONSEMANTIC_BG[ButtonSemanticSeverity.Success]);

      return `${bgClass} ${classNameStr}`;
    },
    [severity, isLoading, twClassName],
  );

  const getTextClassName = useCallback(
    (_pressed: boolean): string =>
      TWCLASSMAP_BUTTONSEMANTIC_TEXT[severity] ??
      TWCLASSMAP_BUTTONSEMANTIC_TEXT[ButtonSemanticSeverity.Success],
    [severity],
  );

  return (
    <ButtonBase
      textProps={{
        variant: TextVariant.BodyMd,
        fontWeight: FontWeight.Medium,
        numberOfLines: 1,
        ellipsizeMode: 'clip',
        ...textProps,
      }}
      spinnerProps={{
        ...spinnerProps,
      }}
      startIconProps={{
        size: IconSize.Sm,
        ...startIconProps,
      }}
      endIconProps={{
        size: IconSize.Sm,
        ...endIconProps,
      }}
      isLoading={isLoading}
      twClassName={getContainerClassName}
      textClassName={getTextClassName}
      iconClassName={getTextClassName}
      style={style}
      {...props}
    >
      {children}
    </ButtonBase>
  );
};
