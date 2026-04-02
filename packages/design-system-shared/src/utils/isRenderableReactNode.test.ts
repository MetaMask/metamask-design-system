import { createElement, Fragment } from 'react';

import { isRenderableReactNode } from './isRenderableReactNode';

describe('isRenderableReactNode', () => {
  it('returns false for undefined', () => {
    expect(isRenderableReactNode(undefined)).toBe(false);
  });

  it('returns false for null', () => {
    expect(isRenderableReactNode(null)).toBe(false);
  });

  it('returns false for false', () => {
    expect(isRenderableReactNode(false)).toBe(false);
  });

  it('returns false for true', () => {
    expect(isRenderableReactNode(true)).toBe(false);
  });

  it('returns true for empty string', () => {
    expect(isRenderableReactNode('')).toBe(true);
  });

  it('returns true for zero', () => {
    expect(isRenderableReactNode(0)).toBe(true);
  });

  it('returns true for a non-empty string', () => {
    expect(isRenderableReactNode('title')).toBe(true);
  });

  it('returns true for a React element', () => {
    expect(isRenderableReactNode(createElement('div'))).toBe(true);
  });

  it('returns true for an array of nodes', () => {
    expect(
      isRenderableReactNode([createElement('span', { key: 'a' }), 'text']),
    ).toBe(true);
  });

  it('returns true for a Fragment', () => {
    expect(
      isRenderableReactNode(
        createElement(Fragment, null, createElement('span')),
      ),
    ).toBe(true);
  });
});
