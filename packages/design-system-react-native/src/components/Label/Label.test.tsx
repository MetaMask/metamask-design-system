import { render } from '@testing-library/react-native';
import React from 'react';

import { Label } from './Label';
import { DEFAULT_LABEL_TEXT_VARIANT } from './Label.constants';

describe('Label', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <Label testID="label">Sample Label Text</Label>,
    );
    expect(getByTestId('label')).toBeDefined();
  });

  it('renders the given text with the default variant', () => {
    const { getByText } = render(<Label>Sample Label Text</Label>);
    const labelElement = getByText('Sample Label Text');
    expect(labelElement).toBeDefined();
    expect(labelElement.props.variant).toBe(DEFAULT_LABEL_TEXT_VARIANT);
  });
});
