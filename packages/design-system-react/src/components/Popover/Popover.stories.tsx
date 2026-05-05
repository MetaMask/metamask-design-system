import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';

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
    hasArrow: { control: 'boolean' },
    isPortal: { control: 'boolean' },
    matchWidth: { control: 'boolean' },
    flip: { control: 'boolean' },
    preventOverflow: { control: 'boolean' },
    referenceHidden: { control: 'boolean' },
  },
  args: {
    position: PopoverPosition.BottomStart,
    role: PopoverRole.Tooltip,
    hasArrow: true,
    isPortal: false,
    matchWidth: false,
    flip: false,
    preventOverflow: false,
    referenceHidden: true,
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
    style={{ width: 200, height: 200 }}
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
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Click to toggle popover
        </ReferenceBox>
        <Popover
          {...args}
          referenceElement={referenceElement}
          isOpen={isOpen}
          onPressEscKey={() => setIsOpen(false)}
        >
          <Text>Popover demo</Text>
        </Popover>
      </>
    );
  },
};

export const Position: Story = {
  render: () => {
    const [referenceElement, setReferenceElement] =
      useState<HTMLElement | null>(null);
    const placements = [
      PopoverPosition.TopStart,
      PopoverPosition.Top,
      PopoverPosition.TopEnd,
      PopoverPosition.RightStart,
      PopoverPosition.Right,
      PopoverPosition.RightEnd,
      PopoverPosition.BottomStart,
      PopoverPosition.Bottom,
      PopoverPosition.BottomEnd,
      PopoverPosition.LeftStart,
      PopoverPosition.Left,
      PopoverPosition.LeftEnd,
    ];
    return (
      <Box
        flexDirection={BoxFlexDirection.Row}
        alignItems={BoxAlignItems.Center}
        justifyContent={BoxJustifyContent.Center}
        padding={12}
        borderColor={BoxBorderColor.BorderDefault}
        borderWidth={1}
        style={{ minHeight: 600, minWidth: 800 }}
      >
        <Box
          ref={setReferenceElement}
          backgroundColor={BoxBackgroundColor.PrimaryMuted}
          alignItems={BoxAlignItems.Center}
          justifyContent={BoxJustifyContent.Center}
          flexDirection={BoxFlexDirection.Row}
          padding={4}
          style={{ width: 360, height: 200 }}
        >
          <Text>Reference element</Text>
        </Box>
        {placements.map((placement) => (
          <Popover
            key={placement}
            isOpen
            hasArrow
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

export const HasArrow: Story = {
  render: () => {
    const [referenceElement, setReferenceElement] =
      useState<HTMLElement | null>(null);
    return (
      <>
        <ReferenceBox setRef={setReferenceElement}>Reference</ReferenceBox>
        <Popover
          isOpen
          hasArrow
          position={PopoverPosition.RightStart}
          referenceElement={referenceElement}
        >
          <Text>With arrow</Text>
        </Popover>
        <Popover
          isOpen
          position={PopoverPosition.RightEnd}
          referenceElement={referenceElement}
        >
          <Text>Without arrow</Text>
        </Popover>
      </>
    );
  },
};

export const IsPortal: Story = {
  render: () => {
    const [referenceElement, setReferenceElement] =
      useState<HTMLElement | null>(null);
    return (
      <>
        <ReferenceBox setRef={setReferenceElement}>Reference</ReferenceBox>
        <Popover
          isOpen
          isPortal
          hasArrow
          position={PopoverPosition.RightEnd}
          referenceElement={referenceElement}
        >
          <Text>Inspect to view this popover at the end of document.body</Text>
        </Popover>
        <Popover
          isOpen
          hasArrow
          position={PopoverPosition.RightStart}
          referenceElement={referenceElement}
        >
          <Text>Rendered inline (no portal)</Text>
        </Popover>
      </>
    );
  },
};

export const MatchWidth: Story = {
  render: () => {
    const [referenceElement, setReferenceElement] =
      useState<HTMLElement | null>(null);
    return (
      <>
        <ReferenceBox setRef={setReferenceElement}>Reference</ReferenceBox>
        <Popover
          isOpen
          matchWidth
          position={PopoverPosition.Bottom}
          referenceElement={referenceElement}
        >
          <Text>
            matchWidth makes the popover the same width as the reference.
          </Text>
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
          role={PopoverRole.Dialog}
          position={PopoverPosition.Left}
          referenceElement={referenceElement}
        >
          <Text>{PopoverRole.Dialog}</Text>
        </Popover>
        <Popover
          isOpen
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

export const OnPressEscKey: Story = {
  render: () => {
    const [referenceElement, setReferenceElement] =
      useState<HTMLElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button
          variant={ButtonVariant.Primary}
          onClick={() => setIsOpen(true)}
          ref={(node) => setReferenceElement(node)}
        >
          Open
        </Button>
        <Popover
          isOpen={isOpen}
          referenceElement={referenceElement}
          position={PopoverPosition.Bottom}
          hasArrow
          onPressEscKey={() => setIsOpen(false)}
        >
          <Text>Press Esc to close</Text>
        </Popover>
      </>
    );
  },
};

export const OnClickOutside: Story = {
  render: () => {
    const [referenceElement, setReferenceElement] =
      useState<HTMLElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button
          variant={ButtonVariant.Primary}
          onClick={() => setIsOpen((prev) => !prev)}
          ref={(node) => setReferenceElement(node)}
        >
          Open
        </Button>
        <Popover
          isOpen={isOpen}
          referenceElement={referenceElement}
          position={PopoverPosition.Bottom}
          hasArrow
          onClickOutside={() => setIsOpen(false)}
        >
          <Text>Click outside to close</Text>
        </Popover>
      </>
    );
  },
};
