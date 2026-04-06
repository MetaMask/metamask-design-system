import type { Meta, StoryObj } from '@storybook/react-native';
import { useEffect, useState } from 'react';
import { View } from 'react-native';

import { TextVariant } from '../../types';

import { Textarea } from './Textarea';
import type { TextareaProps } from './Textarea.types';

function ControlledTextarea(props: TextareaProps) {
  const [value, setValue] = useState(props.value ?? '');
  useEffect(() => {
    setValue(props.value ?? '');
  }, [props.value]);

  return <Textarea {...props} value={value} onChangeText={setValue} />;
}

const meta: Meta<TextareaProps> = {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes: {
    textVariant: {
      control: 'select',
      options: Object.values(TextVariant),
    },
    isDisabled: {
      control: 'boolean',
    },
    isReadOnly: {
      control: 'boolean',
    },
    isError: {
      control: 'boolean',
    },
    isStateStylesDisabled: {
      control: 'boolean',
    },
    numberOfLines: {
      control: 'number',
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

type Story = StoryObj<TextareaProps>;

export const Default: Story = {
  args: {
    value: '',
    placeholder: 'Sample Placeholder',
  },
  render: (args) => <ControlledTextarea {...args} />,
};

export const Variant: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ControlledTextarea
        placeholder="BodyMd (default)"
        textVariant={TextVariant.BodyMd}
        value="Sample text"
      />
      <ControlledTextarea
        placeholder="BodySm"
        textVariant={TextVariant.BodySm}
        value="Sample text"
      />
      <ControlledTextarea
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
      <ControlledTextarea placeholder="Enabled" value="Editable" />
      <Textarea placeholder="Disabled" value="Not editable" isDisabled />
    </View>
  ),
};

export const IsReadOnly: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ControlledTextarea placeholder="Editable" value="" />
      <Textarea placeholder="Read-only" value="Read-only value" isReadOnly />
    </View>
  ),
};

export const IsError: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ControlledTextarea placeholder="Default state" value="Normal textarea" />
      <Textarea
        placeholder="Error state"
        value="This field has an error"
        isError
      />
    </View>
  ),
};

export const NumberOfLines: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ControlledTextarea
        placeholder="4 lines (default)"
        numberOfLines={4}
        value="Default 4-line textarea"
      />
      <ControlledTextarea
        placeholder="8 lines"
        numberOfLines={8}
        value="Taller 8-line textarea for longer content"
      />
    </View>
  ),
};

export const IsStateStylesDisabled: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Textarea
        placeholder="With state styles (default)"
        value="Disabled with opacity"
        isDisabled
      />
      <Textarea
        placeholder="State styles disabled"
        value="Disabled, full opacity"
        isDisabled
        isStateStylesDisabled
      />
    </View>
  ),
};
