import {
  ButtonBaseShape,
  ButtonBaseSize,
  IconName,
} from '@metamask/design-system-shared';
import { Slot, Slottable } from '@radix-ui/react-slot';
import React, { forwardRef } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Icon, IconSize } from '../Icon';
import { Text, FontWeight, TextColor, TextVariant } from '../Text';

import {
  getButtonBaseBorderRadiusTwClass,
  getButtonBaseHorizontalPaddingTwClasses,
  TWCLASSMAP_BUTTONBASE_SIZE_DIMENSION,
} from './ButtonBase.constants';
import type { ButtonBaseProps } from './ButtonBase.types';

export const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  (
    {
      children,
      className,
      size = ButtonBaseSize.Lg,
      shape = ButtonBaseShape.Rounded,
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
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      'aria-describedby': ariaDescribedby,
      'aria-pressed': ariaPressed,
      'aria-expanded': ariaExpanded,
      'aria-controls': ariaControls,
      'aria-haspopup': ariaHaspopup,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : 'button';
    const isInteractive = !(isDisabled ?? isLoading);

    const finalStartIconName = startIconName ?? startIconProps?.name;
    const finalEndIconName = endIconName ?? endIconProps?.name;
    const hasStart = Boolean(finalStartIconName || startAccessory);
    const hasEnd = Boolean(finalEndIconName || endAccessory);
    const hasSideContent = hasStart || hasEnd;
    const iconSize = size === ButtonBaseSize.Lg ? IconSize.Md : IconSize.Sm;
    const labelTextVariant =
      size === ButtonBaseSize.Sm ? TextVariant.BodySm : TextVariant.BodyMd;

    // Calculate tabIndex based on asChild and disabled state
    const getTabIndex = () => {
      if (asChild) {
        return undefined;
      }
      return isDisabled ? -1 : undefined;
    };

    const renderLoadingState = () => (
      <>
        <span
          className="absolute inline-flex items-center gap-x-1"
          aria-hidden="true"
        >
          <Icon
            name={IconName.Loading}
            size={IconSize.Sm}
            className={twMerge(
              'animate-spin text-inherit',
              loadingIconProps?.className,
            )}
            {...loadingIconProps}
          />
          <Text
            variant={labelTextVariant}
            fontWeight={FontWeight.Medium}
            color={TextColor.Inherit}
            asChild
            {...loadingTextProps}
          >
            <span>{loadingText}</span>
          </Text>
        </span>
        <span className="invisible inline-flex items-center">{children}</span>
        {/* Screen reader announcement for loading */}
        <span className="sr-only" aria-live="polite" aria-atomic="true">
          {loadingText || 'Loading'}
        </span>
      </>
    );

    const renderStartContent = () => {
      if (finalStartIconName) {
        return (
          <Icon
            name={finalStartIconName}
            size={iconSize}
            className={twMerge(
              'shrink-0 text-inherit',
              startIconProps?.className,
            )}
            aria-hidden="true"
            {...startIconProps}
          />
        );
      }
      if (startAccessory) {
        return <span aria-hidden="true">{startAccessory}</span>;
      }
      return null;
    };

    const renderEndContent = () => {
      if (finalEndIconName) {
        return (
          <Icon
            name={finalEndIconName}
            size={iconSize}
            className={twMerge(
              'shrink-0 text-inherit',
              endIconProps?.className,
            )}
            aria-hidden="true"
            {...endIconProps}
          />
        );
      }
      if (endAccessory) {
        return <span aria-hidden="true">{endAccessory}</span>;
      }
      return null;
    };

    const renderContent = () => {
      if (children && typeof children === 'string') {
        return (
          <Text
            variant={labelTextVariant}
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
      getButtonBaseBorderRadiusTwClass(size, shape),
      getButtonBaseHorizontalPaddingTwClasses(size, hasStart, hasEnd),
      hasSideContent && 'gap-x-1',
      'font-medium text-default',
      'bg-muted',
      'overflow-hidden',
      // Add relative positioning for loading state
      'relative',
      // Size
      TWCLASSMAP_BUTTONBASE_SIZE_DIMENSION[size],
      // Full width
      isFullWidth && 'w-full',
      // Animation classes - only applied when interactive
      isInteractive && [
        'transition-all',
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
        aria-disabled={isDisabled ? 'true' : undefined}
        aria-busy={isLoading ? 'true' : undefined}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby}
        aria-describedby={ariaDescribedby}
        aria-pressed={ariaPressed}
        aria-expanded={ariaExpanded}
        aria-controls={ariaControls}
        aria-haspopup={ariaHaspopup}
        role={asChild ? undefined : 'button'}
        tabIndex={getTabIndex()}
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
