import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useEffect, useState } from 'react';

import { Box, BoxFlexDirection } from '../Box';
import { Icon, IconName, IconSize } from '../Icon';
import { Input } from '../Input';
import type { InputProps } from '../Input';
import { Text } from '../Text';

import { Label } from './Label';
import type { LabelProps } from './Label.types';
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

const meta: Meta<LabelProps> = {
  title: 'React Components/Label',
  component: Label,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    htmlFor: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<LabelProps>;

export const Default: Story = {
  args: {
    children: 'Email address',
  },
};

export const HtmlFor: Story = {
  render: () => (
    <Box flexDirection={BoxFlexDirection.Column} gap={2}>
      <Label htmlFor="email-input">Email address</Label>
      <ControlledInput
        id="email-input"
        value=""
        placeholder="you@example.com"
      />
    </Box>
  ),
};

export const WrappingInput: Story = {
  render: () => (
    <Label className="inline-flex w-full flex-col gap-2">
      <Text asChild>
        <span>Email address</span>
      </Text>
      <ControlledInput value="" placeholder="you@example.com" />
    </Label>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Label>
      Required field
      <Icon
        name={IconName.Info}
        size={IconSize.Sm}
        className="ml-1"
        aria-label="info"
      />
    </Label>
  ),
};
