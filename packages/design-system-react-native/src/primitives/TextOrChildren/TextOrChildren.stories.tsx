import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import { TextColor, TextVariant, FontWeight } from '../../components/Text';
import TextOrChildren from './TextOrChildren';
import type { TextOrChildrenProps } from './TextOrChildren.types';

const meta: Meta<TextOrChildrenProps> = {
  title: 'Primitives/TextOrChildren',
  component: TextOrChildren,
  args: {
    children: 'The quick orange fox jumped over the lazy dog.',
    textProps: {
      variant: TextVariant.BodyMd,
      color: TextColor.TextDefault,
      fontWeight: FontWeight.Normal,
    },
  },
};

export default meta;
type Story = StoryObj<TextOrChildrenProps>;

export const Default: Story = {
  render: (args) => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
        <TextOrChildren {...args} />
      </View>
    );
  },
};
