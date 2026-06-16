import { TextVariant } from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Text } from '../Text';

import README from './README.mdx';
import { TextButton } from './TextButton';
import type { TextButtonProps } from './TextButton.types';

const meta: Meta<TextButtonProps> = {
  title: 'React Components/TextButton',
  component: TextButton,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    children: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: Object.values(TextVariant),
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<TextButtonProps>;

export const Default: Story = {
  args: {
    children: 'Text Button',
  },
};

export const Variant: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-2">
      <TextButton variant={TextVariant.BodyXs}>BodyXs</TextButton>
      <TextButton variant={TextVariant.BodySm}>BodySm</TextButton>
      <TextButton variant={TextVariant.BodyMd}>BodyMd</TextButton>
      <TextButton variant={TextVariant.BodyLg}>BodyLg</TextButton>
    </div>
  ),
};

export const InlineWithText: Story = {
  render: () => (
    <Text>
      Pre TextButton text <TextButton>Text Button</TextButton> Post TextButton
      text
    </Text>
  ),
};

export const AsChildLink: Story = {
  render: () => (
    <Text>
      Visit{' '}
      <TextButton asChild>
        <a href="https://metamask.io">MetaMask</a>
      </TextButton>{' '}
      to learn more.
    </Text>
  ),
};
