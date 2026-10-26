import '@testing-library/jest-dom';

// jsdom does not recognize the `<search>` element yet, so React warns about it
// on every `TextFieldSearch` render. The element is valid HTML and works in
// browsers, so the warning carries no signal in tests.
const originalConsoleError = console.error;
console.error = (...args: unknown[]) => {
  const [message, tag] = args;
  if (
    typeof message === 'string' &&
    message.includes('is unrecognized in this browser') &&
    tag === 'search'
  ) {
    return;
  }
  originalConsoleError(...args);
};
