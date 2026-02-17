import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { Box } from '../Box';
import { Icon, IconName, IconSize } from '../Icon';
import { Text } from '../Text';

import { TextField } from './TextField';
import type { TextFieldProps } from './TextField.types';
import { TextFieldSize } from './TextField.types';

const meta: Meta<TextFieldProps> = {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    size: {
      options: Object.values(TextFieldSize),
      control: { type: 'select' },
    },
    isError: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isReadonly: { control: 'boolean' },
    placeholder: { control: 'text' },
    twClassName: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <Box twClassName="p-4 w-full">
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<TextFieldProps>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const Size: Story = {
  render: () => (
    <Box twClassName="gap-4 w-full">
      <TextField size={TextFieldSize.Sm} placeholder="Small" />
      <TextField size={TextFieldSize.Md} placeholder="Medium (default)" />
      <TextField size={TextFieldSize.Lg} placeholder="Large" />
    </Box>
  ),
};

export const IsError: Story = {
  args: {
    isError: true,
    placeholder: 'Error state',
  },
};

export const IsDisabled: Story = {
  args: {
    isDisabled: true,
    placeholder: 'Disabled state',
  },
};

export const StartAccessory: Story = {
  args: {
    placeholder: 'Search...',
    startAccessory: <Icon name={IconName.Search} size={IconSize.Sm} />,
  },
};

export const EndAccessory: Story = {
  args: {
    placeholder: 'Enter amount',
    endAccessory: <Text>ETH</Text>,
  },
};
