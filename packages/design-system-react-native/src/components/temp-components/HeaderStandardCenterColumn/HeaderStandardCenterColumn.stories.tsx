import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import { HeaderStandardCenterColumn } from './HeaderStandardCenterColumn';
import type { HeaderStandardCenterColumnProps } from './HeaderStandardCenterColumn.types';

const meta: Meta<HeaderStandardCenterColumnProps> = {
  title: 'Temp Components/HeaderStandardCenterColumn',
  component: HeaderStandardCenterColumn,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<HeaderStandardCenterColumnProps>;

export const Default: Story = {
  args: {
    title: 'Title',
  },
};

export const Subtitle: Story = {
  args: {
    title: 'Title',
    subtitle: 'Subtitle',
  },
};
