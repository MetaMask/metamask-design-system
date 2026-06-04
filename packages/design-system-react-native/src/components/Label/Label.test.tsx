import { render } from '@testing-library/react-native';
import React from 'react';

import { Label } from './Label';

describe('Label', () => {
  it('renders correctly', async () => {
    const { getByTestId } = await render(
      <Label testID="label">Sample Label Text</Label>,
    );
    expect(getByTestId('label')).toBeDefined();
  });

  it('renders children content', async () => {
    const { getByText } = await render(<Label>Sample Label Text</Label>);
    expect(getByText('Sample Label Text')).toBeDefined();
  });
});
