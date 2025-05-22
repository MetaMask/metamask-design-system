import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

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
const CheckboxStory: React.FC<CheckboxProps> = (args) => {
  const { ref: _ref, ...rest } = args;
  const [isSelected, setIsSelected] = useState(args.isSelected);
  return (
    <Checkbox
      {...rest}
      isSelected={isSelected}
      onChange={() => setIsSelected(!isSelected)}
    />
  );
};

export const Default: Story = {
  args: {
    isDisabled: false,
    isInvalid: false,
    label: 'Checkbox label',
  },
  render: (args) => <CheckboxStory {...args} />,
};

export const isSelected: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <CheckboxStory isSelected={false} label="Unchecked" />
      <CheckboxStory isSelected label="Checked" />
    </div>
  ),
};

export const isDisabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <CheckboxStory isSelected={false} label="Enabled" />
      <CheckboxStory isSelected={false} isDisabled label="Disabled" />
    </div>
  ),
};

export const isInvalid: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <CheckboxStory isSelected={false} label="Normal" />
      <CheckboxStory isSelected={false} isInvalid label="Invalid" />
    </div>
  ),
};

export const label: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <CheckboxStory isSelected={false} />
      <CheckboxStory isSelected={false} label="Checkbox with label" />
    </div>
  ),
};
