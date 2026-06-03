import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useEffect, useState } from 'react';

import { Box, BoxFlexDirection } from '../Box';
import { TextFieldSize, TextFieldType } from '../TextField';

import { FormTextField } from './FormTextField';
import type { FormTextFieldProps } from './FormTextField.types';
import README from './README.mdx';

const meta: Meta<FormTextFieldProps> = {
  title: 'React Components/FormTextField',
  component: FormTextField,
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
    label: { control: 'text' },
    helpText: { control: 'text' },
    id: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<FormTextFieldProps>;

export const Default: Story = {
  args: {
    id: 'email',
    label: 'Email',
    placeholder: 'you@example.com',
    helpText: 'We never share your email.',
    value: '',
  },
  render: (args: FormTextFieldProps) => {
    const [value, setValue] = useState(args.value);

    useEffect(() => {
      setValue(args.value);
    }, [args.value]);

    return (
      <FormTextField
        {...args}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          args.onChange?.(event);
        }}
      />
    );
  },
};

export const Label: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <FormTextField
        id="form-text-field-label"
        label="Recipient address"
        placeholder="0x…"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  },
};

export const HelpText: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <FormTextField
        helpText="We never share your email."
        id="form-text-field-help"
        label="Email"
        placeholder="you@example.com"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  },
};

export const IsError: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <FormTextField
        helpText="This field is required"
        id="form-text-field-error"
        isError
        label="Amount"
        placeholder="0.00"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  },
};

export const IsDisabled: Story = {
  render: () => {
    const [value, setValue] = useState('Not editable');

    return (
      <FormTextField
        id="form-text-field-disabled"
        isDisabled
        label="Amount"
        placeholder="0.00"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  },
};

export const IsReadOnly: Story = {
  render: () => (
    <FormTextField
      id="form-text-field-readonly"
      isReadOnly
      label="Amount"
      value="Read-only value"
    />
  ),
};

export const Size: Story = {
  render: () => {
    const [smValue, setSmValue] = useState('');
    const [mdValue, setMdValue] = useState('');
    const [lgValue, setLgValue] = useState('');

    return (
      <Box flexDirection={BoxFlexDirection.Column} gap={4}>
        <FormTextField
          id="form-text-field-sm"
          label="Sm"
          placeholder="Sm"
          size={TextFieldSize.Sm}
          value={smValue}
          onChange={(event) => setSmValue(event.target.value)}
        />
        <FormTextField
          id="form-text-field-md"
          label="Md"
          placeholder="Md"
          size={TextFieldSize.Md}
          value={mdValue}
          onChange={(event) => setMdValue(event.target.value)}
        />
        <FormTextField
          id="form-text-field-lg"
          label="Lg"
          placeholder="Lg"
          size={TextFieldSize.Lg}
          value={lgValue}
          onChange={(event) => setLgValue(event.target.value)}
        />
      </Box>
    );
  },
};
