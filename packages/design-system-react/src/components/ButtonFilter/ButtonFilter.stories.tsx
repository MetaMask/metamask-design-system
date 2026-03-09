import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import {
  Box,
  BoxBackgroundColor,
  BoxBorderColor,
  BoxFlexDirection,
} from '../Box';
import { Text } from '../Text';

import { ButtonFilter } from './ButtonFilter';
import README from './README.mdx';

const meta: Meta<typeof ButtonFilter> = {
  title: 'React Components/ButtonFilter',
  component: ButtonFilter,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    isActive: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
    onClick: {
      action: 'onClick',
    },
  },
  args: {
    children: 'Filter',
    isActive: false,
  },
};

export default meta;
type Story = StoryObj<typeof ButtonFilter>;

export const Default: Story = {};

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
  onClick: _onClick,
  ...args
}: ComponentProps<typeof ButtonFilter>) => {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('All');

  return (
    <Box flexDirection={BoxFlexDirection.Column} gap={4}>
      <Box flexDirection={BoxFlexDirection.Row} gap={2}>
        {FILTER_OPTIONS.map((filter) => (
          <ButtonFilter
            key={filter}
            {...args}
            isActive={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </ButtonFilter>
        ))}
      </Box>
      <Box
        backgroundColor={BoxBackgroundColor.BackgroundMuted}
        borderColor={BoxBorderColor.BorderMuted}
        borderWidth={1}
        className="rounded-lg"
        padding={4}
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
