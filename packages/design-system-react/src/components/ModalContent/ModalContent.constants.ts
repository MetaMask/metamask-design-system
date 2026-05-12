/**
 * Attribute consumers can set on a portal-rendered subtree to opt out of the
 * ModalContent outside-click handler. Useful for floating UI primitives
 * (popover, tooltip, dropdown) that render as siblings to the modal portal
 * but are conceptually part of the modal interaction.
 *
 * Example:
 *
 * ```tsx
 * <Box {...{ [MODAL_CONTENT_IGNORE_OUTSIDE_CLICK_ATTR]: '' }}>
 *   {popoverContent}
 * </Box>
 * ```
 *
 * Clicks whose target's `closest('[data-mm-modal-ignore-outside-click]')` is
 * non-null are ignored by ModalContent's outside-click logic and will not
 * trigger `onClose`.
 */
export const MODAL_CONTENT_IGNORE_OUTSIDE_CLICK_ATTR =
  'data-mm-modal-ignore-outside-click';

/**
 * ModalContent dialog max-width tokens, expressed as Tailwind utilities.
 * - `Sm` → 360px
 * - `Md` → 480px
 * - `Lg` → 720px
 */
export const TWCLASSMAP_MODAL_CONTENT_SIZE = {
  sm: 'max-w-[360px]',
  md: 'max-w-[480px]',
  lg: 'max-w-[720px]',
} as const;
