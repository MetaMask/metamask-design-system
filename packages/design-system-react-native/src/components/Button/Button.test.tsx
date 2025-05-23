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
      .mockImplementation(() => {}); // Suppress error logs

    expect(() =>
      render(
        <Button variant={'InvalidVariant' as ButtonVariant}>
          Invalid Button
        </Button>,
      ),
    ).toThrow('Invalid Button Variant');

    consoleErrorMock.mockRestore(); // Restore console.error after the test
  });
});
