import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import { Blockies } from './Blockies';

// Mock the 'blo' module to return a predictable output for testing.
jest.mock('blo', () => ({
  blo: (address: string) => `generated_${address}`,
}));

describe('Blockies', () => {
  const address = '0x1234567890abcdef';

  it('renders an img element with the correct src, height, and width', async () => {
    render(
      <Blockies
        address={address}
        size={48}
        data-testid="blockies"
        alt="Blockies Avatar"
      />,
    );

    // Wait for the image to be rendered after the dynamic import resolves.
    const img = await waitFor(() => screen.getByTestId('blockies'));

    expect(img.tagName).toBe('IMG');
    expect(img).toHaveAttribute('src', `generated_${address}`);
    expect(img).toHaveAttribute('height', '48');
    expect(img).toHaveAttribute('width', '48');
    expect(img).toHaveAttribute('alt', 'Blockies Avatar');
  });

  it('applies the default size of 32 when no size prop is provided', async () => {
    render(<Blockies address={address} data-testid="blockies" />);

    const img = await waitFor(() => screen.getByTestId('blockies'));

    expect(img).toHaveAttribute('height', '32');
    expect(img).toHaveAttribute('width', '32');
  });

  it('spreads additional image props to the img element', async () => {
    render(
      <Blockies
        address={address}
        data-testid="blockies"
        title="Blockies Title"
      />,
    );

    const img = await waitFor(() => screen.getByTestId('blockies'));

    expect(img).toHaveAttribute('title', 'Blockies Title');
  });

  it('applies default alt text when no alt prop is provided', async () => {
    render(<Blockies address={address} data-testid="blockies" />);

    const img = await waitFor(() => screen.getByTestId('blockies'));

    expect(img).toHaveAttribute('alt', `Blockies for ${address}`);
  });
});
