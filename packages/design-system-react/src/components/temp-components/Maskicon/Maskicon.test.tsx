import { KnownCaipNamespace, stringToBytes } from '@metamask/utils';
import '@testing-library/jest-dom';
import { render, waitFor, cleanup, act } from '@testing-library/react';
import React from 'react';

import { Maskicon } from './Maskicon';
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

// Polyfill TextEncoder for JSDOM (Node < 18)
if (typeof TextEncoder === 'undefined') {
  // @ts-ignore
  global.TextEncoder = require('util').TextEncoder;
}

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
  it('generateSeedEthereum returns numeric seed based on address slice', () => {
    const address = '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8';
    const expectedSeed = parseInt(address.slice(2, 10), 16);
    expect(MaskiconUtilities.generateSeedEthereum(address)).toBe(expectedSeed);
  });

  it('generateSeedNonEthereum returns byte-array seed from normalized lowercased address', () => {
    const address = 'TestAddress';
    const normalized = address.normalize('NFKC').toLowerCase();
    const expectedSeed = Array.from(stringToBytes(normalized));
    expect(MaskiconUtilities.generateSeedNonEthereum(address)).toEqual(
      expectedSeed,
    );
  });

  describe('seedToString helper', () => {
    it('pads a numeric seed if hex is less than 6 characters', () => {
      const result = MaskiconUtilities.seedToString(1);
      expect(result).toBe('100000');
    });

    it('converts a byte array seed to hex and pads if necessary', () => {
      const result = MaskiconUtilities.seedToString([1]);
      expect(result).toBe('010000');
    });

    it('returns "seed000" for unsupported seed types', () => {
      const result = MaskiconUtilities.seedToString({} as any);
      expect(result).toBe('seed000');
    });
  });

  describe('getCaipNamespaceFromAddress', () => {
    it('returns Eip155 when address starts with "0x"', async () => {
      const address = '0xabcdef1234567890abcdef1234567890abcdef12';
      const ns = await MaskiconUtilities.getCaipNamespaceFromAddress(address);
      expect(ns).toBe(KnownCaipNamespace.Eip155);
    });

    it('returns Bip122 for CAIP-10 formatted address "bip122:..."', async () => {
      const address = 'bip122:someAddress';
      const ns = await MaskiconUtilities.getCaipNamespaceFromAddress(address);
      expect(ns).toBe(KnownCaipNamespace.Bip122);
    });

    it('returns Solana for CAIP-10 formatted address "solana:..."', async () => {
      const address = 'solana:someAddress';
      const ns = await MaskiconUtilities.getCaipNamespaceFromAddress(address);
      expect(ns).toBe(KnownCaipNamespace.Solana);
    });

    it('returns Bip122 for valid Bitcoin address (dynamic import branch)', async () => {
      const address = '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa';
      const ns = await MaskiconUtilities.getCaipNamespaceFromAddress(address);
      expect(ns).toBe(KnownCaipNamespace.Bip122);
    });

    it('returns Solana for valid Solana address (fallback branch)', async () => {
      const address = 'ValidSolanaAddress';
      const ns = await MaskiconUtilities.getCaipNamespaceFromAddress(address);
      expect(ns).toBe(KnownCaipNamespace.Solana);
    });

    it('returns Eip155 for CAIP-10 formatted address with mixed-case namespace "Eip155:someAddress"', async () => {
      const address = 'Eip155:someAddress';
      const ns = await MaskiconUtilities.getCaipNamespaceFromAddress(address);
      expect(ns).toBe(KnownCaipNamespace.Eip155);
    });

    it('returns Eip155 when none of the conditions match (fallback)', async () => {
      const address = 'nonEthereumNonSolanaAddress';
      const ns = await MaskiconUtilities.getCaipNamespaceFromAddress(address);
      expect(ns).toBe(KnownCaipNamespace.Eip155);
    });
  });

  describe('createMaskiconSVG', () => {
    it('generates an SVG string using numeric seed', () => {
      const seed = 123456;
      const size = 100;
      const svg = MaskiconUtilities.createMaskiconSVG(seed, size);
      expect(svg).toContain('<svg');
      expect(svg).toContain(`width="${size}"`);
      expect(svg).toContain(`height="${size}"`);
      expect(svg).toContain('<rect');
      expect(svg).toContain('<path');
    });

    it('generates an SVG string using array seed', () => {
      const seed = [1, 2, 3, 4, 5];
      const size = 50;
      const svg = MaskiconUtilities.createMaskiconSVG(seed, size);
      expect(svg).toContain('<svg');
      expect(svg).toContain(`width="${size}"`);
      expect(svg).toContain(`height="${size}"`);
      expect(svg).toContain('<rect');
      expect(svg).toContain('<path');
    });

    it('uses default size 100 if size is not provided', () => {
      const seed = 123456;
      const svg = MaskiconUtilities.createMaskiconSVG(seed);
      expect(svg).toContain('width="100"');
      expect(svg).toContain('height="100"');
    });

    it('triangle branch (rotation 270) produces expected path segment', () => {
      const hashSpy = jest
        .spyOn(MaskiconUtilities, 'sdbmHash')
        .mockReturnValue(768);
      const size = 100;
      const svg = MaskiconUtilities.createMaskiconSVG(42, size);
      expect(svg).toContain('v-25 h25z');
      hashSpy.mockRestore();
    });
  });

  describe('getMaskiconSVG caching and non-Ethereum branch', () => {
    it('getMaskiconSVG returns consistent SVG and uses caching', async () => {
      const address = '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8';
      const size = 100;
      const svg1 = await MaskiconUtilities.getMaskiconSVG(address, size);
      const svg2 = await MaskiconUtilities.getMaskiconSVG(address, size);
      expect(svg1).toEqual(svg2);
    });

    it('uses generateSeedNonEthereum when namespace is not Eip155', async () => {
      const addressNonEth = 'solana:someAddress';
      const size = 100;
      const svgNonEth = await MaskiconUtilities.getMaskiconSVG(
        addressNonEth,
        size,
      );
      const ethAddress = '0xABCDEF1234567890ABCDEF1234567890ABCDEF12';
      const svgEth = await MaskiconUtilities.getMaskiconSVG(ethAddress, size);
      expect(svgNonEth).not.toEqual(svgEth);
      expect(svgNonEth).toContain('<svg');
    });
  });
});

describe('Maskicon', () => {
  afterEach(cleanup);

  it('renders a placeholder div initially, then updates when SVG is ready', async () => {
    // Spy on getMaskiconSVG to resolve immediately.
    const resolvedSvg = '<svg><rect width="100" height="100"/></svg>';
    const getSvgSpy = jest
      .spyOn(MaskiconUtilities, 'getMaskiconSVG')
      .mockResolvedValue(resolvedSvg);

    const { container } = render(
      <Maskicon
        address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
        data-testid="maskicon"
      />,
    );

    // Check that initially the placeholder div is rendered.
    const initialDiv = container.firstChild as HTMLElement;
    expect(initialDiv).toBeTruthy();
    expect(initialDiv.innerHTML).toBe('');

    // Wait for the async effect to update the div.
    await waitFor(() => {
      expect((container.firstChild as HTMLElement).innerHTML).toContain('<svg');
    });
    // Now that the SVG is rendered, the div should have the test id.
    const updatedDiv = container.querySelector(
      '[data-testid="maskicon"]',
    ) as HTMLElement;
    expect(updatedDiv).toBeTruthy();
    expect(updatedDiv).toHaveStyle({ width: '32px', height: '32px' });

    getSvgSpy.mockRestore();
  });

  it('defaults size prop to 32 if size is not provided', async () => {
    const resolvedSvg = '<svg><rect width="100" height="100"/></svg>';
    const getSvgSpy = jest
      .spyOn(MaskiconUtilities, 'getMaskiconSVG')
      .mockResolvedValue(resolvedSvg);

    const { container } = render(
      <Maskicon
        address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
        data-testid="maskicon-default"
      />,
    );

    await waitFor(() => {
      expect((container.firstChild as HTMLElement).innerHTML).toContain('<svg');
    });
    expect(container.firstChild).toHaveStyle({ width: '32px', height: '32px' });
    getSvgSpy.mockRestore();
  });

  it('forwards additional props to the div container', async () => {
    const resolvedSvg = '<svg><rect width="100" height="100"/></svg>';
    const getSvgSpy = jest
      .spyOn(MaskiconUtilities, 'getMaskiconSVG')
      .mockResolvedValue(resolvedSvg);

    const { container } = render(
      <Maskicon
        address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
        data-testid="maskicon-forward"
        data-custom="hello"
      />,
    );

    await waitFor(() => {
      expect((container.firstChild as HTMLElement).innerHTML).toContain('<svg');
    });
    const updatedDiv = container.querySelector(
      '[data-testid="maskicon-forward"]',
    ) as HTMLElement;
    expect(updatedDiv).toBeTruthy();
    expect(updatedDiv.getAttribute('data-custom')).toBe('hello');
    getSvgSpy.mockRestore();
  });

  it('does not update state if component unmounts before the async effect resolves', async () => {
    const deferred = createDeferred<string>();
    const spy = jest
      .spyOn(MaskiconUtilities, 'getMaskiconSVG')
      .mockImplementation(() => deferred.promise);

    const { container, unmount } = render(
      <Maskicon
        address="0xTestAddressForCancel"
        data-testid="maskicon-cancel"
      />,
    );
    unmount();
    // Wrap resolution in act to simulate state update in React.
    act(() => {
      deferred.resolve('<svg>Mock SVG</svg>');
    });
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    // With the component unmounted, container.innerHTML should be empty.
    expect(container.innerHTML).toBe('');
    spy.mockRestore();
  });
});
