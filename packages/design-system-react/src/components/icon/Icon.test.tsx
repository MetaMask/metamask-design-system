import React from 'react';
import { render, screen } from '@testing-library/react';
import { Icon } from './Icon';
import { IconName, IconSize, IconColor } from './Icon.types';
import { ICON_SIZE_CLASS_MAP } from './Icon.constants';

jest.mock('./icons', () => ({
  Icons: {
    AddSquare: (props: any) => (
      <svg data-testid="mock-icon" className={props.className} {...props} />
    ),
  },
}));

describe('Icon', () => {
  it('should render correctly', () => {
    render(<Icon name={IconName.AddSquare} data-testid="icon" />);
    expect(screen.getByTestId('icon')).toBeDefined();
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

  it('should return null for missing icon name', () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
    const { container } = render(<Icon name={undefined as any} />);
    expect(container.firstChild).toBeNull();
    expect(consoleSpy).toHaveBeenCalledWith('Icon name is required');
    consoleSpy.mockRestore();
  });

  it('should return null for non-existent icon', () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
    const { container } = render(<Icon name={'NonExistentIcon' as IconName} />);
    expect(container.firstChild).toBeNull();
    expect(consoleSpy).toHaveBeenCalledWith('Icon "NonExistentIcon" not found');
    consoleSpy.mockRestore();
  });

  it('should apply correct size classes based on size prop', () => {
    const { container } = render(
      <Icon name={IconName.AddSquare} size={IconSize.Md} />,
    );
    const icon = container.firstChild as HTMLElement;
    expect(icon).toHaveClass(ICON_SIZE_CLASS_MAP[IconSize.Md]);
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

  it('should warn and return null when icon is not found', () => {
    const { container } = render(<Icon name={'NonExistentIcon' as IconName} />);

    expect(consoleSpy).toHaveBeenCalledWith('Icon "NonExistentIcon" not found');
    expect(container.firstChild).toBeNull();
  });
});
