// Third party dependencies.
import { AnimationDuration } from '@metamask/design-tokens';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

// External dependencies.
import { HeaderStandard } from '../HeaderStandard';
import { HeaderStandardCenterColumn } from '../temp-components/HeaderStandardCenterColumn';

// Internal dependencies.
import type { HeaderStandardAnimatedProps } from './HeaderStandardAnimated.types';

const COMPACT_TITLE_ENTER_OFFSET_PX = 8;

export const HeaderStandardAnimated: React.FC<HeaderStandardAnimatedProps> = ({
  title,
  titleProps,
  subtitle,
  subtitleProps,
  scrollY,
  titleSectionHeight,
  twClassName = '',
  ...headerStandardProps
}) => {
  const compactTitleProgress = useDerivedValue(() => {
    const hasMeasured = titleSectionHeight.value > 0;
    const isFullyHidden =
      hasMeasured && scrollY.value >= titleSectionHeight.value;
    return withTiming(isFullyHidden ? 1 : 0, {
      duration: AnimationDuration.Fast,
    });
  });

  const centerAnimatedStyle = useAnimatedStyle(() => {
    const progress = compactTitleProgress.value;
    return {
      opacity: progress,
      transform: [
        { translateY: (1 - progress) * COMPACT_TITLE_ENTER_OFFSET_PX },
      ],
    };
  });

  return (
    <HeaderStandard {...headerStandardProps} twClassName={twClassName}>
      <Animated.View style={centerAnimatedStyle}>
        {title ? (
          <HeaderStandardCenterColumn
            title={title}
            titleProps={titleProps}
            subtitle={subtitle}
            subtitleProps={subtitleProps}
          />
        ) : null}
      </Animated.View>
    </HeaderStandard>
  );
};

HeaderStandardAnimated.displayName = 'HeaderStandardAnimated';
