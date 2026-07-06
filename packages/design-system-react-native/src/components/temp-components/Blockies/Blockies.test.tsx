// Blockies.test.tsx
import { render } from '@testing-library/react-native';
import React from 'react';

import { Blockies } from './Blockies';
// @ts-ignore
import { toDataUrl } from './Blockies.utilities';

// Mock the extractAccountAddress utility
jest.mock('@metamask/design-system-shared', () => ({
  extractAccountAddress: (address: string) => {
    // Mock implementation that handles CAIP-10 format
    if (address && address.includes(':')) {
      const parts = address.split(':');
      return parts[parts.length - 1]; // Return the address part
    }
    return address; // Return as-is for non-CAIP addresses
  },
}));

// Mock the toDataUrl utility
jest.mock('./Blockies.utilities', () => ({
  toDataUrl: jest.fn(() => 'data:image/png;base64,mockedBlockyImage'),
}));

describe('Blockies Component', () => {
  beforeEach(() => {
    (toDataUrl as jest.Mock).mockClear();
  });

  it('renders with default size (32) if size is not provided', () => {
    const { getByTestId } = render(
      <Blockies address="0x123" testID="blockies" />,
    );
    // toDataUrl should have been called with the address
    expect(toDataUrl).toHaveBeenCalledWith('0x123');
    // Verify the returned Image has width & height of 32
    const image = getByTestId('blockies');
    expect(image.props.width).toBe(32);
    expect(image.props.height).toBe(32);
  });

  it('renders with a custom size', () => {
    const { getByTestId } = render(
      <Blockies address="0x123" size={64} testID="blockies" />,
    );
    const image = getByTestId('blockies');
    expect(image.props.width).toBe(64);
    expect(image.props.height).toBe(64);
  });

  it('passes additional image props correctly', () => {
    const { getByTestId } = render(
      <Blockies
        address="0xabc"
        size={40}
        resizeMode="contain"
        style={{ margin: 10 }}
        testID="blockies"
      />,
    );
    const image = getByTestId('blockies');
    expect(image.props.resizeMode).toBe('contain');
    expect(image.props.style).toMatchObject({ margin: 10 });
  });

  it('calls toDataUrl with the correct address', () => {
    render(<Blockies address="0xabc" testID="blockies" />);
    expect(toDataUrl).toHaveBeenCalledWith('0xabc');
  });

  it('extracts account address from CAIP-10 format before calling toDataUrl', () => {
    render(
      <Blockies
        address="eip155:1:0x1234567890abcdef1234567890abcdef12345678"
        testID="blockies"
      />,
    );
    // Should call toDataUrl with extracted address, not the full CAIP-10 string
    expect(toDataUrl).toHaveBeenCalledWith(
      '0x1234567890abcdef1234567890abcdef12345678',
    );
  });

  it('handles legacy addresses without CAIP-10 format', () => {
    render(
      <Blockies
        address="0x9876543210fedcba9876543210fedcba98765432"
        testID="blockies"
      />,
    );
    // Should call toDataUrl with the address as-is
    expect(toDataUrl).toHaveBeenCalledWith(
      '0x9876543210fedcba9876543210fedcba98765432',
    );
  });
});
