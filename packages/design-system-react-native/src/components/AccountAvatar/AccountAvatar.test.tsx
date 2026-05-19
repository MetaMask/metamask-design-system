import {
  AccountAvatarSize,
  AccountAvatarVariant,
} from '@metamask/design-system-shared';
import { render } from '@testing-library/react-native';
import React from 'react';

import { AccountAvatar } from './AccountAvatar';
import { MAP_AVATARACCOUNT_SIZE_SIZENUMBER } from './AccountAvatar.constants';

jest.mock('react-native-svg', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const ReactMock = require('react');
  return {
    SvgXml: (props: { xml: string; testID?: string }) =>
      ReactMock.createElement('SvgXml', props, props.xml),
  };
});
jest.mock('react-native-jazzicon', () => jest.fn(() => null));

describe('AccountAvatar', () => {
  it('renders Jazzicon by default', async () => {
    const { findByTestId } = render(
      <AccountAvatar
        address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
        jazziconProps={{ testID: 'jazzicon' }}
      />,
    );
    expect(await findByTestId('jazzicon')).toBeDefined();
  });

  it('renders Polyicon when variant is polyicon', async () => {
    const { findByTestId } = render(
      <AccountAvatar
        address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
        variant={AccountAvatarVariant.Polyicon}
        polyiconProps={{ testID: 'polyicon' }}
      />,
    );
    expect(await findByTestId('polyicon')).toBeDefined();
  });

  it('respects size', () => {
    const { getByTestId } = render(
      <AccountAvatar
        address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
        size={AccountAvatarSize.Xl}
        testID="avatar-account"
        jazziconProps={{ testID: 'jazzicon' }}
      />,
    );
    const avatarAccount = getByTestId('avatar-account');
    expect(avatarAccount.props.style[0].width).toStrictEqual(
      MAP_AVATARACCOUNT_SIZE_SIZENUMBER[AccountAvatarSize.Xl],
    );
  });
});
