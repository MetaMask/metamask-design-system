// Third party dependencies.
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';

// Internal dependencies.
import {
  SKELETON_TEST_ID,
  SKELETON_ANIMATED_BACKGROUND_TEST_ID,
  SKELETON_CHILDREN_WRAPPER_TEST_ID,
} from './Skeleton.constants';
import { SkeletonProps } from './Skeleton.types';

const Skeleton: React.FC<SkeletonProps> = ({
  height,
  width,
  children,
  hideChildren = false,
  style,
  childrenWrapperProps = {},
  animatedViewProps = {},
  testID = SKELETON_TEST_ID,
  twClassName,
  autoPlay = true,
  ...props
}) => {
  const tw = useTailwind();
  const opacityAnim = useRef(new Animated.Value(0.2)).current;

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(opacityAnim, {
        toValue: 0.1,
        duration: 700,
        useNativeDriver: true,
        isInteraction: false,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0.2,
        duration: 700,
        useNativeDriver: true,
        isInteraction: false,
      }),
    ]).start((finished) => {
      if (finished) {
        startAnimation();
      }
    });
  };

  useEffect(() => {
    if (autoPlay && (!children || hideChildren)) {
      startAnimation();
    }

    return () => {
      opacityAnim.stopAnimation();
    };
  }, [children, hideChildren, autoPlay]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!hideChildren && children) {
    return <>{children}</>;
  }

  const baseStyles = 'rounded overflow-hidden';
  const resolvedTwClassName = twClassName
    ? `${baseStyles} ${twClassName}`
    : baseStyles;

  return (
    <View
      style={[
        tw.style(resolvedTwClassName),
        height !== undefined && { height },
        width !== undefined && { width },
        style,
      ]}
      testID={testID}
      {...props}
    >
      {/* Animated background always present */}
      <Animated.View
        style={[
          tw.style('absolute inset-0 rounded bg-icon-alternative'),
          { opacity: opacityAnim },
        ]}
        pointerEvents="none"
        testID={SKELETON_ANIMATED_BACKGROUND_TEST_ID}
        {...animatedViewProps}
      />

      {children && (
        <View
          style={[
            tw.style('relative z-10'),
            hideChildren ? tw.style('opacity-0') : undefined,
          ]}
          testID={SKELETON_CHILDREN_WRAPPER_TEST_ID}
          {...childrenWrapperProps}
        >
          {children}
        </View>
      )}
    </View>
  );
};

export default Skeleton;
