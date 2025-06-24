import { render } from '@testing-library/react-native';
import React from 'react';

import { ComponentName } from './ComponentName';

describe('ComponentName', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <ComponentName>Hello, World!</ComponentName>
    );
    expect(getByText('Hello, World!')).toBeDefined();
  });

  it('applies custom styles', () => {
    const customStyle = { backgroundColor: 'red' };
    const { getByTestId } = render(
      <ComponentName testID="component-name" style={customStyle}>
        Styled Content
      </ComponentName>
    );
    const component = getByTestId('component-name');
    expect(component.props.style).toEqual(customStyle);
  });

  it('forwards additional props to View', () => {
    const { getByTestId } = render(
      <ComponentName testID="component-name" accessibilityLabel="Test Component">
        Test Content
      </ComponentName>
    );
    const component = getByTestId('component-name');
    expect(component.props.accessibilityLabel).toBe('Test Component');
  });

  // Add more tests as needed
});