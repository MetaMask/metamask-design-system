import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Box, BoxBackgroundColor } from '../Box';
import { Text } from '../Text';

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
    a11y: {
      config: {
        rules: [
          {
            id: 'landmark-no-duplicate-banner',
            // Storybook renders light + dark themes simultaneously,
            // duplicating the <header> "banner" landmark. A single
            // ModalHeader is correct in production.
            enabled: false,
          },
          {
            id: 'landmark-unique',
            // Same reason — duplicated by the theme decorator.
            enabled: false,
          },
        ],
      },
    },
  },
  // Wrap each story in a dialog landmark so the `<header>` semantics are
  // anchored to a real modal context, mirroring how `ModalHeader` is always
  // used in production.
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
        <Text>Custom node children render as-is</Text>
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
