import { render } from '@testing-library/react-native';
import React from 'react';

import { Text, TextVariant } from '../../Text';

import { HeaderStandardCenterColumn } from './HeaderStandardCenterColumn';

describe('HeaderStandardCenterColumn', () => {
  it('renders title', async () => {
    const { getByText } = await render(
      <HeaderStandardCenterColumn title="Main" />,
    );

    expect(getByText('Main')).toBeDefined();
  });

  it('renders title and string subtitle', async () => {
    const { getByText } = await render(
      <HeaderStandardCenterColumn title="Main" subtitle="Sub" />,
    );

    expect(getByText('Main')).toBeDefined();
    expect(getByText('Sub')).toBeDefined();
  });

  it('renders subtitle as a React node', async () => {
    const { getByText } = await render(
      <HeaderStandardCenterColumn
        title="Main"
        subtitle={<Text variant={TextVariant.BodySm}>Node</Text>}
      />,
    );

    expect(getByText('Node')).toBeDefined();
  });
});
