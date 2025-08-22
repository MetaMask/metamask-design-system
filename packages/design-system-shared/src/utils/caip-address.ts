import { parseCaipAccountId, isCaipAccountId } from '@metamask/utils';

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
 * // Returns: '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8'
 *
 * @example
 * extractAccountAddress('eip155:1:0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8')
 * // Returns: '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8'
 *
 * @example
 * extractAccountAddress('solana:mainnet:4Nd1m3NnENa8h8Xte1Xr7s9jcvKqqm21z3FvY9hKg4s7')
 * // Returns: '4Nd1m3NnENa8h8Xte1Xr7s9jcvKqqm21z3FvY9hKg4s7'
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
