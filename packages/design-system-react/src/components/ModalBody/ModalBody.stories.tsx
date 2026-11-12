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
    tabIndex: {
      control: 'number',
      description:
        'Tab order of the body. Unset unless passed. Use 0 when a scrollable body has no focusable content.',
    },
  },
  args: {
    children: 'Modal body',
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

export const Children: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla.',
    // Static text in a short frame. Opt in so the scrollable region stays
    // keyboard accessible (axe scrollable-region-focusable).
    tabIndex: 0,
  },
  render: (args) => (
    <div className="h-[100px] w-[300px]">
      <ModalBody {...args}>
        <Text>{args.children}</Text>
      </ModalBody>
    </div>
  ),
};

export const Padding: Story = {
  render: () => (
    <div className="h-[200px] w-[300px]">
      <ModalBody tabIndex={0} className="flex flex-col gap-4 px-0">
        <Text className="px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
          elit libero, a pharetra augue. Nullam id
        </Text>
        <Text className="bg-primary-muted px-4">
          Element touches edge of ModalBody
        </Text>
        <Text className="px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
          elit libero, a pharetra augue. Nullam id
        </Text>
      </ModalBody>
    </div>
  ),
};
