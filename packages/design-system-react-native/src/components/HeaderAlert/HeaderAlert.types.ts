import type { HeaderAlertPropsShared } from '@metamask/design-system-shared';

import type { HeaderStandardProps } from '../HeaderStandard';
import type { IconAlertProps } from '../IconAlert';

/**
 * HeaderAlert component props (React Native).
 */
export type HeaderAlertProps = Omit<
  HeaderStandardProps,
  'children' | 'title' | 'titleProps' | 'subtitle' | 'subtitleProps'
> &
  HeaderAlertPropsShared & {
    /**
     * Props for the inner IconAlert. `severity` and `size` are always set by
     * HeaderAlert and are omitted from this type.
     */
    iconAlertProps?: Omit<IconAlertProps, 'severity' | 'size'>;
  };
