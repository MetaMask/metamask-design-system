import { ToastSeverity } from '@metamask/design-system-shared';

import { IconColor, IconName } from '../../types';

export {
  TOAST_ANIMATION_DURATION,
  TOAST_VISIBILITY_DURATION,
} from '@metamask/design-system-shared';

// TODO: Replace this map with a web IconAlert component once the shared
// alert-icon primitive exists in React.
export const TOAST_SEVERITY_ICON_MAP = {
  [ToastSeverity.Success]: {
    name: IconName.Confirmation,
    color: IconColor.SuccessDefault,
  },
  [ToastSeverity.Warning]: {
    name: IconName.Danger,
    color: IconColor.WarningDefault,
  },
  [ToastSeverity.Danger]: {
    name: IconName.Danger,
    color: IconColor.ErrorDefault,
  },
} as const;
