import { render, screen } from '@testing-library/react';
import React, { createRef } from 'react';

import {
  BoxAlignItems,
  BoxFlexDirection,
  BoxFlexWrap,
  BoxJustifyContent,
  BoxBackgroundColor,
  BoxBorderColor,
} from '../../types';

import { Box } from './Box';
import {
  TWCLASSMAP_BOX_GAP,
  TWCLASSMAP_BOX_MARGIN,
  TWCLASSMAP_BOX_MARGIN_TOP,
  TWCLASSMAP_BOX_MARGIN_RIGHT,
  TWCLASSMAP_BOX_MARGIN_BOTTOM,
  TWCLASSMAP_BOX_MARGIN_LEFT,
  TWCLASSMAP_BOX_MARGIN_HORIZONTAL,
  TWCLASSMAP_BOX_MARGIN_VERTICAL,
  TWCLASSMAP_BOX_PADDING,
  TWCLASSMAP_BOX_PADDING_TOP,
  TWCLASSMAP_BOX_PADDING_RIGHT,
  TWCLASSMAP_BOX_PADDING_BOTTOM,
  TWCLASSMAP_BOX_PADDING_LEFT,
  TWCLASSMAP_BOX_PADDING_HORIZONTAL,
  TWCLASSMAP_BOX_PADDING_VERTICAL,
  TWCLASSMAP_BOX_BORDER_WIDTH,
} from './Box.constants';

describe('Box', () => {
  it('renders children and style', () => {
    render(
      <Box data-testid="box" style={{ margin: 4 }}>
        <span>Hello</span>
      </Box>,
    );
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByTestId('box')).toHaveStyle({ margin: '4px' });
  });

  it('forwards ref to the underlying div element', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Box data-testid="box" ref={ref} />);

    const box = screen.getByTestId('box');
    expect(ref.current).toBe(box);
    expect(ref.current?.tagName).toBe('DIV');
  });

  it('does not apply flex class by default', () => {
    render(<Box data-testid="box" />);
    const box = screen.getByTestId('box');
    expect(box).not.toHaveClass('flex');
  });

  it('applies flex class and flexDirection prop when flexDirection is provided', () => {
    render(<Box data-testid="box" flexDirection={BoxFlexDirection.Column} />);
    const box = screen.getByTestId('box');
    expect(box).toHaveClass('flex');
    expect(box).toHaveClass(BoxFlexDirection.Column);
  });

  it('applies flexWrap prop without flex class when no flexDirection', () => {
    render(<Box data-testid="box" flexWrap={BoxFlexWrap.Wrap} />);
    const box = screen.getByTestId('box');
    expect(box).not.toHaveClass('flex');
    expect(box).toHaveClass(BoxFlexWrap.Wrap);
  });

  it('applies flex class when flexWrap and flexDirection are both provided', () => {
    render(
      <Box
        data-testid="box"
        flexDirection={BoxFlexDirection.Row}
        flexWrap={BoxFlexWrap.Wrap}
      />,
    );
    const box = screen.getByTestId('box');
    expect(box).toHaveClass('flex');
    expect(box).toHaveClass(BoxFlexWrap.Wrap);
    expect(box).toHaveClass(BoxFlexDirection.Row);
  });

  it('applies gap prop using spacing scale without flex class when no flexDirection', () => {
    render(<Box data-testid="box" gap={4} />);
    const box = screen.getByTestId('box');
    expect(box).not.toHaveClass('flex');
    expect(box).toHaveClass(TWCLASSMAP_BOX_GAP[4]);
  });

  it('applies gap prop using spacing scale with flex class when flexDirection is provided', () => {
    render(
      <Box data-testid="box" flexDirection={BoxFlexDirection.Row} gap={4} />,
    );
    const box = screen.getByTestId('box');
    expect(box).toHaveClass('flex');
    expect(box).toHaveClass(TWCLASSMAP_BOX_GAP[4]);
  });

  it('applies alignItems prop without flex class when no flexDirection', () => {
    render(<Box data-testid="box" alignItems={BoxAlignItems.Center} />);
    const box = screen.getByTestId('box');
    expect(box).not.toHaveClass('flex');
    expect(box).toHaveClass(BoxAlignItems.Center);
  });

  it('applies alignItems prop with flex class when flexDirection is provided', () => {
    render(
      <Box
        data-testid="box"
        flexDirection={BoxFlexDirection.Row}
        alignItems={BoxAlignItems.Center}
      />,
    );
    const box = screen.getByTestId('box');
    expect(box).toHaveClass('flex');
    expect(box).toHaveClass(BoxAlignItems.Center);
  });

  it('applies justifyContent prop without flex class when no flexDirection', () => {
    render(
      <Box data-testid="box" justifyContent={BoxJustifyContent.Between} />,
    );
    const box = screen.getByTestId('box');
    expect(box).not.toHaveClass('flex');
    expect(box).toHaveClass(BoxJustifyContent.Between);
  });

  it('applies justifyContent prop with flex class when flexDirection is provided', () => {
    render(
      <Box
        data-testid="box"
        flexDirection={BoxFlexDirection.Row}
        justifyContent={BoxJustifyContent.Between}
      />,
    );
    const box = screen.getByTestId('box');
    expect(box).toHaveClass('flex');
    expect(box).toHaveClass(BoxJustifyContent.Between);
  });

  it('applies className prop without flex class when no flexDirection', () => {
    render(<Box data-testid="box" className="bg-default p-4" />);
    const box = screen.getByTestId('box');
    expect(box).not.toHaveClass('flex');
    expect(box).toHaveClass('bg-default');
    expect(box).toHaveClass('p-4');
  });

  it('applies className prop with flex class when flexDirection is provided', () => {
    render(
      <Box
        data-testid="box"
        flexDirection={BoxFlexDirection.Row}
        className="bg-default p-4"
      />,
    );
    const box = screen.getByTestId('box');
    expect(box).toHaveClass('flex');
    expect(box).toHaveClass('bg-default');
    expect(box).toHaveClass('p-4');
  });

  // Margin tests
  it('applies margin prop', () => {
    render(<Box data-testid="box" margin={4} />);
    const box = screen.getByTestId('box');
    expect(box).toHaveClass(TWCLASSMAP_BOX_MARGIN[4]);
  });

  it('applies marginTop prop', () => {
    render(<Box data-testid="box" marginTop={2} />);
    const box = screen.getByTestId('box');
    expect(box).toHaveClass(TWCLASSMAP_BOX_MARGIN_TOP[2]);
  });

  it('applies marginRight prop', () => {
    render(<Box data-testid="box" marginRight={3} />);
    const box = screen.getByTestId('box');
    expect(box).toHaveClass(TWCLASSMAP_BOX_MARGIN_RIGHT[3]);
  });

  it('applies marginBottom prop', () => {
    render(<Box data-testid="box" marginBottom={1} />);
    const box = screen.getByTestId('box');
    expect(box).toHaveClass(TWCLASSMAP_BOX_MARGIN_BOTTOM[1]);
  });

  it('applies marginLeft prop', () => {
    render(<Box data-testid="box" marginLeft={5} />);
    const box = screen.getByTestId('box');
    expect(box).toHaveClass(TWCLASSMAP_BOX_MARGIN_LEFT[5]);
  });

  it('applies marginHorizontal prop', () => {
    render(<Box data-testid="box" marginHorizontal={6} />);
    const box = screen.getByTestId('box');
    expect(box).toHaveClass(TWCLASSMAP_BOX_MARGIN_HORIZONTAL[6]);
  });

  it('applies marginVertical prop', () => {
    render(<Box data-testid="box" marginVertical={7} />);
    const box = screen.getByTestId('box');
    expect(box).toHaveClass(TWCLASSMAP_BOX_MARGIN_VERTICAL[7]);
  });

  it('applies multiple margin props', () => {
    render(
      <Box
        data-testid="box"
        marginTop={2}
        marginRight={4}
        marginBottom={3}
        marginLeft={1}
      />,
    );
    const box = screen.getByTestId('box');
    expect(box).toHaveClass(TWCLASSMAP_BOX_MARGIN_TOP[2]);
    expect(box).toHaveClass(TWCLASSMAP_BOX_MARGIN_RIGHT[4]);
    expect(box).toHaveClass(TWCLASSMAP_BOX_MARGIN_BOTTOM[3]);
    expect(box).toHaveClass(TWCLASSMAP_BOX_MARGIN_LEFT[1]);
  });

  // Padding tests
  it('applies padding prop', () => {
    render(<Box data-testid="box" padding={4} />);
    const box = screen.getByTestId('box');
    expect(box).toHaveClass(TWCLASSMAP_BOX_PADDING[4]);
  });

  it('applies paddingTop prop', () => {
    render(<Box data-testid="box" paddingTop={2} />);
    const box = screen.getByTestId('box');
    expect(box).toHaveClass(TWCLASSMAP_BOX_PADDING_TOP[2]);
  });

  it('applies paddingRight prop', () => {
    render(<Box data-testid="box" paddingRight={3} />);
    const box = screen.getByTestId('box');
    expect(box).toHaveClass(TWCLASSMAP_BOX_PADDING_RIGHT[3]);
  });

  it('applies paddingBottom prop', () => {
    render(<Box data-testid="box" paddingBottom={1} />);
    const box = screen.getByTestId('box');
    expect(box).toHaveClass(TWCLASSMAP_BOX_PADDING_BOTTOM[1]);
  });

  it('applies paddingLeft prop', () => {
    render(<Box data-testid="box" paddingLeft={5} />);
    const box = screen.getByTestId('box');
    expect(box).toHaveClass(TWCLASSMAP_BOX_PADDING_LEFT[5]);
  });

  it('applies paddingHorizontal prop', () => {
    render(<Box data-testid="box" paddingHorizontal={6} />);
    const box = screen.getByTestId('box');
    expect(box).toHaveClass(TWCLASSMAP_BOX_PADDING_HORIZONTAL[6]);
  });

  it('applies paddingVertical prop', () => {
    render(<Box data-testid="box" paddingVertical={7} />);
    const box = screen.getByTestId('box');
    expect(box).toHaveClass(TWCLASSMAP_BOX_PADDING_VERTICAL[7]);
  });

  it('applies multiple padding props', () => {
    render(
      <Box
        data-testid="box"
        paddingTop={2}
        paddingRight={4}
        paddingBottom={3}
        paddingLeft={1}
      />,
    );
    const box = screen.getByTestId('box');
    expect(box).toHaveClass(TWCLASSMAP_BOX_PADDING_TOP[2]);
    expect(box).toHaveClass(TWCLASSMAP_BOX_PADDING_RIGHT[4]);
    expect(box).toHaveClass(TWCLASSMAP_BOX_PADDING_BOTTOM[3]);
    expect(box).toHaveClass(TWCLASSMAP_BOX_PADDING_LEFT[1]);
  });

  // Border tests
  it('applies borderWidth prop', () => {
    render(<Box data-testid="box" borderWidth={1} />);
    const box = screen.getByTestId('box');
    expect(box).toHaveClass(TWCLASSMAP_BOX_BORDER_WIDTH[1]);
  });

  it('applies borderColor prop', () => {
    render(
      <Box data-testid="box" borderColor={BoxBorderColor.PrimaryDefault} />,
    );
    const box = screen.getByTestId('box');
    expect(box).toHaveClass(BoxBorderColor.PrimaryDefault);
  });

  it('applies borderWidth and borderColor props together', () => {
    render(
      <Box
        data-testid="box"
        borderWidth={2}
        borderColor={BoxBorderColor.ErrorDefault}
      />,
    );
    const box = screen.getByTestId('box');
    expect(box).toHaveClass(TWCLASSMAP_BOX_BORDER_WIDTH[2]);
    expect(box).toHaveClass(BoxBorderColor.ErrorDefault);
  });

  // Background tests
  it('applies backgroundColor prop', () => {
    render(
      <Box
        data-testid="box"
        backgroundColor={BoxBackgroundColor.PrimaryDefault}
      />,
    );
    const box = screen.getByTestId('box');
    expect(box).toHaveClass(BoxBackgroundColor.PrimaryDefault);
  });

  it('applies backgroundColor with other props', () => {
    render(
      <Box
        data-testid="box"
        backgroundColor={BoxBackgroundColor.SuccessMuted}
        padding={4}
        margin={2}
      />,
    );
    const box = screen.getByTestId('box');
    expect(box).toHaveClass(BoxBackgroundColor.SuccessMuted);
    expect(box).toHaveClass(TWCLASSMAP_BOX_PADDING[4]);
    expect(box).toHaveClass(TWCLASSMAP_BOX_MARGIN[2]);
  });

  // Zero value tests
  it('applies zero margin prop', () => {
    render(<Box data-testid="box" margin={0} />);
    const box = screen.getByTestId('box');
    expect(box).toHaveClass(TWCLASSMAP_BOX_MARGIN[0]);
  });

  it('applies zero padding prop', () => {
    render(<Box data-testid="box" padding={0} />);
    const box = screen.getByTestId('box');
    expect(box).toHaveClass(TWCLASSMAP_BOX_PADDING[0]);
  });

  it('applies zero border width prop', () => {
    render(<Box data-testid="box" borderWidth={0} />);
    const box = screen.getByTestId('box');
    expect(box).toHaveClass(TWCLASSMAP_BOX_BORDER_WIDTH[0]);
  });

  // Undefined handling tests
  it('does not apply margin classes when margin props are undefined', () => {
    render(<Box data-testid="box" />);
    const box = screen.getByTestId('box');
    Object.values(TWCLASSMAP_BOX_MARGIN).forEach((marginClass) => {
      expect(box).not.toHaveClass(marginClass);
    });
  });

  it('does not apply padding classes when padding props are undefined', () => {
    render(<Box data-testid="box" />);
    const box = screen.getByTestId('box');
    Object.values(TWCLASSMAP_BOX_PADDING).forEach((paddingClass) => {
      expect(box).not.toHaveClass(paddingClass);
    });
  });

  it('does not apply border classes when border props are undefined', () => {
    render(<Box data-testid="box" />);
    const box = screen.getByTestId('box');
    Object.values(TWCLASSMAP_BOX_BORDER_WIDTH).forEach((borderClass) => {
      expect(box).not.toHaveClass(borderClass);
    });
  });

  // Complex combination tests
  it('applies all flex props together with flex class', () => {
    render(
      <Box
        data-testid="box"
        flexDirection={BoxFlexDirection.Row}
        flexWrap={BoxFlexWrap.Wrap}
        gap={2}
        alignItems={BoxAlignItems.Center}
        justifyContent={BoxJustifyContent.Between}
        className="bg-default"
      />,
    );

    const box = screen.getByTestId('box');
    const expectedClasses = [
      'flex',
      BoxFlexDirection.Row,
      BoxFlexWrap.Wrap,
      TWCLASSMAP_BOX_GAP[2],
      BoxAlignItems.Center,
      BoxJustifyContent.Between,
      'bg-default',
    ];

    expectedClasses.forEach((className) => {
      expect(box).toHaveClass(className);
    });
  });

  it('applies all props together without flex class when no flexDirection', () => {
    render(
      <Box
        data-testid="box"
        flexWrap={BoxFlexWrap.Wrap}
        gap={2}
        alignItems={BoxAlignItems.Center}
        justifyContent={BoxJustifyContent.Between}
        className="bg-default"
      />,
    );

    const box = screen.getByTestId('box');
    const expectedClasses = [
      BoxFlexWrap.Wrap,
      TWCLASSMAP_BOX_GAP[2],
      BoxAlignItems.Center,
      BoxJustifyContent.Between,
      'bg-default',
    ];

    expectedClasses.forEach((className) => {
      expect(box).toHaveClass(className);
    });

    expect(box).not.toHaveClass('flex');
  });

  it('applies all spacing and style props together', () => {
    render(
      <Box
        data-testid="box"
        margin={2}
        marginTop={4}
        padding={3}
        paddingHorizontal={6}
        borderWidth={1}
        borderColor={BoxBorderColor.BorderDefault}
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        className="text-center"
      />,
    );

    const box = screen.getByTestId('box');
    const expectedClasses = [
      TWCLASSMAP_BOX_MARGIN[2],
      TWCLASSMAP_BOX_MARGIN_TOP[4],
      TWCLASSMAP_BOX_PADDING[3],
      TWCLASSMAP_BOX_PADDING_HORIZONTAL[6],
      TWCLASSMAP_BOX_BORDER_WIDTH[1],
      BoxBorderColor.BorderDefault,
      BoxBackgroundColor.BackgroundAlternative,
      'text-center',
    ];

    expectedClasses.forEach((className) => {
      expect(box).toHaveClass(className);
    });
  });

  it('handles gap prop with value 0 without flex class when no flexDirection', () => {
    render(<Box data-testid="box" gap={0} />);
    const box = screen.getByTestId('box');
    expect(box).not.toHaveClass('flex');
    expect(box).toHaveClass(TWCLASSMAP_BOX_GAP[0]);
  });

  it('handles gap prop with value 0 with flex class when flexDirection is provided', () => {
    render(
      <Box data-testid="box" flexDirection={BoxFlexDirection.Row} gap={0} />,
    );
    const box = screen.getByTestId('box');
    expect(box).toHaveClass('flex');
    expect(box).toHaveClass(TWCLASSMAP_BOX_GAP[0]);
  });

  it('handles gap prop with maximum value without flex class when no flexDirection', () => {
    render(<Box data-testid="box" gap={12} />);
    const box = screen.getByTestId('box');
    expect(box).not.toHaveClass('flex');
    expect(box).toHaveClass(TWCLASSMAP_BOX_GAP[12]);
  });

  it('handles gap prop with maximum value with flex class when flexDirection is provided', () => {
    render(
      <Box data-testid="box" flexDirection={BoxFlexDirection.Row} gap={12} />,
    );
    const box = screen.getByTestId('box');
    expect(box).toHaveClass('flex');
    expect(box).toHaveClass(TWCLASSMAP_BOX_GAP[12]);
  });

  it('does not apply gap class when gap is undefined', () => {
    render(<Box data-testid="box" />);
    const box = screen.getByTestId('box');
    expect(box).not.toHaveClass('flex');

    // Check that no gap classes are applied
    Object.values(TWCLASSMAP_BOX_GAP).forEach((gapClass) => {
      expect(box).not.toHaveClass(gapClass);
    });
  });

  it('does not apply gap class when gap is undefined but flexDirection is provided', () => {
    render(<Box data-testid="box" flexDirection={BoxFlexDirection.Row} />);
    const box = screen.getByTestId('box');
    expect(box).toHaveClass('flex');

    // Check that no gap classes are applied
    Object.values(TWCLASSMAP_BOX_GAP).forEach((gapClass) => {
      expect(box).not.toHaveClass(gapClass);
    });
  });

  it('forwards other props to the div element without flex class when no flexDirection', () => {
    const mockClick = jest.fn();
    render(
      <Box
        data-testid="box"
        role="main"
        aria-label="Test box"
        onClick={mockClick}
      />,
    );
    const box = screen.getByTestId('box');
    expect(box).not.toHaveClass('flex');
    expect(box).toHaveAttribute('role', 'main');
    expect(box).toHaveAttribute('aria-label', 'Test box');
    expect(box.tagName).toBe('DIV');
  });

  it('forwards other props to the div element with flex class when flexDirection is provided', () => {
    const mockClick = jest.fn();
    render(
      <Box
        data-testid="box"
        flexDirection={BoxFlexDirection.Row}
        role="main"
        aria-label="Test box"
        onClick={mockClick}
      />,
    );
    const box = screen.getByTestId('box');
    expect(box).toHaveClass('flex');
    expect(box).toHaveAttribute('role', 'main');
    expect(box).toHaveAttribute('aria-label', 'Test box');
    expect(box.tagName).toBe('DIV');
  });

  // asChild tests
  it('renders as div by default when asChild is false', () => {
    render(
      <Box data-testid="box" asChild={false}>
        <span>Content</span>
      </Box>,
    );
    const box = screen.getByTestId('box');
    expect(box.tagName).toBe('DIV');
  });

  it('renders as child element when asChild is true', () => {
    render(
      <Box data-testid="box" asChild padding={4} className="bg-primary-muted">
        <button type="button">Click me</button>
      </Box>,
    );
    const button = screen.getByTestId('box');
    expect(button.tagName).toBe('BUTTON');
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveClass('bg-primary-muted');
    expect(button).toHaveClass(TWCLASSMAP_BOX_PADDING[4]);
    expect(button).toHaveTextContent('Click me');
  });

  it('forwards ref to child element when asChild is true', () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <Box asChild ref={ref}>
        <button data-testid="button" type="button">
          Click me
        </button>
      </Box>,
    );

    const button = screen.getByTestId('button');
    expect(ref.current).toBe(button);
    expect(ref.current?.tagName).toBe('BUTTON');
  });

  it('merges Box props with child element props when asChild is true', () => {
    render(
      <Box
        asChild
        data-testid="merged-element"
        padding={2}
        className="bg-primary-muted"
        style={{ color: 'red' }}
      >
        <div className="bg-error-muted" style={{ backgroundColor: 'blue' }}>
          Merged content
        </div>
      </Box>,
    );

    const element = screen.getByTestId('merged-element');
    expect(element.tagName).toBe('DIV');
    expect(element).toHaveClass('bg-primary-muted');
    expect(element).toHaveClass('bg-error-muted');
    expect(element).toHaveClass(TWCLASSMAP_BOX_PADDING[2]);
    expect(element).toHaveStyle({ color: 'red', backgroundColor: 'blue' });
  });

  it('applies flex classes to child element when asChild is true and flexDirection is provided', () => {
    render(
      <Box
        asChild
        data-testid="flex-child"
        flexDirection={BoxFlexDirection.Column}
        gap={3}
      >
        <section>Flex content</section>
      </Box>,
    );

    const section = screen.getByTestId('flex-child');
    expect(section.tagName).toBe('SECTION');
    expect(section).toHaveClass('flex');
    expect(section).toHaveClass(BoxFlexDirection.Column);
    expect(section).toHaveClass(TWCLASSMAP_BOX_GAP[3]);
  });
});
