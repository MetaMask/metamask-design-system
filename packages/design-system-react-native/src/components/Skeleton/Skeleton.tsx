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
  const hasChildren = children !== null && children !== undefined;

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
    if (autoPlay && (!hasChildren || hideChildren)) {
      startAnimation();
    }

    return () => {
      opacityAnim.stopAnimation();
    };
  }, [hasChildren, hideChildren, autoPlay]);

  if (!hideChildren && hasChildren) {
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
        {...animatedViewProps}
        style={[
          tw.style('absolute inset-0 rounded bg-icon-alternative'),
          { opacity: opacityAnim },
          animatedViewProps?.style,
        ]}
        pointerEvents="none"
      />

      {hasChildren && (
        <View
          {...childrenWrapperProps}
          style={[
            tw.style('relative z-10 opacity-0'),
            childrenWrapperProps?.style,
          ]}
          pointerEvents="none"
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
        >
          {children}
        </View>
      )}
    </View>
  );
};

export default Skeleton;
