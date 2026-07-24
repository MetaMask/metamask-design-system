import { HelpTextSeverity, TextColor } from '@metamask/design-system-shared';

export const MAP_HELPTEXT_SEVERITY_COLOR: Record<HelpTextSeverity, TextColor> =
  {
    [HelpTextSeverity.Danger]: TextColor.ErrorDefault,
    [HelpTextSeverity.Warning]: TextColor.WarningDefault,
    [HelpTextSeverity.Success]: TextColor.SuccessDefault,
    [HelpTextSeverity.Info]: TextColor.InfoDefault,
  };
