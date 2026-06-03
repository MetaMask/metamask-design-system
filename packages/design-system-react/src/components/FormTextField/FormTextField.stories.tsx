import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useEffect, useState } from 'react';

import { TextFieldSize, TextFieldType } from '../TextField';

import { FormTextField } from './FormTextField';
import type { FormTextFieldProps } from './FormTextField.types';
import README from './README.mdx';

function ControlledFormTextField(props: FormTextFieldProps) {
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return (
    <FormTextField
      {...props}
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
        props.onChange?.(event);
      }}
    />
  );
}

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
    id: 'form-text-field-default',
    label: 'Amount',
    placeholder: 'Enter amount',
    value: '',
  },
  render: (args) => {
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
  render: () => (
    <ControlledFormTextField
      id="form-text-field-label"
      label="Recipient address"
      placeholder="0x…"
      value=""
    />
  ),
};

export const HelpText: Story = {
  render: () => (
    <ControlledFormTextField
      helpText="We never share your email."
      id="form-text-field-help"
      label="Email"
      placeholder="you@example.com"
      value=""
    />
  ),
};

export const IsError: Story = {
  render: () => (
    <ControlledFormTextField
      helpText="This field is required"
      id="form-text-field-error"
      isError
      label="Amount"
      placeholder="0.00"
      value=""
    />
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <ControlledFormTextField
      id="form-text-field-disabled"
      isDisabled
      label="Amount"
      placeholder="0.00"
      value="Not editable"
    />
  ),
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
  render: () => (
    <div className="flex flex-col gap-4">
      <ControlledFormTextField
        id="form-text-field-sm"
        label="Sm"
        placeholder="Sm"
        size={TextFieldSize.Sm}
        value=""
      />
      <ControlledFormTextField
        id="form-text-field-md"
        label="Md"
        placeholder="Md"
        size={TextFieldSize.Md}
        value=""
      />
      <ControlledFormTextField
        id="form-text-field-lg"
        label="Lg"
        placeholder="Lg"
        size={TextFieldSize.Lg}
        value=""
      />
    </div>
  ),
};
