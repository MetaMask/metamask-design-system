import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';

import { Button, ButtonVariant } from '../Button';

import { ModalOverlay } from './ModalOverlay';
import type { ModalOverlayProps } from './ModalOverlay.types';
import README from './README.mdx';

const meta: Meta<ModalOverlayProps> = {
  title: 'React Components/ModalOverlay',
  component: ModalOverlay,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description:
        'Optional prop for additional CSS classes to be applied to the ModalOverlay component',
    },
    onClick: {
      action: 'onClick',
      description:
        'Optional click handler. Useful when used directly without Modal context to dismiss content rendered above the overlay.',
    },
  },
};

export default meta;

type Story = StoryObj<ModalOverlayProps>;

export const Default: Story = {
  args: {},
  render: (args) => <ModalOverlay {...args} />,
};

export const OnClick: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button variant={ButtonVariant.Primary} onClick={() => setIsOpen(true)}>
          Show modal overlay
        </Button>
        {isOpen && <ModalOverlay {...args} onClick={() => setIsOpen(false)} />}
      </>
    );
  },
};
