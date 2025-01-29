import React from 'react';

import { twMerge } from '../../utils/tw-merge';
import { ButtonBase } from '../button-base';
import { Icon } from '../icon';
import {
  BUTTON_ICON_SIZE_CLASSMAP,
  BUTTON_ICON_SIZE_TO_ICON_SIZE_MAP,
} from './ButtonIcon.constants';
import type { ButtonIconProps } from './ButtonIcon.types';
import { ButtonIconSize } from './ButtonIcon.types';

export const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonIconProps>(
  (
    {
      className,
      iconName,
      iconProps,
      ariaLabel,
      isDisabled = false,
      isInverse = false,
      isFloating = false,
      size = ButtonIconSize.Md,
      style,
      ...props
    },
    ref,
  ) => {
    const mergedClassName = twMerge(
      // Base styles
      'p-0',
      // Size styles
      BUTTON_ICON_SIZE_CLASSMAP[size],
      // Floating styles
      isFloating && [
        'rounded-full',
        !isInverse && 'bg-icon-default text-background-default',
        isInverse && 'text-icon-default bg-background-default',
      ],
      // Non-floating styles
      !isFloating && [
        'rounded bg-transparent hover:bg-hover active:bg-pressed',
        !isInverse && 'text-icon-default',
        isInverse && 'text-background-default',
      ],
      className,
    );

    return (
      <ButtonBase
        ref={ref}
        className={mergedClassName}
        isDisabled={isDisabled}
        aria-label={ariaLabel}
        {...props}
      >
        <Icon
          name={iconName}
          size={BUTTON_ICON_SIZE_TO_ICON_SIZE_MAP[size]}
          className={twMerge('text-inherit', iconProps?.className)}
          {...iconProps}
        />
      </ButtonBase>
    );
  },
);

ButtonIcon.displayName = 'ButtonIcon';
