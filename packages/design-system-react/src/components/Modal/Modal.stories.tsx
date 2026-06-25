import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';

import { Box, BoxFlexDirection } from '../Box';
import { Button, ButtonVariant } from '../Button';
import { ModalBody } from '../ModalBody';
import { ModalContent } from '../ModalContent';
import { ModalOverlay } from '../ModalOverlay';
import { Text } from '../Text';

import { Modal } from './Modal';
import type { ModalProps } from './Modal.types';
import README from './README.mdx';

const meta: Meta<ModalProps> = {
  title: 'React Components/Modal',
  component: Modal,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    isOpen: { control: 'boolean' },
    isClosedOnOutsideClick: { control: 'boolean' },
    isClosedOnEscapeKey: { control: 'boolean' },
    autoFocus: { control: 'boolean' },
    restoreFocus: { control: 'boolean' },
    onClose: { action: 'onClose' },
  },
};

export default meta;

type Story = StoryObj<ModalProps>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen ?? false);
    return (
      <>
        <Button variant={ButtonVariant.Primary} onClick={() => setIsOpen(true)}>
          Open modal
        </Button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              <Box flexDirection={BoxFlexDirection.Column} gap={4} padding={4}>
                <Text>
                  Modal content rendered into document.body via a portal.
                </Text>
                <Button
                  variant={ButtonVariant.Secondary}
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </Button>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  },
};
