import type { Meta, StoryObj } from '@storybook/react-native';
import { useEffect, useState } from 'react';
import { View } from 'react-native';

import { TextArea } from './TextArea';
import type { TextAreaProps } from './TextArea.types';

function ControlledTextArea(props: TextAreaProps) {
  const [value, setValue] = useState(props.value ?? '');
  useEffect(() => {
    setValue(props.value ?? '');
  }, [props.value]);

  return <TextArea {...props} value={value} onChangeText={setValue} />;
}

const meta: Meta<TextAreaProps> = {
  title: 'Components/TextArea',
  component: TextArea,
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

type Story = StoryObj<TextAreaProps>;

export const Default: Story = {
  args: {
    value: '',
    placeholder: 'Enter multiple lines...',
  },
  render: (args) => <ControlledTextArea {...args} />,
};

export const IsError: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ControlledTextArea value="" placeholder="Default" />
      <ControlledTextArea value="" placeholder="Error state" isError />
    </View>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ControlledTextArea value="Editable" placeholder="Enabled" />
      <TextArea value="Not editable" placeholder="Disabled" isDisabled />
    </View>
  ),
};
