import React from 'react';

import { ButtonBaseSize } from '../../types';
import { SegmentButton } from '../SegmentButton';

import type { FilterSegmentButtonProps } from './FilterSegmentButton.types';

export const FilterSegmentButton = (props: FilterSegmentButtonProps) => (
  <SegmentButton size={ButtonBaseSize.Md} {...props} />
);

FilterSegmentButton.displayName = 'FilterSegmentButton';
