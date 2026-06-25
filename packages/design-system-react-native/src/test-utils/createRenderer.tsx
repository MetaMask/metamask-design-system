import React from 'react';
import * as ReactTestRenderer from 'react-test-renderer';

// Wraps ReactTestRenderer.create in act() as required by React 19.
export const createRenderer = (element: React.ReactElement) => {
  let tree!: ReactTestRenderer.ReactTestRenderer;
  ReactTestRenderer.act(() => {
    tree = ReactTestRenderer.create(element);
  });
  return tree;
};
