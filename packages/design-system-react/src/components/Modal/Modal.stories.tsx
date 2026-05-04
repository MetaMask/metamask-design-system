import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';

import { Box, BoxBorderColor, BoxFlexDirection } from '../Box';
import { Button, ButtonVariant } from '../Button';
import { ModalBody } from '../ModalBody';
import { ModalContent } from '../ModalContent';
import { ModalOverlay } from '../ModalOverlay';
import { Text } from '../Text';

import { Modal } from './Modal';
import { useModalContext } from './Modal.context';
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

const ContextSummary = () => {
  const ctx = useModalContext();
  return (
    <Box
      flexDirection={BoxFlexDirection.Column}
      gap={2}
      padding={2}
      borderColor={BoxBorderColor.BorderMuted}
      borderWidth={1}
      className="rounded"
    >
      <Text>
        <strong>useModalContext()</strong> exposes the modal's behavior config
        to descendants:
      </Text>
      <Text>isClosedOnOutsideClick: {String(ctx.isClosedOnOutsideClick)}</Text>
      <Text>isClosedOnEscapeKey: {String(ctx.isClosedOnEscapeKey)}</Text>
      <Text>autoFocus: {String(ctx.autoFocus)}</Text>
      <Text>restoreFocus: {String(Boolean(ctx.restoreFocus))}</Text>
    </Box>
  );
};

export const UseModalContext: Story = {
  args: {
    isClosedOnOutsideClick: false,
    isClosedOnEscapeKey: false,
    autoFocus: true,
    restoreFocus: true,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
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
                  Sibling components consume the configured behavior via{' '}
                  <code>useModalContext()</code>.
                </Text>
                <ContextSummary />
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
