import { resolveClassName } from '@metamask/design-system-shared';
import React, { useCallback } from 'react';

import { ButtonBase } from '../ButtonBase';

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
  className,
  twClassName = '',
  style,
  ...props
}: ButtonSemanticProps) => {
  const getContainerClassName = useCallback(
    (pressed: boolean): string => {
      const twClasses =
        typeof twClassName === 'function' ? twClassName(pressed) : twClassName;
      const classes =
        typeof className === 'function' ? className(pressed) : className;

      const bgClass =
        pressed || isLoading
          ? (TWCLASSMAP_BUTTONSEMANTIC_BG_PRESSED[severity] ??
            TWCLASSMAP_BUTTONSEMANTIC_BG_PRESSED[
              ButtonSemanticSeverity.Success
            ])
          : (TWCLASSMAP_BUTTONSEMANTIC_BG[severity] ??
            TWCLASSMAP_BUTTONSEMANTIC_BG[ButtonSemanticSeverity.Success]);

      return resolveClassName(bgClass, twClasses, classes);
    },
    [severity, isLoading, twClassName, className],
  );

  const getTextClassName = useCallback(
    (_pressed: boolean): string =>
      TWCLASSMAP_BUTTONSEMANTIC_TEXT[severity] ??
      TWCLASSMAP_BUTTONSEMANTIC_TEXT[ButtonSemanticSeverity.Success],
    [severity],
  );

  return (
    <ButtonBase
      textProps={textProps}
      spinnerProps={spinnerProps}
      startIconProps={startIconProps}
      endIconProps={endIconProps}
      isLoading={isLoading}
      className={getContainerClassName}
      textClassName={getTextClassName}
      iconClassName={getTextClassName}
      style={style}
      {...props}
    >
      {children}
    </ButtonBase>
  );
};
