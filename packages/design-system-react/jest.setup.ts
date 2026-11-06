import '@testing-library/jest-dom';

// jsdom does not implement the Popover API.
if (typeof HTMLElement.prototype.showPopover !== 'function') {
  HTMLElement.prototype.showPopover = function showPopover(_options?: {
    source?: Element | null;
  }) {
    // no-op
  };
  HTMLElement.prototype.hidePopover = function hidePopover() {
    // no-op
  };
  HTMLElement.prototype.togglePopover = function togglePopover(
    force?: boolean,
  ) {
    return Boolean(force);
  };
}
