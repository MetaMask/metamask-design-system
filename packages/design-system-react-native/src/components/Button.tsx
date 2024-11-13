import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { useTailwind } from '../provider';

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
