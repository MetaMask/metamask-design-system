// Jazzicon.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import Jazzicon from './Jazzicon';
import RNJazzicon from 'react-native-jazzicon';

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
    const testProps = { seed: 123, size: 50, testID: 'jazzicon-seed' };
    render(<Jazzicon {...testProps} />);
    expect(RNJazzicon).toHaveBeenCalledWith(
      expect.objectContaining(testProps),
      {},
    );
  });

  it('should render RNJazzicon with the correct address and size', () => {
    const testProps = {
      address: '0x123456789abcdef',
      size: 40,
      testID: 'jazzicon-address',
    };
    render(<Jazzicon {...testProps} />);
    expect(RNJazzicon).toHaveBeenCalledWith(
      expect.objectContaining(testProps),
      {},
    );
  });

  it('should apply the correct container style', () => {
    const testProps = {
      seed: 456,
      size: 40,
      containerStyle: { backgroundColor: 'red', padding: 5 },
      testID: 'jazzicon-container',
    };
    render(<Jazzicon {...testProps} />);
    expect(RNJazzicon).toHaveBeenCalledWith(
      expect.objectContaining(testProps),
      {},
    );
  });
});
