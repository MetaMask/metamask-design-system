import type { Meta, StoryObj } from '@storybook/react-native';
import { Text, View } from 'react-native';

import { TextField } from './TextField';
import { TextFieldSize } from './TextField.types';
import type { TextFieldProps } from './TextField.types';

const meta: Meta<TextFieldProps> = {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(TextFieldSize),
    },
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
  render: (args) => <TextField {...args} />,
};

export const Size: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <TextField value="" placeholder="Small (32px)" size={TextFieldSize.Sm} />
      <TextField
        value=""
        placeholder="Medium (40px, default)"
        size={TextFieldSize.Md}
      />
      <TextField value="" placeholder="Large (48px)" size={TextFieldSize.Lg} />
    </View>
  ),
};

export const IsError: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <TextField value="" placeholder="Default" />
      <TextField value="" placeholder="Error state" isError />
    </View>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <TextField value="Editable" placeholder="Enabled" />
      <TextField value="Not editable" placeholder="Disabled" isDisabled />
    </View>
  ),
};

export const StartAccessory: Story = {
  render: () => (
    <TextField
      value=""
      placeholder="With start accessory"
      startAccessory={<Text>🔍</Text>}
    />
  ),
};

export const EndAccessory: Story = {
  render: () => (
    <TextField
      value=""
      placeholder="With end accessory"
      endAccessory={<Text>✕</Text>}
    />
  ),
};
