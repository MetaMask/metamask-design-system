import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';

import { ComponentName } from './ComponentName';

const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName',
  component: ComponentName,
};

export default meta;
type Story = StoryObj<typeof ComponentName>;

export const Default: Story = {
  render: () => (
    <ComponentName>
      <Text>Default ComponentName</Text>
    </ComponentName>
  ),
};

export const Children: Story = {
  render: () => (
    <ComponentName>
      <Text>This is an example of using children with ComponentName</Text>
    </ComponentName>
  ),
};
