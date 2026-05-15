import { IconColor, IconName, IconSize } from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { Box } from '../Box';
import { Icon } from '../Icon';

import { SectionHeader } from './SectionHeader';
import type { SectionHeaderProps } from './SectionHeader.types';

const meta: Meta<SectionHeaderProps> = {
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
};

export default meta;

type Story = StoryObj<SectionHeaderProps>;

export const Default: Story = {
  args: {
    title: 'Assets',
  },
  render: (args) => <SectionHeader {...args} />,
};

export const StartIconName: Story = {
  render: () => <SectionHeader title="Networks" startIconName={IconName.Ai} />,
};

export const EndIconName: Story = {
  render: () => (
    <SectionHeader title="Networks" endIconName={IconName.ArrowRight} />
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
