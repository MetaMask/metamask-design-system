import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { BoxBackgroundColor } from '../../types';
import { Box } from '../Box';
import { Icon, IconName, IconSize } from '../Icon';
import { Text } from '../Text';

import { TabEmptyState } from './TabEmptyState';
import type { TabEmptyStateProps } from './TabEmptyState.types';

const meta: Meta<TabEmptyStateProps> = {
  title: 'Components/TabEmptyState',
  component: TabEmptyState,
  argTypes: {
    description: { control: 'text' },
    actionButtonText: { control: 'text' },
    twClassName: { control: 'text' },
    onAction: { action: 'onAction' },
  },
  decorators: [
    (Story) => (
      <Box
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        padding={4}
      >
        <Text>Content behind empty state</Text>
        <Box padding={2} />
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<TabEmptyStateProps>;

export const Default: Story = {
  args: {
    icon: <Icon name={IconName.Add} size={IconSize.Xl} />,
    description: 'No perpetual positions found',
    actionButtonText: 'Start Trading',
  },
};

export const Description: Story = {
  render: (args) => (
    <TabEmptyState {...args} description="No items available at the moment" />
  ),
};

export const IconStory: Story = {
  name: 'Icon',
  render: (args) => (
    <TabEmptyState
      {...args}
      icon={<Icon name={IconName.Add} size={IconSize.Xl} />}
      description="No items found"
    />
  ),
};

export const ActionButton: Story = {
  render: (args) => (
    <TabEmptyState
      {...args}
      description="No results found"
      actionButtonText="Try Again"
      onAction={() => {
        // eslint-disable-next-line no-console
        console.log('Action pressed');
      }}
    />
  ),
};

export const Children: Story = {
  render: (args) => (
    <TabEmptyState {...args} description="Custom content below">
      <Text>Additional custom content</Text>
    </TabEmptyState>
  ),
};

export const TwClassName: Story = {
  render: (args) => (
    <TabEmptyState
      {...args}
      description="With custom styles"
      twClassName="p-8"
    />
  ),
};
