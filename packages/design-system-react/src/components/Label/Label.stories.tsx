import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Box, BoxFlexDirection } from '../Box';
import { Icon, IconName, IconSize } from '../Icon';
import { Input } from '../Input';

import { Label } from './Label';
import type { LabelProps } from './Label.types';
import README from './README.mdx';

const meta: Meta<LabelProps> = {
  title: 'React Components/Label',
  component: Label,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    htmlFor: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<LabelProps>;

export const Default: Story = {
  args: {
    children: 'Email address',
  },
};

export const HtmlFor: Story = {
  render: () => (
    <Box flexDirection={BoxFlexDirection.Column} gap={2}>
      <Label htmlFor="email-input">Email address</Label>
      <Input id="email-input" placeholder="you@example.com" />
    </Box>
  ),
};

export const WrappingInput: Story = {
  render: () => (
    <Label>
      <Box flexDirection={BoxFlexDirection.Column} gap={2} className="w-full">
        Email address
        <Input placeholder="you@example.com" />
      </Box>
    </Label>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Label>
      Required field
      <Icon
        name={IconName.Info}
        size={IconSize.Sm}
        className="ml-1"
        aria-label="info"
      />
    </Label>
  ),
};
