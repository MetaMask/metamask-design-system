import { render, screen } from '@testing-library/react';
import React from 'react';

import {
  BoxAlignItems,
  BoxFlexDirection,
  BoxFlexWrap,
  BoxJustifyContent,
} from '../../types';

import { Box } from './Box';
import { TWCLASSMAP_BOX_GAP } from './Box.constants';

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
    render(<Box data-testid="box" className="custom-class bg-red-500 p-4" />);
    const box = screen.getByTestId('box');
    expect(box).not.toHaveClass('flex');
    expect(box).toHaveClass('custom-class');
    expect(box).toHaveClass('p-4');
    expect(box).toHaveClass('bg-red-500');
  });

  it('applies className prop with flex class when flexDirection is provided', () => {
    render(
      <Box
        data-testid="box"
        flexDirection={BoxFlexDirection.Row}
        className="custom-class bg-red-500 p-4"
      />,
    );
    const box = screen.getByTestId('box');
    expect(box).toHaveClass('flex');
    expect(box).toHaveClass('custom-class');
    expect(box).toHaveClass('p-4');
    expect(box).toHaveClass('bg-red-500');
  });

  it('applies all flex props together with flex class', () => {
    render(
      <Box
        data-testid="box"
        flexDirection={BoxFlexDirection.Row}
        flexWrap={BoxFlexWrap.Wrap}
        gap={2}
        alignItems={BoxAlignItems.Center}
        justifyContent={BoxJustifyContent.Between}
        className="extra-class"
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
      'extra-class',
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
        className="extra-class"
      />,
    );

    const box = screen.getByTestId('box');
    const expectedClasses = [
      BoxFlexWrap.Wrap,
      TWCLASSMAP_BOX_GAP[2],
      BoxAlignItems.Center,
      BoxJustifyContent.Between,
      'extra-class',
    ];

    expectedClasses.forEach((className) => {
      expect(box).toHaveClass(className);
    });

    expect(box).not.toHaveClass('flex');
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
});
