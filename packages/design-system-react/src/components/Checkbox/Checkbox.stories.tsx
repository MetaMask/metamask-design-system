import type { Meta, StoryObj } from '@storybook/react';
import React, { useRef, useState } from 'react';

import { Button, ButtonVariant } from '../Button';

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
const CheckboxStory: React.FC<Omit<CheckboxProps, 'onChange'>> = (args) => {
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

export const IsSelected: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <CheckboxStory isSelected={false} label="Unchecked" />
      <CheckboxStory isSelected label="Checked" />
    </div>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <CheckboxStory isSelected={false} label="Enabled" />
      <CheckboxStory isSelected={false} isDisabled label="Disabled" />
    </div>
  ),
};

export const IsInvalid: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <CheckboxStory isSelected={false} label="Normal" />
      <CheckboxStory isSelected={false} isInvalid label="Invalid" />
    </div>
  ),
};

export const Label: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <CheckboxStory isSelected={false} />
      <CheckboxStory isSelected={false} label="Checkbox with label" />
    </div>
  ),
};

export const Ref: Story = {
  render: () => {
    const [isSelected, setIsSelected] = useState(false);
    const checkboxRef = useRef<{ toggle: () => void }>(null);

    return (
      <div className="inline-flex flex-col gap-4">
        <Checkbox
          ref={checkboxRef}
          isSelected={isSelected}
          onChange={() => setIsSelected(!isSelected)}
          label="Toggle me via ref"
        />
        <Button
          variant={ButtonVariant.Primary}
          onClick={() => checkboxRef.current?.toggle()}
        >
          Toggle checkbox
        </Button>
      </div>
    );
  },
};
