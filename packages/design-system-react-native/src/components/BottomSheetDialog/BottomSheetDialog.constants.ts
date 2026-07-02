import { AnimationDuration } from '@metamask/design-tokens';
import type { WithSpringConfig } from 'react-native-reanimated';

/** iOS-like sheet spring: natural deceleration with minimal overshoot on open. */
export const DEFAULT_BOTTOMSHEETDIALOG_SPRING_CONFIG = {
  damping: 28,
  stiffness: 320,
  mass: 0.9,
  overshootClamping: true,
} as const satisfies WithSpringConfig;

type BottomSheetDialogSpringOverrides = Partial<
  Pick<WithSpringConfig, 'velocity' | 'reduceMotion' | 'energyThreshold'>
>;

export const getBottomSheetDialogSpringConfig = (
  overrides?: BottomSheetDialogSpringOverrides,
): WithSpringConfig => ({
  ...DEFAULT_BOTTOMSHEETDIALOG_SPRING_CONFIG,
  ...overrides,
});

/**
 * Minimum swipe velocity (px/s) to treat the gesture as a fling for snap/dismiss.
 */
export const DEFAULT_BOTTOMSHEETDIALOG_SWIPETHRESHOLD_VELOCITY =
  AnimationDuration.Regularly;

/**
 * Fraction of sheet height dragged down before dismiss without a fling.
 */
export const DEFAULT_BOTTOMSHEETDIALOG_DISMISSTHRESHOLD = 0.6;
