import { createElement, useContext } from 'react';
import { act, create } from 'react-test-renderer';

import { PureBlackContext } from '.';

describe('PureBlackContext', () => {
  it('uses displayName for React DevTools', () => {
    expect(PureBlackContext.displayName).toBe('PureBlackContext');
  });

  it('defaults isPureBlack to false outside a Provider', () => {
    function Consumer() {
      const { isPureBlack } = useContext(PureBlackContext);
      return createElement('span', null, isPureBlack ? 'on' : 'off');
    }

    let root!: ReturnType<typeof create>;
    act(() => {
      root = create(createElement(Consumer));
    });

    expect(root.toJSON()).toMatchObject({
      type: 'span',
      children: ['off'],
    });
  });

  it('exposes isPureBlack from Provider value', () => {
    function Consumer() {
      const { isPureBlack } = useContext(PureBlackContext);
      return createElement('span', null, isPureBlack ? 'on' : 'off');
    }

    let root!: ReturnType<typeof create>;
    act(() => {
      root = create(
        createElement(
          PureBlackContext.Provider,
          { value: { isPureBlack: true } },
          createElement(Consumer),
        ),
      );
    });

    expect(root.toJSON()).toMatchObject({
      type: 'span',
      children: ['on'],
    });
  });
});
