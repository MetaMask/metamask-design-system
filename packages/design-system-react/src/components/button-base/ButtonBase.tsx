import { Slot, Slottable } from '@radix-ui/react-slot';
import React from 'react';

import { Icon, IconName, IconSize, Text, TextColor } from '..';
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
      textProps,
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
          size={IconSize.Sm}
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
            size={IconSize.Sm}
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
            size={IconSize.Sm}
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

    const renderContent = () => {
      if (children && typeof children === 'string') {
        return (
          <Text color={TextColor.Inherit} asChild {...textProps}>
            <span>{children}</span>
          </Text>
        );
      }
      return children;
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
        <Slottable>
          {isLoading ? renderLoadingState() : renderContent()}
        </Slottable>
        {renderEndContent()}
      </Component>
    );
  },
);

ButtonBase.displayName = 'ButtonBase';
