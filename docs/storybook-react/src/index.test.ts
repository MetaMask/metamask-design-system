import greeter from '.';

describe('Test', () => {
  it('greets', () => {
    const name = 'Storybook';
    const result = greeter(name);
    expect(result).toBe('Hello, Storybook!');
  });
});
