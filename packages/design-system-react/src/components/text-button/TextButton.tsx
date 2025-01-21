import { Slot, Slottable } from '@radix-ui/react-slot';
import React from 'react';

import { Icon, IconName, IconSize, Text, TextColor } from '..';
import { twMerge } from '../../utils/tw-merge';
import type { TextButtonProps } from './TextButton.types';

export const TextButton = React.forwardRef<HTMLButtonElement, TextButtonProps>(
  (
    {
      children,
      className,
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
      isDanger,
      isInverse,
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
    const isInteractive = !(isDisabled ?? isLoading);

    const mergedClassName = twMerge(
      // Base styles
      'inline-flex items-center justify-center',
      'font-medium',
      // Default styles
      !isDanger &&
        !isInverse && [
          'bg-transparent text-primary-default',
          // Only apply hover/active styles when interactive
          isInteractive && [
            'hover:bg-hover hover:text-primary-default-hover',
            'active:bg-pressed active:text-primary-default-pressed',
          ],
        ],
      // Danger styles
      isDanger &&
        !isInverse && [
          'bg-transparent text-error-default',
          // Only apply hover/active styles when interactive
          isInteractive && [
            'hover:bg-error-muted-hover hover:text-error-default-hover',
            'active:bg-error-muted-pressed active:text-error-default-pressed',
          ],
        ],
      // Inverse styles
      isInverse && [
        'bg-transparent text-primary-inverse underline',
        // Only apply hover/active styles when interactive
        isInteractive && ['hover:bg-hover', 'active:bg-pressed'],
      ],
      // Disabled state - apply to both isDisabled and isLoading
      (isDisabled || isLoading) && 'opacity-50 cursor-not-allowed',
      // Animation classes - only applied when interactive
      isInteractive && [
        'transition-[colors,opacity]',
        'duration-100',
        'ease-linear',
      ],
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

TextButton.displayName = 'TextButton';
