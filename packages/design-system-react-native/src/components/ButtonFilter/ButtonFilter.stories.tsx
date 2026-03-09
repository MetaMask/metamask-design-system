import type { Meta, StoryObj } from '@storybook/react-native';
import type { ComponentProps } from 'react';
import React, { useState } from 'react';

import {
  Box,
  BoxBackgroundColor,
  BoxFlexDirection,
  BoxBorderColor,
} from '../Box';
import { Text } from '../Text';

import { ButtonFilter } from './ButtonFilter';

const meta: Meta<typeof ButtonFilter> = {
  title: 'Components/ButtonFilter',
  component: ButtonFilter,
  argTypes: {
    isActive: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
    onPress: {
      action: 'onPress',
    },
  },
  args: {
    children: 'Filter',
    isActive: false,
  },
};

export default meta;
type Story = StoryObj<typeof ButtonFilter>;

export const Default: Story = {
  args: {
    isActive: false,
  },
};

export const IsActive: Story = {
  args: {
    isActive: true,
  },
};

const FILTER_OPTIONS = ['All', 'Purchased', 'Sold'] as const;

type FilterOption = (typeof FILTER_OPTIONS)[number];

const FILTER_CONTENT: Record<FilterOption, string> = {
  All: 'All content',
  Purchased: 'Purchased content',
  Sold: 'Sold content',
};

const ButtonFilterGroupStory = ({
  children: _children,
  onPress: _onPress,
  ...args
}: ComponentProps<typeof ButtonFilter>) => {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('All');

  return (
    <Box gap={4}>
      <Box flexDirection={BoxFlexDirection.Row} gap={3}>
        {FILTER_OPTIONS.map((filter) => (
          <ButtonFilter
            key={filter}
            {...args}
            isActive={activeFilter === filter}
            onPress={() => setActiveFilter(filter)}
          >
            {filter}
          </ButtonFilter>
        ))}
      </Box>
      <Box
        backgroundColor={BoxBackgroundColor.BackgroundMuted}
        borderColor={BoxBorderColor.BorderMuted}
        borderWidth={1}
        padding={4}
        twClassName="rounded-lg"
      >
        <Text>{FILTER_CONTENT[activeFilter]}</Text>
      </Box>
    </Box>
  );
};

export const ButtonFilterGroup: Story = {
  name: 'Button Filter Group',
  render: (args) => <ButtonFilterGroupStory {...args} />,
};
