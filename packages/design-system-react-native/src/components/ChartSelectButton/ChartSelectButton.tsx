import { SelectButtonVariant } from '@metamask/design-system-shared';
import React from 'react';

import { ButtonBaseSize } from '../../types';
import { SelectButton } from '../SelectButton';

import type { ChartSelectButtonProps } from './ChartSelectButton.types';

export const ChartSelectButton = (props: ChartSelectButtonProps) => (
  <SelectButton
    variant={SelectButtonVariant.Tertiary}
    size={ButtonBaseSize.Sm}
    {...props}
  />
);

ChartSelectButton.displayName = 'ChartSelectButton';
