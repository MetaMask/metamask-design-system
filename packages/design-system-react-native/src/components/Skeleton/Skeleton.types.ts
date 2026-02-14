// Third party dependencies.
import type { ReactNode } from 'react';
import type { ViewProps } from 'react-native';

/**
 * Skeleton component props.
 *
 * Extends ViewProps to inherit standard React Native props
 * such as testID and accessibilityLabel.
 */
export type SkeletonProps = {
  /**
   * Optional prop to set the height of the Skeleton.
   */
  height?: number | string;
  /**
   * Optional prop to set the width of the Skeleton.
   */
  width?: number | string;
  /**
   * Optional content to display within the skeleton.
   * When provided without `hideChildren`, children are rendered directly.
   * When provided with `hideChildren`, children are rendered invisibly
   * to preserve layout dimensions.
   */
  children?: ReactNode;
  /**
   * When true, children are rendered invisibly while the skeleton
   * animation plays, preserving layout dimensions.
   *
   * @default false
   */
  hideChildren?: boolean;
  /**
   * Props spread to the children wrapper View (e.g., testID, accessibilityLabel).
   */
  childrenWrapperProps?: ViewProps;
  /**
   * Props spread to the animated background View (e.g., testID, accessibilityLabel).
   */
  animatedViewProps?: ViewProps;
  /**
   * Tailwind CSS classes for the skeleton container.
   */
  twClassName?: string;
  /**
   * Whether to automatically start the shimmer animation.
   *
   * @default true
   */
  autoPlay?: boolean;
} & ViewProps;
