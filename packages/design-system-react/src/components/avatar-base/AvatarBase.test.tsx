import { render, screen } from '@testing-library/react';
import React from 'react';

import { TextColor } from '../text';
import { AvatarBase } from './AvatarBase';
import {
  AVATAR_BASE_SIZE_CLASS_MAP,
  AVATAR_BASE_SQUARE_BORDER_RADIUS_MAP,
} from './AvatarBase.constants';
import { AvatarBaseSize, AvatarBaseShape } from './AvatarBase.types';

describe('AvatarBase', () => {
  it('renders with default styles', () => {
    render(<AvatarBase fallbackText="A" data-testid="avatar" />);

    const avatar = screen.getByTestId('avatar');
    expect(screen.getByText('A')).toBeInTheDocument();
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(
      <AvatarBase
        size={AvatarBaseSize.Xs}
        fallbackText="A"
        data-testid="avatar"
      />,
    );

    Object.entries(AVATAR_BASE_SIZE_CLASS_MAP).forEach(([size, classes]) => {
      rerender(
        <AvatarBase
          size={size as AvatarBaseSize}
          fallbackText="A"
          data-testid="avatar"
        />,
      );
      const avatar = screen.getByTestId('avatar');
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
    render(
      <AvatarBase
        className="custom-class"
        fallbackText="A"
        data-testid="avatar"
      />,
    );

    const avatar = screen.getByTestId('avatar');
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
    render(
      <AvatarBase
        style={{ backgroundColor: 'red' }}
        fallbackText="A"
        data-testid="avatar"
      />,
    );

    const avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveStyle({ backgroundColor: 'red' });
  });

  it('applies correct shape classes', () => {
    const { rerender } = render(
      <AvatarBase
        shape={AvatarBaseShape.Circle}
        fallbackText="A"
        data-testid="avatar"
      />,
    );

    let avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveClass('rounded-full');

    rerender(
      <AvatarBase
        shape={AvatarBaseShape.Square}
        size={AvatarBaseSize.Md}
        fallbackText="A"
        data-testid="avatar"
      />,
    );
    avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveClass('rounded-lg');
  });

  it('applies correct border radius for all square sizes', () => {
    const { rerender } = render(
      <AvatarBase
        shape={AvatarBaseShape.Square}
        size={AvatarBaseSize.Xs}
        fallbackText="A"
        data-testid="avatar"
      />,
    );

    // Test all sizes
    Object.entries(AVATAR_BASE_SQUARE_BORDER_RADIUS_MAP).forEach(
      ([size, borderRadiusClass]) => {
        rerender(
          <AvatarBase
            shape={AvatarBaseShape.Square}
            size={size as AvatarBaseSize}
            fallbackText="A"
            data-testid="avatar"
          />,
        );
        const avatar = screen.getByTestId('avatar');
        expect(avatar).toHaveClass(borderRadiusClass);
      },
    );
  });

  it('uses circle shape by default', () => {
    render(<AvatarBase fallbackText="A" data-testid="avatar" />);

    const avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveClass('rounded-full');
  });

  it('renders fallbackText when no children are provided', () => {
    render(<AvatarBase fallbackText="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('prioritizes children over fallbackText', () => {
    render(
      <AvatarBase fallbackText="Fallback">
        <span>Child</span>
      </AvatarBase>,
    );
    expect(screen.getByText('Child')).toBeInTheDocument();
    expect(screen.queryByText('Fallback')).not.toBeInTheDocument();
  });

  it('applies fallbackTextProps correctly', () => {
    render(
      <AvatarBase
        fallbackText="Test"
        fallbackTextProps={{
          color: TextColor.PrimaryDefault,
          'data-testid': 'fallback-text',
        }}
      />,
    );
    const fallbackText = screen.getByTestId('fallback-text');
    expect(fallbackText).toHaveClass('text-primary-default');
  });

  it('uses BodySm text variant for all sizes', () => {
    const { rerender } = render(
      <AvatarBase
        size={AvatarBaseSize.Xs}
        fallbackText="A"
        fallbackTextProps={{ 'data-testid': 'fallback-text' }}
      />,
    );

    // Test XS size
    let fallbackText = screen.getByTestId('fallback-text');
    expect(fallbackText).toHaveClass('text-s-body-sm');

    // Test MD size
    rerender(
      <AvatarBase
        size={AvatarBaseSize.Md}
        fallbackText="A"
        fallbackTextProps={{ 'data-testid': 'fallback-text' }}
      />,
    );
    fallbackText = screen.getByTestId('fallback-text');
    expect(fallbackText).toHaveClass('text-s-body-sm');

    // Test XL size
    rerender(
      <AvatarBase
        size={AvatarBaseSize.Xl}
        fallbackText="A"
        fallbackTextProps={{ 'data-testid': 'fallback-text' }}
      />,
    );
    fallbackText = screen.getByTestId('fallback-text');
    expect(fallbackText).toHaveClass('text-s-body-sm');
  });
});
