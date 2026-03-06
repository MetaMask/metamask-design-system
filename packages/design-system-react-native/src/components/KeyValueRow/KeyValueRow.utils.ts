import {
  KeyValueRowLabelProps,
  PreDefinedKeyValueRowLabel,
} from './KeyValueRow.types';

export const isPreDefinedKeyValueRowLabel = (
  label: KeyValueRowLabelProps['label'],
): label is PreDefinedKeyValueRowLabel =>
  Boolean(label) && typeof label === 'object' && 'text' in label;
