import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Box, BoxBackgroundColor } from '../Box';

import { ModalHeader } from './ModalHeader';
import type { ModalHeaderProps } from './ModalHeader.types';
import README from './README.mdx';

const meta: Meta<ModalHeaderProps> = {
  title: 'React Components/ModalHeader',
  component: ModalHeader,
  parameters: {
    docs: {
      page: README,
    },
  },
  // Wrap each story in a dialog landmark so the `<header>` inside is scoped
  // to its parent role and is not treated as a top-level `banner` landmark
  // by axe. This mirrors real usage — `ModalHeader` always lives inside a
  // `Modal`/`<dialog>`.
  decorators: [
    (Story, context) => (
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`ModalHeader — ${context.name}`}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<ModalHeaderProps>;

export const Default: Story = {
  args: {
    children: 'Modal title',
  },
};

export const WithCloseButton: Story = {
  args: {
    children: 'Modal title',
    onClose: () => undefined,
    closeButtonProps: { ariaLabel: 'Close' },
  },
};

export const WithBackAndCloseButtons: Story = {
  args: {
    children: 'Modal title',
    onBack: () => undefined,
    backButtonProps: { ariaLabel: 'Back' },
    onClose: () => undefined,
    closeButtonProps: { ariaLabel: 'Close' },
  },
};

export const StringTitle: Story = {
  args: {
    children: 'String children auto-wrap as centered HeadingSm Text',
    onClose: () => undefined,
    closeButtonProps: { ariaLabel: 'Close' },
  },
};

export const NodeTitle: Story = {
  render: () => (
    <ModalHeader
      onClose={() => undefined}
      closeButtonProps={{ ariaLabel: 'Close' }}
    >
      <Box backgroundColor={BoxBackgroundColor.PrimaryMuted} padding={2}>
        Custom node children render as-is
      </Box>
    </ModalHeader>
  ),
};

export const StartAccessoryOverride: Story = {
  render: () => (
    <ModalHeader
      startAccessory={<span aria-label="custom start">⭐</span>}
      onClose={() => undefined}
      closeButtonProps={{ ariaLabel: 'Close' }}
    >
      Custom startAccessory replaces the back button
    </ModalHeader>
  ),
};

export const EndAccessoryOverride: Story = {
  render: () => (
    <ModalHeader
      onBack={() => undefined}
      backButtonProps={{ ariaLabel: 'Back' }}
      endAccessory={<span aria-label="custom end">🔔</span>}
    >
      Custom endAccessory replaces the close button
    </ModalHeader>
  ),
};
