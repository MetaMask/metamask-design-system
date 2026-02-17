import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { TextVariant } from '../../types';

import { Input } from './Input';
import type { InputProps } from './Input.types';
import { SAMPLE_INPUT_PROPS } from './Input.constants';
import README from './README.mdx';

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
    isReadonly: {
      control: 'boolean',
      description: 'When true, makes the input read-only',
    },
    placeholder: {
      control: 'text',
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
    ...SAMPLE_INPUT_PROPS,
  },
  render: (args) => <Input {...args} />,
};

export const Variant: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
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
    </div>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input placeholder="Enabled" defaultValue="Editable" />
      <Input placeholder="Disabled" defaultValue="Not editable" isDisabled />
    </div>
  ),
};

export const IsReadonly: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input placeholder="Editable" defaultValue="" />
      <Input placeholder="Readonly" defaultValue="Read-only value" isReadonly />
    </div>
  ),
};
