import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

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
  },
  args: {
    children: 'Filter',
    onClick: () => {
      // Demo only
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonFilter>;

export const Default: Story = {
  args: {},
};

export const IsActive: Story = {
  args: {
    isActive: true,
  },
};

export const FilterGroup: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <ButtonFilter {...args} isActive>
        All
      </ButtonFilter>
      <ButtonFilter {...args}>Purchased</ButtonFilter>
      <ButtonFilter {...args}>Sold</ButtonFilter>
    </div>
  ),
};
