import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { Checkbox } from './Checkbox';
import type { CheckboxProps } from './Checkbox.types';

const meta: Meta<CheckboxProps> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    isDisabled: {
      control: 'boolean',
    },
    isInvalid: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    twClassName: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<CheckboxProps>;

export const Default: Story = {
  args: {
    isDisabled: false,
    isInvalid: false,
    label: 'Checkbox label',
  },
};

export const IsSelected: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Checkbox isSelected={false} />
      <Checkbox isSelected label="isSelected" />
    </View>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Checkbox />
      <Checkbox isDisabled label="isDisabled" />
    </View>
  ),
};

export const IsInvalid: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Checkbox />
      <Checkbox isInvalid label="isInvalid" />
    </View>
  ),
};

export const Label: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Checkbox />
      <Checkbox label="Checkbox with label" />
    </View>
  ),
};
