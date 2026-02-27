import { ButtonSemanticSeverity } from './ButtonSemantic.types';

export const TWCLASSMAP_BUTTONSEMANTIC_BG: Record<
  ButtonSemanticSeverity,
  string
> = {
  [ButtonSemanticSeverity.Success]: 'bg-success-muted',
  [ButtonSemanticSeverity.Danger]: 'bg-error-muted',
};

export const TWCLASSMAP_BUTTONSEMANTIC_BG_PRESSED: Record<
  ButtonSemanticSeverity,
  string
> = {
  [ButtonSemanticSeverity.Success]: 'bg-success-muted-pressed',
  [ButtonSemanticSeverity.Danger]: 'bg-error-muted-pressed',
};

export const TWCLASSMAP_BUTTONSEMANTIC_TEXT: Record<
  ButtonSemanticSeverity,
  string
> = {
  [ButtonSemanticSeverity.Success]: 'text-success-default',
  [ButtonSemanticSeverity.Danger]: 'text-error-default',
};
