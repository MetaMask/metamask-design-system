import type { Meta, StoryObj } from '@storybook/react-native';
import { useEffect, useState } from 'react';

import { Box } from '../Box';
import { Icon, IconName, IconSize } from '../Icon';

import { TextField } from './TextField';
import type { TextFieldProps } from './TextField.types';

function ControlledTextField(props: TextFieldProps) {
  const [value, setValue] = useState(props.value ?? '');
  useEffect(() => {
    setValue(props.value ?? '');
  }, [props.value]);

  return <TextField {...props} value={value} onChangeText={setValue} />;
}

const meta: Meta<TextFieldProps> = {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    isError: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    isReadOnly: {
      control: 'boolean',
    },
    value: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    twClassName: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<TextFieldProps>;

export const Default: Story = {
  args: {
    value: '',
    placeholder: 'Enter text...',
  },
  render: (args) => <ControlledTextField {...args} />,
};

export const IsError: Story = {
  render: () => (
    <Box gap={4}>
      <ControlledTextField value="" placeholder="Default" />
      <ControlledTextField value="" placeholder="Error state" isError />
    </Box>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <Box gap={4}>
      <ControlledTextField value="Editable" placeholder="Enabled" />
      <TextField value="Not editable" placeholder="Disabled" isDisabled />
    </Box>
  ),
};

export const IsReadOnly: Story = {
  render: () => (
    <Box gap={4}>
      <ControlledTextField value="Editable" placeholder="Editable field" />
      <TextField
        value="Cannot edit this value"
        placeholder="Read-only"
        isReadOnly
      />
    </Box>
  ),
};

export const StartAccessory: Story = {
  render: () => (
    <ControlledTextField
      value=""
      placeholder="With start accessory"
      startAccessory={<Icon name={IconName.Search} size={IconSize.Sm} />}
    />
  ),
};

export const EndAccessory: Story = {
  render: () => (
    <ControlledTextField
      value=""
      placeholder="With end accessory"
      endAccessory={<Icon name={IconName.Close} size={IconSize.Sm} />}
    />
  ),
};
