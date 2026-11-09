import '@testing-library/jest-dom';

/**
 * jsdom does not implement the `<dialog>` modal API. These polyfills follow
 * the parts of the HTML spec that the Modal components rely on:
 *
 * - `showModal()` throws `InvalidStateError` when the dialog is already open.
 * - `showModal()` runs a (simplified) dialog focusing step: focus the first
 *   focusable descendant, otherwise the dialog itself.
 * - `close()` is a no-op when the dialog is not open, and otherwise fires a
 *   `close` event and restores focus to the element focused before
 *   `showModal()`.
 *
 * Escape handling is not emulated here; tests dispatch the `cancel` event
 * themselves (see `Modal.test.tsx`).
 */
const FOCUSABLE_SELECTOR =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

const previouslyFocused = new WeakMap<HTMLDialogElement, Element | null>();

HTMLDialogElement.prototype.showModal = function showModal(
  this: HTMLDialogElement,
) {
  if (this.hasAttribute('open')) {
    throw new DOMException(
      "Failed to execute 'showModal' on 'HTMLDialogElement': The element already has an 'open' attribute.",
      'InvalidStateError',
    );
  }
  previouslyFocused.set(this, document.activeElement);
  this.setAttribute('open', '');
  const target = this.querySelector<HTMLElement>(FOCUSABLE_SELECTOR) ?? this;
  target.focus();
};

HTMLDialogElement.prototype.show = function show(this: HTMLDialogElement) {
  this.setAttribute('open', '');
};

HTMLDialogElement.prototype.close = function close(this: HTMLDialogElement) {
  if (!this.hasAttribute('open')) {
    return;
  }
  this.removeAttribute('open');
  this.dispatchEvent(new Event('close'));
  const previous = previouslyFocused.get(this);
  previouslyFocused.delete(this);
  if (previous instanceof HTMLElement && previous.isConnected) {
    previous.focus();
  }
};
