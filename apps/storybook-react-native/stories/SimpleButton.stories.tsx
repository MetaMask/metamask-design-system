import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const SimpleButton = ({ title }: { title: string }) => (
  <View style={{ padding: 16 }}>
    <TouchableOpacity
      style={{
        backgroundColor: 'blue',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
      }}
    >
      <Text style={{ color: 'white', fontSize: 16 }}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const meta: Meta<typeof SimpleButton> = {
  title: 'SimpleButton',
  component: SimpleButton,
  args: {
    title: 'Simple Button',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomTitle: Story = {
  args: {
    title: 'Custom Title',
  },
};
