import { IconColor, IconName, IconSize } from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { Box } from '../Box';
import { Icon } from '../Icon';

import { SectionHeader } from './SectionHeader';
import type { SectionHeaderProps } from './SectionHeader.types';

const meta = {
  title: 'Components/SectionHeader',
  component: SectionHeader,
  argTypes: {
    title: {
      control: 'text',
      description:
        'Section title; when a string, uses heading typography merged with titleProps',
    },
    startIconName: {
      control: 'select',
      options: Object.keys(IconName),
      mapping: IconName,
      description:
        'Optional start icon; when set, renders instead of startAccessory',
    },
    endIconName: {
      control: 'select',
      options: Object.keys(IconName),
      mapping: IconName,
      description:
        'Optional end icon; when set, renders instead of endAccessory',
    },
  },
  decorators: [
    (Story) => (
      <Box twClassName="w-full bg-background-default p-4">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof SectionHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Assets',
  },
  render: (args: SectionHeaderProps) => <SectionHeader {...args} />,
};

export const StartIconName: Story = {
  render: () => <SectionHeader title="Networks" startIconName={IconName.Ai} />,
};

export const EndIconName: Story = {
  render: () => (
    <SectionHeader title="Networks" endIconName={IconName.ArrowRight} />
  ),
};

export const StartAccessory: Story = {
  render: () => (
    <SectionHeader
      title="Activity"
      startAccessory={
        <Box twClassName="h-6 w-6 shrink-0 rounded-full bg-primary-default" />
      }
    />
  ),
};

export const EndAccessory: Story = {
  render: () => (
    <SectionHeader
      title="Notifications"
      endAccessory={
        <Box twClassName="h-6 w-6 shrink-0 rounded-full bg-error-default" />
      }
    />
  ),
};

export const TitleAccessory: Story = {
  render: () => (
    <SectionHeader
      title="Tokens"
      titleAccessory={
        <Icon
          name={IconName.Info}
          size={IconSize.Sm}
          color={IconColor.IconAlternative}
        />
      }
    />
  ),
};
