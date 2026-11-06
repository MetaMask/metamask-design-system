/**
 * Marker for elements that are purely a dismissible scrim (for example
 * `ModalOverlay` and the positioning wrapper rendered by `ModalContent`).
 * A click that both starts and ends directly on an element carrying this
 * attribute — or on the native `<dialog>` itself — counts as an outside click
 * and triggers `onClose` when `isClosedOnOutsideClick` is enabled.
 */
export const MODAL_DISMISS_SURFACE_ATTR = 'data-mm-modal-dismiss-surface';
