import { render, screen } from '@testing-library/react';
import React from 'react';

import { AvatarBase } from './AvatarBase';
import { AVATAR_BASE_SIZE_CLASS_MAP } from './AvatarBase.constants';
import { AvatarBaseSize } from './AvatarBase.types';

describe('AvatarBase', () => {
  it('renders with default styles', () => {
    render(<AvatarBase>A</AvatarBase>);

    const avatar = screen.getByText('A');
    expect(avatar).toBeInTheDocument();
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(
      <AvatarBase size={AvatarBaseSize.Xs}>A</AvatarBase>,
    );

    Object.entries(AVATAR_BASE_SIZE_CLASS_MAP).forEach(([size, classes]) => {
      rerender(<AvatarBase size={size as AvatarBaseSize}>A</AvatarBase>);
      const avatar = screen.getByText('A');
      const classArray = classes.split(' ');
      classArray.forEach((className) => {
        expect(avatar).toHaveClass(className);
      });
    });
  });

  it('renders children correctly', () => {
    render(
      <AvatarBase>
        <img src="test.jpg" alt="test" data-testid="avatar-image" />
      </AvatarBase>,
    );

    expect(screen.getByTestId('avatar-image')).toBeInTheDocument();
  });

  it('merges custom className with default classes', () => {
    render(<AvatarBase className="custom-class">A</AvatarBase>);

    const avatar = screen.getByText('A');
    expect(avatar).toHaveClass('custom-class');
    expect(avatar).toHaveClass('rounded-full');
  });

  it('renders as child component when asChild is true', () => {
    render(
      <AvatarBase asChild>
        <span>A</span>
      </AvatarBase>,
    );

    const avatar = screen.getByText('A');
    expect(avatar.tagName).toBe('SPAN');
  });

  it('applies custom styles when provided', () => {
    render(<AvatarBase style={{ backgroundColor: 'red' }}>A</AvatarBase>);

    const avatar = screen.getByText('A');
    expect(avatar).toHaveStyle({ backgroundColor: 'red' });
  });
});
