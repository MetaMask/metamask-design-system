import React from 'react';

import { Text } from '../Text';

import { DEFAULT_LABEL_TEXT_VARIANT } from './Label.constants';
import type { LabelProps } from './Label.types';

export const Label: React.FC<LabelProps> = ({ ...props }) => (
  <Text variant={DEFAULT_LABEL_TEXT_VARIANT} {...props} />
);
