import type { HeaderAlertPropsShared } from '@metamask/design-system-shared';

import type { HeaderBaseProps } from '../HeaderBase';
import type { HeaderStandardProps } from '../HeaderStandard';
import type { IconAlertProps } from '../IconAlert';

type HeaderStandardNavigationShortcuts = Pick<
  HeaderStandardProps,
  'onBack' | 'backButtonProps' | 'onClose' | 'closeButtonProps'
>;

/**
 * HeaderAlert component props (React Native).
 */
export type HeaderAlertProps = Omit<HeaderBaseProps, 'children'> &
  HeaderStandardNavigationShortcuts &
  HeaderAlertPropsShared & {
    /**
     * Props for the inner IconAlert. `severity` and `size` are always set by
     * HeaderAlert and are omitted from this type.
     */
    iconAlertProps?: Omit<IconAlertProps, 'severity' | 'size'>;
  };
