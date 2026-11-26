import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { render, renderHook } from '@testing-library/react-native';
import React from 'react';

import { AvatarAccount } from './AvatarAccount';
import {
  MAP_AVATARACCOUNT_SIZE_SIZENUMBER,
  SAMPLE_AVATARACCOUNT_ADDRESSES,
} from './AvatarAccount.constants';

import { AvatarAccountSize, AvatarAccountVariant } from '.';

jest.mock('react-native-svg', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const ReactMock = require('react');
  return {
    SvgXml: (props: { xml: string; testID?: string }) =>
      ReactMock.createElement('SvgXml', props, props.xml),
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
    expect(jazzicon).toBeDefined();
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

    expect(getByTestId('blockies')).toBeDefined();
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
    expect(maskicon).toBeDefined();
  });

  it('respects the default size and shape', () => {
    const address = SAMPLE_AVATARACCOUNT_ADDRESSES[0];
    const { getByTestId } = render(
      <AvatarAccount address={address} testID="avatar-account" />,
    );
    const avatarAccount = getByTestId('avatar-account');
    expect(avatarAccount).toBeDefined();
    expect(avatarAccount.props.style[0].width).toStrictEqual(
      MAP_AVATARACCOUNT_SIZE_SIZENUMBER[AvatarAccountSize.Md],
    );
    expect(avatarAccount.props.style[0].height).toStrictEqual(
      MAP_AVATARACCOUNT_SIZE_SIZENUMBER[AvatarAccountSize.Md],
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
    expect(jazzicon).toBeDefined();
    const avatarAccount = getByTestId('avatar-account');
    expect(avatarAccount).toBeDefined();
    expect(avatarAccount.props.style[0].width).toStrictEqual(
      MAP_AVATARACCOUNT_SIZE_SIZENUMBER[AvatarAccountSize.Xl],
    );
    expect(avatarAccount.props.style[0].height).toStrictEqual(
      MAP_AVATARACCOUNT_SIZE_SIZENUMBER[AvatarAccountSize.Xl],
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

  describe('when className is provided', () => {
    let twClassNames: ReturnType<typeof useTailwind>;

    beforeAll(() => {
      twClassNames = renderHook(() => useTailwind()).result.current;
    });

    it('applies className after twClassName and component classes', () => {
      const { getByTestId } = render(
        <AvatarAccount
          address="0x1234567890abcdef1234567890abcdef12345678"
          testID="avatar-account-classes"
          twClassName="mt-8"
          className="mt-2"
        />,
      );

      expect(getByTestId('avatar-account-classes')).toHaveStyle(
        twClassNames`mt-2`,
      );
    });

    it('applies deprecated twClassName on its own', () => {
      const { getByTestId } = render(
        <AvatarAccount
          address="0x1234567890abcdef1234567890abcdef12345678"
          testID="avatar-account-classes"
          twClassName="mt-8"
        />,
      );

      expect(getByTestId('avatar-account-classes')).toHaveStyle(
        twClassNames`mt-8`,
      );
    });
  });
});
