import { createElement, Fragment } from 'react';

import { isReactNodeRenderable } from './isReactNodeRenderable';

describe('isReactNodeRenderable', () => {
  it('returns false for undefined', () => {
    expect(isReactNodeRenderable(undefined)).toBe(false);
  });

  it('returns false for null', () => {
    expect(isReactNodeRenderable(null)).toBe(false);
  });

  it('returns false for false', () => {
    expect(isReactNodeRenderable(false)).toBe(false);
  });

  it('returns false for true', () => {
    expect(isReactNodeRenderable(true)).toBe(false);
  });

  it('returns true for empty string', () => {
    expect(isReactNodeRenderable('')).toBe(true);
  });

  it('returns true for zero', () => {
    expect(isReactNodeRenderable(0)).toBe(true);
  });

  it('returns true for a non-empty string', () => {
    expect(isReactNodeRenderable('title')).toBe(true);
  });

  it('returns true for a React element', () => {
    expect(isReactNodeRenderable(createElement('div'))).toBe(true);
  });

  it('returns true for an array of nodes', () => {
    expect(
      isReactNodeRenderable([createElement('span', { key: 'a' }), 'text']),
    ).toBe(true);
  });

  it('returns true for a Fragment', () => {
    expect(
      isReactNodeRenderable(
        createElement(Fragment, null, createElement('span')),
      ),
    ).toBe(true);
  });
});
