import React, { useMemo } from 'react';

import { Text } from '../Text';

import { SensitiveTextLength } from './SensitiveText.constants';
import type { SensitiveTextProps } from './SensitiveText.types';

const isValidLength = (value: string): boolean => {
  const num = Number(value);
  return !Number.isNaN(num) && num > 0;
};

export const SensitiveText: React.FC<SensitiveTextProps> = ({
  isHidden = false,
  length = SensitiveTextLength.Short,
  children,
  ...props
}) => {
  const fallback = useMemo(() => {
    let resolvedLength = length;

    if (!(length in SensitiveTextLength) && !isValidLength(length)) {
      console.warn(
        `Invalid length provided: ${length}. Falling back to Short.`,
      );
      resolvedLength = SensitiveTextLength.Short;
    }

    const numLength = Number(resolvedLength);
    return '•'.repeat(Number.isNaN(numLength) ? 0 : numLength);
  }, [length]);

  return <Text {...props}>{isHidden ? fallback : children}</Text>;
};
