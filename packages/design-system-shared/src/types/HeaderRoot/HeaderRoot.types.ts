import type { ReactNode } from 'react';

/**
 * HeaderRoot component shared props (ADR-0004).
 * Platform-independent properties; platform packages extend with ViewProps /
 * ComponentProps, styling (`className` / `twClassName`), and platform
 * `Text` / `ButtonIcon` prop passthroughs.
 */
export type HeaderRootPropsShared = {
  /**
   * Optional custom content for the left section.
   * When provided, `title` / `titleAccessory` are not rendered (mutually exclusive).
   */
  children?: ReactNode;
  /**
   * Optional main title. Can be a string or a React node.
   * Only used when `children` is not provided.
   * When string: platforms typically apply `TextVariant.HeadingLg` via `titleProps`.
   * When node: rendered as-is; `titleProps` are not applied to the node.
   */
  title?: ReactNode;
  /**
   * Optional content displayed after the title in the title row.
   * Only used when `children` is not provided and `title` is renderable.
   */
  titleAccessory?: ReactNode;
  /**
   * Optional content for the end section.
   * Takes priority over `endButtonIconProps` when both are provided.
   */
  endAccessory?: ReactNode;
};
