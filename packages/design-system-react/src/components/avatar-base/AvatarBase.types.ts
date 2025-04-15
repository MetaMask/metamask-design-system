import type { ComponentProps } from 'react';

import { AvatarBaseSize, AvatarBaseShape } from '../../types';
import type { TextProps } from '../text';

export type AvatarBaseProps = ComponentProps<'div'> & {
  /**
   * Required prop for the content to be rendered within the AvatarBase
   * Not required if fallbackText is provided
   */
  children?: React.ReactNode;
  /**
   * Optional text to display when no children are provided
   */
  fallbackText?: string;
  /**
   * Optional props to be passed to the Text component when rendering fallback text
   * Only used when fallbackText is provided and no children
   */
  fallbackTextProps?: Partial<
    React.HTMLAttributes<HTMLSpanElement> & TextProps
  >;
  /**
   * Optional prop for additional CSS classes to be applied to the AvatarBase component.
   * These classes will be merged with the component's default classes using twMerge.
   */
  className?: string;
  /**
   * Optional prop to control the size of the AvatarBase
   * @default AvatarBaseSize.Md
   */
  size?: AvatarBaseSize;
  /**
   * Optional boolean that determines if the component should merge its props onto its immediate child
   * instead of rendering a div element
   * @default false
   */
  asChild?: boolean;
  /**
   * Optional CSS styles to be applied to the component.
   * Should be used sparingly and only for dynamic styles that can't be achieved with className.
   */
  style?: React.CSSProperties;
  /**
   * Optional prop to control the shape of the AvatarBase
   * @default AvatarBaseShape.Circle
   */
  shape?: AvatarBaseShape;
};
