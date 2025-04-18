import { render, screen } from '@testing-library/react';
import React from 'react';

import { IconName, IconSize, IconColor } from '../../types';
import { Icon } from './Icon';
import { ICON_SIZE_CLASS_MAP } from './Icon.constants';
import type { IconProps } from './Icon.types';

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
      const icon = container.firstChild;
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
      const icon = container.firstChild;
      expect(icon).toHaveClass('inline-block');
      expect(icon).toHaveClass(color);
    });
  });

  it('should apply custom className', () => {
    const { container } = render(
      <Icon name={IconName.AddSquare} className="custom-class" />,
    );
    const icon = container.firstChild;
    expect(icon).toHaveClass('inline-block');
    expect(icon).toHaveClass('custom-class');
  });

  it('should have correct SVG attributes', () => {
    const { container } = render(<Icon name={IconName.AddSquare} />);
    const svg = container.firstChild;

    expect(svg).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    expect(svg).toHaveAttribute('fill', 'currentColor');
  });

  it('should apply custom styles', () => {
    const customStyle = { marginTop: '10px' };
    const { container } = render(
      <Icon name={IconName.AddSquare} style={customStyle} />,
    );
    const icon = container.firstChild;
    expect(icon).toHaveStyle(customStyle);
  });

  describe('className overrides', () => {
    it('should allow className to override color prop', () => {
      const { container } = render(
        <Icon
          name={IconName.AddSquare}
          color={IconColor.IconDefault}
          className="text-inherit text-lg"
        />,
      );
      const icon = container.firstChild;

      // Verify the custom class is present
      expect(icon).toHaveClass('text-inherit');

      // Verify the default color class is not present
      expect(icon).not.toHaveClass(IconColor.IconDefault);
    });

    it('should allow className to override size prop', () => {
      const { container } = render(
        <Icon
          name={IconName.AddSquare}
          size={IconSize.Md}
          className="w-10 h-10"
        />,
      );
      const icon = container.firstChild;

      // Verify the custom size classes are present
      expect(icon).toHaveClass('w-10');
      expect(icon).toHaveClass('h-10');

      // Verify the default size classes are not present
      const defaultSizeClasses = ICON_SIZE_CLASS_MAP[IconSize.Md].split(' ');
      defaultSizeClasses.forEach((className) => {
        expect(icon).not.toHaveClass(className);
      });
    });

    it('should allow className to override both color and size props', () => {
      const { container } = render(
        <Icon
          name={IconName.AddSquare}
          color={IconColor.IconDefault}
          size={IconSize.Md}
          className="text-inherit w-10 h-10"
        />,
      );
      const icon = container.firstChild;

      // Verify custom classes are present
      expect(icon).toHaveClass('text-inherit');
      expect(icon).toHaveClass('w-10');
      expect(icon).toHaveClass('h-10');

      // Verify default classes are not present
      expect(icon).not.toHaveClass(IconColor.IconDefault);

      const defaultSizeClasses = ICON_SIZE_CLASS_MAP[IconSize.Md].split(' ');
      defaultSizeClasses.forEach((className) => {
        expect(icon).not.toHaveClass(className);
      });
    });
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
    // @ts-expect-error Testing undefined name prop
    const { container } = render(<Icon {...({} as Partial<IconProps>)} />);

    expect(consoleSpy).toHaveBeenCalledWith('Icon name is required');
    expect(container.firstChild).toBeNull();
  });

  it('should warn and return null when icon is not found', () => {
    const { container } = render(<Icon name={'NonExistentIcon' as IconName} />);

    expect(consoleSpy).toHaveBeenCalledWith('Icon "NonExistentIcon" not found');
    expect(container.firstChild).toBeNull();
  });
});
