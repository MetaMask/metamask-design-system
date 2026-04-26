import type { SelectButtonProps } from '../SelectButton/SelectButton.types';

export type FilterSelectButtonProps = Omit<
  SelectButtonProps,
  'variant' | 'size'
>;
