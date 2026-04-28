import type { SelectButtonProps } from '../SelectButton/SelectButton.types';

export type ChartSelectButtonProps = Omit<
  SelectButtonProps,
  'variant' | 'size'
>;
