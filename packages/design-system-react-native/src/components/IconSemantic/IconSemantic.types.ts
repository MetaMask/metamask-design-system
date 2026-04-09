import type { IconSemanticPropsShared } from '@metamask/design-system-shared';

import type { IconProps } from '../Icon';

export type IconSemanticProps = IconSemanticPropsShared &
  Omit<IconProps, 'name' | 'color'>;
