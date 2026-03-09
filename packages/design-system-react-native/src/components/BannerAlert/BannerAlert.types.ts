import type { BannerAlertPropsShared } from '@metamask/design-system-shared';

import type { BannerBaseProps } from '../BannerBase';
import type { IconProps } from '../Icon/Icon.types';

/**
 * BannerAlert component props (React Native platform-specific).
 */
export type BannerAlertProps = BannerAlertPropsShared &
  BannerBaseProps & {
    iconProps?: Omit<IconProps, 'name' | 'size' | 'color'>;
  };
