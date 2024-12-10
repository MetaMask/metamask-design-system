import { Slot, Slottable } from '@radix-ui/react-slot';
import React from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Icon } from '../icon';
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
      startIconName,
      startIconProps,
      startAccessory,
      endIconName,
      endIconProps,
      endAccessory,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : 'button';

    // Renders the loading state of the button
    // TODO: Add a loading icon
    const renderLoadingState = () => (
      <span>
        <span className="animate-spin mr-2">⌛</span>
        {loadingText ?? children}
      </span>
    );

    // Renders content at the start of the button
    // Can be either an icon or a custom accessory element
    const renderStartContent = () => {
      if (startIconName) {
        return (
          <Icon name={startIconName} className="mr-2" {...startIconProps} />
        );
      }
      if (startAccessory) {
        return <span className="mr-2">{startAccessory}</span>;
      }
      return null;
    };

    // Renders content at the end of the button
    // Can be either an icon or a custom accessory element
    const renderEndContent = () => {
      if (endIconName) {
        return <Icon name={endIconName} className="ml-2" {...endIconProps} />;
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
      'transition-colors duration-150',
      'bg-muted hover:bg-muted-hover active:bg-muted-pressed',
      // Size
      BUTTON_BASE_SIZE_CLASS_MAP[size],
      // Full width
      isFullWidth && 'w-full',
      // Disabled state
      isDisabled && 'opacity-50 cursor-not-allowed',
      // Loading state
      isLoading && 'cursor-wait',
      // Custom classes
      className,
    );

    return (
      <Component
        ref={ref}
        className={mergedClassName}
        disabled={asChild ? undefined : isDisabled ?? isLoading}
        {...props}
      >
        {renderStartContent()}
        <Slottable>{isLoading ? renderLoadingState() : children}</Slottable>
        {renderEndContent()}
      </Component>
    );
  },
);
