import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';

import { Box, BoxFlexDirection } from '../Box';
import { Button, ButtonVariant } from '../Button';
import { Modal } from '../Modal';
import { ModalOverlay } from '../ModalOverlay';
import { Text } from '../Text';

import { ModalContent } from './ModalContent';
import { ModalContentSize } from './ModalContent.types';
import type { ModalContentProps } from './ModalContent.types';
import README from './README.mdx';

const meta: Meta<ModalContentProps> = {
  title: 'React Components/ModalContent',
  component: ModalContent,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    size: {
      control: 'radio',
      options: Object.values(ModalContentSize),
    },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<ModalContentProps>;

export const Default: Story = {
  args: {
    size: ModalContentSize.Sm,
    className: '',
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button variant={ButtonVariant.Primary} onClick={() => setIsOpen(true)}>
          Open modal
        </Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <ModalOverlay />
          <ModalContent size={args.size} className={args.className}>
            <Box flexDirection={BoxFlexDirection.Column} gap={4} padding={4}>
              <Text>
                Dialog content. Press Escape or click outside to close.
              </Text>
              <Button
                variant={ButtonVariant.Secondary}
                onClick={() => setIsOpen(false)}
              >
                Close
              </Button>
            </Box>
          </ModalContent>
        </Modal>
      </>
    );
  },
};
