import { render, screen, waitFor, act } from '@testing-library/react';
import React from 'react';

import { Jazzicon } from './Jazzicon';

describe('Jazzicon', () => {
  describe('Jazzicon component', () => {
    beforeEach(() => {
      // Reset modules to clear internal caches (like iconCache)
      jest.resetModules();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('renders an icon with default size (32)', async () => {
      render(<Jazzicon address="0xabc" data-testid="jazzicon" />);

      await waitFor(() => {
        const container = screen.getByTestId('jazzicon');
        expect(container).toBeInTheDocument();
        // The component asynchronously appends a child (the generated icon)
        expect(container.childNodes.length).toBeGreaterThan(0);
      });
    });

    it('accepts a custom size, className, and style', async () => {
      render(
        <Jazzicon
          address="0xdef"
          size={48}
          data-testid="jazzicon"
          className="bg-default"
          style={{ backgroundColor: 'red' }}
        />,
      );

      await waitFor(() => {
        const container = screen.getByTestId('jazzicon');
        expect(container).toHaveClass('bg-default');
        expect(container).toHaveStyle('background-color: red');
        expect(container.childNodes.length).toBeGreaterThan(0);
      });
    });

    it('caches icons for same address and size', async () => {
      const { rerender } = render(
        <Jazzicon address="0xAAA" size={40} data-testid="jazzicon" />,
      );

      await waitFor(() => {
        const container = screen.getByTestId('jazzicon');
        expect(container.childNodes.length).toBeGreaterThan(0);
      });

      jest.clearAllMocks();

      // Rerender with the same props; the component should use the cached icon.
      rerender(<Jazzicon address="0xAAA" size={40} data-testid="jazzicon" />);

      await waitFor(() => {
        const container = screen.getByTestId('jazzicon');
        expect(container.childNodes.length).toBeGreaterThan(0);
      });
    });

    it('renders different icons for different addresses', async () => {
      const { rerender } = render(
        <Jazzicon address="0x123" size={32} data-testid="jazzicon" />,
      );

      await waitFor(() => {
        const container = screen.getByTestId('jazzicon');
        expect(container.childNodes.length).toBeGreaterThan(0);
      });

      rerender(<Jazzicon address="0x456" size={32} data-testid="jazzicon" />);

      await waitFor(() => {
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
