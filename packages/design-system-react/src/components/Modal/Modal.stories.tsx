import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';

import { Box, BoxBackgroundColor, BoxBorderColor } from '../Box';
import { Button, ButtonVariant } from '../Button';
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

const ModalShell = ({ children }: { children: React.ReactNode }) => (
  // While `Modal` portals into `document.body`, real consumers render the
  // shell inside a `role="dialog"` container so the modal subtree carries
  // proper landmark semantics. This minimal shell stands in for that.
  <Box
    role="dialog"
    aria-modal="true"
    aria-label="Modal example"
    flexDirection="flex-col"
    gap={4}
    padding={4}
    backgroundColor={BoxBackgroundColor.BackgroundDefault}
    borderColor={BoxBorderColor.BorderDefault}
    borderWidth={1}
    className="fixed left-1/2 top-1/2 z-[1051] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md"
  >
    {children}
  </Box>
);

const Backdrop = ({ onClick }: { onClick?: () => void }) => (
  <Box
    aria-hidden="true"
    onClick={onClick}
    backgroundColor={BoxBackgroundColor.OverlayDefault}
    className="fixed inset-0 z-[1050]"
  />
);

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen ?? false);
    return (
      <>
        <Button variant={ButtonVariant.Primary} onClick={() => setIsOpen(true)}>
          Open modal
        </Button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Backdrop onClick={() => setIsOpen(false)} />
          <ModalShell>
            <Text>Modal content rendered into document.body via a portal.</Text>
            <Button
              variant={ButtonVariant.Secondary}
              onClick={() => setIsOpen(false)}
            >
              Close
            </Button>
          </ModalShell>
        </Modal>
      </>
    );
  },
};

const ContextSummary = () => {
  const ctx = useModalContext();
  return (
    <Box
      flexDirection="flex-col"
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
          <Backdrop />
          <ModalShell>
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
          </ModalShell>
        </Modal>
      </>
    );
  },
};
