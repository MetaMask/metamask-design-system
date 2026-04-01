// Third party dependencies.
import React from 'react';
// eslint-disable-next-line import-x/default
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

// External dependencies.
import { Box, BoxAlignItems } from '../Box';
import HeaderStandard from '../HeaderStandard';
import { TextOrChildren } from '../temp-components/TextOrChildren';
import { FontWeight, TextColor, TextVariant } from '../Text';

// Internal dependencies.
import type { HeaderStandardAnimatedProps } from './HeaderStandardAnimated.types';

export const HeaderStandardAnimated = ({
  title,
  titleProps,
  subtitle,
  subtitleProps,
  scrollY,
  titleSectionHeight,
  twClassName = '',
  ...headerStandardProps
}: HeaderStandardAnimatedProps) => {
  const compactTitleProgress = useDerivedValue(() => {
    const hasMeasured = titleSectionHeight.value > 0;
    const isFullyHidden =
      hasMeasured && scrollY.value >= titleSectionHeight.value;
    return withTiming(isFullyHidden ? 1 : 0, { duration: 150 });
  });

  const centerAnimatedStyle = useAnimatedStyle(() => {
    const progress = compactTitleProgress.value;
    return {
      opacity: progress,
      transform: [{ translateY: (1 - progress) * 8 }],
    };
  });

  const content = title ? (
    <Box alignItems={BoxAlignItems.Center}>
      <TextOrChildren
        textProps={{
          variant: TextVariant.BodyMd,
          fontWeight: FontWeight.Bold,
          ...titleProps,
        }}
      >
        {title}
      </TextOrChildren>
      {subtitle && (
        <Box twClassName="-mt-0.5">
          <TextOrChildren
            textProps={{
              variant: TextVariant.BodySm,
              color: TextColor.TextAlternative,
              ...subtitleProps,
            }}
          >
            {subtitle}
          </TextOrChildren>
        </Box>
      )}
    </Box>
  ) : null;

  return (
    <HeaderStandard
      {...headerStandardProps}
      twClassName={`bg-default ${twClassName}`.trim()}
    >
      <Animated.View style={centerAnimatedStyle}>{content}</Animated.View>
    </HeaderStandard>
  );
};

HeaderStandardAnimated.displayName = 'HeaderStandardAnimated';
