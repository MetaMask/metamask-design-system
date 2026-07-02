import { AnimationDuration } from '@metamask/design-tokens';
import { Easing } from 'react-native';

/** Matches UIKit `curveEaseInOut` for a native modal scrim fade-in. */
export const DEFAULT_OVERLAY_ANIMATION_EASING = Easing.bezier(0.42, 0, 0.58, 1);

export const DEFAULT_OVERLAY_ANIMATION_DURATION = AnimationDuration.Regularly;
