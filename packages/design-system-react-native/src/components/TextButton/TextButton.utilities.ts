/* eslint-disable jsdoc/check-param-names */
/* eslint-disable jsdoc/require-param */
import type { TextButtonProps } from './TextButton.types';

export const generateTextButtonContainerClassNames = ({
  isPressed = false,
  isLoading = false,
  twClassName = '',
}: Partial<TextButtonProps> & {
  isPressed?: boolean;
}): string => {
  const isPressedOrLoading = isPressed || isLoading;
  const backgroundStyle = isPressedOrLoading
    ? 'bg-background-pressed'
    : 'bg-transparent';

  return `${backgroundStyle} ${twClassName}`;
};

export const generateTextButtonTextClassNames = ({
  isPressed = false,
  isInverse = false,
  isLoading = false,
}: Partial<TextButtonProps> & {
  isPressed?: boolean;
}): string => {
  let textColor, textStyle;
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  const isPressedOrLoading = isPressed || isLoading;
  if (isInverse) {
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
