import * as components from '.';

describe('Component Exports', () => {
  it('should export Button component', () => {
    expect(components).toHaveProperty('Button');
    expect(typeof components.Button).toBe('object');
  });
});
