import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useRef, useState } from 'react';

import { Box, BoxBorderColor, BoxFlexDirection } from '../Box';
import { Button, ButtonVariant } from '../Button';
import { Input } from '../Input';
import { Text } from '../Text';

import { ModalFocus } from './ModalFocus';
import type { ModalFocusProps } from './ModalFocus.types';
import README from './README.mdx';

const meta: Meta<ModalFocusProps> = {
  title: 'React Components/ModalFocus',
  component: ModalFocus,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    autoFocus: {
      control: 'boolean',
      description:
        'If true, the first focusable element within children will be auto-focused on mount.',
    },
    restoreFocus: {
      control: 'boolean',
      description:
        'If true, focus is restored to the element that triggered the ModalFocus once it unmounts. Ignored when finalFocusRef is provided.',
    },
  },
};

export default meta;

type Story = StoryObj<ModalFocusProps>;

const FocusTrappedBox = ({ children }: { children: React.ReactNode }) => (
  <Box
    borderWidth={1}
    borderColor={BoxBorderColor.BorderDefault}
    flexDirection={BoxFlexDirection.Column}
    padding={4}
    gap={4}
  >
    {children}
  </Box>
);

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button variant={ButtonVariant.Primary} onClick={() => setIsOpen(true)}>
          Open
        </Button>
        {isOpen && (
          <ModalFocus {...args}>
            <FocusTrappedBox>
              <Text>Modal focus children</Text>
              <Input aria-label="example input" />
              <Text>
                Tab around — focus is trapped inside the ModalFocus subtree.
              </Text>
              <Button
                variant={ButtonVariant.Primary}
                onClick={() => setIsOpen(false)}
              >
                Close
              </Button>
            </FocusTrappedBox>
          </ModalFocus>
        )}
      </>
    );
  },
};

export const InitialFocusRef: Story = {
  render: (args) => {
    const closeRef = useRef<HTMLButtonElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button variant={ButtonVariant.Primary} onClick={() => setIsOpen(true)}>
          Open
        </Button>
        {isOpen && (
          <ModalFocus {...args} initialFocusRef={closeRef}>
            <FocusTrappedBox>
              <Input aria-label="first input (skipped)" />
              <Text>Initial focus is on the close button.</Text>
              <Button
                ref={closeRef}
                variant={ButtonVariant.Primary}
                onClick={() => setIsOpen(false)}
              >
                Close
              </Button>
            </FocusTrappedBox>
          </ModalFocus>
        )}
      </>
    );
  },
};

export const FinalFocusRef: Story = {
  render: (args) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Box flexDirection={BoxFlexDirection.Row} gap={4}>
          <Button
            variant={ButtonVariant.Primary}
            onClick={() => setIsOpen(true)}
          >
            Open
          </Button>
          <Input
            placeholder="Focus will return here"
            aria-label="final focus target"
            ref={inputRef}
          />
        </Box>
        {isOpen && (
          <ModalFocus {...args} finalFocusRef={inputRef}>
            <FocusTrappedBox>
              <Text>Focus will be returned to the input once closed.</Text>
              <Button
                variant={ButtonVariant.Primary}
                onClick={() => setIsOpen(false)}
              >
                Close
              </Button>
            </FocusTrappedBox>
          </ModalFocus>
        )}
      </>
    );
  },
};

export const RestoreFocus: Story = {
  render: (args) => {
    const openRef = useRef<HTMLButtonElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button
          ref={openRef}
          variant={ButtonVariant.Primary}
          onClick={() => setIsOpen(true)}
        >
          Open
        </Button>
        {isOpen && (
          <ModalFocus {...args} restoreFocus>
            <FocusTrappedBox>
              <Text>
                Focus will be restored to the open button once closed.
              </Text>
              <Button
                variant={ButtonVariant.Primary}
                onClick={() => setIsOpen(false)}
              >
                Close
              </Button>
            </FocusTrappedBox>
          </ModalFocus>
        )}
      </>
    );
  },
};

export const AutoFocus: Story = {
  args: {
    autoFocus: false,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button variant={ButtonVariant.Primary} onClick={() => setIsOpen(true)}>
          Open
        </Button>
        {isOpen && (
          <ModalFocus {...args}>
            <FocusTrappedBox>
              <Text>autoFocus is false — nothing is focused on mount.</Text>
              <Button
                variant={ButtonVariant.Primary}
                onClick={() => setIsOpen(false)}
              >
                Close
              </Button>
            </FocusTrappedBox>
          </ModalFocus>
        )}
      </>
    );
  },
};
