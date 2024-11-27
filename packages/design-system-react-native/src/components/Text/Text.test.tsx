import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { render } from '@testing-library/react-native';
import React from 'react';

import Text from './Text';
import { DEFAULT_TEXT_COLOR, DEFAULT_TEXT_VARIANT } from './Text.constants';
import { TextVariant, TextColor, FontWeight, FontStyle } from './Text.types';
import { generateTextClassNames } from './Text.utilities';

jest.mock('@metamask/design-system-twrnc-preset', () => ({
  useTailwind,
}));
describe('Text', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  describe('generateTextClassNames', () => {
    it('returns default class names when no props are provided', () => {
      const classNames = generateTextClassNames({});
      expect(classNames).toBe(
        `text-${DEFAULT_TEXT_VARIANT} font-${DEFAULT_TEXT_VARIANT} text-${DEFAULT_TEXT_COLOR}`,
      );
    });

    it('generates class names correctly for each variant', () => {
      Object.values(TextVariant).forEach((variant) => {
        const classNames = generateTextClassNames({ variant });
        expect(classNames).toContain(`text-${variant}`);
        expect(classNames).toContain(`font-${variant}`);
      });
    });

    it('generates class names correctly for each color', () => {
      Object.values(TextColor).forEach((color) => {
        const classNames = generateTextClassNames({ color });
        expect(classNames).toContain(`text-${color}`);
      });
    });

    it('includes bold in class names when fontWeight is Bold', () => {
      const classNames = generateTextClassNames({
        fontWeight: FontWeight.Bold,
        variant: TextVariant.BodyMd,
      });
      expect(classNames).toContain(`font-body-md-bold`);
    });

    it('includes italic in class names when fontStyle is Italic', () => {
      const classNames = generateTextClassNames({
        fontStyle: FontStyle.Italic,
        variant: TextVariant.BodyMd,
      });
      expect(classNames).toContain(`font-body-md-italic`);
    });

    it('combines bold and italic correctly', () => {
      const classNames = generateTextClassNames({
        fontWeight: FontWeight.Bold,
        fontStyle: FontStyle.Italic,
        variant: TextVariant.BodyMd,
      });
      expect(classNames).toContain(`font-body-md-bold-italic`);
    });

    it('includes twClassName', () => {
      const classNames = generateTextClassNames({
        twClassName: 'custom-class',
      });
      expect(classNames).toContain('custom-class');
    });
  });

  describe('Variants', () => {
    Object.values(TextVariant).forEach((variant) => {
      it(`renders ${variant} variant correctly`, () => {
        const twMock = jest.fn().mockReturnValue({});
        (useTailwind as jest.Mock).mockReturnValue(twMock);

        render(<Text variant={variant}>Test</Text>);

        const expectedClassNames = generateTextClassNames({ variant });
        expect(twMock).toHaveBeenCalledWith(expectedClassNames);
      });
    });
  });

  describe('Colors', () => {
    Object.values(TextColor).forEach((color) => {
      it(`applies ${color} color correctly`, () => {
        const twMock = jest.fn().mockReturnValue({});
        (useTailwind as jest.Mock).mockReturnValue(twMock);

        render(<Text color={color}>Test</Text>);

        const expectedClassNames = generateTextClassNames({ color });
        expect(twMock).toHaveBeenCalledWith(expectedClassNames);
      });
    });
  });

  describe('Font Weight', () => {
    Object.values(FontWeight).forEach((weight) => {
      it(`applies font weight ${weight} correctly`, () => {
        const twMock = jest.fn().mockReturnValue({});
        (useTailwind as jest.Mock).mockReturnValue(twMock);

        render(<Text fontWeight={weight}>Test</Text>);

        const expectedClassNames = generateTextClassNames({
          fontWeight: weight,
        });
        expect(twMock).toHaveBeenCalledWith(expectedClassNames);
      });
    });
  });

  describe('Font Style', () => {
    Object.values(FontStyle).forEach((style) => {
      it(`applies font style ${style} correctly`, () => {
        const twMock = jest.fn().mockReturnValue({});
        (useTailwind as jest.Mock).mockReturnValue(twMock);

        render(<Text fontStyle={style}>Test</Text>);

        const expectedClassNames = generateTextClassNames({ fontStyle: style });
        expect(twMock).toHaveBeenCalledWith(expectedClassNames);
      });
    });
  });

  it('renders children correctly', () => {
    const { getByText } = render(
      <Text variant={TextVariant.BodyMd}>Hello, World!</Text>,
    );
    const textElement = getByText('Hello, World!');
    expect(textElement).not.toBeNull();
  });

  it('renders with default color when no color prop is provided', () => {
    const twMock = jest.fn().mockReturnValue({});
    (useTailwind as jest.Mock).mockReturnValue(twMock);

    render(<Text variant={TextVariant.BodyMd}>Default Color Text</Text>);

    const expectedClassNames = generateTextClassNames({
      variant: TextVariant.BodyMd,
    });
    expect(twMock).toHaveBeenCalledWith(expectedClassNames);
  });

  it('renders with default variant (BodyMd) when no variant is provided', () => {
    const twMock = jest.fn().mockReturnValue({});
    (useTailwind as jest.Mock).mockReturnValue(twMock);

    render(<Text>Default Variant Text</Text>);

    const expectedClassNames = generateTextClassNames({});
    expect(twMock).toHaveBeenCalledWith(expectedClassNames);
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

  it('combines style prop with generated styles', () => {
    const customStyle = { margin: 10 };
    const { getByText } = render(<Text style={customStyle}>Styled Text</Text>);
    const textElement = getByText('Styled Text');
    expect(textElement.props.style).toContain(customStyle);
  });

  it('applies custom class names from twClassName', () => {
    const twMock = jest.fn().mockReturnValue({});
    (useTailwind as jest.Mock).mockReturnValue(twMock);

    render(<Text twClassName="text-success-default">Custom Class Text</Text>);

    expect(twMock).toHaveBeenCalledWith(
      expect.stringContaining('text-success-default'),
    );
  });

  it('generates correct class names and applies styles', () => {
    const twMock = jest.fn().mockReturnValue({});
    (useTailwind as jest.Mock).mockReturnValue(twMock);

    const props = {
      variant: TextVariant.HeadingLg,
      color: TextColor.PrimaryDefault,
      fontWeight: FontWeight.Bold,
      fontStyle: FontStyle.Italic,
      twClassName: 'custom-class',
    };

    render(<Text {...props}>Styled Text</Text>);

    const expectedClassNames = generateTextClassNames(props);

    expect(twMock).toHaveBeenCalledWith(expectedClassNames);
  });
});
