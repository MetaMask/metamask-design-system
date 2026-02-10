import { render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import { ComponentName } from './ComponentName';

describe('ComponentName Component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <ComponentName>
        <Text>Hello, World!</Text>
      </ComponentName>,
    );
    expect(getByText('Hello, World!')).toBeDefined();
  });

  // Add more tests as needed
});
