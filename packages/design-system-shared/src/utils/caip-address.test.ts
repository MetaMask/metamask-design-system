import { extractAccountAddress } from './caip-address';

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
      const caipAddress = 'solana:mainnet:4Nd1m3NnENa8h8Xte1Xr7s9jcvKqqm21z3FvY9hKg4s7';
      const expectedAddress = '4Nd1m3NnENa8h8Xte1Xr7s9jcvKqqm21z3FvY9hKg4s7';
      const result = extractAccountAddress(caipAddress);
      expect(result).toBe(expectedAddress);
    });

    it('should extract Bitcoin address from bip122 CAIP-10 format', () => {
      const caipAddress = 'bip122:000000000019d6689c085ae165831e93:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa';
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