import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { View } from 'react-native';

import type { ComponentNameProps } from './ComponentName.types';

export const ComponentName: React.FC<ComponentNameProps> = ({
  children,
  className,
  style,
  ...props
}) => {
  const tw = useTailwind();

  return (
    <View style={[tw.style(className), style]} {...props}>
      {children}
    </View>
  );
};
