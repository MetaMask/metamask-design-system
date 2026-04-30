import { TextVariant } from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useEffect, useState } from 'react';

import { Input } from './Input';
import type { InputProps } from './Input.types';
import README from './README.mdx';

function ControlledInput(props: InputProps) {
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return (
    <Input
      {...props}
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
        props.onChange?.(event);
      }}
    />
  );
}

const meta: Meta<InputProps> = {
  title: 'React Components/Input',
  component: Input,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    textVariant: {
      control: 'select',
      options: Object.values(TextVariant),
      description: 'Typography variant for the input text',
    },
    isDisabled: {
      control: 'boolean',
      description: 'When true, disables the input',
    },
    isReadOnly: {
      control: 'boolean',
      description: 'When true, makes the input read-only',
    },
    isStateStylesDisabled: {
      control: 'boolean',
      description: 'When true, disables the input state styles',
    },
    placeholder: {
      control: 'text',
    },
    value: {
      control: 'text',
      description: 'Controlled value for the input',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes merged with the component defaults',
    },
  },
};

export default meta;

type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {
    value: '',
    placeholder: 'Sample placeholder',
  },
  render: (args) => <ControlledInput {...args} />,
};

export const Variant: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="BodyMd (default)"
        textVariant={TextVariant.BodyMd}
        value="Sample text"
      />
      <Input
        placeholder="BodySm"
        textVariant={TextVariant.BodySm}
        value="Sample text"
      />
      <Input
        placeholder="HeadingSm"
        textVariant={TextVariant.HeadingSm}
        value="Sample text"
      />
    </div>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input placeholder="Enabled" value="Editable" />
      <Input placeholder="Disabled" value="Not editable" isDisabled />
    </div>
  ),
};

export const IsReadOnly: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input placeholder="Editable" value="" />
      <Input placeholder="Readonly" value="Read-only value" isReadOnly />
    </div>
  ),
};

export const IsStateStylesDisabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
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
    </div>
  ),
};
