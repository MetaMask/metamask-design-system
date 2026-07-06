import { render } from '@testing-library/react-native';
import React from 'react';

import { Label } from './Label';

describe('Label', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <Label testID="label">Sample Label Text</Label>,
    );
    expect(getByTestId('label')).toBeDefined();
  });

  it('renders children content', () => {
    const { getByText } = render(<Label>Sample Label Text</Label>);
    expect(getByText('Sample Label Text')).toBeDefined();
  });
});
