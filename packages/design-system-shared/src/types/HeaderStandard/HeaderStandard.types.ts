import type { ReactNode } from 'react';

/**
 * HeaderStandard component shared props (ADR-0004).
 * Platform-independent properties; platform packages extend with HeaderBase /
 * View / ComponentProps, styling (`className` / `twClassName`), and platform
 * `Text` / `ButtonIcon` prop passthroughs.
 */
export type HeaderStandardPropsShared = {
  /**
   * Optional custom center content. When set, `title` and `subtitle` are not rendered.
   */
  children?: ReactNode;
  /**
   * Optional main title. Can be a string or a React node.
   * Only used when `children` is not provided.
   * When string: rendered with `TextVariant.BodyMd` and `FontWeight.Bold` by
   * default; platform `titleProps` override these.
   * When node: rendered as-is; `titleProps` are not applied to the node.
   */
  title?: ReactNode;
  /**
   * Optional subtitle below the title. Only used when `children` is not provided.
   * When string: rendered with `TextVariant.BodySm` and
   * `TextColor.TextAlternative` by default; platform `subtitleProps` override
   * these.
   * When node: rendered as-is; `subtitleProps` are not applied to the node —
   * add spacing on your root if needed.
   */
  subtitle?: ReactNode;
  /**
   * When set, renders a start back `ButtonIcon` (unless `startAccessory` /
   * `startButtonIconProps` take precedence on the platform).
   */
  onBack?: () => void;
  /**
   * When set, appends a close `ButtonIcon` to the end actions (unless
   * `endAccessory` takes precedence on the platform).
   */
  onClose?: () => void;
};
