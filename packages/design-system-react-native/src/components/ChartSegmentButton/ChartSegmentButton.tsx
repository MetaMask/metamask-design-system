import { SegmentButtonVariant } from '@metamask/design-system-shared';
import React from 'react';

import { ButtonBaseSize } from '../../types';
import { SegmentButton } from '../SegmentButton';

import type { ChartSegmentButtonProps } from './ChartSegmentButton.types';

export const ChartSegmentButton = (props: ChartSegmentButtonProps) => (
  <SegmentButton
    size={ButtonBaseSize.Sm}
    variant={SegmentButtonVariant.Secondary}
    {...props}
  />
);

ChartSegmentButton.displayName = 'ChartSegmentButton';
