import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export type ButtonProps = {
  text: string;
};
const Button = ({ text }: ButtonProps) => {
  const tw = useTailwind();
  return (
    <TouchableOpacity style={tw`bg-primary-default`}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
