import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Box, BoxBackgroundColor } from '../Box';

import { PopoverHeader } from './PopoverHeader';
import type { PopoverHeaderProps } from './PopoverHeader.types';
import README from './README.mdx';

const meta: Meta<PopoverHeaderProps> = {
  title: 'React Components/PopoverHeader',
  component: PopoverHeader,
  parameters: {
    docs: {
      page: README,
    },
  },
  // Wrap each story in a dialog landmark so the `<header>` inside is scoped
  // to its parent role and is not treated as a top-level `banner` landmark
  // by axe. This mirrors real usage — `PopoverHeader` always lives inside a
  // `Popover`/`<dialog>`.
  decorators: [
    (Story, context) => (
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`PopoverHeader — ${context.name}`}
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

type Story = StoryObj<PopoverHeaderProps>;

export const Default: Story = {
  args: {
    children: 'Popover title',
  },
};

export const WithCloseButton: Story = {
  args: {
    children: 'Popover title',
    onClose: () => undefined,
    closeButtonProps: { ariaLabel: 'Close' },
  },
};

export const WithBackAndCloseButtons: Story = {
  args: {
    children: 'Popover title',
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
    <PopoverHeader
      onClose={() => undefined}
      closeButtonProps={{ ariaLabel: 'Close' }}
    >
      <Box backgroundColor={BoxBackgroundColor.PrimaryMuted} padding={2}>
        Custom node children render as-is
      </Box>
    </PopoverHeader>
  ),
};

export const StartAccessoryOverride: Story = {
  render: () => (
    <PopoverHeader
      startAccessory={<span aria-label="custom start">⭐</span>}
      onClose={() => undefined}
      closeButtonProps={{ ariaLabel: 'Close' }}
    >
      Custom startAccessory replaces the back button
    </PopoverHeader>
  ),
};

export const EndAccessoryOverride: Story = {
  render: () => (
    <PopoverHeader
      onBack={() => undefined}
      backButtonProps={{ ariaLabel: 'Back' }}
      endAccessory={<span aria-label="custom end">🔔</span>}
    >
      Custom endAccessory replaces the close button
    </PopoverHeader>
  ),
};
