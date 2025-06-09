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
    mainnet = 'mainnet',
    testnet = 'testnet',
  }

  export function validate(address: string, network?: Network): boolean;
}
