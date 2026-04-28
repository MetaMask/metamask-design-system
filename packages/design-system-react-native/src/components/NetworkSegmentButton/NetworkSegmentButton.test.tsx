import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';

import { SegmentGroup } from '../SegmentGroup/SegmentGroup';

import { NetworkSegmentButton } from './NetworkSegmentButton';

const ROOT_TEST_ID = 'network-segment-button';

const noopPress = () => undefined;

const remoteSrc = { uri: 'https://example.com/network.png' };

describe('NetworkSegmentButton', () => {
  it('renders networkName as the segment label', () => {
    const { getByText } = render(
      <NetworkSegmentButton
        testID={ROOT_TEST_ID}
        onPress={noopPress}
        networkName="Ethereum"
      />,
    );

    expect(getByText('Ethereum')).toHaveTextContent('Ethereum');
  });

  it('renders AvatarNetwork in startAccessory when networkSrc is set', () => {
    const { getByTestId } = render(
      <NetworkSegmentButton
        testID={ROOT_TEST_ID}
        onPress={noopPress}
        networkName="Ethereum"
        networkSrc={remoteSrc}
        avatarNetworkProps={{ testID: 'network-avatar' }}
      />,
    );

    expect(getByTestId('network-avatar')).toBeOnTheScreen();
  });

  it('ignores caller startAccessory when networkSrc is set', () => {
    const { getByTestId, queryByTestId } = render(
      <NetworkSegmentButton
        testID={ROOT_TEST_ID}
        onPress={noopPress}
        networkName="Ethereum"
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
      <NetworkSegmentButton
        testID={ROOT_TEST_ID}
        onPress={noopPress}
        networkName="Ethereum"
        startAccessory={<View testID="extra-accessory" />}
      />,
    );

    expect(getByTestId('extra-accessory')).toBeOnTheScreen();
  });

  it('updates SegmentGroup selection when value changes', () => {
    const onChange = jest.fn();
    const { getByText } = render(
      <SegmentGroup value="a" onChange={onChange}>
        <NetworkSegmentButton value="a" onPress={noopPress} networkName="A" />
        <NetworkSegmentButton value="b" onPress={noopPress} networkName="B" />
      </SegmentGroup>,
    );

    fireEvent.press(getByText('B'));

    expect(onChange).toHaveBeenCalledWith('b');
  });
});
