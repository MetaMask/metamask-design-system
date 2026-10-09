import {
  FontFamily,
  FontStyle,
  FontWeight,
  GROTZEC_LETTER_SPACING_RATIO,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { render } from '@testing-library/react-native';
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
  const fontSuffix = `${TWCLASSMAP_TEXT_FONTWEIGHT[fw]}${
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
  describe('Text Component', () => {
    it('renders children correctly', () => {
      const { getByText } = render(<Text>Hello, World!</Text>);
      expect(getByText('Hello, World!')).toBeDefined();
    });

    it('applies default styles when no props are provided', () => {
      let expectedStyles;

      const TestComponent = () => {
        const tw = useTailwind();
        expectedStyles = tw.style(...buildTextStyleArgs({}));
        return <Text testID="text">Hello, World!</Text>;
      };

      const { getByTestId } = render(<TestComponent />);
      const textElement = getByTestId('text');

      expect(expectedStyles).toBeDefined();
      expect(textElement.props.style[0]).toStrictEqual(expectedStyles);
    });

    it('applies custom styles based on props', () => {
      let expectedStyles;
      const props = {
        variant: TextVariant.HeadingLg,
        color: TextColor.PrimaryDefault,
        fontWeight: FontWeight.Bold,
        fontStyle: FontStyle.Italic,
        twClassName: 'text-primary-default',
      };

      const TestComponent = () => {
        const tw = useTailwind();
        expectedStyles = tw.style(...buildTextStyleArgs(props));
        return (
          <Text testID="text" {...props}>
            Styled Text
          </Text>
        );
      };

      const { getByTestId } = render(<TestComponent />);
      const textElement = getByTestId('text');

      expect(expectedStyles).toBeDefined();
      expect(textElement.props.style[0]).toStrictEqual(expectedStyles);
    });

    Object.values(TextVariant).forEach((variant) => {
      it(`applies variant ${variant} correctly`, () => {
        let expectedStyles;

        const TestComponent = () => {
          const tw = useTailwind();
          expectedStyles = tw.style(
            ...buildTextStyleArgs({
              variant,
              fontWeight: TWCLASSMAP_TEXT_VARIANT_FONTWEIGHT[variant],
            }),
          );
          return (
            <Text testID="text" variant={variant}>
              Test
            </Text>
          );
        };

        const { getByTestId } = render(<TestComponent />);
        const textElement = getByTestId('text');

        expect(expectedStyles).toBeDefined();
        expect(textElement.props.style[0]).toStrictEqual(expectedStyles);
      });
    });

    Object.values(TextColor).forEach((color) => {
      it(`applies color ${color} correctly`, () => {
        let expectedStyles;

        const TestComponent = () => {
          const tw = useTailwind();
          expectedStyles = tw.style(...buildTextStyleArgs({ color }));
          return (
            <Text testID="text" color={color}>
              Test
            </Text>
          );
        };

        const { getByTestId } = render(<TestComponent />);
        const textElement = getByTestId('text');

        expect(expectedStyles).toBeDefined();
        expect(textElement.props.style[0]).toStrictEqual(expectedStyles);
      });
    });

    Object.values(FontWeight).forEach((weight) => {
      it(`applies font weight ${weight} correctly`, () => {
        let expectedStyles;

        const TestComponent = () => {
          const tw = useTailwind();
          expectedStyles = tw.style(
            ...buildTextStyleArgs({ fontWeight: weight }),
          );
          return (
            <Text testID="text" fontWeight={weight}>
              Test
            </Text>
          );
        };

        const { getByTestId } = render(<TestComponent />);
        const textElement = getByTestId('text');

        expect(expectedStyles).toBeDefined();
        expect(textElement.props.style[0]).toStrictEqual(expectedStyles);
      });
    });

    Object.values(FontStyle).forEach((fontStyle) => {
      it(`applies font style ${fontStyle} correctly`, () => {
        let expectedStyles;

        const TestComponent = () => {
          const tw = useTailwind();
          expectedStyles = tw.style(...buildTextStyleArgs({ fontStyle }));
          return (
            <Text testID="text" fontStyle={fontStyle}>
              Test
            </Text>
          );
        };

        const { getByTestId } = render(<TestComponent />);
        const textElement = getByTestId('text');

        expect(expectedStyles).toBeDefined();
        expect(textElement.props.style[0]).toStrictEqual(expectedStyles);
      });
    });

    it('combines custom style prop with generated styles', () => {
      const customStyle = { margin: 10 };

      const TestComponent = () => {
        return (
          <Text testID="text" style={customStyle}>
            Styled Text
          </Text>
        );
      };

      const { getByTestId } = render(<TestComponent />);
      const textElement = getByTestId('text');

      expect(textElement.props.style).toContainEqual(customStyle);
    });

    it('applies -2% letter spacing for Grotzec families at the variant size', () => {
      [FontFamily.Accent, FontFamily.Hero].forEach((fontFamily) => {
        const { getByTestId } = render(
          <Text testID="text" fontFamily={fontFamily}>
            Grotzec
          </Text>,
        );
        const textStyle = getByTestId('text').props.style[0];
        expect(textStyle.letterSpacing).toBe(
          textStyle.fontSize * GROTZEC_LETTER_SPACING_RATIO,
        );
      });
    });

    it('keeps variant letter spacing for the default family', () => {
      let expectedStyles: { letterSpacing?: number | string } | undefined;

      const TestComponent = () => {
        const tw = useTailwind();
        expectedStyles = tw.style(
          ...buildTextStyleArgs({ fontFamily: FontFamily.Default }),
        );
        return (
          <Text testID="text" fontFamily={FontFamily.Default}>
            Inter
          </Text>
        );
      };

      const { getByTestId } = render(<TestComponent />);
      expect(getByTestId('text').props.style[0].letterSpacing).toBe(
        expectedStyles?.letterSpacing,
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
