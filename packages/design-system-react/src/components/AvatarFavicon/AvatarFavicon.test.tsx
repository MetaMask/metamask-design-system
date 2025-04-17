import { render, screen } from '@testing-library/react';
import React from 'react';

import { AvatarFaviconSize } from '../../types';
import { TextColor } from '../Text';
import { AvatarFavicon } from './AvatarFavicon';

describe('AvatarFavicon', () => {
  it('renders image when src is provided', () => {
    render(
      <AvatarFavicon
        src="test-image.jpg"
        name="MetaMask Portfolio"
        fallbackText="MM"
      />,
    );

    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'test-image.jpg');
    expect(img).toHaveAttribute('alt', 'MetaMask Portfolio');
  });

  it('renders fallbackText when src is not provided', () => {
    render(<AvatarFavicon name="MetaMask Portfolio" fallbackText="MM" />);
    expect(screen.getByText('MM')).toBeInTheDocument();
  });

  it('applies fallbackTextProps to Text component', () => {
    render(
      <AvatarFavicon
        name="MetaMask Portfolio"
        fallbackText="MM"
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
      <AvatarFavicon
        name="MetaMask Portfolio"
        fallbackText="MM"
        className="custom-class"
        data-testid="avatar"
      />,
    );

    const avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveClass('custom-class');
  });

  it('passes through additional image props when src is provided', () => {
    render(
      <AvatarFavicon
        src="test-image.jpg"
        name="MetaMask Portfolio"
        fallbackText="MM"
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
      <AvatarFavicon
        name="MetaMask Portfolio"
        fallbackText="MM"
        size={AvatarFaviconSize.Xs}
        data-testid="avatar"
      />,
    );

    let avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveClass('h-4 w-4');

    rerender(
      <AvatarFavicon
        name="MetaMask Portfolio"
        fallbackText="MM"
        size={AvatarFaviconSize.Sm}
        data-testid="avatar"
      />,
    );
    avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveClass('h-6 w-6');

    rerender(
      <AvatarFavicon
        name="MetaMask Portfolio"
        fallbackText="MM"
        size={AvatarFaviconSize.Md}
        data-testid="avatar"
      />,
    );
    avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveClass('h-8 w-8');

    rerender(
      <AvatarFavicon
        name="MetaMask Portfolio"
        fallbackText="MM"
        size={AvatarFaviconSize.Lg}
        data-testid="avatar"
      />,
    );
    avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveClass('h-10 w-10');

    rerender(
      <AvatarFavicon
        name="MetaMask Portfolio"
        fallbackText="MM"
        size={AvatarFaviconSize.Xl}
        data-testid="avatar"
      />,
    );
    avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveClass('h-12 w-12');
  });

  it('uses medium size by default', () => {
    render(<AvatarFavicon name="MetaMask Portfolio" data-testid="avatar" />);
    const avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveClass('h-8 w-8');
  });

  it('uses name as alt text when fallbackText is not provided', () => {
    render(<AvatarFavicon src="test-image.jpg" name="MetaMask Portfolio" />);

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('alt', 'MetaMask Portfolio');
  });

  it('uses first letter of name as fallback text when fallbackText is not provided', () => {
    render(<AvatarFavicon name="MetaMask Portfolio" />);
    expect(screen.getByText('M')).toBeInTheDocument();
  });

  it('prioritizes fallbackText over name for both alt text and fallback display', () => {
    const { rerender } = render(
      <AvatarFavicon
        src="test-image.jpg"
        name="MetaMask Portfolio"
        fallbackText="MM"
        imageProps={{ alt: 'MM' }}
      />,
    );

    let img = screen.getByRole('img');
    expect(img).toHaveAttribute('alt', 'MM');

    rerender(<AvatarFavicon name="MetaMask Portfolio" fallbackText="MM" />);

    expect(screen.getByText('MM')).toBeInTheDocument();
  });
});

describe('text display and alt text logic', () => {
  it('uses first letter of name when fallbackText is not provided', () => {
    render(<AvatarFavicon name="MetaMask Portfolio" />);
    expect(screen.getByText('M')).toBeInTheDocument();
  });

  it('uses fallbackText for display when provided', () => {
    render(<AvatarFavicon name="MetaMask Portfolio" fallbackText="MM" />);
    expect(screen.getByText('MM')).toBeInTheDocument();
  });

  it('uses name for alt text when src is provided', () => {
    render(<AvatarFavicon name="MetaMask Portfolio" src="test.jpg" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('alt', 'MetaMask Portfolio');
  });

  it('uses name for alt text even when fallbackText is provided', () => {
    render(
      <AvatarFavicon
        name="MetaMask Portfolio"
        fallbackText="MM"
        src="test.jpg"
      />,
    );
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('alt', 'MetaMask Portfolio');
  });

  it('allows alt text override through imageProps', () => {
    render(
      <AvatarFavicon
        name="MetaMask Portfolio"
        src="test.jpg"
        imageProps={{ alt: 'Custom Alt' }}
      />,
    );
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('alt', 'Custom Alt');
  });

  it('uses empty string for display text when name is not provided', () => {
    // @ts-expect-error testing invalid props
    render(<AvatarFavicon data-testid="avatar" />);
    const base = screen.getByTestId('avatar');
    expect(base.querySelector('span')).toHaveTextContent('');
  });

  it('uses default "Token logo" for alt text when name is not provided', () => {
    // @ts-expect-error testing invalid props
    render(<AvatarFavicon src="test.jpg" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('alt', 'Dapp logo');
  });
});
