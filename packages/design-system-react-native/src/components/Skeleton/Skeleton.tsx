import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';

import type { SkeletonProps } from './Skeleton.types';

const Skeleton: React.FC<SkeletonProps> = ({
  height,
  width,
  children,
  hideChildren = false,
  style,
  childrenWrapperProps,
  animatedViewProps,
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
    ]).start(({ finished }) => {
      /* istanbul ignore next - animation interruption is not testable in Jest */
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
  }, [children, hideChildren, autoPlay]);

  if (!hideChildren && children) {
    return <>{children}</>;
  }

  return (
    <View
      style={[
        tw.style('rounded overflow-hidden', twClassName),
        height !== undefined && { height },
        width !== undefined && { width },
        style,
      ]}
      {...props}
    >
      <Animated.View
        style={[
          tw.style('absolute inset-0 rounded bg-icon-alternative'),
          { opacity: opacityAnim },
        ]}
        pointerEvents="none"
        {...animatedViewProps}
      />

      {children && (
        <View
          style={tw.style('relative z-10', hideChildren && 'opacity-0')}
          {...childrenWrapperProps}
        >
          {children}
        </View>
      )}
    </View>
  );
};

export default Skeleton;
