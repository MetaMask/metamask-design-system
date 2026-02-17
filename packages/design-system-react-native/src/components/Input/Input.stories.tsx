import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { TextVariant } from '../../types';

import { Input } from './Input';
import { SAMPLE_INPUT_PROPS } from './Input.constants';
import type { InputProps } from './Input.types';

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
    twClassName: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {
    ...SAMPLE_INPUT_PROPS,
  },
  render: (args) => <Input {...args} />,
};

export const Variant: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Input
        placeholder="BodyMd (default)"
        textVariant={TextVariant.BodyMd}
        defaultValue="Sample text"
      />
      <Input
        placeholder="BodySm"
        textVariant={TextVariant.BodySm}
        defaultValue="Sample text"
      />
      <Input
        placeholder="HeadingSm"
        textVariant={TextVariant.HeadingSm}
        defaultValue="Sample text"
      />
    </View>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Input placeholder="Enabled" defaultValue="Editable" />
      <Input placeholder="Disabled" defaultValue="Not editable" isDisabled />
    </View>
  ),
};

export const IsReadonly: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Input placeholder="Editable" defaultValue="" />
      <Input placeholder="Readonly" defaultValue="Read-only value" isReadonly />
    </View>
  ),
};

export const IsStateStylesDisabled: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Input
        placeholder="With state styles (default)"
        defaultValue="Disabled with opacity"
        isDisabled
      />
      <Input
        placeholder="State styles disabled"
        defaultValue="Disabled, full opacity"
        isDisabled
        isStateStylesDisabled
      />
    </View>
  ),
};
