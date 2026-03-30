import type { BadgeWrapperPropsShared } from '@metamask/design-system-shared';
import type { ComponentProps } from 'react';

/**
 * BadgeWrapper component props (React platform-specific)
 * Extends shared props from @metamask/design-system-shared with React-specific platform concerns
 */
export type BadgeWrapperProps = BadgeWrapperPropsShared & {
  /**
   * Optional prop to pass additional props to the children container
   */
  childrenContainerProps?: ComponentProps<'div'>;
  /**
   * Optional prop to pass additional props to the badge container
   */
  badgeContainerProps?: ComponentProps<'div'>;
  /**
   * Optional prop for additional CSS classes to be applied to the BadgeWrapper component.
   * These classes will be merged with the component's default classes using twMerge.
   */
  className?: string;
  /**
   * Optional prop to control the style.
   */
  style?: React.CSSProperties;
  /**
   * Optional prop to add a test id to the BadgeWrapper
   */
  'data-testid'?: string;
} & ComponentProps<'div'>;
