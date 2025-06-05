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

  it('applies default flex class', () => {
    render(<Box data-testid="box" />);
    const box = screen.getByTestId('box');
    expect(box).toHaveClass('flex');
  });

  it('applies flexDirection prop', () => {
    render(<Box data-testid="box" flexDirection={BoxFlexDirection.Column} />);
    const box = screen.getByTestId('box');
    expect(box).toHaveClass('flex');
    expect(box).toHaveClass(BoxFlexDirection.Column);
  });

  it('applies flexWrap prop', () => {
    render(<Box data-testid="box" flexWrap={BoxFlexWrap.Wrap} />);
    const box = screen.getByTestId('box');
    expect(box).toHaveClass('flex');
    expect(box).toHaveClass(BoxFlexWrap.Wrap);
  });

  it('applies gap prop using spacing scale', () => {
    render(<Box data-testid="box" gap={4} />);
    const box = screen.getByTestId('box');
    expect(box).toHaveClass('flex');
    expect(box).toHaveClass(TWCLASSMAP_BOX_GAP[4]);
  });

  it('applies alignItems prop', () => {
    render(<Box data-testid="box" alignItems={BoxAlignItems.Center} />);
    const box = screen.getByTestId('box');
    expect(box).toHaveClass('flex');
    expect(box).toHaveClass(BoxAlignItems.Center);
  });

  it('applies justifyContent prop', () => {
    render(
      <Box data-testid="box" justifyContent={BoxJustifyContent.Between} />,
    );
    const box = screen.getByTestId('box');
    expect(box).toHaveClass('flex');
    expect(box).toHaveClass(BoxJustifyContent.Between);
  });

  it('applies className prop', () => {
    render(<Box data-testid="box" className="custom-class bg-red-500 p-4" />);
    const box = screen.getByTestId('box');
    expect(box).toHaveClass('flex');
    expect(box).toHaveClass('custom-class');
    expect(box).toHaveClass('p-4');
    expect(box).toHaveClass('bg-red-500');
  });

  it('applies all flex props together', () => {
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

  it('handles gap prop with value 0', () => {
    render(<Box data-testid="box" gap={0} />);
    const box = screen.getByTestId('box');
    expect(box).toHaveClass('flex');
    expect(box).toHaveClass(TWCLASSMAP_BOX_GAP[0]);
  });

  it('handles gap prop with maximum value', () => {
    render(<Box data-testid="box" gap={12} />);
    const box = screen.getByTestId('box');
    expect(box).toHaveClass('flex');
    expect(box).toHaveClass(TWCLASSMAP_BOX_GAP[12]);
  });

  it('does not apply gap class when gap is undefined', () => {
    render(<Box data-testid="box" />);
    const box = screen.getByTestId('box');
    expect(box).toHaveClass('flex');

    // Check that no gap classes are applied
    Object.values(TWCLASSMAP_BOX_GAP).forEach((gapClass) => {
      expect(box).not.toHaveClass(gapClass);
    });
  });

  it('forwards other props to the div element', () => {
    render(
      <Box
        data-testid="box"
        role="main"
        aria-label="Test box"
        onClick={() => {}}
      />,
    );
    const box = screen.getByTestId('box');
    expect(box).toHaveAttribute('role', 'main');
    expect(box).toHaveAttribute('aria-label', 'Test box');
    expect(box.tagName).toBe('DIV');
  });
});
