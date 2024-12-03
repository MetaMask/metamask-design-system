import React from 'react';
import { render, screen } from '@testing-library/react';
import { Icon } from './Icon';
import { IconName, IconSize, IconColor } from './Icon.types';
import { ICON_SIZE_CLASS_MAP } from './Icon.constants';

describe('Icon', () => {
  it('should render correctly', () => {
    render(<Icon name={IconName.AddSquare} data-testid="icon" />);
    const icon = screen.getByTestId('icon');
    expect(icon).toBeDefined();
    expect(icon.tagName.toLowerCase()).toBe('svg');
  });

  it('should render with different sizes', () => {
    Object.values(IconSize).forEach((size) => {
      const { container } = render(
        <Icon
          name={IconName.AddSquare}
          size={size}
          data-testid={`icon-${size}`}
        />,
      );
      const icon = container.firstChild as HTMLElement;
      expect(icon).toHaveClass('inline-block');
      expect(icon).toHaveClass(ICON_SIZE_CLASS_MAP[size]);
    });
  });

  it('should render with different colors', () => {
    Object.values(IconColor).forEach((color) => {
      const { container } = render(
        <Icon
          name={IconName.AddSquare}
          color={color}
          data-testid={`icon-${color}`}
        />,
      );
      const icon = container.firstChild as HTMLElement;
      expect(icon).toHaveClass('inline-block');
      expect(icon).toHaveClass(color);
    });
  });

  it('should apply custom className', () => {
    const { container } = render(
      <Icon name={IconName.AddSquare} className="custom-class" />,
    );
    const icon = container.firstChild as HTMLElement;
    expect(icon).toHaveClass('inline-block');
    expect(icon).toHaveClass('custom-class');
  });

  it('should have correct SVG attributes', () => {
    const { container } = render(<Icon name={IconName.AddSquare} />);
    const svg = container.firstChild as SVGElement;

    expect(svg).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 512 512');
    expect(svg).toHaveAttribute('fill', 'currentColor');
  });

  it('should apply custom styles', () => {
    const customStyle = { marginTop: '10px' };
    const { container } = render(
      <Icon name={IconName.AddSquare} style={customStyle} />,
    );
    const icon = container.firstChild as HTMLElement;
    expect(icon).toHaveStyle(customStyle);
  });
});

describe('Icon error cases', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockClear();
  });

  afterAll(() => {
    consoleSpy.mockRestore();
  });

  it('should warn and return null when name prop is missing', () => {
    const { container } = render(<Icon {...({} as any)} />);
    expect(consoleSpy).toHaveBeenCalledWith('Icon name is required');
    expect(container.firstChild).toBeNull();
  });
});
