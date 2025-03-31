// Text.test.tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { render } from '@testing-library/react-native';
import React from 'react';

import Text from './Text';
import {
  DEFAULT_TEXT_COLOR,
  DEFAULT_TEXT_VARIANT,
  MAPPING_FONTWEIGHT_TO_FONTFAMILYSTYLECLASSNAME,
} from './Text.constants';
import {
  TextVariant,
  TextColor,
  FontWeight,
  FontStyle,
  FontFamily,
} from './Text.types';
import { generateTextClassNames } from './Text.utilities';

describe('Text', () => {
  describe('generateTextClassNames', () => {
    it('returns correct default class names when no props are provided', () => {
      const classNames = generateTextClassNames({});
      expect(classNames).toContain(`text-${DEFAULT_TEXT_VARIANT}`);
      expect(classNames).toContain(
        `font-${FontFamily.Default}${MAPPING_FONTWEIGHT_TO_FONTFAMILYSTYLECLASSNAME[FontWeight.Regular]}`,
      );
      expect(classNames).toContain(DEFAULT_TEXT_COLOR);
    });

    it('generates class names correctly for each variant', () => {
      Object.values(TextVariant).forEach((variant) => {
        const classNames = generateTextClassNames({ variant });
        expect(classNames).toContain(`text-${variant}`);
      });
    });

    it('generates class names correctly for each color', () => {
      Object.values(TextColor).forEach((color) => {
        const classNames = generateTextClassNames({ color });
        expect(classNames).toContain(`${color}`);
      });
    });

    it('includes bold in class names when fontWeight is Bold', () => {
      const classNames = generateTextClassNames({
        fontWeight: FontWeight.Bold,
        variant: TextVariant.BodyMd,
      });
      expect(classNames).toContain(`font-default-bold`);
    });

    it('includes italic in class names when fontStyle is Italic', () => {
      const classNames = generateTextClassNames({
        fontStyle: FontStyle.Italic,
        variant: TextVariant.BodyMd,
      });
      expect(classNames).toContain(`font-default-regular-italic`);
    });

    it('combines bold and italic correctly', () => {
      const classNames = generateTextClassNames({
        fontWeight: FontWeight.Bold,
        fontStyle: FontStyle.Italic,
        variant: TextVariant.BodyMd,
      });
      expect(classNames).toContain(`font-default-bold-italic`);
    });

    it('includes twClassName', () => {
      const classNames = generateTextClassNames({
        twClassName: 'text-primary-default',
      });
      expect(classNames).toContain('text-primary-default');
    });
  });

  describe('Text Component', () => {
    it('renders children correctly', () => {
      const { getByText } = render(<Text>Hello, World!</Text>);
      expect(getByText('Hello, World!')).toBeDefined();
    });

    it('applies default styles when no props are provided', () => {
      let expectedStyles;

      const TestComponent = () => {
        const tw = useTailwind();
        const expectedClassNames = generateTextClassNames({});
        expectedStyles = tw`${expectedClassNames}`;
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
        const expectedClassNames = generateTextClassNames(props);
        expectedStyles = tw`${expectedClassNames}`;
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
          const expectedClassNames = generateTextClassNames({ variant });
          expectedStyles = tw`${expectedClassNames}`;
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
          const expectedClassNames = generateTextClassNames({ color });
          expectedStyles = tw`${expectedClassNames}`;
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
          const expectedClassNames = generateTextClassNames({
            fontWeight: weight,
          });
          expectedStyles = tw`${expectedClassNames}`;
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
          const expectedClassNames = generateTextClassNames({ fontStyle });
          expectedStyles = tw`${expectedClassNames}`;
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
      let expectedStyles;
      const customStyle = { margin: 10 };

      const TestComponent = () => {
        const tw = useTailwind();
        const expectedClassNames = generateTextClassNames({});
        expectedStyles = tw`${expectedClassNames}`;
        return (
          <Text testID="text" style={customStyle}>
            Styled Text
          </Text>
        );
      };

      const { getByTestId } = render(<TestComponent />);
      const textElement = getByTestId('text');

      expect(expectedStyles).toBeDefined();
      expect(textElement.props.style).toContainEqual(customStyle);
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
