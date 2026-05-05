// Third party dependencies.
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

// External dependencies.
import { BoxAlignItems } from '../Box';
import { BoxColumn } from '../BoxColumn';
import { HeaderStandard } from '../HeaderStandard';
import { TextOrChildren } from '../temp-components/TextOrChildren';
import type { TextProps } from '../Text';
import { FontWeight, TextColor, TextVariant } from '../Text';

// Internal dependencies.
import type { HeaderStandardAnimatedProps } from './HeaderStandardAnimated.types';

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
    return withTiming(isFullyHidden ? 1 : 0, { duration: 150 });
  });

  const centerAnimatedStyle = useAnimatedStyle(() => {
    const progress = compactTitleProgress.value;
    return {
      opacity: progress,
      transform: [{ translateY: (1 - progress) * 8 }],
    };
  });

  let subtitleTextProps: Omit<Partial<TextProps>, 'children'> | undefined;
  if (subtitle && typeof subtitle === 'string') {
    const { twClassName: subtitleTwClassName, ...subtitleTextRest } =
      subtitleProps ?? {};
    subtitleTextProps = {
      variant: TextVariant.BodySm,
      color: TextColor.TextAlternative,
      ...subtitleTextRest,
      twClassName: ['-mt-0.5', subtitleTwClassName].filter(Boolean).join(' '),
    };
  }

  const content = title ? (
    <BoxColumn
      alignItems={BoxAlignItems.Center}
      textProps={{
        variant: TextVariant.BodyMd,
        fontWeight: FontWeight.Bold,
        ...titleProps,
      }}
      bottomAccessory={
        subtitle ? (
          <TextOrChildren textProps={subtitleTextProps}>
            {subtitle}
          </TextOrChildren>
        ) : undefined
      }
    >
      {title}
    </BoxColumn>
  ) : null;

  return (
    <HeaderStandard {...headerStandardProps} twClassName={twClassName}>
      <Animated.View style={centerAnimatedStyle}>{content}</Animated.View>
    </HeaderStandard>
  );
};

HeaderStandardAnimated.displayName = 'HeaderStandardAnimated';
