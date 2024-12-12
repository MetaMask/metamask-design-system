import { Slot, Slottable } from '@radix-ui/react-slot';
import React from 'react';

import { Icon, IconName } from '..';
import { twMerge } from '../../utils/tw-merge';
import { BUTTON_BASE_SIZE_CLASS_MAP } from './ButtonBase.constants';
import type { ButtonBaseProps } from './ButtonBase.types';
import { ButtonBaseSize } from './ButtonBase.types';

export const ButtonBase = React.forwardRef<HTMLButtonElement, ButtonBaseProps>(
  (
    {
      children,
      className,
      size = ButtonBaseSize.Md,
      isFullWidth,
      asChild,
      isDisabled,
      isLoading,
      loadingText,
      loadingIconProps,
      startIconName,
      startIconProps,
      startAccessory,
      endIconName,
      endIconProps,
      endAccessory,
      style,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : 'button';

    const renderLoadingState = () => (
      <span className="inline-flex items-center">
        <Icon
          name={IconName.Loading}
          className={twMerge(
            'animate-spin mr-2 text-inherit',
            loadingIconProps?.className,
          )}
          {...loadingIconProps}
        />
        {loadingText ?? children}
      </span>
    );

    const renderStartContent = () => {
      if (startIconName) {
        return (
          <Icon
            name={startIconName}
            className={twMerge('mr-2 text-inherit', startIconProps?.className)}
            {...startIconProps}
          />
        );
      }
      if (startAccessory) {
        return <span className="mr-2">{startAccessory}</span>;
      }
      return null;
    };

    const renderEndContent = () => {
      if (endIconName) {
        return (
          <Icon
            name={endIconName}
            className={twMerge('ml-2 text-inherit', endIconProps?.className)}
            {...endIconProps}
          />
        );
      }
      if (endAccessory) {
        return <span className="ml-2">{endAccessory}</span>;
      }
      return null;
    };

    const mergedClassName = twMerge(
      // Base styles
      'inline-flex items-center justify-center',
      'rounded-full px-4',
      'text-default font-medium',
      'bg-muted',
      // Size
      BUTTON_BASE_SIZE_CLASS_MAP[size],
      // Full width
      isFullWidth && 'w-full',
      // Disabled state - apply to both isDisabled and isLoading
      (isDisabled || isLoading) && 'opacity-50 cursor-not-allowed',
      // Custom classes
      className,
    );

    return (
      <Component
        ref={ref}
        className={mergedClassName}
        disabled={asChild ? undefined : isDisabled ?? isLoading}
        style={style}
        {...props}
      >
        {renderStartContent()}
        <Slottable>{isLoading ? renderLoadingState() : children}</Slottable>
        {renderEndContent()}
      </Component>
    );
  },
);

ButtonBase.displayName = 'ButtonBase';
