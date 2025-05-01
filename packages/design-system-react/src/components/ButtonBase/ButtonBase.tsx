import { Slot, Slottable } from '@radix-ui/react-slot';
import React from 'react';

import { ButtonBaseSize } from '../../types';
import { twMerge } from '../../utils/tw-merge';
import { Icon, IconName, IconSize } from '../Icon';
import { Text, FontWeight, TextColor } from '../Text';
import { BUTTON_BASE_SIZE_CLASS_MAP } from './ButtonBase.constants';
import type { ButtonBaseProps } from './ButtonBase.types';

export const ButtonBase = React.forwardRef<HTMLButtonElement, ButtonBaseProps>(
  (
    {
      children,
      className,
      size = ButtonBaseSize.Lg,
      isFullWidth,
      asChild,
      isDisabled,
      isLoading,
      loadingText,
      loadingIconProps,
      loadingTextProps,
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
    const isInteractive = !(isDisabled ?? isLoading);

    const renderLoadingState = () => {
      return (
        <>
          <span className="absolute inline-flex items-center">
            <Icon
              name={IconName.Loading}
              size={IconSize.Sm}
              className={twMerge(
                'mr-2 animate-spin text-inherit',
                loadingIconProps?.className,
              )}
              {...loadingIconProps}
            />
            <Text
              fontWeight={FontWeight.Medium}
              color={TextColor.Inherit}
              {...loadingTextProps}
            >
              {loadingText}
            </Text>
          </span>
          <span className="invisible inline-flex items-center">{children}</span>
        </>
      );
    };

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
          <Text
            fontWeight={FontWeight.Medium}
            color={TextColor.Inherit}
            asChild
            {...textProps}
          >
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
      'font-medium text-default',
      'bg-muted',
      // Add relative positioning for loading state
      'relative',
      // Size
      BUTTON_BASE_SIZE_CLASS_MAP[size],
      // Full width
      isFullWidth && 'w-full',
      // Animation classes - only applied when interactive
      isInteractive && [
        'transition-[transform,colors,opacity]',
        'duration-100',
        'ease-linear',
        'active:scale-[0.97]',
        'active:ease-[cubic-bezier(0.3,0.8,0.3,1)]',
      ],
      // Disabled state - apply to both isDisabled and isLoading
      (isDisabled || isLoading) && 'cursor-not-allowed',
      isDisabled && 'opacity-50',
      // Custom classes
      className,
    );

    return (
      <Component
        ref={ref}
        className={mergedClassName}
        disabled={asChild ? undefined : (isDisabled ?? isLoading)}
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
