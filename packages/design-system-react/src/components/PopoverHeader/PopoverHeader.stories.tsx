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
  // Wrap each story in a dialog landmark. The inner <article> is a sectioning
  // element that scopes the <header> inside PopoverHeader so axe does NOT
  // assign it the banner role (axe computes the header's role from the HTML
  // element tag hierarchy: article/aside/main/nav/section all scope it).
  // `text-default` on the dialog ensures `text-inherit` on the title
  // resolves to the correct design-token color in both light and dark themes
  // instead of falling back to the browser default.
  decorators: [
    (Story, context) => (
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`PopoverHeader — ${context.name}`}
        className="text-default"
      >
        <article>
          <Story />
        </article>
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
