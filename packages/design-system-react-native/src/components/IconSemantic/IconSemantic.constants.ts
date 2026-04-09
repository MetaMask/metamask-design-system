import { IconSemanticSemantic } from '@metamask/design-system-shared';

import { IconColor, IconName } from '../../types';

export const ICON_SEMANTIC_MAP: Record<
  IconSemanticSemantic,
  { name: IconName; color: IconColor }
> = {
  [IconSemanticSemantic.Info]: {
    name: IconName.Info,
    color: IconColor.PrimaryDefault,
  },
  [IconSemanticSemantic.Success]: {
    name: IconName.Confirmation,
    color: IconColor.SuccessDefault,
  },
  [IconSemanticSemantic.Warning]: {
    name: IconName.Danger,
    color: IconColor.WarningDefault,
  },
  [IconSemanticSemantic.Error]: {
    name: IconName.Error,
    color: IconColor.ErrorDefault,
  },
};
