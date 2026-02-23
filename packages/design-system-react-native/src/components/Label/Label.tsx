import React from 'react';

import { Text, TextVariant } from '../Text';

import type { LabelProps } from './Label.types';

export const Label: React.FC<LabelProps> = ({ ...props }) => (
  <Text variant={TextVariant.BodyMd} {...props} />
);
