import React from 'react';

import { Icon } from '../Icon';

import { ICON_SEMANTIC_MAP } from './IconSemantic.constants';
import type { IconSemanticProps } from './IconSemantic.types';

export const IconSemantic: React.FC<IconSemanticProps> = ({
  semantic,
  ...props
}) => {
  const { name, color } = ICON_SEMANTIC_MAP[semantic];
  return <Icon {...props} color={color} name={name} />;
};
