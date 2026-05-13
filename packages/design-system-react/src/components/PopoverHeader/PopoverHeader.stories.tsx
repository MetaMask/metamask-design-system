import { BoxBackgroundColor, IconName } from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Box } from '../Box';
import { Icon } from '../Icon';
import { Text } from '../Text';

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

export const Children: Story = {
  render: () => (
    <PopoverHeader
      onClose={() => undefined}
      closeButtonProps={{ ariaLabel: 'Close' }}
    >
      <Box backgroundColor={BoxBackgroundColor.PrimaryMuted} padding={2}>
        <Text>Custom node children render as-is</Text>
      </Box>
    </PopoverHeader>
  ),
};

export const OnBack: Story = {
  args: {
    children: 'Popover title',
    onBack: () => undefined,
    backButtonProps: { ariaLabel: 'Back' },
    onClose: () => undefined,
    closeButtonProps: { ariaLabel: 'Close' },
  },
};

export const OnClose: Story = {
  args: {
    children: 'Popover title',
    onClose: () => undefined,
    closeButtonProps: { ariaLabel: 'Close' },
  },
};

export const StartAccessory: Story = {
  render: () => (
    <PopoverHeader
      startAccessory={<Icon name={IconName.Star} aria-label="custom start" />}
      onClose={() => undefined}
      closeButtonProps={{ ariaLabel: 'Close' }}
    >
      Custom startAccessory replaces the back button
    </PopoverHeader>
  ),
};

export const EndAccessory: Story = {
  render: () => (
    <PopoverHeader
      onBack={() => undefined}
      backButtonProps={{ ariaLabel: 'Back' }}
      endAccessory={
        <Icon name={IconName.Notification} aria-label="custom end" />
      }
    >
      Custom endAccessory replaces the close button
    </PopoverHeader>
  ),
};
