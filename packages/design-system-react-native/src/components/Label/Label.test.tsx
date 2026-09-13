import { render } from '@testing-library/react-native';
import React from 'react';

import { Label } from './Label';

describe('Label', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <Label testID="label">Sample label text</Label>,
    );
    expect(getByTestId('label')).toBeDefined();
  });

  it('renders children content', () => {
    const { getByText } = render(<Label>Sample label text</Label>);
    expect(getByText('Sample label text')).toBeDefined();
  });
});
