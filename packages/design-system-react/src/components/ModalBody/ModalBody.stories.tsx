import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Text } from '../Text';

import { ModalBody } from './ModalBody';
import type { ModalBodyProps } from './ModalBody.types';
import README from './README.mdx';

const meta: Meta<ModalBodyProps> = {
  title: 'React Components/ModalBody',
  component: ModalBody,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description:
        'Optional prop for additional CSS classes to be applied to the ModalBody component',
    },
    children: {
      control: 'text',
      description: 'The content of the ModalBody',
    },
  },
  args: {
    children: 'Modal Body',
  },
  render: (args) => (
    <ModalBody {...args}>
      <Text>{args.children}</Text>
    </ModalBody>
  ),
};

export default meta;

type Story = StoryObj<ModalBodyProps>;

export const Default: Story = {};
