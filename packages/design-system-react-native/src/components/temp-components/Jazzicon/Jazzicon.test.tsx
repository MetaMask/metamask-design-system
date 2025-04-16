import { render } from '@testing-library/react-native';
import React from 'react';
import RNJazzicon from 'react-native-jazzicon';

import Jazzicon from './Jazzicon';

// Mock the underlying RNJazzicon component.
jest.mock('react-native-jazzicon', () => {
  return jest.fn(() => null);
});

describe('Jazzicon Component', () => {
  beforeEach(() => {
    // Clear any previous mock calls before each test.
    (RNJazzicon as unknown as jest.Mock).mockClear();
  });

  it('should render RNJazzicon with the correct seed and size', () => {
    const testProps = { seed: 123, size: 50 };
    render(<Jazzicon {...testProps} testID="jazzicon-seed" />);

    expect(RNJazzicon).toHaveBeenCalledWith(
      expect.objectContaining(testProps),
      expect.any(Object), // Allows extra properties
    );
  });

  it('should render RNJazzicon with the correct address and size', () => {
    const testProps = { address: '0x123456789abcdef', size: 40 };
    render(<Jazzicon {...testProps} testID="jazzicon-address" />);

    expect(RNJazzicon).toHaveBeenCalledWith(
      expect.objectContaining(testProps),
      expect.any(Object),
    );
  });

  it('should apply the correct container style', () => {
    const testProps = {
      seed: 456,
      size: 40,
      containerStyle: { backgroundColor: 'red', padding: 5 },
    };
    render(<Jazzicon {...testProps} testID="jazzicon-container" />);

    expect(RNJazzicon).toHaveBeenCalledWith(
      expect.objectContaining(testProps),
      expect.any(Object),
    );
  });
});
