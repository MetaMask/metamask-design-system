import type { IconAlertPropsShared } from '@metamask/design-system-shared';

import type { IconProps } from '../Icon/index.js';

export type IconAlertProps = IconAlertPropsShared &
  Omit<IconProps, 'name' | 'color' | keyof IconAlertPropsShared>;
