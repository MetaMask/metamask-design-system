import { render, screen } from '@testing-library/react';
import React from 'react';

import { AvatarAccountVariant, AvatarAccountSize } from '../../types';
import { AvatarAccount } from './AvatarAccount';

describe('AvatarAccount', () => {
  it('renders Jazzicon variant by default', () => {
    render(
      <AvatarAccount
        address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
        jazziconProps={{ 'data-testid': 'jazzicon' }}
      />,
    );
    expect(screen.getByTestId('jazzicon')).toBeInTheDocument();
  });

  it('renders Blockies variant when specified', () => {
    const address = '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8';
    render(
      <AvatarAccount
        address={address}
        variant={AvatarAccountVariant.Blockies}
        blockiesProps={{ 'data-testid': 'blockies' }}
      />,
    );

    const blockies = screen.getByTestId('blockies');
    expect(blockies).toBeInTheDocument();
    expect(blockies.tagName.toLowerCase()).toBe('img');
    expect(blockies).toHaveAttribute('alt', `Blockies for ${address}`);
    expect(blockies).toHaveAttribute('height', '32'); // Default size
    expect(blockies).toHaveAttribute('width', '32'); // Default size
  });

  it('renders Maskicon variant when specified', () => {
    const address = '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8';
    render(
      <AvatarAccount
        address={address}
        variant={AvatarAccountVariant.Maskicon}
        maskiconProps={{ 'data-testid': 'maskicon' }}
      />,
    );

    const maskicon = screen.getByTestId('maskicon');
    expect(maskicon).toBeInTheDocument();
    expect(maskicon.tagName.toLowerCase()).toBe('div');
  });

  it('applies custom className to root element', () => {
    render(
      <AvatarAccount
        address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
        className="custom-class"
        data-testid="avatar"
      />,
    );
    const avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveClass('custom-class');
  });

  it('applies size mapping correctly', () => {
    const { rerender } = render(
      <AvatarAccount
        address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
        size={AvatarAccountSize.Xs}
        data-testid="avatar"
      />,
    );

    let avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveClass('h-4 w-4');

    rerender(
      <AvatarAccount
        address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
        size={AvatarAccountSize.Sm}
        data-testid="avatar"
      />,
    );
    avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveClass('h-6 w-6');

    rerender(
      <AvatarAccount
        address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
        size={AvatarAccountSize.Md}
        data-testid="avatar"
      />,
    );
    avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveClass('h-8 w-8');

    rerender(
      <AvatarAccount
        address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
        size={AvatarAccountSize.Lg}
        data-testid="avatar"
      />,
    );
    avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveClass('h-10 w-10');

    rerender(
      <AvatarAccount
        address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
        size={AvatarAccountSize.Xl}
        data-testid="avatar"
      />,
    );
    avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveClass('h-12 w-12');
  });

  it('uses medium size by default', () => {
    render(
      <AvatarAccount
        address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
        data-testid="avatar"
      />,
    );
    const avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveClass('h-8 w-8');
  });

  it('passes custom props to Jazzicon', () => {
    render(
      <AvatarAccount
        address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
        jazziconProps={{
          className: 'custom-jazzicon-class',
          'data-testid': 'jazzicon',
        }}
      />,
    );
    expect(screen.getByTestId('jazzicon')).toHaveClass('custom-jazzicon-class');
  });

  it('passes custom props to Blockies', () => {
    render(
      <AvatarAccount
        address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
        variant={AvatarAccountVariant.Blockies}
        blockiesProps={{
          className: 'custom-blockies-class',
          'data-testid': 'blockies',
        }}
      />,
    );
    const blockies = screen.getByTestId('blockies');
    expect(blockies).toBeInTheDocument();
    expect(blockies).toHaveClass('custom-blockies-class');
  });

  it('passes custom props to Maskicon', () => {
    render(
      <AvatarAccount
        address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
        variant={AvatarAccountVariant.Maskicon}
        maskiconProps={{
          className: 'custom-maskicon-class',
          'data-testid': 'maskicon',
        }}
      />,
    );
    const maskicon = screen.getByTestId('maskicon');
    expect(maskicon).toBeInTheDocument();
    expect(maskicon).toHaveClass('custom-maskicon-class');
  });
});
