import {
  parseCaipAccountId,
  isCaipAccountId,
  stringToBytes,
} from '@metamask/utils';

/**
 * Extracts the account address from a CAIP-10 formatted address string.
 *
 * For CAIP-10 addresses like "eip155:1:0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8",
 * this returns just the address part: "0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8".
 *
 * This ensures that both legacy addresses and CAIP-10 addresses generate
 * the same icon, regardless of network specification.
 *
 * @param address - The address string (either legacy format or CAIP-10)
 * @returns The extracted account address
 *
 * @example
 * extractAccountAddress('0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8')
 * Returns: '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8'
 *
 * @example
 * extractAccountAddress('eip155:1:0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8')
 * Returns: '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8'
 *
 * @example
 * extractAccountAddress('solana:mainnet:4Nd1m3NnENa8h8Xte1Xr7s9jcvKqqm21z3FvY9hKg4s7')
 * Returns: '4Nd1m3NnENa8h8Xte1Xr7s9jcvKqqm21z3FvY9hKg4s7'
 */
export function extractAccountAddress(address: string): string {
  try {
    // Try to parse as CAIP-10 first
    if (isCaipAccountId(address)) {
      const parsed = parseCaipAccountId(address);
      return parsed.address;
    }
  } catch {
    // If parsing fails, fall through to return original address
  }

  // Return the address as-is if it's not CAIP-10 format
  return address;
}

/**
 * Generates a numeric seed for Ethereum (eip155) addresses.
 *
 * @param address - The Ethereum address to generate a seed from
 * @returns A numeric seed for icon generation
 */
export function generateSeedEthereum(address: string): number {
  // Parse the first 8 chars of the address after '0x'
  const addr = address.slice(2, 10);
  return parseInt(addr, 16);
}

/**
 * Generates a byte-array seed for non-Ethereum addresses (Solana, Bitcoin, etc.).
 *
 * @param address - The address to generate a byte array seed from
 * @returns An array of numbers representing the bytes of the address
 */
export function generateSeedNonEthereum(address: string): number[] {
  return Array.from(stringToBytes(address.normalize('NFKC').toLowerCase()));
}

/**
 * Determines if an address is Ethereum format (starts with 0x).
 *
 * @param address - The address to check
 * @returns True if Ethereum format, false otherwise
 */
export function isEthereumAddress(address: string): boolean {
  return address.startsWith('0x');
}

/**
 * Generates an appropriate seed for icon generation based on address format.
 * Ethereum addresses (0x prefix) use hex parsing, others use byte array.
 *
 * @param address - The address to generate a seed from (should be extracted first)
 * @returns A seed for icon generation (number for Ethereum, number[] for others)
 */
export function generateIconSeed(address: string): number | number[] {
  return isEthereumAddress(address)
    ? generateSeedEthereum(address)
    : generateSeedNonEthereum(address);
}
