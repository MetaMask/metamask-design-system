import { render } from '@testing-library/react-native';
import React from 'react';

import { AvatarAccountSize, AvatarAccountVariant } from '../../types';
import AvatarAccount from './AvatarAccount';
import { SAMPLE_AVATARACCOUNT_ADDRESSES } from './AvatarAccount.constants';

jest.mock('react-native-svg', () => {
  const React = require('react');
  return {
    SvgXml: (props: any) => React.createElement('SvgXml', props, props.xml),
  };
});
jest.mock('react-native-jazzicon', () => {
  return jest.fn(() => null);
});

describe('AvatarAccount', () => {
  it('renders Jazzicon by default when no variant is provided', async () => {
    const address = SAMPLE_AVATARACCOUNT_ADDRESSES[0];

    const { findByTestId } = render(
      <AvatarAccount
        address={address}
        jazziconProps={{ testID: 'jazzicon' }}
      />,
    );
    const jazzicon = await findByTestId('jazzicon');
    expect(jazzicon).toBeTruthy();
  });

  it('renders Blockies when variant is blockies', () => {
    const address = SAMPLE_AVATARACCOUNT_ADDRESSES[0];

    const { getByTestId } = render(
      <AvatarAccount
        address={address}
        variant={AvatarAccountVariant.Blockies}
        blockiesProps={{ testID: 'blockies' }}
      />,
    );

    expect(getByTestId('blockies')).toBeTruthy();
  });

  it('renders Maskicon when variant is maskicon', async () => {
    const address = SAMPLE_AVATARACCOUNT_ADDRESSES[0];

    const { findByTestId } = render(
      <AvatarAccount
        address={address}
        variant={AvatarAccountVariant.Maskicon}
        maskiconProps={{ testID: 'maskicon' }}
      />,
    );

    const maskicon = await findByTestId('maskicon');
    expect(maskicon).toBeTruthy();
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

  it('overrides the size if provided', async () => {
    const address = SAMPLE_AVATARACCOUNT_ADDRESSES[0];
    const { findByTestId, getByTestId } = render(
      <AvatarAccount
        address={address}
        size={AvatarAccountSize.Xl}
        testID="avatar-account"
        jazziconProps={{ testID: 'jazzicon' }}
      />,
    );

    const jazzicon = await findByTestId('jazzicon');
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
