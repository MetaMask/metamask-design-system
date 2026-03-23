import { render, screen } from '@testing-library/react-native';
import React from 'react';

import { TokenListItem } from './TokenListItem';

describe('TokenListItem', () => {
  it('renders with required avatarTokenProps', () => {
    render(
      <TokenListItem
        avatarTokenProps={{ name: 'eth', fallbackText: 'ETH' }}
        title="Ethereum"
        testID="token-list-item"
      />,
    );

    expect(screen.getByTestId('token-list-item')).toBeOnTheScreen();
    expect(screen.getByText('Ethereum')).toBeOnTheScreen();
  });

  it('passes through title, subtitle, and value to ListItemBase', () => {
    render(
      <TokenListItem
        avatarTokenProps={{}}
        title="Token name"
        subtitle="Secondary"
        value="1.5"
      />,
    );

    expect(screen.getByText('Token name')).toBeOnTheScreen();
    expect(screen.getByText('Secondary')).toBeOnTheScreen();
    expect(screen.getByText('1.5')).toBeOnTheScreen();
  });

  it('renders when only title is provided', () => {
    render(<TokenListItem avatarTokenProps={{}} title="Title only" />);

    expect(screen.getByText('Title only')).toBeOnTheScreen();
  });

  it('renders supporting text when provided', () => {
    render(
      <TokenListItem
        avatarTokenProps={{}}
        title="Amount"
        value="$10"
        supporting="~$10.50"
      />,
    );

    expect(screen.getByText('Amount')).toBeOnTheScreen();
    expect(screen.getByText('$10')).toBeOnTheScreen();
    expect(screen.getByText('~$10.50')).toBeOnTheScreen();
  });

  it('renders AvatarToken from avatarTokenProps', () => {
    render(
      <TokenListItem
        avatarTokenProps={{ testID: 'token-avatar', fallbackText: 'ETH' }}
        title="Ethereum"
      />,
    );

    expect(screen.getByTestId('token-avatar')).toBeOnTheScreen();
  });
});
