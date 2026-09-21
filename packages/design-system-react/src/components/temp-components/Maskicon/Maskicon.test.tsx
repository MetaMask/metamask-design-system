import '@testing-library/jest-dom';
import {
  generateSeedEthereum,
  isEthereumAddress,
} from '@metamask/design-system-shared';
import { render, waitFor, cleanup } from '@testing-library/react';
import React from 'react';

import { Maskicon } from './Maskicon';
import * as MaskiconUtilities from './Maskicon.utilities';

describe('Maskicon Component', () => {
  afterEach(cleanup);
  it('renders successfully with address prop', async () => {
    const address = '0x1234567890abcdef1234567890abcdef12345678';
    const { container } = render(<Maskicon address={address} />);

    await waitFor(() => {
      const img = container.querySelector('img');
      expect(img).toBeInTheDocument();
      expect(img?.getAttribute('alt')).toBe('maskicon');
    });
  });

  it('renders with custom size', async () => {
    const address = '0x1234567890abcdef1234567890abcdef12345678';
    const size = 64;
    const { container } = render(<Maskicon address={address} size={size} />);

    await waitFor(() => {
      const img = container.querySelector('img');
      expect(img?.getAttribute('width')).toBe(size.toString());
      expect(img?.getAttribute('height')).toBe(size.toString());
    });
  });
});

describe('Shared Utilities Integration', () => {
  it('generateSeedEthereum works for Ethereum addresses', () => {
    const address = '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8';
    const expectedSeed = parseInt(address.slice(2, 10), 16);
    expect(generateSeedEthereum(address)).toBe(expectedSeed);
  });

  it('isEthereumAddress correctly identifies address types', () => {
    expect(
      isEthereumAddress('0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8'),
    ).toBe(true);
    expect(
      isEthereumAddress('4Nd1m3NnENa8h8Xte1Xr7s9jcvKqqm21z3FvY9hKg4s7'),
    ).toBe(false);
  });
});

describe('Maskicon Utilities', () => {
  it('seedToString returns string representation based on seed type', () => {
    const numericSeed = 12345;
    const arraySeed = [1, 2, 3, 4, 5, 6];

    const numericResult = MaskiconUtilities.seedToString(numericSeed);
    const arrayResult = MaskiconUtilities.seedToString(arraySeed);

    expect(numericResult).toBe('303900');
    expect(arrayResult).toBe('010203040506');
  });

  it('seedToString handles short array seeds by padding', () => {
    const shortArraySeed = [1, 2];
    const result = MaskiconUtilities.seedToString(shortArraySeed);
    expect(result).toBe('010200');
  });

  it('seedToString returns fallback for invalid seed types', () => {
    const invalidSeed = 'invalid' as unknown as number;
    const result = MaskiconUtilities.seedToString(invalidSeed);
    expect(result).toBe('seed000');
  });

  it('createMaskiconSVG returns SVG with expected structure', () => {
    const seed = 12345;
    const size = 100;

    const svg = MaskiconUtilities.createMaskiconSVG(seed, size);

    expect(svg).toContain('<svg');
    expect(svg).toContain(`width="${size}"`);
    expect(svg).toContain(`height="${size}"`);
    expect(svg).toContain('<rect');
    expect(svg).toContain('<path');
    expect(svg).toContain('</svg>');
  });

  it('createMaskiconSVG uses default size when not provided', () => {
    const seed = 12345;
    const svg = MaskiconUtilities.createMaskiconSVG(seed);

    expect(svg).toContain('<svg');
    expect(svg).toContain('width="100"');
    expect(svg).toContain('height="100"');
  });

  it('getMaskiconSVG uses cache for repeated calls', async () => {
    const address = '0x1234567890abcdef1234567890abcdef12345678';
    const size = 50;

    const firstCall = await MaskiconUtilities.getMaskiconSVG(address, size);
    const secondCall = await MaskiconUtilities.getMaskiconSVG(address, size);

    expect(firstCall).toBe(secondCall);
    expect(firstCall).toContain('<svg');
  });
});
