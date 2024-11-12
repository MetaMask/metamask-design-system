import { render } from '@testing-library/react-native';
import React from 'react';

import Button from './Button';

describe('Button component', () => {
  it('renders correctly with given text', () => {
    const { getByText } = render(<Button text="Click me" />);
    const buttonText = getByText('Click me');

    // eslint-disable-next-line jest/no-restricted-matchers
    expect(buttonText).toBeTruthy();
  });
});
