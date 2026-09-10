import type { CardPropsShared } from '@metamask/design-system-shared';

import type { BoxProps } from '../Box';

/**
 * Card component props (React platform-specific).
 * Extends shared props from @metamask/design-system-shared with Box layout
 * props and React-specific platform concerns.
 *
 * `onClick` comes from `BoxProps`. When it is provided without `asChild`, the
 * card stays a `div` and gains button affordances (`role="button"`, `tabIndex`,
 * and Enter/Space activation) so block-level content such as `p` stays valid.
 */
export type CardProps = CardPropsShared & Omit<BoxProps, 'children'>;
