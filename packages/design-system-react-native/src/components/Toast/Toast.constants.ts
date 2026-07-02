// External dependencies.
import { IconAlertSeverity } from '@metamask/design-system-shared';
import type { WithSpringConfig } from 'react-native-reanimated';

import { ToastSeverity } from './Toast.types';

export {
  TOAST_ANIMATION_DURATION,
  TOAST_VISIBILITY_DURATION,
} from '@metamask/design-system-shared';

export const TOAST_TOP_PADDING = 8;

/**
 * Spring tuned to approximate iOS system banner motion.
 *
 * UIKit reference: `animate(withDuration: 0.5, usingSpringWithDamping: 0.7,
 * initialSpringVelocity: 1)`
 *
 * SwiftUI reference: `.snappy` / `.smooth` with minimal bounce.
 */
export const TOAST_SPRING_CONFIG: WithSpringConfig = {
  dampingRatio: 0.85,
  duration: 500,
};

export const TOAST_SEVERITY_ICON_MAP = {
  [ToastSeverity.Success]: IconAlertSeverity.Success,
  [ToastSeverity.Warning]: IconAlertSeverity.Warning,
  [ToastSeverity.Danger]: IconAlertSeverity.Danger,
} as const;
