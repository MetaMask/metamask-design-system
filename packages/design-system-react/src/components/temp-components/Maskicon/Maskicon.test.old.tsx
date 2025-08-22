import '@testing-library/jest-dom';
import { KnownCaipNamespace, stringToBytes } from '@metamask/utils';
import { render, waitFor, cleanup, act } from '@testing-library/react';
import React from 'react';

import { Maskicon } from './Maskicon';
import * as MaskiconUtilities from './Maskicon.utilities';

jest.mock('bitcoin-address-validation', () => ({
  validate: (address: string, _network: unknown) => {
    if (address === '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa') {
      return true;
    }
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
  // eslint-disable-next-line import-x/no-nodejs-modules, @typescript-eslint/no-require-imports
  global.TextEncoder = require('util').TextEncoder;
}

const createDeferred = <T,>() => {
  let resolver: (value: T) => void;
  let rejector: (error: unknown) => void;
  const promise = new Promise<T>((resolve, reject) => {
    resolver = resolve;
    rejector = reject;
  });

  // Using non-null assertion is safe here because we know resolver and rejector are assigned in the Promise constructor
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return { promise, resolve: resolver!, reject: rejector! };
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
    expect(MaskiconUtilities.generateSeedNonEthereum(address)).toStrictEqual(
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      expect(svg1).toStrictEqual(svg2);
    });

    it('uses generateSeedNonEthereum when namespace is not Eip155', async () => {
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
      expect(svgNonEth).not.toStrictEqual(svgEth);
      expect(svgNonEth).toStrictEqual(expect.stringContaining('<svg'));
    });
  });
});

describe('Maskicon', () => {
  afterEach(cleanup);

  it('renders a placeholder div initially, then updates to an <img> with data URI when SVG is ready', async () => {
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
    expect(initialDiv).toBeInTheDocument();
    expect(initialDiv.innerHTML).toBe('');

    // Wait for the async effect to render an <img> with a data URI
    await waitFor(() => {
      const img = container.querySelector('img') as HTMLImageElement;
      expect(img).toBeInTheDocument();
      expect(img.getAttribute('src')).toContain('data:image/svg+xml,');
    });
    const updatedImg = container.querySelector(
      'img[data-testid="maskicon"]',
    ) as HTMLImageElement;
    expect(updatedImg).toBeInTheDocument();
    expect(updatedImg.getAttribute('width')).toBe('32');
    expect(updatedImg.getAttribute('height')).toBe('32');

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
      const img = container.querySelector('img') as HTMLImageElement;
      expect(img).toBeInTheDocument();
      expect(img.getAttribute('src')).toContain('data:image/svg+xml,');
    });
    const imgEl = container.querySelector('img') as HTMLImageElement;
    expect(imgEl.getAttribute('width')).toBe('32');
    expect(imgEl.getAttribute('height')).toBe('32');
    getSvgSpy.mockRestore();
  });

  it('forwards additional props to the <img> element', async () => {
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
      const img = container.querySelector('img') as HTMLImageElement;
      expect(img).toBeInTheDocument();
    });
    const updatedImg = container.querySelector(
      'img[data-testid="maskicon-forward"]',
    ) as HTMLImageElement;
    expect(updatedImg).toBeInTheDocument();
    expect(updatedImg.getAttribute('data-custom')).toBe('hello');
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
