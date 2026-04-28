import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';

import { SelectButtonEndArrow } from '../SelectButton';

import { NetworkSelectButton } from './NetworkSelectButton';

const ROOT_TEST_ID = 'network-select-button';

const remoteSrc = { uri: 'https://example.com/network.png' };

describe('NetworkSelectButton', () => {
  it('shows placeholder when networkName is omitted', () => {
    const { getByText } = render(
      <NetworkSelectButton
        testID={ROOT_TEST_ID}
        onPress={() => undefined}
        placeholder="Network"
      />,
    );

    expect(getByText('Network')).toHaveTextContent('Network');
  });

  it('shows networkName as value when set', () => {
    const { getByText, queryByText } = render(
      <NetworkSelectButton
        testID={ROOT_TEST_ID}
        onPress={() => undefined}
        placeholder="Network"
        networkName="Ethereum"
      />,
    );

    expect(getByText('Ethereum')).toHaveTextContent('Ethereum');
    expect(queryByText('Network')).toBeNull();
  });

  it('renders AvatarNetwork when networkSrc is set', () => {
    const { getByTestId } = render(
      <NetworkSelectButton
        testID={ROOT_TEST_ID}
        onPress={() => undefined}
        placeholder="Network"
        networkName="Ethereum"
        networkSrc={remoteSrc}
        avatarNetworkProps={{ testID: 'network-avatar' }}
      />,
    );

    expect(getByTestId('network-avatar')).toBeOnTheScreen();
  });

  it('ignores caller startAccessory when networkSrc is set', () => {
    const { getByTestId, queryByTestId } = render(
      <NetworkSelectButton
        testID={ROOT_TEST_ID}
        onPress={() => undefined}
        placeholder="Network"
        networkSrc={remoteSrc}
        avatarNetworkProps={{ testID: 'network-avatar' }}
        startAccessory={<View testID="extra-accessory" />}
      />,
    );

    expect(getByTestId('network-avatar')).toBeOnTheScreen();
    expect(queryByTestId('extra-accessory')).toBeNull();
  });

  it('passes through startAccessory when networkSrc is omitted', () => {
    const { getByTestId } = render(
      <NetworkSelectButton
        testID={ROOT_TEST_ID}
        onPress={() => undefined}
        placeholder="Network"
        startAccessory={<View testID="extra-accessory" />}
      />,
    );

    expect(getByTestId('extra-accessory')).toBeOnTheScreen();
  });

  it('invokes onPress when pressed', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <NetworkSelectButton
        testID={ROOT_TEST_ID}
        onPress={onPress}
        placeholder="Network"
        endArrowDirection={SelectButtonEndArrow.Down}
      />,
    );

    fireEvent.press(getByTestId(ROOT_TEST_ID));

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
