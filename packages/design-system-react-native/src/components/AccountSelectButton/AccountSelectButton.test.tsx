import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';

import { SelectButtonEndArrow } from '../SelectButton';

import { AccountSelectButton } from './AccountSelectButton';

const ROOT_TEST_ID = 'account-select-button';

const DEMO_ADDRESS = '0x0000000000000000000000000000000000000000';

describe('AccountSelectButton', () => {
  it('shows placeholder when accountName is omitted', () => {
    const { getByText } = render(
      <AccountSelectButton
        testID={ROOT_TEST_ID}
        onPress={() => undefined}
        placeholder="Account"
      />,
    );

    expect(getByText('Account')).toHaveTextContent('Account');
  });

  it('shows accountName as value when set', () => {
    const { getByText, queryByText } = render(
      <AccountSelectButton
        testID={ROOT_TEST_ID}
        onPress={() => undefined}
        placeholder="Account"
        accountName="Primary wallet"
      />,
    );

    expect(getByText('Primary wallet')).toHaveTextContent('Primary wallet');
    expect(queryByText('Account')).toBeNull();
  });

  it('renders AvatarAccount when accountAddress is set', () => {
    const { getByTestId } = render(
      <AccountSelectButton
        testID={ROOT_TEST_ID}
        onPress={() => undefined}
        placeholder="Account"
        accountName="Primary wallet"
        accountAddress={DEMO_ADDRESS}
        avatarAccountProps={{ testID: 'account-avatar' }}
      />,
    );

    expect(getByTestId('account-avatar')).toBeOnTheScreen();
  });

  it('ignores caller startAccessory when accountAddress is set', () => {
    const { getByTestId, queryByTestId } = render(
      <AccountSelectButton
        testID={ROOT_TEST_ID}
        onPress={() => undefined}
        placeholder="Account"
        accountAddress={DEMO_ADDRESS}
        avatarAccountProps={{ testID: 'account-avatar' }}
        startAccessory={<View testID="extra-accessory" />}
      />,
    );

    expect(getByTestId('account-avatar')).toBeOnTheScreen();
    expect(queryByTestId('extra-accessory')).toBeNull();
  });

  it('passes through startAccessory when accountAddress is omitted', () => {
    const { getByTestId } = render(
      <AccountSelectButton
        testID={ROOT_TEST_ID}
        onPress={() => undefined}
        placeholder="Account"
        startAccessory={<View testID="extra-accessory" />}
      />,
    );

    expect(getByTestId('extra-accessory')).toBeOnTheScreen();
  });

  it('invokes onPress when pressed', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <AccountSelectButton
        testID={ROOT_TEST_ID}
        onPress={onPress}
        placeholder="Account"
        endArrowDirection={SelectButtonEndArrow.Down}
      />,
    );

    fireEvent.press(getByTestId(ROOT_TEST_ID));

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
