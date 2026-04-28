/**
 * ModalOverlay component shared props (ADR-0004).
 *
 * ModalOverlay is a purely presentational backdrop with no cross-platform
 * configurable design props. Platform-specific props (onClick / onPress,
 * className / twClassName) live in the platform extension types.
 */
export type ModalOverlayPropsShared = Record<string, never>;
