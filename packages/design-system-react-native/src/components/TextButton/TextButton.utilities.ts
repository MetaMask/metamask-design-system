/* eslint-disable jsdoc/check-param-names */
/* eslint-disable jsdoc/require-param */
import type { TextButtonProps } from './TextButton.types';

export const generateTextButtonContainerClassNames = ({
  isPressed = false,
  isDanger = false,
  isInverse = false,
  isLoading = false,
  twClassName = '',
}: Partial<TextButtonProps> & {
  isPressed?: boolean;
}): string => {
  const baseStyle = 'flex-row items-center justify-center gap-x-2 self-start';
  let backgroundStyle;

  const isPressedOrLoading = isPressed || isLoading;

  if (isInverse && isDanger) {
    backgroundStyle = isPressedOrLoading
      ? 'bg-background-defaultPressed'
      : 'bg-background-default';
  } else if (isDanger) {
    backgroundStyle = isPressedOrLoading
      ? 'bg-error-mutedPressed'
      : 'bg-transparent';
  } else if (isInverse) {
    backgroundStyle = isPressedOrLoading
      ? 'bg-background-pressed'
      : 'bg-transparent';
  } else {
    backgroundStyle = isPressedOrLoading
      ? 'bg-background-pressed'
      : 'bg-transparent';
  }

  return `${baseStyle} ${backgroundStyle} ${twClassName}`;
};

export const generateTextButtonTextClassNames = ({
  isPressed = false,
  isDanger = false,
  isInverse = false,
  isLoading = false,
}: Partial<TextButtonProps> & {
  isPressed?: boolean;
}): string => {
  let textColor, textStyle;
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  const isPressedOrLoading = isPressed || isLoading;
  if (isInverse && isDanger) {
    textColor = isPressedOrLoading
      ? 'text-error-defaultPressed'
      : 'text-error-default';
    textStyle = 'no-underline';
  } else if (isDanger) {
    textColor = isPressedOrLoading
      ? 'text-error-defaultPressed'
      : 'text-error-default';
    textStyle = isPressedOrLoading ? 'underline' : 'no-underline';
  } else if (isInverse) {
    textColor = 'text-primary-inverse';
    textStyle = 'underline';
  } else {
    textColor = isPressedOrLoading
      ? 'text-primary-defaultPressed'
      : 'text-primary-default';
    textStyle = isPressedOrLoading ? 'underline' : 'no-underline';
  }

  return `${textColor} ${textStyle}`;
};
