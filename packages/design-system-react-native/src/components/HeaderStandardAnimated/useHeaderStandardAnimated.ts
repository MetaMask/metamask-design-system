// Third party dependencies.
import { useCallback } from 'react';
import {
  useSharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';

// Internal dependencies.
import type { UseHeaderStandardAnimatedReturn } from './HeaderStandardAnimated.types';

export const useHeaderStandardAnimated =
  (): UseHeaderStandardAnimatedReturn => {
    const scrollYValue = useSharedValue(0);
    const titleSectionHeightSv = useSharedValue(0);

    const setTitleSectionHeight = useCallback(
      (height: number) => {
        titleSectionHeightSv.value = height;
      },
      [titleSectionHeightSv],
    );

    const onScroll = useAnimatedScrollHandler({
      onScroll: (scrollEvent) => {
        scrollYValue.value = scrollEvent.contentOffset.y;
      },
    });

    return {
      scrollY: scrollYValue,
      titleSectionHeightSv,
      setTitleSectionHeight,
      onScroll,
    };
  };
