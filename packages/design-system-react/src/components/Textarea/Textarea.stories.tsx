import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { TextVariant } from '../../types';

import README from './README.mdx';
import { Textarea } from './Textarea';
import { TextareaResize } from './Textarea.constants';
import type { TextareaProps } from './Textarea.types';

const meta: Meta<TextareaProps> = {
  title: 'React Components/Textarea',
  component: Textarea,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    textVariant: {
      control: 'select',
      options: Object.values(TextVariant),
      description: 'Typography variant for the textarea text',
    },
    resize: {
      control: 'select',
      options: Object.values(TextareaResize),
      description: 'Controls the resize behavior of the textarea',
    },
    isDisabled: {
      control: 'boolean',
      description: 'When true, disables the textarea',
    },
    isReadOnly: {
      control: 'boolean',
      description: 'When true, makes the textarea read-only',
    },
    isError: {
      control: 'boolean',
      description: 'When true, applies error styling to the textarea',
    },
    placeholder: {
      control: 'text',
    },
    rows: {
      control: 'number',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes merged with the component defaults',
    },
  },
};

export default meta;

type Story = StoryObj<TextareaProps>;

export const Default: Story = {
  args: {
    placeholder: 'Sample placeholder',
  },
  render: (args) => <Textarea {...args} />,
};

export const Variant: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Textarea
        placeholder="BodyMd (default)"
        textVariant={TextVariant.BodyMd}
        defaultValue="Sample text"
      />
      <Textarea
        placeholder="BodySm"
        textVariant={TextVariant.BodySm}
        defaultValue="Sample text"
      />
      <Textarea
        placeholder="HeadingSm"
        textVariant={TextVariant.HeadingSm}
        defaultValue="Sample text"
      />
    </div>
  ),
};

export const Resize: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Textarea
        placeholder="Vertical resize (default)"
        resize={TextareaResize.Vertical}
        defaultValue="Resize vertical only"
      />
      <Textarea
        placeholder="Horizontal resize"
        resize={TextareaResize.Horizontal}
        defaultValue="Resize horizontal only"
      />
      <Textarea
        placeholder="Both directions"
        resize={TextareaResize.Both}
        defaultValue="Resize in both directions"
      />
      <Textarea
        placeholder="No resize"
        resize={TextareaResize.None}
        defaultValue="Cannot be resized"
      />
    </div>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Textarea placeholder="Enabled" defaultValue="Editable" />
      <Textarea placeholder="Disabled" defaultValue="Not editable" isDisabled />
    </div>
  ),
};

export const IsReadOnly: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Textarea placeholder="Editable" defaultValue="" />
      <Textarea
        placeholder="Read-only"
        defaultValue="Read-only value"
        isReadOnly
      />
    </div>
  ),
};

export const IsError: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Textarea placeholder="Default state" defaultValue="Normal textarea" />
      <Textarea
        placeholder="Error state"
        defaultValue="This field has an error"
        isError
      />
    </div>
  ),
};

export const Rows: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Textarea
        placeholder="3 rows (default)"
        rows={3}
        defaultValue="3-row textarea"
      />
      <Textarea
        placeholder="6 rows"
        rows={6}
        defaultValue="6-row textarea for longer content"
      />
    </div>
  ),
};
