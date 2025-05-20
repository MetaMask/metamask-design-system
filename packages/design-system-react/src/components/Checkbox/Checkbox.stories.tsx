import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Checkbox } from './Checkbox';
import type { CheckboxProps } from './Checkbox.types';
import README from './README.mdx';

const meta: Meta<CheckboxProps> = {
  title: 'React Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    isSelected: {
      control: 'boolean',
      description: 'Optional prop that when true, shows a checked checkbox',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Optional prop that when true, disables the checkbox',
    },
    isInvalid: {
      control: 'boolean',
      description: 'Optional prop that when true, shows the invalid state',
    },
    label: {
      control: 'text',
      description:
        'Optional label prop that renders text or a React node as a label beside the checkbox.',
    },
    className: {
      control: 'text',
      description:
        'Optional prop for additional CSS classes to be applied to the Checkbox component',
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
    <div className="flex flex-col gap-4">
      <Checkbox isSelected={false} label="Unchecked" />
      <Checkbox isSelected label="Checked" />
    </div>
  ),
};

export const defaultIsSelected: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox label="Default unchecked" />
      <Checkbox defaultIsSelected label="Default checked" />
    </div>
  ),
};

export const isDisabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox label="Enabled" />
      <Checkbox isDisabled label="Disabled" />
    </div>
  ),
};

export const isInvalid: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox label="Normal" />
      <Checkbox isInvalid label="Invalid" />
    </div>
  ),
};

export const label: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox />
      <Checkbox label="Checkbox with label" />
    </div>
  ),
};
