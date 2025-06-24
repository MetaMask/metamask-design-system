import React from 'react';
import { View } from 'react-native';

import type { ComponentNameProps } from './ComponentName.types';

export const ComponentName: React.FC<ComponentNameProps> = ({
  children,
  twClassName,
  style,
  ...props
}) => {
  return (
    <View style={style} {...props}>
      {children}
    </View>
  );
};