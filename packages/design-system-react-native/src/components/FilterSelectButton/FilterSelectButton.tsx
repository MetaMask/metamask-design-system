import { SelectButtonVariant } from '@metamask/design-system-shared';
import React from 'react';

import { ButtonBaseSize } from '../../types';
import { SelectButton } from '../SelectButton';

import type { FilterSelectButtonProps } from './FilterSelectButton.types';

export const FilterSelectButton = (props: FilterSelectButtonProps) => (
  <SelectButton
    variant={SelectButtonVariant.Primary}
    size={ButtonBaseSize.Md}
    {...props}
  />
);

FilterSelectButton.displayName = 'FilterSelectButton';
