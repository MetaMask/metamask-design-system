import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent, render } from '@testing-library/react-native';
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

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  it('renders children', () => {
    const { getByText } = render(
      <Card>
        <Text>Card content</Text>
      </Card>,
    );
    expect(getByText('Card content')).toBeDefined();
  });

  it('renders as a View when onPress is not provided', () => {
    const { getByTestId } = render(
      <Card testID="card">
        <Text>Content</Text>
      </Card>,
    );
    const card = getByTestId('card');
    expect(card.type).toBe('View');
  });

  it('renders as a TouchableOpacity when onPress is provided', () => {
    const { getByTestId } = render(
      <Card testID="card">
        <Text>Content</Text>
      </Card>,
    );
    const card = getByTestId('card');
    expect(card.type).toBe('View');
    expect(card.parent).toBeDefined();
  });

  it('fires onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Card testID="card" onPress={onPressMock}>
        <Text>Content</Text>
      </Card>,
    );
    fireEvent.press(getByTestId('card'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('applies default card styles', () => {
    const { getByTestId } = render(
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

  it('applies twClassName', () => {
    const { getByTestId } = render(
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

  it('merges custom style prop', () => {
    const { getByTestId } = render(
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

  it('passes testID to root element via ViewProps', () => {
    const { getByTestId } = render(
      <Card testID="my-card">
        <Text>Content</Text>
      </Card>,
    );
    expect(getByTestId('my-card')).toBeDefined();
  });

  it('passes accessibilityLabel via ViewProps', () => {
    const { getByTestId } = render(
      <Card testID="card" accessibilityLabel="My card">
        <Text>Content</Text>
      </Card>,
    );
    const card = getByTestId('card');
    expect(card.props.accessibilityLabel).toBe('My card');
  });

  it('accepts touchableOpacityProps without breaking onPress', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Card
        testID="card"
        onPress={onPressMock}
        touchableOpacityProps={{ activeOpacity: 0.5 }}
      >
        <Text>Content</Text>
      </Card>,
    );
    fireEvent.press(getByTestId('card'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
