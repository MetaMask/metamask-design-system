import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { View } from 'react-native';

import type { ComponentNameProps } from './ComponentName.types';

export const ComponentName: React.FC<ComponentNameProps> = ({
  children,
  twClassName,
  style,
  ...props
}) => {
  const tw = useTailwind();
  const twContainerClassNames = tw`
    ${twClassName}
  `;

  return (
    <View style={[twContainerClassNames, style]} {...props}>
      {children}
    </View>
  );
};
