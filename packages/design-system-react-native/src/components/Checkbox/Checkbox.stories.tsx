import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { IconName } from '../Icon';

import { Checkbox } from './Checkbox';
import type { CheckboxProps } from './Checkbox.types';

const meta: Meta<CheckboxProps> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    isSelected: {
      control: 'boolean',
    },
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
    isSelected: false,
    isDisabled: false,
    isInvalid: false,
    label: 'Checkbox label',
  },
};

export const isSelected: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Checkbox isSelected={false} />
      <Checkbox isSelected />
    </View>
  ),
};

export const defaultIsSelected: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Checkbox />
      <Checkbox defaultIsSelected />
    </View>
  ),
};

export const isDisabled: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Checkbox />
      <Checkbox isDisabled />
    </View>
  ),
};

export const isInvalid: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Checkbox />
      <Checkbox isInvalid />
    </View>
  ),
};

export const label: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Checkbox />
      <Checkbox label="Checkbox with label" />
    </View>
  ),
};
