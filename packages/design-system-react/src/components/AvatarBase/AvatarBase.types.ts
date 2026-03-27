import type { AvatarBasePropsShared } from '@metamask/design-system-shared';
import type { ComponentProps } from 'react';

import type { TextProps } from '../Text';

export type AvatarBaseProps = ComponentProps<'div'> &
  AvatarBasePropsShared & {
    /**
     * Optional props to be passed to the Text component when rendering fallback text
     * Only used when fallbackText is provided and no children
     */
    fallbackTextProps?: Partial<
      React.HTMLAttributes<HTMLSpanElement> & TextProps
    >;
    /**
     * Optional boolean that determines if the component should merge its props onto its immediate child
     * instead of rendering a div element
     *
     * @default false
     */
    asChild?: boolean;
  };
