import { KnownCaipNamespace, stringToBytes } from '@metamask/utils';
import { render, screen, waitFor, act } from '@testing-library/react';
import React from 'react';

import { Jazzicon } from './Jazzicon';
import * as utilities from './Jazzicon.utilities';

// Mock the external dependency for Bitcoin address validation.
jest.mock('bitcoin-address-validation', () => ({
  validate: (address: string, _network: unknown) => {
    // For our test Bitcoin address, return true; for others, return false.
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

// Polyfill TextEncoder for JSDOM (Node < 18)
if (typeof TextEncoder === 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-require-imports, import-x/no-nodejs-modules
  (global as any).TextEncoder = require('util').TextEncoder;
}

describe('Jazzicon', () => {
  describe('Jazzicon utilities', () => {
    describe('generateSeedEthereum', () => {
      it('returns a numeric seed based on a slice of the address', () => {
        const address = '0xabcdef1234567890';
        const expected = parseInt(address.slice(2, 10), 16);
        expect(utilities.generateSeedEthereum(address)).toBe(expected);
      });
    });

    describe('generateSeedNonEthereum', () => {
      it('returns an array of numbers representing the bytes of the address', () => {
        const address = 'SomeNonEthereumAddress';
        const expected = Array.from(
          stringToBytes(address.normalize('NFKC').toLowerCase()),
        );
        expect(utilities.generateSeedNonEthereum(address)).toStrictEqual(
          expected,
        );
      });
    });

    describe('getCaipNamespaceFromAddress', () => {
      it('returns Bip122 for a valid Bitcoin address', async () => {
        const bitcoinAddress = '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa';
        const result =
          await utilities.getCaipNamespaceFromAddress(bitcoinAddress);
        expect(result).toBe(KnownCaipNamespace.Bip122);
      });

      it('returns Solana for a valid Solana address', async () => {
        const solanaAddress = '4Nd1m3NnENa8h8Xte1Xr7s9jcvKqqm21z3FvY9hKg4s7';
        const result =
          await utilities.getCaipNamespaceFromAddress(solanaAddress);
        expect(result).toBe(KnownCaipNamespace.Solana);
      });

      it('returns Eip155 for a non-Bitcoin and non-Solana address', async () => {
        const ethereumAddress = '0xabc';
        const result =
          await utilities.getCaipNamespaceFromAddress(ethereumAddress);
        expect(result).toBe(KnownCaipNamespace.Eip155);
      });

      it('returns Eip155 for a CAIP-10 formatted address', async () => {
        const caip10Address = 'eip155:1:0xabc';
        const result =
          await utilities.getCaipNamespaceFromAddress(caip10Address);
        expect(result).toBe(KnownCaipNamespace.Eip155);
      });

      it('returns the correct namespace for a non-EIP155 CAIP-10 formatted address', async () => {
        const caip10BitcoinAddress =
          'bip122:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa';
        const caip10SolanaAddress =
          'solana:mainnet:4Nd1m3NnENa8h8Xte1Xr7s9jcvKqqm21z3FvY9hKg4s7';
        const bitCoinResult =
          await utilities.getCaipNamespaceFromAddress(caip10BitcoinAddress);
        const solanaResult =
          await utilities.getCaipNamespaceFromAddress(caip10SolanaAddress);
        expect(bitCoinResult).toBe(KnownCaipNamespace.Bip122);
        expect(solanaResult).toBe(KnownCaipNamespace.Solana);
      });
    });
  });

  describe('Jazzicon component', () => {
    beforeEach(() => {
      // Reset modules to clear internal caches (like iconCache)
      jest.resetModules();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('renders with default size (32) and uses Ethereum path by default', async () => {
      const spyNamespace = jest.spyOn(utilities, 'getCaipNamespaceFromAddress');
      const spyEthereum = jest.spyOn(utilities, 'generateSeedEthereum');

      render(<Jazzicon address="0xabc" data-testid="jazzicon" />);

      await waitFor(() => {
        const container = screen.getByTestId('jazzicon');
        expect(container).toBeInTheDocument();
        // The component asynchronously appends a child (the generated icon)
        expect(container.childNodes.length).toBeGreaterThan(0);
      });

      expect(spyNamespace).toHaveBeenCalledWith('0xabc');
      expect(spyEthereum).toHaveBeenCalledWith('0xabc');
    });

    it('accepts a custom size, className, and style', async () => {
      const spyNamespace = jest.spyOn(utilities, 'getCaipNamespaceFromAddress');
      const spyEthereum = jest.spyOn(utilities, 'generateSeedEthereum');

      render(
        <Jazzicon
          address="0xdef"
          size={48}
          data-testid="jazzicon"
          className="test-class"
          style={{ backgroundColor: 'red' }}
        />,
      );

      await waitFor(() => {
        const container = screen.getByTestId('jazzicon');
        expect(container).toHaveClass('test-class');
        expect(container).toHaveStyle('background-color: red');
        expect(container.childNodes.length).toBeGreaterThan(0);
      });

      expect(spyNamespace).toHaveBeenCalledWith('0xdef');
      expect(spyEthereum).toHaveBeenCalledWith('0xdef');
    });

    it('caches the generated icon and reuses it on a second render with the same address/size', async () => {
      const spyEthereum = jest.spyOn(utilities, 'generateSeedEthereum');

      const { rerender } = render(
        <Jazzicon address="0xAAA" size={40} data-testid="jazzicon" />,
      );

      await waitFor(() => {
        expect(spyEthereum).toHaveBeenCalledWith('0xAAA');
        const container = screen.getByTestId('jazzicon');
        expect(container.childNodes.length).toBeGreaterThan(0);
      });

      jest.clearAllMocks();

      // Rerender with the same props; the component should use the cached icon.
      rerender(<Jazzicon address="0xAAA" size={40} data-testid="jazzicon" />);

      await waitFor(() => {
        expect(spyEthereum).not.toHaveBeenCalled();
        const container = screen.getByTestId('jazzicon');
        expect(container.childNodes.length).toBeGreaterThan(0);
      });
    });

    it('switches to non-Ethereum path when namespace is not Eip155', async () => {
      const solanaAddress = '4Nd1m3NnENa8h8Xte1Xr7s9jcvKqqm21z3FvY9hKg4s7';
      const spyNamespace = jest.spyOn(utilities, 'getCaipNamespaceFromAddress');
      const spyNonEthereum = jest.spyOn(utilities, 'generateSeedNonEthereum');

      render(
        <Jazzicon address={solanaAddress} size={50} data-testid="jazzicon" />,
      );

      await waitFor(() => {
        expect(spyNamespace).toHaveBeenCalledWith(solanaAddress);
        expect(spyNonEthereum).toHaveBeenCalledWith(solanaAddress);
        const container = screen.getByTestId('jazzicon');
        expect(container.childNodes.length).toBeGreaterThan(0);
      });
    });

    it('cleans up by removing old children on unmount', async () => {
      const { unmount } = render(
        <Jazzicon address="0xabc" data-testid="jazzicon" />,
      );

      await waitFor(() => {
        expect(
          screen.getByTestId('jazzicon').childNodes.length,
        ).toBeGreaterThan(0);
      });

      unmount();
      await act(async () => {
        // Allow cleanup effect to run
      });
      expect(screen.queryByTestId('jazzicon')).toBeNull();
    });

    it('does nothing if the component unmounts before async logic completes', async () => {
      const spy = jest
        .spyOn(utilities, 'getCaipNamespaceFromAddress')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              setTimeout(() => resolve(KnownCaipNamespace.Eip155), 500),
            ),
        );

      const { unmount } = render(
        <Jazzicon address="0xHELLO" size={32} data-testid="jazzicon" />,
      );

      unmount();

      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 600));
      });

      expect(screen.queryByTestId('jazzicon')).toBeNull();
      spy.mockRestore();
    });

    it('returns early if containerRef.current is null before effect runs', async () => {
      // Create a fake ref whose `current` is always null.
      const fakeRef = {
        get current() {
          return null;
        },
        set current(_val) {
          // Ignore any attempts to set it.
        },
      };
      const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValue(fakeRef);
      render(<Jazzicon address="0xearly" data-testid="jazzicon" />);
      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 50));
      });
      // Even though the component renders a div, the effect sees containerRef.current as null,
      // so it should not append any children.
      const container = screen.getByTestId('jazzicon');
      expect(container.childNodes).toHaveLength(0);
      useRefSpy.mockRestore();
    });

    it('removes multiple existing children via while-loop', async () => {
      const { getByTestId, rerender } = render(
        <Jazzicon address="0xclear" data-testid="jazzicon" />,
      );
      const container = getByTestId('jazzicon');

      // Wait for the initial icon to be generated.
      await waitFor(() => {
        expect(container.childNodes.length).toBeGreaterThan(0);
      });

      // Append three dummy nodes to ensure the while-loop iterates multiple times.
      const dummy1 = document.createElement('span');
      dummy1.setAttribute('data-testid', 'dummy1');
      const dummy2 = document.createElement('div');
      dummy2.setAttribute('data-testid', 'dummy2');
      const dummy3 = document.createElement('p');
      dummy3.setAttribute('data-testid', 'dummy3');

      container.appendChild(dummy1);
      container.appendChild(dummy2);
      container.appendChild(dummy3);

      // Assert that children exist before triggering the effect.
      expect(container.childNodes.length).toBeGreaterThan(2);

      // Trigger a re-run of the effect by changing a prop (e.g., size).
      rerender(<Jazzicon address="0xclear" size={40} data-testid="jazzicon" />);

      // Wait for the effect to run and remove the dummy nodes.
      await waitFor(() => {
        expect(container.childNodes).toHaveLength(1); // Only the new Jazzicon should remain
      });

      // Verify all dummy elements were removed.
      expect(container.querySelector('[data-testid="dummy1"]')).toBeNull();
      expect(container.querySelector('[data-testid="dummy2"]')).toBeNull();
      expect(container.querySelector('[data-testid="dummy3"]')).toBeNull();
    });

    it('clears pre-existing children on initial mount using delayed effect', async () => {
      // Capture effect callbacks instead of letting them run automatically.
      const effectCallbacks: (() => void)[] = [];
      const useEffectSpy = jest
        .spyOn(React, 'useEffect')
        .mockImplementation(
          (cb: React.EffectCallback, _deps?: React.DependencyList) => {
            effectCallbacks.push(cb);
            // Do not call the callback automatically.
          },
        );

      // Render the component.
      const { getByTestId } = render(
        <Jazzicon address="0xdelay" data-testid="jazzicon" />,
      );
      const container = getByTestId('jazzicon');

      // Manually inject a dummy child BEFORE running the effect.
      container.innerHTML = `<span data-testid="dummy">dummy</span>`;
      expect(
        container.querySelector('[data-testid="dummy"]'),
      ).toBeInTheDocument();

      // Now manually run all stored effect callbacks.
      effectCallbacks.forEach((cb) => cb());

      // Flush any pending promises.
      await act(async () => {
        await Promise.resolve();
      });

      // Now the while-loop in the effect should have cleared the dummy child.
      expect(container.querySelector('[data-testid="dummy"]')).toBeNull();

      // Restore the original useEffect implementation.
      useEffectSpy.mockRestore();
    });

    it('handles errors during async generation gracefully', async () => {
      // Mock getCaipNamespaceFromAddress to throw an error
      const spy = jest
        .spyOn(utilities, 'getCaipNamespaceFromAddress')
        .mockRejectedValue(new Error('Network error'));

      // Spy on console.error to ensure errors are handled silently
      const consoleErrorSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(() => {
          // Silently ignore console errors during test
        });

      render(<Jazzicon address="0xerror" data-testid="jazzicon" />);

      // Wait a bit to allow the async function to attempt execution
      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 100));
      });

      // The component should still render without crashing
      const container = screen.getByTestId('jazzicon');
      expect(container).toBeInTheDocument();

      // Cleanup mocks
      spy.mockRestore();
      consoleErrorSpy.mockRestore();
    });

    it('handles cleanup when container has children during unmount', async () => {
      const { unmount } = render(
        <Jazzicon address="0xcleanup" data-testid="jazzicon" />,
      );

      // Wait for the icon to be generated
      await waitFor(() => {
        const container = screen.getByTestId('jazzicon');
        expect(container.childNodes.length).toBeGreaterThan(0);
      });

      // Manually add additional children to test cleanup
      const container = screen.getByTestId('jazzicon');
      const extraChild = document.createElement('div');
      extraChild.setAttribute('data-testid', 'extra-child');
      container.appendChild(extraChild);

      expect(container.childNodes.length).toBeGreaterThan(1);

      // Unmount should trigger cleanup
      unmount();

      // Verify component is removed
      expect(screen.queryByTestId('jazzicon')).toBeNull();
    });

    it('handles cancellation after namespace determination', async () => {
      let resolveNamespace: (value: KnownCaipNamespace) => void = () => {
        // Initial no-op function, will be replaced by Promise constructor
      };
      const namespacePromise = new Promise<KnownCaipNamespace>((resolve) => {
        resolveNamespace = resolve;
      });

      const spy = jest
        .spyOn(utilities, 'getCaipNamespaceFromAddress')
        .mockReturnValue(namespacePromise);

      const { unmount } = render(
        <Jazzicon address="0xcancelled" data-testid="jazzicon" />,
      );

      // Unmount before namespace resolution
      unmount();

      // Now resolve the namespace after unmount
      resolveNamespace(KnownCaipNamespace.Eip155);

      await act(async () => {
        await namespacePromise;
      });

      // Component should be gone
      expect(screen.queryByTestId('jazzicon')).toBeNull();

      spy.mockRestore();
    });

    it('handles the case where containerRef becomes null during execution', async () => {
      // Test the scenario where the component unmounts after namespace resolution
      // but before the final icon creation
      let resolveNamespace: (value: KnownCaipNamespace) => void = () => {
        // Initial no-op function, will be replaced by Promise constructor
      };
      const namespacePromise = new Promise<KnownCaipNamespace>((resolve) => {
        resolveNamespace = resolve;
      });

      const spy = jest
        .spyOn(utilities, 'getCaipNamespaceFromAddress')
        .mockReturnValue(namespacePromise);

      const { unmount } = render(
        <Jazzicon address="0xcontainer" data-testid="jazzicon" />,
      );

      // Unmount before namespace resolution completes
      unmount();

      // Now resolve the namespace
      resolveNamespace(KnownCaipNamespace.Eip155);

      await act(async () => {
        await namespacePromise;
      });

      // Component should be gone and no errors should occur
      expect(screen.queryByTestId('jazzicon')).toBeNull();

      spy.mockRestore();
    });

    it('tests cleanup function execution path when container is null', async () => {
      // Mock useRef to return a ref that becomes null during cleanup
      const mockRef = { current: null as HTMLDivElement | null };
      const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValue(mockRef);

      const { unmount } = render(
        <Jazzicon address="0xnullcleanup" data-testid="jazzicon" />,
      );

      // Set the ref to have a current value initially
      const mockContainer = document.createElement('div');
      mockContainer.appendChild(document.createElement('span'));
      mockRef.current = mockContainer;

      // Now set it to null before unmounting
      mockRef.current = null;

      // Unmount should not crash even with null containerRef
      unmount();

      // Verify the component unmounted successfully
      expect(screen.queryByTestId('jazzicon')).toBeNull();

      useRefSpy.mockRestore();
    });
  });
});
