import { stringToBytes, KnownCaipNamespace } from '@metamask/utils';
import { isAddress as isSolanaAddress } from '@solana/addresses';

/**
 * Generates a numeric seed for Ethereum (eip155) addresses.
 */
export function generateSeedEthereum(address: string): number {
  // Example: parse the first 8 chars of the address after '0x'
  const addr = address.slice(2, 10);
  return parseInt(addr, 16);
}

/**
 * Generates a byte-array seed for non-Ethereum addresses (Solana, Bitcoin, etc.).
 */
export function generateSeedNonEthereum(address: string): number[] {
  return Array.from(stringToBytes(address.normalize('NFKC').toLowerCase()));
}

/**
 * Dynamically checks if the address is Bitcoin or Solana; otherwise default to Ethereum.
 * Returns a Promise that resolves to one of the known CAIP-2 namespaces.
 */
export async function getCaipNamespaceFromAddress(
  address: string,
): Promise<KnownCaipNamespace> {
  // Check for CAIP-10 formatted addresses
  if (address.includes(':')) {
    const [namespace] = address.split(':');
    if (namespace.toLowerCase() === 'bip122') {
      return KnownCaipNamespace.Bip122;
    }
    if (namespace.toLowerCase() === 'solana') {
      return KnownCaipNamespace.Solana;
    }
    if (namespace.toLowerCase() === 'eip155') {
      return KnownCaipNamespace.Eip155;
    }
    // Add other namespaces as needed.
  }

  try {
    const { validate, Network } = await import('bitcoin-address-validation');
    if (
      validate(address, Network.mainnet) ||
      validate(address, Network.testnet)
    ) {
      return KnownCaipNamespace.Bip122;
    }
  } catch {
    // If the import fails or 'validate' is not available, fall through
  }

  if (isSolanaAddress(address)) {
    return KnownCaipNamespace.Solana;
  }

  // Default to Ethereum
  return KnownCaipNamespace.Eip155;
}
