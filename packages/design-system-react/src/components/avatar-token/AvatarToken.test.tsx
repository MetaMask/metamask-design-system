import { render, screen } from '@testing-library/react';
import React from 'react';

import { TextColor } from '..';
import { AvatarToken } from './AvatarToken';
import { AvatarTokenSize } from '.';

describe('AvatarToken', () => {
  it('renders image when src is provided', () => {
    render(
      <AvatarToken src="test-image.jpg" name="Ethereum" fallbackText="Eth" />,
    );

    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'test-image.jpg');
    expect(img).toHaveAttribute('alt', 'Ethereum');
  });

  it('renders fallbackText when src is not provided', () => {
    render(<AvatarToken name="Ethereum" fallbackText="Eth" />);
    expect(screen.getByText('Eth')).toBeInTheDocument();
  });

  it('applies fallbackTextProps to Text component', () => {
    render(
      <AvatarToken
        name="Ethereum"
        fallbackText="Eth"
        fallbackTextProps={{
          color: TextColor.TextAlternative,
          className: 'test-class',
          'data-testid': 'fallback-text',
        }}
      />,
    );

    const text = screen.getByTestId('fallback-text');
    expect(text).toHaveClass('text-alternative', 'test-class');
  });

  it('applies custom className to root element', () => {
    render(
      <AvatarToken
        name="Ethereum"
        fallbackText="Eth"
        className="custom-class"
        data-testid="avatar"
      />,
    );

    const avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveClass('custom-class');
  });

  it('passes through additional image props when src is provided', () => {
    render(
      <AvatarToken
        src="test-image.jpg"
        name="Ethereum"
        fallbackText="Eth"
        imageProps={{
          loading: 'lazy',
        }}
      />,
    );

    screen.debug();

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('loading', 'lazy');
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(
      <AvatarToken
        name="Ethereum"
        fallbackText="Eth"
        size={AvatarTokenSize.Xs}
        data-testid="avatar"
      />,
    );

    let avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveClass('h-4 w-4');

    rerender(
      <AvatarToken
        name="Ethereum"
        fallbackText="Eth"
        size={AvatarTokenSize.Sm}
        data-testid="avatar"
      />,
    );
    avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveClass('h-6 w-6');

    rerender(
      <AvatarToken
        name="Ethereum"
        fallbackText="Eth"
        size={AvatarTokenSize.Md}
        data-testid="avatar"
      />,
    );
    avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveClass('h-8 w-8');

    rerender(
      <AvatarToken
        name="Ethereum"
        fallbackText="Eth"
        size={AvatarTokenSize.Lg}
        data-testid="avatar"
      />,
    );
    avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveClass('h-10 w-10');

    rerender(
      <AvatarToken
        name="Ethereum"
        fallbackText="Eth"
        size={AvatarTokenSize.Xl}
        data-testid="avatar"
      />,
    );
    avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveClass('h-12 w-12');
  });

  it('uses medium size by default', () => {
    render(<AvatarToken name="Ethereum" data-testid="avatar" />);
    const avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveClass('h-8 w-8');
  });

  it('uses name as alt text when fallbackText is not provided', () => {
    render(<AvatarToken src="test-image.jpg" name="Ethereum" />);

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('alt', 'Ethereum');
  });

  it('uses first letter of name as fallback text when fallbackText is not provided', () => {
    render(<AvatarToken name="Ethereum" />);
    expect(screen.getByText('E')).toBeInTheDocument();
  });

  it('prioritizes fallbackText over name for both alt text and fallback display', () => {
    const { rerender } = render(
      <AvatarToken
        src="test-image.jpg"
        name="Ethereum"
        fallbackText="ETH"
        imageProps={{ alt: 'ETH' }}
      />,
    );

    let img = screen.getByRole('img');
    expect(img).toHaveAttribute('alt', 'ETH');

    rerender(<AvatarToken name="Ethereum" fallbackText="ETH" />);

    expect(screen.getByText('ETH')).toBeInTheDocument();
  });
});

describe('text display and alt text logic', () => {
  it('uses first letter of name when fallbackText is not provided', () => {
    render(<AvatarToken name="Ethereum" />);
    expect(screen.getByText('E')).toBeInTheDocument();
  });

  it('uses fallbackText for display when provided', () => {
    render(<AvatarToken name="Ethereum" fallbackText="ETH" />);
    expect(screen.getByText('ETH')).toBeInTheDocument();
  });

  it('uses name for alt text when src is provided', () => {
    render(<AvatarToken name="Ethereum" src="test.jpg" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('alt', 'Ethereum');
  });

  it('uses name for alt text even when fallbackText is provided', () => {
    render(<AvatarToken name="Ethereum" fallbackText="ETH" src="test.jpg" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('alt', 'Ethereum');
  });

  it('allows alt text override through imageProps', () => {
    render(
      <AvatarToken
        name="Ethereum"
        src="test.jpg"
        imageProps={{ alt: 'Custom Alt' }}
      />,
    );
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('alt', 'Custom Alt');
  });

  it('uses empty string for display text when name is not provided', () => {
    // @ts-expect-error testing invalid props
    render(<AvatarToken data-testid="avatar" />);
    const base = screen.getByTestId('avatar');
    expect(base.querySelector('span')).toHaveTextContent('');
  });

  it('uses default "Token logo" for alt text when name is not provided', () => {
    // @ts-expect-error testing invalid props
    render(<AvatarToken src="test.jpg" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('alt', 'Token logo');
  });
});
