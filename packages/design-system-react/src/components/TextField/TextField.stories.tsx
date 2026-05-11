import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useEffect, useState } from 'react';

import { Text } from '../Text';
import README from './README.mdx';
import { TextField } from './TextField';
import { TextFieldSize, TextFieldType } from './TextField.types';
import type { TextFieldProps } from './TextField.types';

function ControlledTextField(props: TextFieldProps) {
  const [value, setValue] = useState(props.value ?? '');

  useEffect(() => {
    setValue(props.value ?? '');
  }, [props.value]);

  return (
    <TextField
      {...props}
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
        props.onChange?.(event);
      }}
    />
  );
}

const meta: Meta<TextFieldProps> = {
  title: 'React Components/TextField',
  component: TextField,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(TextFieldSize),
    },
    type: {
      control: 'select',
      options: Object.values(TextFieldType),
    },
    isDisabled: { control: 'boolean' },
    isReadOnly: { control: 'boolean' },
    isError: { control: 'boolean' },
    truncate: { control: 'boolean' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<TextFieldProps>;

export const Default: Story = {
  args: {
    placeholder: 'Sample placeholder',
    value: '',
  },
  render: (args) => <ControlledTextField {...args} />,
};

export const Size: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ControlledTextField placeholder="Sm" size={TextFieldSize.Sm} value="" />
      <ControlledTextField placeholder="Md" size={TextFieldSize.Md} value="" />
      <ControlledTextField placeholder="Lg" size={TextFieldSize.Lg} value="" />
    </div>
  ),
};

export const Type: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ControlledTextField
        placeholder="Text"
        type={TextFieldType.Text}
        value=""
      />
      <ControlledTextField
        placeholder="Number"
        type={TextFieldType.Number}
        value=""
      />
      <ControlledTextField
        placeholder="Password"
        type={TextFieldType.Password}
        value=""
      />
      <ControlledTextField
        placeholder="Search"
        type={TextFieldType.Search}
        value=""
      />
    </div>
  ),
};

export const StartAccessory: Story = {
  render: () => (
    <ControlledTextField
      placeholder="0.00"
      startAccessory={<Text>$</Text>}
      value=""
    />
  ),
};

export const EndAccessory: Story = {
  render: () => (
    <ControlledTextField
      placeholder="Amount"
      endAccessory={<Text>USD</Text>}
      value=""
    />
  ),
};

export const IsError: Story = {
  render: () => (
    <ControlledTextField isError placeholder="Error" value="Invalid value" />
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <ControlledTextField
      isDisabled
      placeholder="Disabled"
      value="Not editable"
    />
  ),
};

export const IsReadOnly: Story = {
  render: () => (
    <TextField isReadOnly placeholder="Read only" value="Read-only value" />
  ),
};

export const Truncate: Story = {
  render: () => (
    <div className="flex w-48 flex-col gap-4">
      <TextField
        inputProps={{ 'aria-label': 'Truncated value' }}
        truncate
        value="A very long value that should be truncated"
      />
      <TextField
        inputProps={{ 'aria-label': 'Non-truncated value' }}
        truncate={false}
        value="A very long value that should not be truncated"
      />
    </div>
  ),
};
