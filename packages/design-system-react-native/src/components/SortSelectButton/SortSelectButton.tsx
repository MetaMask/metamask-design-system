import { SelectButtonVariant } from '@metamask/design-system-shared';
import React from 'react';

import { ButtonBaseSize } from '../../types';
import { SelectButton } from '../SelectButton';

import type { SortSelectButtonProps } from './SortSelectButton.types';

export const SortSelectButton = (props: SortSelectButtonProps) => (
  <SelectButton
    variant={SelectButtonVariant.Secondary}
    size={ButtonBaseSize.Xs}
    {...props}
  />
);

SortSelectButton.displayName = 'SortSelectButton';
