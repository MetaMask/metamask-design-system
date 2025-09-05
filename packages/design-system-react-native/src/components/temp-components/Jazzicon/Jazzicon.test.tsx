import {
  extractAccountAddress,
  generateIconSeed,
} from '@metamask/design-system-shared';
import { render } from '@testing-library/react-native';
import React from 'react';
import RNJazzicon from 'react-native-jazzicon';

import { Jazzicon } from './Jazzicon';

// Mock the shared utilities at the top level
jest.mock('@metamask/design-system-shared', () => ({
  extractAccountAddress: jest.fn(),
  generateIconSeed: jest.fn(),
}));

// Mock the underlying RNJazzicon component.
jest.mock('react-native-jazzicon', () => {
  return jest.fn(() => null);
});

describe('Jazzicon Component', () => {
  beforeEach(() => {
    // Clear any previous mock calls before each test.
    (RNJazzicon as unknown as jest.Mock).mockClear();
    jest.clearAllMocks();

    // Set up mock implementations
    (extractAccountAddress as jest.Mock).mockImplementation(
      (address: string) => {
        // Simple mock that handles basic address extraction
        if (address.includes(':')) {
          return address.split(':').pop() || '';
        }
        return address;
      },
    );

    (generateIconSeed as jest.Mock).mockReturnValue([123, 456, 789]);
  });

  it('should render RNJazzicon with computed seed from address', () => {
    const testProps = { address: '0x123456789abcdef', size: 40 };
    render(<Jazzicon {...testProps} testID="jazzicon-address" />);

    expect(RNJazzicon).toHaveBeenCalledWith(
      expect.objectContaining({
        seed: [123, 456, 789], // Computed seed from generateIconSeed mock
        size: 40,
        containerStyle: {
          borderRadius: 0,
        },
      }),
      expect.any(Object),
    );
  });

  it('should render RNJazzicon with computed seed from CAIP-10 address', () => {
    const testProps = { address: 'eip155:1:0x123456789abcdef', size: 50 };
    render(<Jazzicon {...testProps} testID="jazzicon-caip" />);

    expect(RNJazzicon).toHaveBeenCalledWith(
      expect.objectContaining({
        seed: [123, 456, 789], // Computed seed from generateIconSeed mock
        size: 50,
        containerStyle: {
          borderRadius: 0,
        },
      }),
      expect.any(Object),
    );
  });

  it('should apply the correct container style', () => {
    const testProps = {
      address: '0x987654321abcdef',
      size: 40,
      containerStyle: { backgroundColor: 'red', padding: 5 },
    };
    render(<Jazzicon {...testProps} testID="jazzicon-container" />);

    expect(RNJazzicon).toHaveBeenCalledWith(
      expect.objectContaining({
        seed: [123, 456, 789], // Computed seed from generateIconSeed mock
        size: 40,
        containerStyle: {
          borderRadius: 0, // Component adds this by default
          backgroundColor: 'red',
          padding: 5,
        },
      }),
      expect.any(Object),
    );
  });

  it('should handle missing address gracefully', () => {
    const testProps = { size: 30 };
    render(<Jazzicon {...testProps} testID="jazzicon-no-address" />);

    expect(RNJazzicon).toHaveBeenCalledWith(
      expect.objectContaining({
        seed: [123, 456, 789], // Computed seed from generateIconSeed mock with empty string
        size: 30,
        containerStyle: {
          borderRadius: 0,
        },
      }),
      expect.any(Object),
    );

    // Verify extractAccountAddress was not called since address is undefined
    expect(extractAccountAddress).not.toHaveBeenCalled();
    // Verify generateIconSeed was called with empty string
    expect(generateIconSeed).toHaveBeenCalledWith('');
  });
});
