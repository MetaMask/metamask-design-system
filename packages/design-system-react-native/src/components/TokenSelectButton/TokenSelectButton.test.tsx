import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';

import { SelectButtonEndArrow } from '../SelectButton';

import { TokenSelectButton } from './TokenSelectButton';

const ROOT_TEST_ID = 'token-select-button';

const remoteSrc = { uri: 'https://example.com/token.png' };

describe('TokenSelectButton', () => {
  it('shows placeholder when tokenName is omitted', () => {
    const { getByText } = render(
      <TokenSelectButton
        testID={ROOT_TEST_ID}
        onPress={() => undefined}
        placeholder="Token"
      />,
    );

    expect(getByText('Token')).toHaveTextContent('Token');
  });

  it('shows tokenName as value when set', () => {
    const { getByText, queryByText } = render(
      <TokenSelectButton
        testID={ROOT_TEST_ID}
        onPress={() => undefined}
        placeholder="Token"
        tokenName="ETH"
      />,
    );

    expect(getByText('ETH')).toHaveTextContent('ETH');
    expect(queryByText('Token')).toBeNull();
  });

  it('renders AvatarToken when tokenSrc is set', () => {
    const { getByTestId } = render(
      <TokenSelectButton
        testID={ROOT_TEST_ID}
        onPress={() => undefined}
        placeholder="Token"
        tokenName="ETH"
        tokenSrc={remoteSrc}
        avatarTokenProps={{ testID: 'token-avatar' }}
      />,
    );

    expect(getByTestId('token-avatar')).toBeOnTheScreen();
  });

  it('ignores caller startAccessory when tokenSrc is set', () => {
    const { getByTestId, queryByTestId } = render(
      <TokenSelectButton
        testID={ROOT_TEST_ID}
        onPress={() => undefined}
        placeholder="Token"
        tokenSrc={remoteSrc}
        avatarTokenProps={{ testID: 'token-avatar' }}
        startAccessory={<View testID="extra-accessory" />}
      />,
    );

    expect(getByTestId('token-avatar')).toBeOnTheScreen();
    expect(queryByTestId('extra-accessory')).toBeNull();
  });

  it('passes through startAccessory when tokenSrc is omitted', () => {
    const { getByTestId } = render(
      <TokenSelectButton
        testID={ROOT_TEST_ID}
        onPress={() => undefined}
        placeholder="Token"
        startAccessory={<View testID="extra-accessory" />}
      />,
    );

    expect(getByTestId('extra-accessory')).toBeOnTheScreen();
  });

  it('invokes onPress when pressed', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <TokenSelectButton
        testID={ROOT_TEST_ID}
        onPress={onPress}
        placeholder="Token"
        endArrowDirection={SelectButtonEndArrow.Down}
      />,
    );

    fireEvent.press(getByTestId(ROOT_TEST_ID));

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
