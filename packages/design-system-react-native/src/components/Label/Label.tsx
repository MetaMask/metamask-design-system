import React from 'react';

import { Text, TextVariant } from '../Text/index.js';

import type { LabelProps } from './Label.types.js';

export const Label: React.FC<LabelProps> = ({ ...props }) => (
  <Text variant={TextVariant.BodyMd} {...props} />
);
