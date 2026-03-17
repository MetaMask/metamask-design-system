import {
  KeyValueRowLabelProps,
  PreDefinedKeyValueRowLabel,
} from './KeyValueRow.types';

export const isPreDefinedKeyValueRowLabel = (
  label: KeyValueRowLabelProps['label'],
): label is PreDefinedKeyValueRowLabel =>
  label !== null && typeof label === 'object' && 'text' in label;
