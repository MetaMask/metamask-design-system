import {
  extractAccountAddress,
  generateSeedEthereum,
  generateSeedNonEthereum,
  isEthereumAddress,
  generateIconSeed,
} from './caip-address';

describe('extractAccountAddress', () => {
  describe('Legacy addresses', () => {
    it('should return Ethereum addresses unchanged', () => {
      const address = '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8';
      const result = extractAccountAddress(address);
      expect(result).toBe(address);
    });

    it('should return Solana addresses unchanged', () => {
      const address = '4Nd1m3NnENa8h8Xte1Xr7s9jcvKqqm21z3FvY9hKg4s7';
      const result = extractAccountAddress(address);
      expect(result).toBe(address);
    });

    it('should return Bitcoin addresses unchanged', () => {
      const address = '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa';
      const result = extractAccountAddress(address);
      expect(result).toBe(address);
    });
  });

  describe('CAIP-10 formatted addresses', () => {
    it('should extract Ethereum address from eip155 CAIP-10 format', () => {
      const caipAddress = 'eip155:1:0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8';
      const expectedAddress = '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8';
      const result = extractAccountAddress(caipAddress);
      expect(result).toBe(expectedAddress);
    });

    it('should extract Solana address from solana CAIP-10 format', () => {
      const caipAddress =
        'solana:mainnet:4Nd1m3NnENa8h8Xte1Xr7s9jcvKqqm21z3FvY9hKg4s7';
      const expectedAddress = '4Nd1m3NnENa8h8Xte1Xr7s9jcvKqqm21z3FvY9hKg4s7';
      const result = extractAccountAddress(caipAddress);
      expect(result).toBe(expectedAddress);
    });

    it('should extract Bitcoin address from bip122 CAIP-10 format', () => {
      const caipAddress =
        'bip122:000000000019d6689c085ae165831e93:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa';
      const expectedAddress = '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa';
      const result = extractAccountAddress(caipAddress);
      expect(result).toBe(expectedAddress);
    });
  });

  describe('Network consistency', () => {
    const expectedAddress = '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8';

    it('should extract same address from different Ethereum networks', () => {
      const mainnet = 'eip155:1:0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8';
      const base = 'eip155:8453:0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8';
      const linea = 'eip155:59144:0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8';
      const polygon = 'eip155:137:0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8';

      expect(extractAccountAddress(mainnet)).toBe(expectedAddress);
      expect(extractAccountAddress(base)).toBe(expectedAddress);
      expect(extractAccountAddress(linea)).toBe(expectedAddress);
      expect(extractAccountAddress(polygon)).toBe(expectedAddress);
    });

    it('should match legacy and CAIP-10 addresses', () => {
      const legacyAddress = '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8';
      const caipAddress = 'eip155:1:0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8';

      const legacyResult = extractAccountAddress(legacyAddress);
      const caipResult = extractAccountAddress(caipAddress);

      expect(legacyResult).toBe(caipResult);
      expect(legacyResult).toBe(expectedAddress);
    });
  });

  describe('Error handling', () => {
    it('should return original address for invalid CAIP-10 format', () => {
      const invalidAddress = 'invalid:format';
      const result = extractAccountAddress(invalidAddress);
      expect(result).toBe(invalidAddress);
    });

    it('should return original address for malformed CAIP-10', () => {
      const malformedAddress = 'eip155:invalid';
      const result = extractAccountAddress(malformedAddress);
      expect(result).toBe(malformedAddress);
    });

    it('should handle empty string', () => {
      const emptyAddress = '';
      const result = extractAccountAddress(emptyAddress);
      expect(result).toBe(emptyAddress);
    });

    it('should handle addresses with colons but not CAIP-10 format', () => {
      const nonCaipAddress = 'some:random:string:with:colons';
      const result = extractAccountAddress(nonCaipAddress);
      expect(result).toBe(nonCaipAddress);
    });
  });

  describe('Icon generation consistency (integration)', () => {
    it('should ensure CAIP-10 and legacy addresses produce same seeds', () => {
      // This test verifies the core issue reported:
      // identical icons should be generated for these addresses
      const testCases = [
        {
          legacy: '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8',
          caip10: [
            'eip155:1:0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8',
            'eip155:8453:0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8',
            'eip155:59144:0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8',
          ],
        },
      ];

      testCases.forEach(({ legacy, caip10 }) => {
        const legacyResult = extractAccountAddress(legacy);

        caip10.forEach((caipAddress) => {
          const caipResult = extractAccountAddress(caipAddress);
          expect(caipResult).toBe(legacyResult);
        });
      });
    });
  });
});

describe('generateSeedEthereum', () => {
  it('should generate consistent numeric seeds for Ethereum addresses', () => {
    const address = '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8';
    const seed = generateSeedEthereum(address);

    expect(typeof seed).toBe('number');
    expect(seed).toBe(0x9cbf7c41);
  });

  it('should handle addresses with different cases', () => {
    const lowerAddress = '0xabcdef123456789a';
    const upperAddress = '0xABCDEF123456789A';

    const lowerSeed = generateSeedEthereum(lowerAddress);
    const upperSeed = generateSeedEthereum(upperAddress);

    expect(lowerSeed).toBe(0xabcdef12);
    expect(upperSeed).toBe(0xabcdef12);
  });

  it('should handle short addresses correctly', () => {
    const shortAddress = '0x1234';
    const seed = generateSeedEthereum(shortAddress);

    expect(typeof seed).toBe('number');
    expect(seed).toBe(0x1234);
  });
});

describe('generateSeedNonEthereum', () => {
  it('should generate byte array for Solana addresses', () => {
    const address = '4Nd1m3NnENa8h8Xte1Xr7s9jcvKqqm21z3FvY9hKg4s7';
    const seed = generateSeedNonEthereum(address);

    expect(Array.isArray(seed)).toBe(true);
    expect(seed.length).toBeGreaterThan(0);
    expect(seed.every((byte) => typeof byte === 'number')).toBe(true);
  });

  it('should generate byte array for Bitcoin addresses', () => {
    const address = '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa';
    const seed = generateSeedNonEthereum(address);

    expect(Array.isArray(seed)).toBe(true);
    expect(seed.length).toBeGreaterThan(0);
    expect(seed.every((byte) => typeof byte === 'number')).toBe(true);
  });

  it('should handle Unicode normalization', () => {
    const unicodeAddress = 'tëst';
    const seed = generateSeedNonEthereum(unicodeAddress);

    expect(Array.isArray(seed)).toBe(true);
    expect(seed.length).toBeGreaterThan(0);
  });

  it('should normalize case to lowercase', () => {
    const upperAddress = 'TESTADDRESS';
    const lowerAddress = 'testaddress';

    const upperSeed = generateSeedNonEthereum(upperAddress);
    const lowerSeed = generateSeedNonEthereum(lowerAddress);

    expect(upperSeed).toStrictEqual(lowerSeed);
  });
});

describe('isEthereumAddress', () => {
  it('should return true for valid Ethereum addresses', () => {
    const ethereumAddresses = [
      '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8',
      '0x0000000000000000000000000000000000000000',
      '0x1234567890abcdef',
      '0xABCDEF123456789a',
    ];

    ethereumAddresses.forEach((address) => {
      expect(isEthereumAddress(address)).toBe(true);
    });
  });

  it('should return false for non-Ethereum addresses', () => {
    const nonEthereumAddresses = [
      '4Nd1m3NnENa8h8Xte1Xr7s9jcvKqqm21z3FvY9hKg4s7', // Solana
      '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', // Bitcoin
      'bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4', // Bitcoin bech32
      '', // Empty string
      '0X9Cbf7c41B7787F6c621115010D3B044029FE2Ce8', // Wrong case prefix
      'x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8', // Missing 0
    ];

    nonEthereumAddresses.forEach((address) => {
      expect(isEthereumAddress(address)).toBe(false);
    });
  });
});

describe('generateIconSeed', () => {
  it('should return numeric seed for Ethereum addresses', () => {
    const ethereumAddress = '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8';
    const seed = generateIconSeed(ethereumAddress);

    expect(typeof seed).toBe('number');
    expect(seed).toBe(generateSeedEthereum(ethereumAddress));
  });

  it('should return byte array for Solana addresses', () => {
    const solanaAddress = '4Nd1m3NnENa8h8Xte1Xr7s9jcvKqqm21z3FvY9hKg4s7';
    const seed = generateIconSeed(solanaAddress);

    expect(Array.isArray(seed)).toBe(true);
    expect(seed).toStrictEqual(generateSeedNonEthereum(solanaAddress));
  });

  it('should return byte array for Bitcoin addresses', () => {
    const bitcoinAddress = '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa';
    const seed = generateIconSeed(bitcoinAddress);

    expect(Array.isArray(seed)).toBe(true);
    expect(seed).toStrictEqual(generateSeedNonEthereum(bitcoinAddress));
  });

  it('should handle Ethereum addresses returning numeric seeds', () => {
    const address = '0x1234567890abcdef';
    const seed = generateIconSeed(address);

    expect(typeof seed).toBe('number');
    expect(seed).toBe(generateSeedEthereum(address));
  });

  it('should handle Solana addresses returning byte array seeds', () => {
    const address = '4Nd1m3NnENa8h8Xte1Xr7s9jcvKqqm21z3FvY9hKg4s7';
    const seed = generateIconSeed(address);

    expect(typeof seed).toBe('object');
    expect(seed).toStrictEqual(generateSeedNonEthereum(address));
  });

  it('should handle Bitcoin bech32 addresses returning byte array seeds', () => {
    const address = 'bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4';
    const seed = generateIconSeed(address);

    expect(typeof seed).toBe('object');
    expect(seed).toStrictEqual(generateSeedNonEthereum(address));
  });
});
