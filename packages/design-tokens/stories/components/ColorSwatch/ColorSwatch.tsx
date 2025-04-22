import { Text, TextVariant } from '@metamask/design-system-react';
import type { FunctionComponent } from 'react';
import React from 'react';

import { lightTheme } from '../../../src';

type ColorSwatchProps = {
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
};

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
      className="flex h-[120px] flex-col-reverse rounded-lg border-2"
      style={{
        backgroundColor: backgroundColor ?? color,
        borderColor,
      }}
      {...props}
    >
      <Text
        className="rounded-b-md p-2"
        variant={TextVariant.BodySm}
        style={{
          backgroundColor: textBackgroundColor,
          color: textColor,
        }}
      >
        <strong className="mb-2 block">
          <code>{name ?? ''}</code>
        </strong>
        <code>{color ?? ''}</code>
      </Text>
    </div>
  );
};
