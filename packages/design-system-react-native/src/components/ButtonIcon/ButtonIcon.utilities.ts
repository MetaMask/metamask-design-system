/* eslint-disable jsdoc/check-param-names */
/* eslint-disable jsdoc/require-param */
import { DEFAULT_BUTTONICON_PROPS } from './ButtonIcon.constants';
import type { ButtonIconProps } from './ButtonIcon.types';
import { ButtonIconVariant } from './ButtonIcon.types';

export const generateButtonIconContainerClassNames = ({
  isPressed = false,
  isLoading = false,
  twClassName = '',
}: Partial<ButtonIconProps> & {
  isPressed?: boolean;
}): string => {
  const baseStyle = 'items-center justify-center self-start';

  const isPressedOrLoading = isPressed || isLoading;

  const backgroundColor = isPressedOrLoading
    ? 'bg-background-pressed'
    : 'bg-transparent';
  const backgroundStyle = 'rounded-sm';

  return `${baseStyle} ${backgroundColor} ${backgroundStyle} ${twClassName}`;
};

export const generateButtonIconIconClassNames = ({
  variant = DEFAULT_BUTTONICON_PROPS.variant,
  isPressed = false,
  isInverse = false,
  isLoading = false,
}: Partial<ButtonIconProps> & {
  isPressed?: boolean;
}): string => {
  let iconColor;
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  const isPressedOrLoading = isPressed || isLoading;

  if (isInverse) {
    iconColor = 'text-primary-inverse';
  } else {
    switch (variant) {
      case ButtonIconVariant.Primary:
        iconColor = isPressedOrLoading
          ? 'text-primary-defaultPressed'
          : 'text-primary-default';
        break;
      case ButtonIconVariant.Secondary:
        iconColor = 'text-icon-default';
        break;
      default:
        iconColor = 'text-icon-default';
    }
  }

  return `${iconColor}`;
};
