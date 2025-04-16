// Blockies.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';

import Blockies from './Blockies';
// @ts-ignore
import { toDataUrl } from './Blockies.utilities';

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
});
