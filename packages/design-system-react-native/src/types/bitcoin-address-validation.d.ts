/**
 * Custom TypeScript declarations for bitcoin-address-validation v2.0.0
 *
 * This file provides type definitions for bitcoin-address-validation since v2.0.0
 * doesn't include built-in TypeScript declarations.
 *
 * TODO: Remove this file when upgrading to v3+ as newer versions include built-in types
 * and are ESM-only modules. See changelog:
 * https://github.com/ruigomeseu/bitcoin-address-validation/blob/master/CHANGELOG.md
 */
declare module 'bitcoin-address-validation' {
  export enum Network {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    mainnet = 'mainnet',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    testnet = 'testnet',
  }

  /**
   * Validates a Bitcoin address.
   *
   * @param address - The Bitcoin address to validate
   * @param network - The network to validate against (optional)
   * @returns True if the address is valid, false otherwise
   */
  export function validate(address: string, network?: Network): boolean;
}
