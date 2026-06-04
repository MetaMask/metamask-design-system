import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook, render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import { ComponentName } from './ComponentName';

describe('ComponentName', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(async () => {
    const { result } = await renderHook(() => useTailwind());
    tw = result.current;
  });

  it('renders children correctly', async () => {
    const { getByText } = await render(
      <ComponentName>
        <Text>Hello, World!</Text>
      </ComponentName>,
    );

    expect(getByText('Hello, World!')).toBeOnTheScreen();
  });

  it('applies the correct styles', async () => {
    const { getByTestId } = await render(
      <ComponentName twClassName="bg-default" testID="component-name">
        <Text>Styled Content</Text>
      </ComponentName>,
    );

    expect(getByTestId('component-name')).toHaveStyle(tw`bg-default`);
  });

  it('accepts testID prop', async () => {
    const { getByTestId } = await render(
      <ComponentName testID="component-name">
        <Text>Test Content</Text>
      </ComponentName>,
    );

    expect(getByTestId('component-name')).toBeOnTheScreen();
  });

  // Add more tests as needed
});
