import { render } from '@testing-library/react-native';
import React from 'react';

import { AvatarAccountSize, AvatarAccountVariant } from '../../types';
import AvatarAccount from './AvatarAccount';
import { SAMPLE_AVATARACCOUNT_ADDRESSES } from './AvatarAccount.constants';

describe('AvatarAccount', () => {
  it('renders Jazzicon by default when no variant is provided', () => {
    const address = SAMPLE_AVATARACCOUNT_ADDRESSES[0];

    const { getByTestId, queryByTestId } = render(
      <AvatarAccount address={address} />,
    );

    expect(getByTestId('jazzicon')).toBeTruthy();
    expect(queryByTestId('blockies')).toBeNull();
  });

  it('renders Blockies when variant is blockies', () => {
    const address = SAMPLE_AVATARACCOUNT_ADDRESSES[0];

    const { getByTestId, queryByTestId } = render(
      <AvatarAccount
        address={address}
        variant={AvatarAccountVariant.Blockies}
      />,
    );

    expect(getByTestId('blockies')).toBeTruthy();
    expect(queryByTestId('jazzicon')).toBeNull();
  });

  it('respects the default size and shape', () => {
    const address = SAMPLE_AVATARACCOUNT_ADDRESSES[0];
    const { getByTestId } = render(
      <AvatarAccount address={address} testID="avatar-account" />,
    );
    const avatarAccount = getByTestId('avatar-account');
    expect(avatarAccount).toBeDefined();
    expect(avatarAccount.props.style[0].width).toStrictEqual(
      Number(AvatarAccountSize.Md),
    );
    expect(avatarAccount.props.style[0].height).toStrictEqual(
      Number(AvatarAccountSize.Md),
    );
  });

  it('overrides the size if provided', () => {
    const address = SAMPLE_AVATARACCOUNT_ADDRESSES[0];
    const { getByTestId } = render(
      <AvatarAccount
        address={address}
        size={AvatarAccountSize.Xl}
        testID="avatar-account"
      />,
    );

    const jazzicon = getByTestId('jazzicon');
    expect(jazzicon).toBeTruthy();
    const avatarAccount = getByTestId('avatar-account');
    expect(avatarAccount).toBeDefined();
    expect(avatarAccount.props.style[0].width).toStrictEqual(
      Number(AvatarAccountSize.Xl),
    );
    expect(avatarAccount.props.style[0].height).toStrictEqual(
      Number(AvatarAccountSize.Xl),
    );
  });

  it('passes additional props to AvatarBase', () => {
    const address = SAMPLE_AVATARACCOUNT_ADDRESSES[0];
    const customStyle = { margin: 10 };
    const { getByTestId } = render(
      <AvatarAccount
        address={address}
        testID="avatar-base"
        style={customStyle}
      />,
    );
    const avatarBase = getByTestId('avatar-base');
    expect(avatarBase.props.style[1]).toStrictEqual(customStyle);
  });
});
