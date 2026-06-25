import { IconName, IconSize, IconColor } from '@metamask/design-system-shared';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import { Icon } from './Icon';
import { TWCLASSMAP_ICON_SIZE_DIMENSION } from './Icon.constants';
import type { IconProps } from './Icon.types';

async function renderIcon(props: IconProps) {
  const result = render(<Icon {...props} />);

  if (props['data-testid']) {
    const icon = await screen.findByTestId(props['data-testid']);
    return { ...result, icon };
  }

  await waitFor(() => {
    expect(result.container.querySelector('svg')).toBeInTheDocument();
  });

  return { ...result, icon: result.container.querySelector('svg') };
}

describe('Icon', () => {
  it('renders correctly', async () => {
    const { icon } = await renderIcon({
      name: IconName.AddSquare,
      'data-testid': 'icon',
    });

    expect(icon).toBeDefined();
    expect(icon?.tagName.toLowerCase()).toBe('svg');
  });

  it('renders with different sizes', async () => {
    for (const size of Object.values(IconSize) as IconSize[]) {
      const { icon } = await renderIcon({
        name: IconName.AddSquare,
        size,
        'data-testid': `icon-${size}`,
      });

      expect(icon).toHaveClass('inline-block');
      expect(icon).toHaveClass(TWCLASSMAP_ICON_SIZE_DIMENSION[size]);
    }
  });

  it('renders with different colors', async () => {
    for (const color of Object.values(IconColor) as IconColor[]) {
      const { icon } = await renderIcon({
        name: IconName.AddSquare,
        color,
        'data-testid': `icon-${color}`,
      });

      expect(icon).toHaveClass('inline-block');
      expect(icon).toHaveClass(color);
    }
  });

  it('applies custom className', async () => {
    const { icon } = await renderIcon({
      name: IconName.AddSquare,
      className: 'bg-default',
    });

    expect(icon).toHaveClass('inline-block');
    expect(icon).toHaveClass('bg-default');
  });

  it('has correct SVG attributes', async () => {
    const { icon } = await renderIcon({ name: IconName.AddSquare });

    expect(icon).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg');
    expect(icon).toHaveAttribute('viewBox', '0 0 24 24');
    expect(icon).toHaveAttribute('fill', 'currentColor');
  });

  it('applies custom styles', async () => {
    const customStyle = { marginTop: '10px' };
    const { icon } = await renderIcon({
      name: IconName.AddSquare,
      style: customStyle,
    });

    expect(icon).toHaveStyle(customStyle);
  });

  describe('className overrides', () => {
    it('allows className to override color prop', async () => {
      const { icon } = await renderIcon({
        name: IconName.AddSquare,
        color: IconColor.IconDefault,
        className: 'text-inherit',
      });

      expect(icon).toHaveClass('text-inherit');
      expect(icon).not.toHaveClass(IconColor.IconDefault);
    });

    it('allows className to override size prop', async () => {
      const { icon } = await renderIcon({
        name: IconName.AddSquare,
        size: IconSize.Md,
        className: 'size-10',
      });

      expect(icon).toHaveClass('size-10');

      const defaultSizeClasses =
        TWCLASSMAP_ICON_SIZE_DIMENSION[IconSize.Md].split(' ');
      defaultSizeClasses.forEach((className) => {
        expect(icon).not.toHaveClass(className);
      });
    });

    it('allows className to override both color and size props', async () => {
      const { icon } = await renderIcon({
        name: IconName.AddSquare,
        color: IconColor.IconDefault,
        size: IconSize.Md,
        className: 'size-10 text-inherit',
      });

      expect(icon).toHaveClass('text-inherit');
      expect(icon).toHaveClass('size-10');
      expect(icon).not.toHaveClass(IconColor.IconDefault);

      const defaultSizeClasses =
        TWCLASSMAP_ICON_SIZE_DIMENSION[IconSize.Md].split(' ');
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

  it('warns and returns null when name prop is missing', () => {
    // @ts-expect-error Testing undefined name prop
    const { container } = render(<Icon {...({} as Partial<IconProps>)} />);

    expect(consoleSpy).toHaveBeenCalledWith('Icon name is required');
    expect(container.firstChild).toBeNull();
  });

  it('warns and returns null when icon is not found', () => {
    const { container } = render(<Icon name={'NonExistentIcon' as IconName} />);

    expect(consoleSpy).toHaveBeenCalledWith('Icon "NonExistentIcon" not found');
    expect(container.firstChild).toBeNull();
  });
});
