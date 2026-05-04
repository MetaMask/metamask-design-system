import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useRef, useState } from 'react';

import { Box, BoxBackgroundColor, BoxBorderColor } from '../Box';
import { Button, ButtonVariant } from '../Button';
import { Modal } from '../Modal';
import { Text } from '../Text';

import { ModalContent } from './ModalContent';
import { MODAL_CONTENT_IGNORE_OUTSIDE_CLICK_ATTR } from './ModalContent.constants';
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

const ModalShellExample = ({
  size,
  isClosedOnEscapeKey,
  isClosedOnOutsideClick,
}: {
  size?: ModalContentSize;
  isClosedOnEscapeKey?: boolean;
  isClosedOnOutsideClick?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button variant={ButtonVariant.Primary} onClick={() => setIsOpen(true)}>
        Open modal
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        isClosedOnEscapeKey={isClosedOnEscapeKey}
        isClosedOnOutsideClick={isClosedOnOutsideClick}
      >
        <Box
          aria-hidden="true"
          backgroundColor={BoxBackgroundColor.OverlayDefault}
          className="fixed inset-0 z-[1049]"
        />
        <ModalContent size={size}>
          <Box flexDirection="flex-col" gap={4} padding={4}>
            <Text>Dialog content. Press Escape or click outside to close.</Text>
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
};

export const Default: Story = {
  render: () => <ModalShellExample />,
};

export const Size: Story = {
  render: () => (
    <Box flexDirection="flex-col" gap={4}>
      <ModalShellExample size={ModalContentSize.Sm} />
      <ModalShellExample size={ModalContentSize.Md} />
      <ModalShellExample size={ModalContentSize.Lg} />
    </Box>
  ),
};

export const KeyboardAndOutsideClickConfig: Story = {
  render: () => (
    <Box flexDirection="flex-col" gap={4}>
      <ModalShellExample isClosedOnEscapeKey={false} />
      <ModalShellExample isClosedOnOutsideClick={false} />
    </Box>
  ),
};

export const IgnoreOutsideClickAttr: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const triggerRef = useRef<HTMLButtonElement>(null);
    return (
      <>
        <Button
          ref={triggerRef}
          variant={ButtonVariant.Primary}
          onClick={() => setIsOpen(true)}
        >
          Open modal with sibling popover
        </Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Box
            aria-hidden="true"
            backgroundColor={BoxBackgroundColor.OverlayDefault}
            className="fixed inset-0 z-[1049]"
          />
          <ModalContent>
            <Box flexDirection="flex-col" gap={4} padding={4}>
              <Text>
                The "popover" below is rendered as a sibling to the dialog and
                opts out of the outside-click handler via{' '}
                <code>{MODAL_CONTENT_IGNORE_OUTSIDE_CLICK_ATTR}</code>. Clicking
                inside it should not close the modal.
              </Text>
              <Button
                variant={ButtonVariant.Secondary}
                onClick={() => setIsOpen(false)}
              >
                Close
              </Button>
            </Box>
          </ModalContent>
          {/* Sibling-portal "popover" — opts out of close-on-outside-click. */}
          <Box
            backgroundColor={BoxBackgroundColor.BackgroundDefault}
            borderColor={BoxBorderColor.BorderDefault}
            borderWidth={1}
            padding={4}
            className="fixed bottom-4 right-4 z-[1051] w-[200px] rounded shadow-md"
            {...{ [MODAL_CONTENT_IGNORE_OUTSIDE_CLICK_ATTR]: '' }}
          >
            <Text>Popover-like sibling</Text>
            <Button variant={ButtonVariant.Secondary} onClick={() => undefined}>
              Inert button
            </Button>
          </Box>
        </Modal>
      </>
    );
  },
};
