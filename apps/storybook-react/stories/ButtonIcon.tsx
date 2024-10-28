import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { twMerge } from 'tailwind-merge';

export enum ButtonIconSize {
  Sm = 'sm',
  Md = 'md',
  Lg = 'lg',
}

export enum ButtonIconVariant {
  Secondary = 'secondary',
  Primary = 'primary',
}

export enum ButtonIconShape {
  Square = 'square',
  Circle = 'circle',
}

export interface ButtonIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ariaLabel: string;
  className?: string;
  disabled?: boolean;
  size?: ButtonIconSize;
  iconSize?: 'xs' | 'sm' | 'lg' | '1x';
  icon: IconDefinition;
  variant?: ButtonIconVariant;
  shape?: ButtonIconShape;
  isFloating?: boolean;
}

export const ButtonIcon: React.FC<ButtonIconProps> = React.forwardRef<
  HTMLButtonElement,
  ButtonIconProps
>(
  (
    {
      ariaLabel,
      className = '',
      disabled = false,
      size = ButtonIconSize.Lg,
      icon,
      iconSize,
      variant = ButtonIconVariant.Secondary,
      shape = ButtonIconShape.Square,
      isFloating = false,
      ...props
    },
    ref,
  ) => {
    const sizeClass = {
      [ButtonIconSize.Sm]: 'h-6 w-6',
      [ButtonIconSize.Md]: 'h-8 w-8',
      [ButtonIconSize.Lg]: 'h-10 w-10',
    };

    const disabledClasses = 'opacity-50 cursor-not-allowed';

    const variantClasses = {
      [ButtonIconVariant.Secondary]: disabled
        ? `bg-transparent text-icon-default ${disabledClasses}`
        : 'bg-transparent hover:bg-hover active:bg-pressed text-icon-default',
      [ButtonIconVariant.Primary]: disabled
        ? `bg-primary-default text-primary-inverse ${disabledClasses}`
        : 'bg-primary-default text-primary-inverse hover:bg-primary-hover active:bg-primary-pressed ',
    };

    const floatingClasses = {
      [ButtonIconVariant.Secondary]: isFloating
        ? 'shadow-md bg-default hover:bg-default-hover active:bg-default-pressed'
        : '',
      [ButtonIconVariant.Primary]: isFloating
        ? 'shadow-md hover:shadow-primary-default bg-primary-default hover:bg-primary-hover active:bg-primary-pressed'
        : '',
    };

    const shapeClasses = {
      [ButtonIconShape.Square]: 'rounded',
      [ButtonIconShape.Circle]: 'rounded-full',
    };

    return (
      <button
        aria-label={ariaLabel}
        title={ariaLabel}
        className={twMerge(
          'flex items-center justify-center',
          sizeClass[size],
          variantClasses[variant],
          shapeClasses[shape],
          floatingClasses[variant],
          className,
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        <FontAwesomeIcon icon={icon} size={mapIconSize(size)} />
      </button>
    );
  },
);

// Helper function to map ButtonIconSize to FontAwesome size
const mapIconSize = (size: ButtonIconSize): 'xs' | 'sm' | 'lg' | '1x' => {
  switch (size) {
    case ButtonIconSize.Sm:
      return 'sm';
    case ButtonIconSize.Md:
      return '1x';
    case ButtonIconSize.Lg:
      return 'lg';
    default:
      return '1x';
  }
};
