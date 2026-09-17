import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { fireEvent, render, renderHook } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import { Card } from './Card';

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

  it('renders as a View when isInteractive is false', () => {
    const { getByTestId } = render(
      <Card testID="card">
        <Text>Content</Text>
      </Card>,
    );
    expect(getByTestId('card').type).toBe('View');
  });

  it('renders as a Pressable when isInteractive is true', () => {
    const { getByTestId } = render(
      <Card testID="card" isInteractive>
        <Text>Content</Text>
      </Card>,
    );
    expect(getByTestId('card').props.accessible).toBe(true);
  });

  it('fires onPress when isInteractive card is pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Card testID="card" isInteractive onPress={onPressMock}>
        <Text>Content</Text>
      </Card>,
    );
    fireEvent.press(getByTestId('card'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('applies default card styles on static card', () => {
    const { getByTestId } = render(
      <Card testID="card">
        <Text>Content</Text>
      </Card>,
    );
    const styles = flattenStyles(getByTestId('card').props.style);
    expect(styles[0]).toStrictEqual(
      tw.style('p-4 rounded-2xl bg-background-section'),
    );
  });

  it('applies default card styles on interactive card', () => {
    const { getByTestId } = render(
      <Card testID="card" isInteractive>
        <Text>Content</Text>
      </Card>,
    );
    const styles = flattenStyles(getByTestId('card').props.style);
    expect(styles[0]).toStrictEqual(
      tw.style('p-4 rounded-2xl bg-background-section'),
    );
  });

  it('applies twClassName on static card', () => {
    const { getByTestId } = render(
      <Card testID="card" twClassName="p-8 rounded-lg">
        <Text>Content</Text>
      </Card>,
    );
    const styles = flattenStyles(getByTestId('card').props.style);
    expect(styles[0]).toStrictEqual(
      tw.style('p-4 rounded-2xl bg-background-section', 'p-8 rounded-lg'),
    );
  });

  it('applies twClassName on interactive card', () => {
    const { getByTestId } = render(
      <Card testID="card" isInteractive twClassName="p-8">
        <Text>Content</Text>
      </Card>,
    );
    const styles = flattenStyles(getByTestId('card').props.style);
    expect(styles[0]).toStrictEqual(
      tw.style('p-4 rounded-2xl bg-background-section', 'p-8'),
    );
  });

  it('merges custom style prop on static card', () => {
    const { getByTestId } = render(
      <Card testID="card" style={{ margin: 8 }}>
        <Text>Content</Text>
      </Card>,
    );
    const styles = flattenStyles(getByTestId('card').props.style);
    expect(styles[0]).toStrictEqual(
      tw.style('p-4 rounded-2xl bg-background-section'),
    );
    expect(styles[1]).toStrictEqual({ margin: 8 });
  });

  it('merges custom style prop on interactive card', () => {
    const { getByTestId } = render(
      <Card testID="card" isInteractive style={{ margin: 8 }}>
        <Text>Content</Text>
      </Card>,
    );
    const styles = flattenStyles(getByTestId('card').props.style);
    expect(styles[0]).toStrictEqual(
      tw.style('p-4 rounded-2xl bg-background-section'),
    );
    expect(styles[1]).toStrictEqual({ margin: 8 });
  });

  it('passes testID to root element', () => {
    const { getByTestId } = render(
      <Card testID="my-card">
        <Text>Content</Text>
      </Card>,
    );
    expect(getByTestId('my-card')).toBeDefined();
  });

  it('passes accessibilityLabel via props', () => {
    const { getByTestId } = render(
      <Card testID="card" accessibilityLabel="My card">
        <Text>Content</Text>
      </Card>,
    );
    expect(getByTestId('card').props.accessibilityLabel).toBe('My card');
  });
});
