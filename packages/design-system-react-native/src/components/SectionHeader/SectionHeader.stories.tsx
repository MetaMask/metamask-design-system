import {
  IconColor,
  IconName,
  IconSize,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { Box } from '../Box';
import { Icon } from '../Icon';
import { Text } from '../Text';

import { SectionHeader } from './SectionHeader';
import type { SectionHeaderProps } from './SectionHeader.types';

const noopPress = () => undefined;

const meta: Meta<typeof SectionHeader> = {
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
    isInteractive: {
      control: 'boolean',
      description:
        'When true, wraps the header in a Pressable so the full row is tappable',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SectionHeader>;

export const Default: Story = {
  args: {
    title: 'Assets',
    isInteractive: false,
  },
  render: (args: SectionHeaderProps) => (
    <SectionHeader
      {...args}
      {...(args.isInteractive ? { onPress: noopPress } : {})}
    />
  ),
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

export const Children: Story = {
  render: () => (
    <Box twClassName="w-full bg-background-default">
      <SectionHeader
        title="How it works"
        endIconName={IconName.ArrowRight}
      >
        <Text variant={TextVariant.BodySm} color={TextColor.TextAlternative}>
          Add mUSD and earn up to{' '}
          <Text variant={TextVariant.BodySm} color={TextColor.SuccessDefault}>
            4% APY
          </Text>{' '}
          (variable). Your balance is dollar-backed and ready to spend, trade,
          or send anytime.
        </Text>
      </SectionHeader>
    </Box>
  ),
};

export const Interactive: Story = {
  render: () => (
    <SectionHeader title="Assets" isInteractive onPress={noopPress} />
  ),
};
