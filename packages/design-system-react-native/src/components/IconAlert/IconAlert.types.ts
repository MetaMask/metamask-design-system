import type { IconAlertPropsShared } from '@metamask/design-system-shared';

import type { IconProps } from '../Icon';

export type IconAlertProps = IconAlertPropsShared &
  Omit<IconProps, 'name' | 'color'>;
