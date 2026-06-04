import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { fireEvent, render, renderHook } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import { Card } from './Card';

/**
 * Flattens a given style prop into a plain array of ViewStyle objects.
 *
 * @param styleProp - The style prop to flatten.
 * @returns An array of flattened ViewStyle objects.
 */
function flattenStyles(
  styleProp: StyleProp<ViewStyle> | undefined,
): ViewStyle[] {
  if (styleProp === null) {
    return [];
  }
  if (Array.isArray(styleProp)) {
    return styleProp.flatMap((item) =>
      flattenStyles(item as StyleProp<ViewStyle>),
    );
  }
  if (typeof styleProp === 'object') {
    return [styleProp as ViewStyle];
  }
  return [];
}

describe('Card', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(async () => {
    const { result } = await renderHook(() => useTailwind());

    tw = result.current;
  });

  it('renders children', async () => {
    const { getByText } = await render(
      <Card>
        <Text>Card content</Text>
      </Card>,
    );
    expect(getByText('Card content')).toBeDefined();
  });

  it('renders as a View when onPress is not provided', async () => {
    const { getByTestId } = await render(
      <Card testID="card">
        <Text>Content</Text>
      </Card>,
    );
    const card = getByTestId('card');
    expect(card.type).toBe('View');
  });

  it('renders as accessible when onPress is provided', async () => {
    const { getByTestId } = await render(
      <Card testID="card" onPress={jest.fn()}>
        <Text>Content</Text>
      </Card>,
    );
    const card = getByTestId('card');
    // TouchableOpacity sets accessible=true on its host View
    expect(card.props.accessible).toBe(true);
  });

  it('fires onPress when pressed', async () => {
    const onPressMock = jest.fn();
    const { getByTestId } = await render(
      <Card testID="card" onPress={onPressMock}>
        <Text>Content</Text>
      </Card>,
    );
    await fireEvent.press(getByTestId('card'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('applies default card styles', async () => {
    const { getByTestId } = await render(
      <Card testID="card">
        <Text>Content</Text>
      </Card>,
    );
    const card = getByTestId('card');
    const styles = flattenStyles(card.props.style);
    expect(styles[0]).toStrictEqual(
      tw.style('p-4 rounded border border-default bg-default'),
    );
  });

  it('applies twClassName', async () => {
    const { getByTestId } = await render(
      <Card testID="card" twClassName="p-8 rounded-lg">
        <Text>Content</Text>
      </Card>,
    );
    const card = getByTestId('card');
    const styles = flattenStyles(card.props.style);
    expect(styles[0]).toStrictEqual(
      tw.style(
        'p-4 rounded border border-default bg-default',
        'p-8 rounded-lg',
      ),
    );
  });

  it('merges custom style prop', async () => {
    const { getByTestId } = await render(
      <Card testID="card" style={{ margin: 8 }}>
        <Text>Content</Text>
      </Card>,
    );
    const card = getByTestId('card');
    const styles = flattenStyles(card.props.style);
    expect(styles[0]).toStrictEqual(
      tw.style('p-4 rounded border border-default bg-default'),
    );
    expect(styles[1]).toStrictEqual({ margin: 8 });
  });

  it('passes testID to root element via ViewProps', async () => {
    const { getByTestId } = await render(
      <Card testID="my-card">
        <Text>Content</Text>
      </Card>,
    );
    expect(getByTestId('my-card')).toBeDefined();
  });

  it('passes accessibilityLabel via ViewProps', async () => {
    const { getByTestId } = await render(
      <Card testID="card" accessibilityLabel="My card">
        <Text>Content</Text>
      </Card>,
    );
    const card = getByTestId('card');
    expect(card.props.accessibilityLabel).toBe('My card');
  });

  it('accepts touchableOpacityProps without breaking onPress', async () => {
    const onPressMock = jest.fn();
    const { getByTestId } = await render(
      <Card
        testID="card"
        onPress={onPressMock}
        touchableOpacityProps={{ activeOpacity: 0.5 }}
      >
        <Text>Content</Text>
      </Card>,
    );
    await fireEvent.press(getByTestId('card'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
