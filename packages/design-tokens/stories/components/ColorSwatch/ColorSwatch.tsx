import React, { FunctionComponent } from 'react';
import { lightTheme } from '../../../src';
import { Text, TextVariant } from '@metamask/design-system-react';

interface ColorSwatchProps {
  /**
   * The color of the swatch
   */
  color?: string;
  /**
   * The background color of the swatch defaults to the color
   */
  backgroundColor?: string;
  /**
   * The color of text background that contains the name of the color defaults to lightTheme.colors.background.default
   */
  textBackgroundColor?: string;
  /**
   * The border color of the swatch defaults to lightTheme.colors.border.muted
   */
  borderColor?: string;
  /**
   * The color of the text defaults to lightTheme.colors.text.default
   */
  textColor?: string;
  /**
   * The name of the color
   */
  name?: string;
}

export const ColorSwatch: FunctionComponent<ColorSwatchProps> = ({
  color,
  backgroundColor,
  borderColor = lightTheme.colors.border.muted,
  textBackgroundColor = lightTheme.colors.background.default,
  textColor = lightTheme.colors.text.default,
  name,
  ...props
}) => {
  return (
    <div
      className="h-[120px] flex flex-col-reverse rounded-lg border-2"
      style={{
        backgroundColor: backgroundColor ? backgroundColor : color,
        borderColor: borderColor,
      }}
      {...props}
    >
      <Text
        className="p-2 rounded-b-md"
        variant={TextVariant.BodySm}
        style={{
          backgroundColor: textBackgroundColor,
          color: textColor,
        }}
      >
        <strong className="block mb-2">
          <code>{`${name}`}</code>
        </strong>
        <code>{`${color}`}</code>
      </Text>
    </div>
  );
};
