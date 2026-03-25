import type { Meta, StoryObj } from '@storybook/react-native';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

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
    isReadonly: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    value: {
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
    <View style={{ gap: 16 }}>
      <ControlledTextField value="" placeholder="Default" />
      <ControlledTextField value="" placeholder="Error state" isError />
    </View>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ControlledTextField value="Editable" placeholder="Enabled" />
      <TextField value="Not editable" placeholder="Disabled" isDisabled />
    </View>
  ),
};

export const StartAccessory: Story = {
  render: () => (
    <ControlledTextField
      value=""
      placeholder="With start accessory"
      startAccessory={<Text>🔍</Text>}
    />
  ),
};

export const EndAccessory: Story = {
  render: () => (
    <ControlledTextField
      value=""
      placeholder="With end accessory"
      endAccessory={<Text>✕</Text>}
    />
  ),
};
