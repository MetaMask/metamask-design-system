import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { KnownCaipNamespace, stringToBytes } from '@metamask/utils';

import Maskicon from './Maskicon';
import * as MaskiconUtilities from './Maskicon.utilities';

jest.mock('bitcoin-address-validation', () => ({
  validate: (address: string, network: any) => {
    if (address === '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa') return true;
    return false;
  },
  Network: {
    mainnet: 'mainnet',
    testnet: 'testnet',
  },
}));

jest.mock('@solana/addresses', () => ({
  isAddress: (address: string) => address === 'ValidSolanaAddress',
}));

// Stub for react-native-svg so the component renders without error.
jest.mock('react-native-svg', () => {
  const React = require('react');
  return {
    SvgXml: (props: any) => React.createElement('SvgXml', props, props.xml),
  };
});

// A simple deferred promise helper to control when a Promise resolves.
const createDeferred = <T,>() => {
  let resolve: (value: T) => void;
  let reject: (error: any) => void;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve: resolve!, reject: reject! };
};

describe('Maskicon Utilities', () => {
  test('generateSeedEthereum returns numeric seed based on address slice', () => {
    const address = '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8';
    const expectedSeed = parseInt(address.slice(2, 10), 16);
    expect(MaskiconUtilities.generateSeedEthereum(address)).toBe(expectedSeed);
  });

  test('generateSeedNonEthereum returns byte-array seed from normalized lowercased address', () => {
    const address = 'TestAddress';
    const normalized = address.normalize('NFKC').toLowerCase();
    const expectedSeed = Array.from(stringToBytes(normalized));
    expect(MaskiconUtilities.generateSeedNonEthereum(address)).toEqual(
      expectedSeed,
    );
  });

  describe('seedToString helper', () => {
    test('pads a numeric seed if hex is less than 6 characters', () => {
      // For example, 1 in hex is "1", so it should be padded to "100000".
      const result = MaskiconUtilities.seedToString(1);
      expect(result).toBe('100000');
    });

    test('converts a byte array seed to hex and pads if necessary', () => {
      // For an array like [1] which converts to "01", it is padded to "010000".
      const result = MaskiconUtilities.seedToString([1]);
      expect(result).toBe('010000');
    });

    test('returns "seed000" for unsupported seed types', () => {
      // When provided seed is not a number or an array.
      const result = MaskiconUtilities.seedToString({} as any);
      expect(result).toBe('seed000');
    });
  });

  describe('getCaipNamespaceFromAddress', () => {
    test('returns Eip155 when address starts with "0x"', async () => {
      const address = '0xabcdef1234567890abcdef1234567890abcdef12';
      const ns = await MaskiconUtilities.getCaipNamespaceFromAddress(address);
      expect(ns).toBe(KnownCaipNamespace.Eip155);
    });

    test('returns Bip122 for CAIP-10 formatted address "bip122:..."', async () => {
      const address = 'bip122:someAddress';
      const ns = await MaskiconUtilities.getCaipNamespaceFromAddress(address);
      expect(ns).toBe(KnownCaipNamespace.Bip122);
    });

    test('returns Solana for CAIP-10 formatted address "solana:..."', async () => {
      const address = 'solana:someAddress';
      const ns = await MaskiconUtilities.getCaipNamespaceFromAddress(address);
      expect(ns).toBe(KnownCaipNamespace.Solana);
    });

    test('returns Bip122 for valid Bitcoin address (dynamic import branch)', async () => {
      const address = '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa';
      const ns = await MaskiconUtilities.getCaipNamespaceFromAddress(address);
      expect(ns).toBe(KnownCaipNamespace.Bip122);
    });

    test('returns Solana for valid Solana address (fallback branch)', async () => {
      const address = 'ValidSolanaAddress';
      const ns = await MaskiconUtilities.getCaipNamespaceFromAddress(address);
      expect(ns).toBe(KnownCaipNamespace.Solana);
    });

    test('returns Eip155 for CAIP-10 formatted address with mixed-case namespace "Eip155:someAddress"', async () => {
      const address = 'Eip155:someAddress';
      const ns = await MaskiconUtilities.getCaipNamespaceFromAddress(address);
      expect(ns).toBe(KnownCaipNamespace.Eip155);
    });

    test('returns Eip155 when none of the conditions match (fallback)', async () => {
      const address = 'nonEthereumNonSolanaAddress';
      const ns = await MaskiconUtilities.getCaipNamespaceFromAddress(address);
      expect(ns).toBe(KnownCaipNamespace.Eip155);
    });
  });

  describe('createMaskiconSVG', () => {
    test('generates an SVG string using numeric seed', () => {
      const seed = 123456;
      const size = 100;
      const svg = MaskiconUtilities.createMaskiconSVG(seed, size);
      expect(svg).toContain('<svg');
      expect(svg).toContain(`width="${size}"`);
      expect(svg).toContain(`height="${size}"`);
      expect(svg).toContain('<rect');
      expect(svg).toContain('<path');
    });

    test('generates an SVG string using array seed', () => {
      const seed = [1, 2, 3, 4, 5];
      const size = 50;
      const svg = MaskiconUtilities.createMaskiconSVG(seed, size);
      expect(svg).toContain('<svg');
      expect(svg).toContain(`width="${size}"`);
      expect(svg).toContain(`height="${size}"`);
      expect(svg).toContain('<rect');
      expect(svg).toContain('<path');
    });

    test('uses default size 100 if size is not provided', () => {
      const seed = 123456;
      const svg = MaskiconUtilities.createMaskiconSVG(seed);
      expect(svg).toContain('width="100"');
      expect(svg).toContain('height="100"');
    });

    test('triangle branch (rotation 270) produces expected path segment', () => {
      const hashSpy = jest
        .spyOn(MaskiconUtilities, 'sdbmHash')
        .mockReturnValue(768);

      const size = 100;
      // Use an arbitrary numeric seed.
      const svg = MaskiconUtilities.createMaskiconSVG(42, size);
      // With size 100: margin = 25, innerSize = 50, cellSize = 25.
      // For a cell at (1,1), expect a triangle path with rotation 270,
      // which should include a substring like "v-25 h25z".
      expect(svg).toContain('v-25 h25z');

      hashSpy.mockRestore();
    });
  });

  describe('getMaskiconSVG caching and non-Ethereum branch', () => {
    test('getMaskiconSVG returns consistent SVG and uses caching', async () => {
      const address = '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8';
      const size = 100;
      const svg1 = await MaskiconUtilities.getMaskiconSVG(address, size);
      const svg2 = await MaskiconUtilities.getMaskiconSVG(address, size);
      expect(svg1).toEqual(svg2);
    });

    test('uses generateSeedNonEthereum when namespace is not Eip155', async () => {
      // Use a CAIP-formatted address that forces a non-Ethereum (e.g. Solana) branch.
      const addressNonEth = 'solana:someAddress';
      const size = 100;
      const svgNonEth = await MaskiconUtilities.getMaskiconSVG(
        addressNonEth,
        size,
      );

      // For comparison, generate an Ethereum version.
      const ethAddress = '0xABCDEF1234567890ABCDEF1234567890ABCDEF12';
      const svgEth = await MaskiconUtilities.getMaskiconSVG(ethAddress, size);

      // They should be different, indicating the non-Ethereum branch (using generateSeedNonEthereum) was taken.
      expect(svgNonEth).not.toEqual(svgEth);
      expect(svgNonEth).toContain('<svg');
    });
  });
});

describe('Maskicon Component', () => {
  test('defaults size prop to 32 if size is not provided', async () => {
    const { getByTestId } = render(
      <Maskicon
        address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
        testID="maskicon-default-size"
      />,
    );

    const svgElement = await waitFor(() =>
      getByTestId('maskicon-default-size'),
    );
    expect(svgElement.props.width).toBe(32);
    expect(svgElement.props.height).toBe(32);
  });

  test('renders SvgXml with correct properties once SVG is ready', async () => {
    const { getByTestId } = render(
      <Maskicon
        address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
        size={32}
        testID="maskicon"
      />,
    );
    const svgElement = await waitFor(() => getByTestId('maskicon'));
    expect(svgElement.props.width).toBe(32);
    expect(svgElement.props.height).toBe(32);
    expect(svgElement.props.xml).toContain('<svg');
  });

  test('forwards additional props to the SvgXml component', async () => {
    const { getByTestId } = render(
      <Maskicon
        address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
        size={32}
        testID="maskicon-forward"
      />,
    );
    const forwardedElement = await waitFor(() =>
      getByTestId('maskicon-forward'),
    );
    expect(forwardedElement).toBeDefined();
  });

  test('does not update state if component unmounts before the async effect resolves', async () => {
    const deferred = createDeferred<string>();

    const spy = jest
      .spyOn(MaskiconUtilities, 'getMaskiconSVG')
      .mockImplementation(() => deferred.promise);

    const { unmount, toJSON } = render(
      <Maskicon
        address="0xTestAddressForCancel"
        size={32}
        testID="maskicon-cancel"
      />,
    );

    unmount();
    deferred.resolve('<svg>Mock SVG</svg>');
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(toJSON()).toBeNull();
    spy.mockRestore();
  });
});
