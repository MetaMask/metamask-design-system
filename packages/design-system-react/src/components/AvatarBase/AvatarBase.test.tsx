import { render, screen } from '@testing-library/react';
import React from 'react';

import { AvatarBaseSize, AvatarBaseShape } from '../../types';
import { TextColor } from '../Text';
import { AvatarBase } from './AvatarBase';
import {
  TWCLASSMAP_AVATARBASE_SIZE_DIMENSION,
  TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE,
} from './AvatarBase.constants';

describe('AvatarBase', () => {
  it('renders with default styles', () => {
    render(<AvatarBase fallbackText="A" />);

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

    Object.entries(TWCLASSMAP_AVATARBASE_SIZE_DIMENSION).forEach(
      ([size, classes]) => {
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
      },
    );
  });

  it('renders with border when hasBorder is true', () => {
    render(<AvatarBase fallbackText="A" hasBorder data-testid="avatar" />);
    const avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveClass('border-background-default');
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

    expect(screen.getByTestId('avatar')).toHaveClass('rounded-full');

    rerender(
      <AvatarBase
        shape={AvatarBaseShape.Square}
        size={AvatarBaseSize.Md}
        fallbackText="A"
        data-testid="avatar"
      />,
    );
    expect(screen.getByTestId('avatar')).toHaveClass('rounded-lg');
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
    Object.entries(TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE).forEach(
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

  it('prioritizes fallbackText over children', () => {
    render(
      <AvatarBase fallbackText="Fallback">
        <span>Child</span>
      </AvatarBase>,
    );
    expect(screen.queryByText('Child')).not.toBeInTheDocument();
    expect(screen.getByText('Fallback')).toBeInTheDocument();
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
