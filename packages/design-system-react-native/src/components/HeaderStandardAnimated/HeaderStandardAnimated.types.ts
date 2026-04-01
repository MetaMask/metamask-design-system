// External dependencies.
import type { SharedValue } from 'react-native-reanimated';
import { useAnimatedScrollHandler } from 'react-native-reanimated';

// Internal dependencies.
import type { HeaderStandardProps } from '../HeaderStandard/HeaderStandard.types';

export type HeaderStandardAnimatedProps = Omit<
  HeaderStandardProps,
  'children'
> & {
  /**
   * Shared value for scroll offset from the ScrollView.
   */
  scrollY: SharedValue<number>;
  /**
   * Shared value for the height of the title section (first child of ScrollView).
   */
  titleSectionHeight: SharedValue<number>;
};

export type UseHeaderStandardAnimatedReturn = {
  scrollY: SharedValue<number>;
  titleSectionHeightSv: SharedValue<number>;
  setTitleSectionHeight: (height: number) => void;
  onScroll: ReturnType<typeof useAnimatedScrollHandler>;
};
