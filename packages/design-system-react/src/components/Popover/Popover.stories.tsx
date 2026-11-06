import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useRef, useState } from 'react';

import {
  Box,
  BoxAlignItems,
  BoxBackgroundColor,
  BoxBorderColor,
  BoxFlexDirection,
  BoxJustifyContent,
} from '../Box';
import { Button, ButtonVariant } from '../Button';
import { Text, TextColor } from '../Text';

import { Popover } from './Popover';
import { PopoverPosition, PopoverRole } from './Popover.types';
import type { PopoverProps } from './Popover.types';
import README from './README.mdx';

const meta: Meta<PopoverProps> = {
  title: 'React Components/Popover',
  component: Popover,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    position: {
      control: 'select',
      options: Object.values(PopoverPosition),
    },
    role: {
      control: 'select',
      options: Object.values(PopoverRole),
    },
    isDismissible: { control: 'boolean' },
  },
  args: {
    position: PopoverPosition.BottomStart,
    role: PopoverRole.Tooltip,
    isDismissible: true,
  },
};

export default meta;

type Story = StoryObj<PopoverProps>;

const ReferenceBox = ({
  setRef,
  onClick,
  children,
}: {
  setRef: (element: HTMLElement | null) => void;
  onClick?: () => void;
  children: React.ReactNode;
}) => (
  <Box
    ref={(node) => setRef(node)}
    backgroundColor={BoxBackgroundColor.PrimaryDefault}
    alignItems={BoxAlignItems.Center}
    justifyContent={BoxJustifyContent.Center}
    flexDirection={BoxFlexDirection.Row}
    padding={4}
    asChild
    className="size-[200px]"
  >
    <button type="button" onClick={onClick}>
      <Text color={TextColor.PrimaryInverse}>{children}</Text>
    </button>
  </Box>
);

export const Default: Story = {
  render: (args) => {
    const [referenceElement, setReferenceElement] =
      useState<HTMLElement | null>(null);
    const [isOpen, setIsOpen] = useState(true);
    return (
      <>
        <ReferenceBox
          setRef={setReferenceElement}
          onClick={() => setIsOpen(!isOpen)}
        >
          Click to toggle popover
        </ReferenceBox>
        <Popover
          {...args}
          referenceElement={referenceElement}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <Text>Click outside or press Escape to close</Text>
        </Popover>
      </>
    );
  },
};

export const Position: Story = {
  render: () => {
    const [referenceElement, setReferenceElement] =
      useState<HTMLElement | null>(null);
    return (
      <Box
        flexDirection={BoxFlexDirection.Row}
        alignItems={BoxAlignItems.Center}
        justifyContent={BoxJustifyContent.Center}
        padding={12}
        borderColor={BoxBorderColor.BorderDefault}
        borderWidth={1}
        className="min-h-[600px] min-w-[800px]"
      >
        <Box
          ref={setReferenceElement}
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          alignItems={BoxAlignItems.Center}
          justifyContent={BoxJustifyContent.Center}
          flexDirection={BoxFlexDirection.Row}
          padding={4}
          className="h-[200px] w-[360px]"
        >
          <Text>Reference element</Text>
        </Box>
        {Object.values(PopoverPosition).map((placement) => (
          <Popover
            key={placement}
            isOpen
            isDismissible={false}
            position={placement}
            referenceElement={referenceElement}
          >
            <Text>{placement}</Text>
          </Popover>
        ))}
      </Box>
    );
  },
};

export const Offset: Story = {
  render: () => {
    const [referenceElement, setReferenceElement] =
      useState<HTMLElement | null>(null);
    return (
      <>
        <ReferenceBox setRef={setReferenceElement}>Reference</ReferenceBox>
        <Popover
          isOpen
          isDismissible={false}
          position={PopoverPosition.RightStart}
          offset={[16, 24]}
          referenceElement={referenceElement}
        >
          <Text>offset [16, 24]</Text>
        </Popover>
        <Popover
          isOpen
          isDismissible={false}
          position={PopoverPosition.BottomStart}
          referenceElement={referenceElement}
        >
          <Text>Default offset [0, 8]</Text>
        </Popover>
      </>
    );
  },
};

export const IsDismissible: Story = {
  render: () => {
    const [referenceElement, setReferenceElement] =
      useState<HTMLElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button
          variant={ButtonVariant.Primary}
          ref={(node) => setReferenceElement(node)}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
        >
          Hover or focus me
        </Button>
        <Popover
          isOpen={isOpen}
          isDismissible={false}
          position={PopoverPosition.Top}
          referenceElement={referenceElement}
        >
          <Text>Hover tooltip that stays open until isOpen changes</Text>
        </Popover>
      </>
    );
  },
};

export const Role: Story = {
  render: () => {
    const [referenceElement, setReferenceElement] =
      useState<HTMLElement | null>(null);
    return (
      <>
        <ReferenceBox setRef={setReferenceElement}>Reference</ReferenceBox>
        <Popover
          isOpen
          isDismissible={false}
          role={PopoverRole.Dialog}
          aria-label="Dialog example"
          position={PopoverPosition.Left}
          referenceElement={referenceElement}
        >
          <Text>{PopoverRole.Dialog}</Text>
        </Popover>
        <Popover
          isOpen
          isDismissible={false}
          role={PopoverRole.Tooltip}
          position={PopoverPosition.Right}
          referenceElement={referenceElement}
        >
          <Text>{PopoverRole.Tooltip}</Text>
        </Popover>
      </>
    );
  },
};

export const TopLayer: Story = {
  render: () => {
    const [referenceElement, setReferenceElement] =
      useState<HTMLElement | null>(null);
    return (
      <Box
        borderColor={BoxBorderColor.BorderDefault}
        borderWidth={1}
        padding={4}
        className="relative z-0 h-[120px] w-[320px] overflow-hidden"
      >
        <Button
          variant={ButtonVariant.Primary}
          ref={(node) => setReferenceElement(node)}
        >
          Reference
        </Button>
        <Popover
          isOpen
          isDismissible={false}
          position={PopoverPosition.BottomStart}
          referenceElement={referenceElement}
        >
          <Box className="w-[240px]">
            <Text>
              Rendered inline inside an overflow hidden container, but shown in
              the top layer so it is not clipped.
            </Text>
          </Box>
        </Popover>
      </Box>
    );
  },
};

export const ReferenceHidden: Story = {
  render: () => {
    const [referenceElement, setReferenceElement] =
      useState<HTMLElement | null>(null);
    return (
      <Box flexDirection={BoxFlexDirection.Column} gap={4}>
        <Text>
          Scroll the container. The popover hides once its reference is scrolled
          out of view.
        </Text>
        <Box
          borderColor={BoxBorderColor.BorderDefault}
          borderWidth={1}
          className="mt-[120px] h-[200px] w-[320px] overflow-y-auto"
        >
          <Box padding={4} className="h-[600px] pt-[120px]">
            <Button
              variant={ButtonVariant.Primary}
              ref={(node) => setReferenceElement(node)}
            >
              Reference
            </Button>
          </Box>
        </Box>
        <Popover
          isOpen
          isDismissible={false}
          position={PopoverPosition.Right}
          referenceElement={referenceElement}
        >
          <Text>Follows the reference</Text>
        </Popover>
      </Box>
    );
  },
};

export const InsideDialog: Story = {
  render: () => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [referenceElement, setReferenceElement] =
      useState<HTMLElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button
          variant={ButtonVariant.Primary}
          onClick={() => dialogRef.current?.showModal()}
        >
          Open modal dialog
        </Button>
        <dialog
          ref={dialogRef}
          className="rounded-lg bg-default p-6 text-default backdrop:bg-overlay-default"
          onClose={() => setIsOpen(false)}
        >
          <Box flexDirection={BoxFlexDirection.Column} gap={4}>
            <Text>
              The popover is rendered inside the dialog and shown in the top
              layer above it.
            </Text>
            <Box flexDirection={BoxFlexDirection.Row} gap={2}>
              <Button
                variant={ButtonVariant.Secondary}
                ref={(node) => setReferenceElement(node)}
                onClick={() => setIsOpen(!isOpen)}
              >
                Toggle popover
              </Button>
              <Button
                variant={ButtonVariant.Tertiary}
                onClick={() => dialogRef.current?.close()}
              >
                Close dialog
              </Button>
            </Box>
          </Box>
          <Popover
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            role={PopoverRole.Dialog}
            aria-label="Popover inside dialog"
            position={PopoverPosition.BottomStart}
            referenceElement={referenceElement}
          >
            <Text>Escape closes this popover first, then the dialog.</Text>
          </Popover>
        </dialog>
      </>
    );
  },
};
