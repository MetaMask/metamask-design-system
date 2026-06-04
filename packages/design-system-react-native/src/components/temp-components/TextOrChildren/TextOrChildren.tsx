import { renderTextOrChildren } from '../../utils';

import type { TextOrChildrenProps } from './TextOrChildren.types';

/**
 * Renders string children with the design-system `Text` component and returns
 * non-string children directly.
 *
 * @param options0 - TextOrChildren props.
 * @param options0.children - Content to render.
 * @param options0.textProps - Props applied when string children are rendered as `Text`.
 * @returns Rendered text or children.
 * @deprecated Use explicit `Text` for string content, or use the internal
 * `renderTextOrChildren` helper inside design-system implementation code.
 */
export const TextOrChildren = ({ children, textProps }: TextOrChildrenProps) =>
  renderTextOrChildren(children, textProps);
