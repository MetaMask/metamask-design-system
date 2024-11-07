import { colors } from '@metamask/design-tokens';
import React from 'react';
import type { TouchableOpacityProps } from 'react-native';
import { TouchableOpacity, Text } from 'react-native';
import tw from 'twrnc';

type ButtonProps = {
  title: string;
} & TouchableOpacityProps;

const Button: React.FC<ButtonProps> = ({ title, style, ...props }) => {
  return (
    <TouchableOpacity
      style={[
        tw`px-4 py-2 rounded`,
        {
          backgroundColor: colors.light.primary.default,
        },
        style,
      ]}
      {...props}
    >
      <Text
        style={[
          tw`text-center`,
          {
            color: colors.light.text.alternative,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
