import type { Meta, StoryObj } from '@storybook/react-native';
import { useEffect, useState } from 'react';
import { View } from 'react-native';

import { TextVariant } from '../../types';

import { Input } from './Input';
import type { InputProps } from './Input.types';

function ControlledInput(props: InputProps) {
  const [value, setValue] = useState(props.value ?? '');
  useEffect(() => {
    setValue(props.value ?? '');
  }, [props.value]);

  return <Input {...props} value={value} onChangeText={setValue} />;
}

const meta: Meta<InputProps> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    textVariant: {
      control: 'select',
      options: Object.values(TextVariant),
    },
    isDisabled: {
      control: 'boolean',
    },
    isReadonly: {
      control: 'boolean',
    },
    isStateStylesDisabled: {
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

type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {
    value: '',
    placeholder: 'Sample Placeholder',
  },
  render: (args) => <ControlledInput {...args} />,
};

export const Variant: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ControlledInput
        placeholder="BodyMd (default)"
        textVariant={TextVariant.BodyMd}
        value="Sample text"
      />
      <ControlledInput
        placeholder="BodySm"
        textVariant={TextVariant.BodySm}
        value="Sample text"
      />
      <ControlledInput
        placeholder="HeadingSm"
        textVariant={TextVariant.HeadingSm}
        value="Sample text"
      />
    </View>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ControlledInput placeholder="Enabled" value="Editable" />
      <Input placeholder="Disabled" value="Not editable" isDisabled />
    </View>
  ),
};

export const IsReadonly: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ControlledInput placeholder="Editable" value="" />
      <Input placeholder="Readonly" value="Read-only value" isReadonly />
    </View>
  ),
};

export const IsStateStylesDisabled: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Input
        placeholder="With state styles (default)"
        value="Disabled with opacity"
        isDisabled
      />
      <Input
        placeholder="State styles disabled"
        value="Disabled, full opacity"
        isDisabled
        isStateStylesDisabled
      />
    </View>
  ),
};
