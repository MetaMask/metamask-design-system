import type { ComponentProps } from 'react';

export enum AvatarBaseSize {
  /**
   * Extra small size (16px)
   */
  Xs = 'xs',
  /**
   * Small size (24px)
   */
  Sm = 'sm',
  /**
   * Medium size (32px)
   */
  Md = 'md',
  /**
   * Large size (40px)
   */
  Lg = 'lg',
  /**
   * Extra large size (48px)
   */
  Xl = 'xl',
}

export type AvatarBaseProps = ComponentProps<'div'> & {
  /**
   * Required prop for the content to be rendered within the AvatarBase
   */
  children: React.ReactNode;
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
};
