import {
  FontFamily,
  FontStyle,
  FontWeight,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { render, renderHook } from '@testing-library/react-native';
import React from 'react';

import { Text } from './Text';
import {
  TWCLASSMAP_TEXT_FONTWEIGHT,
  TWCLASSMAP_TEXT_VARIANT_FONTWEIGHT,
} from './Text.constants';

function buildTextStyleArgs({
  variant = TextVariant.BodyMd,
  color = TextColor.TextDefault,
  fontWeight,
  fontFamily = FontFamily.Default,
  fontStyle = FontStyle.Normal,
  twClassName,
}: Partial<{
  variant: TextVariant;
  color: TextColor;
  fontWeight: FontWeight;
  fontFamily: FontFamily;
  fontStyle: FontStyle;
  twClassName: string;
}> = {}) {
  const fw = fontWeight ?? TWCLASSMAP_TEXT_VARIANT_FONTWEIGHT[variant];
  const isItalic = fontStyle === FontStyle.Italic;
  const resolvedFontWeight =
    fontFamily === FontFamily.Hero ? FontWeight.Bold : fw;
  const fontSuffix = `${TWCLASSMAP_TEXT_FONTWEIGHT[resolvedFontWeight]}${
    isItalic && fontFamily === FontFamily.Default ? '-italic' : ''
  }`;
  const fontClass = `font-${fontFamily}${fontSuffix}`;
  return [
    `text-${variant}`,
    fontClass,
    color,
    ...(twClassName ? [twClassName] : []),
  ].filter(Boolean);
}

describe('Text', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    const { result } = renderHook(() => useTailwind());
    tw = result.current;
  });

  describe('Text Component', () => {
    it('renders children correctly', () => {
      const { getByText } = render(<Text>Hello, World!</Text>);
      expect(getByText('Hello, World!')).toBeOnTheScreen();
    });

    it('applies default styles when no props are provided', () => {
      const { getByTestId } = render(<Text testID="text">Hello, World!</Text>);

      expect(getByTestId('text')).toHaveStyle(
        tw.style(...buildTextStyleArgs()),
      );
    });

    it('applies custom styles based on props', () => {
      const props = {
        variant: TextVariant.HeadingLg,
        color: TextColor.PrimaryDefault,
        fontWeight: FontWeight.Bold,
        fontStyle: FontStyle.Italic,
        twClassName: 'text-primary-default',
      };

      const { getByTestId } = render(
        <Text testID="text" {...props}>
          Styled Text
        </Text>,
      );

      expect(getByTestId('text')).toHaveStyle(
        tw.style(...buildTextStyleArgs(props)),
      );
    });

    Object.values(TextVariant).forEach((variant) => {
      it(`applies variant ${variant} correctly`, () => {
        const { getByTestId } = render(
          <Text testID="text" variant={variant}>
            Test
          </Text>,
        );

        expect(getByTestId('text')).toHaveStyle(
          tw.style(
            ...buildTextStyleArgs({
              variant,
              fontWeight: TWCLASSMAP_TEXT_VARIANT_FONTWEIGHT[variant],
            }),
          ),
        );
      });
    });

    Object.values(TextColor).forEach((color) => {
      it(`applies color ${color} correctly`, () => {
        const { getByTestId } = render(
          <Text testID="text" color={color}>
            Test
          </Text>,
        );

        expect(getByTestId('text')).toHaveStyle(
          tw.style(...buildTextStyleArgs({ color })),
        );
      });
    });

    Object.values(FontWeight).forEach((weight) => {
      it(`applies font weight ${weight} correctly`, () => {
        const { getByTestId } = render(
          <Text testID="text" fontWeight={weight}>
            Test
          </Text>,
        );

        expect(getByTestId('text')).toHaveStyle(
          tw.style(...buildTextStyleArgs({ fontWeight: weight })),
        );
      });
    });

    Object.values(FontFamily).forEach((fontFamily) => {
      it(`applies font family ${fontFamily} correctly`, () => {
        const { getByTestId } = render(
          <Text
            testID="text"
            fontFamily={fontFamily}
            fontWeight={FontWeight.Bold}
          >
            Test
          </Text>,
        );

        expect(getByTestId('text')).toHaveStyle(
          tw.style(
            ...buildTextStyleArgs({ fontFamily, fontWeight: FontWeight.Bold }),
          ),
        );
      });
    });

    Object.values(FontStyle).forEach((fontStyle) => {
      it(`applies font style ${fontStyle} correctly`, () => {
        const { getByTestId } = render(
          <Text testID="text" fontStyle={fontStyle}>
            Test
          </Text>,
        );

        expect(getByTestId('text')).toHaveStyle(
          tw.style(...buildTextStyleArgs({ fontStyle })),
        );
      });
    });

    it('combines custom style prop with generated styles', () => {
      const customStyle = { margin: 10 };

      const { getByTestId } = render(
        <Text testID="text" style={customStyle}>
          Styled Text
        </Text>,
      );

      expect(getByTestId('text')).toHaveStyle(customStyle);
      expect(getByTestId('text')).toHaveStyle(
        tw.style(...buildTextStyleArgs()),
      );
    });

    it('applies accessibilityRole="text"', () => {
      const { getByText } = render(<Text>Accessible Text</Text>);
      const textElement = getByText('Accessible Text');
      expect(textElement.props.accessibilityRole).toBe('text');
    });

    it('passes additional props to RNText', () => {
      const onPressMock = jest.fn();
      const { getByText } = render(
        <Text onPress={onPressMock}>Pressable Text</Text>,
      );
      const textElement = getByText('Pressable Text');
      expect(textElement.props.onPress).toBe(onPressMock);
    });
  });
});
