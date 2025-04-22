import React from 'react';
import { render, screen } from '@testing-library/react';

import { AvatarGroupVariant } from '../../types';
import { AvatarGroup } from './AvatarGroup';
import {
  SAMPLE_AVATARGROUP_AVATARACCOUNTPROPSARR,
  SAMPLE_AVATARGROUP_AVATARFAVICONPROPSARR,
  SAMPLE_AVATARGROUP_AVATARNETWORKPROPSARR,
  SAMPLE_AVATARGROUP_AVATARTOKENPROPSARR,
} from './AvatarGroup.dev';

describe('AvatarGroup', () => {
  it('renders default container classes', () => {
    render(
      <AvatarGroup
        variant={AvatarGroupVariant.Account}
        avatarPropsArr={SAMPLE_AVATARGROUP_AVATARACCOUNTPROPSARR.slice(0, 2)}
        data-testid="group"
      />,
    );
    const root = screen.getByTestId('group');
    expect(root).toHaveClass('inline-flex', 'flex-row');
    expect(root).not.toHaveClass('flex-row-reverse');
  });

  it('renders account avatars up to max without overflow', () => {
    const avatars = SAMPLE_AVATARGROUP_AVATARACCOUNTPROPSARR.slice(0, 3);
    render(
      <AvatarGroup
        variant={AvatarGroupVariant.Account}
        avatarPropsArr={avatars}
        max={4}
        data-testid="group"
      />,
    );
    expect(screen.queryByTestId('avatar-overflow-text')).toBeNull();
    expect(screen.getAllByTestId('avatar-Account')).toHaveLength(3);
  });

  it('renders overflow counter when avatars exceed max', () => {
    const avatars = SAMPLE_AVATARGROUP_AVATARACCOUNTPROPSARR.slice(0, 6);
    render(
      <AvatarGroup
        variant={AvatarGroupVariant.Account}
        avatarPropsArr={avatars}
        max={4}
        data-testid="group"
      />,
    );
    const overflow = screen.getByTestId('avatar-overflow-text');
    expect(overflow).toBeInTheDocument();
    expect(overflow).toHaveTextContent('+2');

    const overflowContainer = overflow.parentElement!;
    // default size Md → 'h-8 w-8', and circle → 'rounded-full'
    expect(overflowContainer).toHaveClass(
      'h-[33px]',
      'w-[33px]',
      'rounded-full',
    );
    // Z‐index should equal total avatars
    expect(overflowContainer).toHaveStyle({ zIndex: avatars.length });
  });

  it('uses square border radius for Network variant overflow', () => {
    const avatars = SAMPLE_AVATARGROUP_AVATARNETWORKPROPSARR.slice(0, 6);
    render(
      <AvatarGroup
        variant={AvatarGroupVariant.Network}
        avatarPropsArr={avatars}
        max={4}
        data-testid="group"
      />,
    );
    const overflow = screen.getByTestId('avatar-overflow-text');
    const overflowContainer = overflow.parentElement!;
    // Network + default size Md → rounded-lg
    expect(overflowContainer).toHaveClass('rounded-lg');
  });

  it('applies custom className and style on container', () => {
    render(
      <AvatarGroup
        variant={AvatarGroupVariant.Favicon}
        avatarPropsArr={SAMPLE_AVATARGROUP_AVATARFAVICONPROPSARR.slice(0, 2)}
        className="custom-class"
        style={{ backgroundColor: 'red' }}
        data-testid="group"
      />,
    );
    const root = screen.getByTestId('group');
    expect(root).toHaveClass('custom-class');
    expect(root).toHaveStyle({ backgroundColor: 'red' });
  });

  it('reverses direction when isReverse is true', () => {
    const avatars = SAMPLE_AVATARGROUP_AVATARFAVICONPROPSARR.slice(0, 3);
    render(
      <AvatarGroup
        variant={AvatarGroupVariant.Favicon}
        avatarPropsArr={avatars}
        isReverse
        data-testid="group"
      />,
    );
    const root = screen.getByTestId('group');
    expect(root).toHaveClass('flex-row-reverse');
  });

  it('renders correct avatars for Account variant', () => {
    const arr = SAMPLE_AVATARGROUP_AVATARACCOUNTPROPSARR.slice(0, 2);
    render(
      <AvatarGroup
        variant={AvatarGroupVariant.Account}
        avatarPropsArr={arr}
        max={4}
        data-testid="group-account"
      />,
    );
    expect(screen.getAllByTestId('avatar-Account')).toHaveLength(2);
  });

  it('renders correct avatars for Favicon variant', () => {
    const arr = SAMPLE_AVATARGROUP_AVATARFAVICONPROPSARR.slice(0, 2);
    render(
      <AvatarGroup
        variant={AvatarGroupVariant.Favicon}
        avatarPropsArr={arr}
        max={4}
        data-testid="group-favicon"
      />,
    );
    expect(screen.getAllByTestId('avatar-Favicon')).toHaveLength(2);
  });

  it('renders correct avatars for Network variant', () => {
    const arr = SAMPLE_AVATARGROUP_AVATARNETWORKPROPSARR.slice(0, 2);
    render(
      <AvatarGroup
        variant={AvatarGroupVariant.Network}
        avatarPropsArr={arr}
        max={4}
        data-testid="group-network"
      />,
    );
    expect(screen.getAllByTestId('avatar-Network')).toHaveLength(2);
  });

  it('renders correct avatars for Token variant', () => {
    const arr = SAMPLE_AVATARGROUP_AVATARTOKENPROPSARR.slice(0, 2);
    render(
      <AvatarGroup
        variant={AvatarGroupVariant.Token}
        avatarPropsArr={arr}
        max={4}
        data-testid="group-token"
      />,
    );
    expect(screen.getAllByTestId('avatar-Token')).toHaveLength(2);
  });

  it('throws error for invalid variant', () => {
    // @ts-ignore: force invalid variant
    expect(() =>
      render(
        <AvatarGroup
          variant={'not-a-variant' as any}
          avatarPropsArr={[{ name: 'x', src: 'y' }]}
        />,
      ),
    ).toThrow(/Invalid Avatar Variant/);
  });
});
