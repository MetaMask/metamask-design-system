import { render, screen } from '@testing-library/react';
import React from 'react';

import { twMerge } from '../../utils/tw-merge';
import {
  Text,
  TextVariant,
  TextColor,
  TextAlign,
  FontWeight,
  FontStyle,
  TextTransform,
  OverflowWrap,
} from '.';
import {
  CLASSMAP_TEXT_VARIANT_FONTSTYLE,
  CLASSMAP_TEXT_VARIANT_FONTWEIGHT,
} from './Text.constants';

describe('Text Component', () => {
  it('renders with props applied to the underlying element', () => {
    render(
      <Text variant={TextVariant.BodyMd} data-testid="text">
        Hello, World!
      </Text>,
    );
    expect(screen.getByTestId('text')).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    render(<Text variant={TextVariant.BodyMd}>Hello, World!</Text>);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });

  describe('Variants', () => {
    Object.values(TextVariant).forEach((variant) => {
      it(`renders ${variant} variant correctly`, () => {
        const { container } = render(<Text variant={variant}>Test</Text>);

        const expectedClassNames = twMerge(
          TextColor.TextDefault,
          CLASSMAP_TEXT_VARIANT_FONTSTYLE[variant],
          CLASSMAP_TEXT_VARIANT_FONTWEIGHT[variant],
        );

        expectedClassNames.split(' ').forEach((className) => {
          expect(container.firstChild).toHaveClass(className);
        });
      });
    });
  });

  describe('Colors', () => {
    Object.values(TextColor).forEach((color) => {
      it(`applies ${color} color correctly`, () => {
        const { container } = render(<Text color={color}>Test</Text>);
        expect(container.firstChild).toHaveClass(color);
      });
    });
  });

  describe('Text Alignment', () => {
    Object.values(TextAlign).forEach((alignment) => {
      it(`applies ${alignment} alignment correctly`, () => {
        const { container } = render(<Text textAlign={alignment}>Test</Text>);
        expect(container.firstChild).toHaveClass(alignment);
      });
    });
  });

  describe('Font Weight', () => {
    Object.values(FontWeight).forEach((weight) => {
      it(`applies ${weight} font weight correctly`, () => {
        const { container } = render(<Text fontWeight={weight}>Test</Text>);
        expect(container.firstChild).toHaveClass(weight);
      });
    });
  });

  describe('Font Style', () => {
    Object.values(FontStyle).forEach((style) => {
      it(`applies ${style} font style correctly`, () => {
        const { container } = render(<Text fontStyle={style}>Test</Text>);
        expect(container.firstChild).toHaveClass(style);
      });
    });
  });

  describe('Text Transform', () => {
    Object.values(TextTransform).forEach((transform) => {
      it(`applies ${transform} text transform correctly`, () => {
        const { container } = render(
          <Text textTransform={transform}>Test</Text>,
        );
        expect(container.firstChild).toHaveClass(transform);
      });
    });
  });

  describe('Overflow Wrap', () => {
    Object.values(OverflowWrap).forEach((wrap) => {
      it(`applies ${wrap} overflow wrap correctly`, () => {
        const { container } = render(<Text overflowWrap={wrap}>Test</Text>);
        expect(container.firstChild).toHaveClass(wrap);
      });
    });
  });

  describe('Combined Props', () => {
    it('combines all styling props correctly', () => {
      const { container } = render(
        <Text
          variant={TextVariant.HeadingLg}
          color={TextColor.PrimaryDefault}
          fontWeight={FontWeight.Bold}
          fontStyle={FontStyle.Italic}
          textTransform={TextTransform.Uppercase}
          textAlign={TextAlign.Center}
          overflowWrap={OverflowWrap.BreakWord}
          ellipsis
          className="custom-class"
          asChild
        >
          <div>Test</div>
        </Text>,
      );

      expect(container.firstChild).toHaveClass(
        TextColor.PrimaryDefault,
        FontWeight.Bold,
        FontStyle.Italic,
        TextTransform.Uppercase,
        TextAlign.Center,
        OverflowWrap.BreakWord,
        'truncate',
        'custom-class',
      );
      expect(container.firstChild?.nodeName).toBe('DIV');
    });
  });

  it('applies ellipsis class when ellipsis prop is true', () => {
    const { container } = render(
      <Text variant={TextVariant.BodyMd} ellipsis>
        Long text that should ellipsis
      </Text>,
    );
    expect(container.firstChild).toHaveClass('truncate');
  });

  it('renders with asChild prop correctly', () => {
    const { container } = render(
      <Text asChild>
        <span>Span Text</span>
      </Text>,
    );
    expect(container.firstChild?.nodeName).toBe('SPAN');
  });

  it('renders with default color when no color prop is provided', () => {
    const { container } = render(
      <Text variant={TextVariant.BodyMd}>Default Color Text</Text>,
    );
    expect(container.firstChild).toHaveClass('text-default');
  });

  it('combines multiple props correctly', () => {
    const { container } = render(
      <Text
        variant={TextVariant.BodyMd}
        color={TextColor.SuccessDefault}
        ellipsis
        className="custom-class"
        asChild
      >
        <div>Combined Props Text</div>
      </Text>,
    );
    expect(container.firstChild).toHaveClass(
      'text-success-default',
      'truncate',
      'custom-class',
    );
    expect(container.firstChild?.nodeName).toBe('DIV');
  });

  it('renders with default variant (BodyMd) when no variant is provided', () => {
    const { container } = render(<Text>Default Variant Text</Text>);
    expect(container.firstChild).toHaveClass(
      'text-default',
      'text-s-body-md',
      'font-s-body-md',
      'leading-s-body-md',
      'tracking-s-body-md',
      'md:text-l-body-md',
    );
  });
});
