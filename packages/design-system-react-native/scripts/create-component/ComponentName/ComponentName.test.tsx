import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import { ComponentName } from './ComponentName';

describe('ComponentName', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    const { result } = renderHook(() => useTailwind());
    tw = result.current;
  });

  it('renders children correctly', () => {
    const { getByText } = render(
      <ComponentName>
        <Text>Hello, World!</Text>
      </ComponentName>,
    );

    expect(getByText('Hello, World!')).toBeOnTheScreen();
  });

  it('applies the correct styles', () => {
    const { getByTestId } = render(
      <ComponentName twClassName="bg-default" testID="component-name">
        <Text>Styled Content</Text>
      </ComponentName>,
    );

    expect(getByTestId('component-name')).toHaveStyle(tw`bg-default`);
    // Add more style-related tests as needed
  });

  // Add more tests as needed
});
