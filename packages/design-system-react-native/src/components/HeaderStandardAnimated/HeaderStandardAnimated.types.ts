// External dependencies.
import type { SharedValue } from 'react-native-reanimated';
import { useAnimatedScrollHandler } from 'react-native-reanimated';

// Internal dependencies.
import type { HeaderStandardProps } from '../HeaderStandard/HeaderStandard.types';

/**
 * HeaderStandardAnimated component props.
 * Extends HeaderStandardProps with scroll-driven animation inputs.
 * Center content is driven by title/subtitle only; `children` is not supported.
 */
export type HeaderStandardAnimatedProps = Omit<
  HeaderStandardProps,
  'children'
> & {
  /**
   * Shared value for scroll offset from the ScrollView.
   * Used to drive the center-title animation when scroll passes the title section.
   */
  scrollY: SharedValue<number>;
  /**
   * Shared value for the height of the title section (first child of ScrollView).
   * When scrollY >= titleSectionHeight, the compact center title is shown.
   */
  titleSectionHeight: SharedValue<number>;
};

/**
 * Return type for useHeaderStandardAnimated hook.
 * onScroll is an animated scroll handler; use with Animated.ScrollView for UI-thread updates.
 */
export type UseHeaderStandardAnimatedReturn = {
  scrollY: SharedValue<number>;
  titleSectionHeightSv: SharedValue<number>;
  setTitleSectionHeight: (height: number) => void;
  onScroll: ReturnType<typeof useAnimatedScrollHandler>;
};
