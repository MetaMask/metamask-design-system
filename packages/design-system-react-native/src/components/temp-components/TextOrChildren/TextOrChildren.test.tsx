import { render } from '@testing-library/react-native';
import React from 'react';

import { Text } from '../../Text';

import { TextOrChildren } from './TextOrChildren';

describe('TextOrChildren', () => {
  it('renders Text component when children is a string', async () => {
    const { getByText } = await render(
      <TextOrChildren>Sample Text</TextOrChildren>,
    );
    expect(getByText('Sample Text')).toBeDefined();
  });

  it('renders child components when children is not a string', async () => {
    const { getByText } = await render(
      <TextOrChildren>
        <Text>Nested Text</Text>
      </TextOrChildren>,
    );

    expect(getByText('Nested Text')).toBeDefined();
  });

  it('renders nothing when children is null', async () => {
    const { toJSON } = await render(<TextOrChildren>{null}</TextOrChildren>);
    expect(toJSON()).toBeNull();
  });
});
