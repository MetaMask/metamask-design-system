// Third party dependencies.
import { useCallback } from 'react';
import type { SharedValue } from 'react-native-reanimated';
import {
  useSharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';

// Internal dependencies.
import type { UseHeaderStandardAnimatedReturn } from './HeaderStandardAnimated.types';

/**
 * Writes a vertical content offset into the scroll shared value.
 *
 * @param scrollYValue - Shared value for vertical scroll offset.
 * @param contentOffsetY - `contentOffset.y` from the scroll event.
 */
export function updateScrollYFromEvent(
  scrollYValue: SharedValue<number>,
  contentOffsetY: number,
) {
  scrollYValue.value = contentOffsetY;
}

/**
 * Hook for managing HeaderStandardAnimated scroll-linked animations.
 * Use with HeaderStandardAnimated placed outside the ScrollView as a sibling.
 * Use the returned onScroll with Animated.ScrollView for UI-thread scroll updates (zero lag).
 *
 * @returns Object containing scrollY, titleSectionHeightSv, setTitleSectionHeight, and onScroll.
 *
 * @example
 * ```tsx
 * const { scrollY, onScroll, setTitleSectionHeight, titleSectionHeightSv } =
 *   useHeaderStandardAnimated();
 *
 * <Box twClassName="flex-1">
 *   <HeaderStandardAnimated
 *     scrollY={scrollY}
 *     titleSectionHeight={titleSectionHeightSv}
 *     title="Market"
 *     onBack={handleBack}
 *   />
 *   <Animated.ScrollView onScroll={onScroll} scrollEventThrottle={16}>
 *     <Box onLayout={(e) => setTitleSectionHeight(e.nativeEvent.layout.height)}>
 *       ...first scroll section (layout height drives compact title timing)
 *     </Box>
 *     {/* page body *\/}
 *   </Animated.ScrollView>
 * </Box>
 * ```
 */
export function useHeaderStandardAnimated(): UseHeaderStandardAnimatedReturn {
  const scrollYValue = useSharedValue(0);
  const titleSectionHeightSv = useSharedValue(0);

  const setTitleSectionHeight = useCallback(
    (height: number) => {
      titleSectionHeightSv.value = height;
    },
    [titleSectionHeightSv],
  );

  const onScroll = useAnimatedScrollHandler({
    onScroll: (scrollEvent) =>
      updateScrollYFromEvent(scrollYValue, scrollEvent.contentOffset.y),
  });

  return {
    scrollY: scrollYValue,
    titleSectionHeightSv,
    setTitleSectionHeight,
    onScroll,
  };
}
