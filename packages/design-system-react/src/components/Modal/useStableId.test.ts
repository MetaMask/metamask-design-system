/* eslint-disable @typescript-eslint/no-require-imports, n/global-require */
import type * as ReactNamespace from 'react';

type Harness = {
  ids: (string | undefined)[];
  mount: () => void;
  unmount: () => void;
};

/**
 * Mounts a probe component that records the id returned by `useStableId`,
 * using whichever `react` is currently registered in the (isolated) module
 * registry. React Testing Library is deliberately not used here because it
 * registers global hooks on import.
 *
 * @returns A harness to mount/unmount the probe and read recorded ids.
 */
const createHarness = (): Harness => {
  const React: typeof ReactNamespace = require('react');
  const { createRoot } = require('react-dom/client');
  const { useStableId } = require('./useStableId');

  const ids: (string | undefined)[] = [];
  const container = document.createElement('div');
  const root = createRoot(container);

  const Probe = () => {
    ids.push(useStableId());
    return null;
  };

  return {
    ids,
    mount: () => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises -- sync act
      React.act(() => root.render(React.createElement(Probe)));
    },
    unmount: () => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises -- sync act
      React.act(() => root.unmount());
    },
  };
};

describe('useStableId', () => {
  beforeAll(() => {
    (
      globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }
    ).IS_REACT_ACT_ENVIRONMENT = true;
  });

  afterEach(() => {
    jest.resetModules();
    jest.dontMock('react');
  });

  it('returns the React.useId value when available', () => {
    jest.isolateModules(() => {
      const harness = createHarness();
      harness.mount();
      expect(typeof harness.ids[0]).toBe('string');
      harness.unmount();
    });
  });

  it('falls back to a post-mount counter id on React versions without useId', () => {
    jest.isolateModules(() => {
      jest.doMock('react', () => ({
        ...jest.requireActual('react'),
        useId: undefined,
      }));
      const harness = createHarness();
      harness.mount();

      expect(harness.ids[0]).toBeUndefined();
      expect(harness.ids[harness.ids.length - 1]).toMatch(/^mm-modal-\d+$/u);
      harness.unmount();
    });
  });
});
