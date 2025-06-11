import { render } from '@testing-library/react-native';
import React from 'react';

import { ButtonVariant } from '../../types';

import { Button } from './Button';

describe('Button', () => {
  it('renders the correct primary variant', () => {
    const { getByTestId } = render(
      <Button variant={ButtonVariant.Primary} testID="button-primary">
        Default Button
      </Button>,
    );
    expect(getByTestId('button-primary')).not.toBeNull();
  });

  it('renders the correct secondary variant', () => {
    const { getByTestId } = render(
      <Button variant={ButtonVariant.Secondary} testID="button-secondary">
        Default Button
      </Button>,
    );
    expect(getByTestId('button-secondary')).not.toBeNull();
  });

  it('renders the correct tertiary variant', () => {
    const { getByTestId } = render(
      <Button variant={ButtonVariant.Tertiary} testID="button-tertiary">
        Default Button
      </Button>,
    );
    expect(getByTestId('button-tertiary')).not.toBeNull();
  });

  it('throws an error for an invalid variant', () => {
    const consoleErrorMock = jest
      .spyOn(console, 'error')
      .mockImplementation(jest.fn()); // Use jest.fn() instead of empty arrow function

    expect(() =>
      render(
        <Button variant={'InvalidVariant' as ButtonVariant}>
          Invalid Button
        </Button>,
      ),
    ).toThrow('Invalid Button Variant');

    consoleErrorMock.mockRestore(); // Restore console.error after the test
  });

  it('renders ButtonPrimary, ButtonSecondary, and ButtonTertiary', () => {
    const { getByText } = render(
      <>
        <Button variant={ButtonVariant.Primary}>Primary</Button>
        <Button variant={ButtonVariant.Secondary}>Secondary</Button>
        <Button variant={ButtonVariant.Tertiary}>Tertiary</Button>
      </>,
    );

    expect(getByText('Primary')).toBeDefined();
    expect(getByText('Secondary')).toBeDefined();
    expect(getByText('Tertiary')).toBeDefined();
  });

  it('passes accessibility props to button variants', () => {
    const { getByTestId } = render(
      <Button
        variant={ButtonVariant.Primary}
        testID="primary-btn"
        accessibilityLabel="Primary action"
        accessibilityHint="Performs the main action"
      >
        Primary
      </Button>,
    );

    const btn = getByTestId('primary-btn');
    expect(btn.props.accessibilityLabel).toBe('Primary action');
    expect(btn.props.accessibilityHint).toBe('Performs the main action');
    expect(btn.props.accessibilityRole).toBe('button');
  });
});
