import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { View } from 'react-native';

import { RadioButton } from './RadioButton';
import type { RadioButtonProps } from './RadioButton.types';

const meta: Meta<RadioButtonProps> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: 'text' },
    isChecked: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isReadOnly: { control: 'boolean' },
    isDanger: { control: 'boolean' },
    twClassName: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<RadioButtonProps>;

const RadioButtonStory: React.FC<RadioButtonProps> = (args) => {
  const [isChecked, setIsChecked] = useState(args.isChecked ?? false);
  return (
    <RadioButton
      {...args}
      isChecked={isChecked}
      onPress={() => setIsChecked(!isChecked)}
    />
  );
};

export const Default: Story = {
  render: (args) => <RadioButtonStory {...args} />,
  args: {
    label: 'RadioButton',
  },
};

export const IsChecked: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <RadioButtonStory label="Unchecked" />
      <RadioButtonStory isChecked label="Checked" />
    </View>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <RadioButtonStory label="Enabled" />
      <RadioButtonStory isDisabled label="Disabled" />
    </View>
  ),
};

export const IsReadOnly: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <RadioButtonStory label="Editable" />
      <RadioButtonStory isReadOnly isChecked label="Read Only" />
    </View>
  ),
};

export const IsDanger: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <RadioButtonStory label="Normal" />
      <RadioButtonStory isDanger isChecked label="Danger" />
    </View>
  ),
};

export const Label: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <RadioButtonStory isChecked />
      <RadioButtonStory isChecked label="RadioButton with label" />
    </View>
  ),
};
