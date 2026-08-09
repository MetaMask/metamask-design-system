import {
  BoxBackgroundColor,
  IconColor,
  IconName,
  IconSize,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Box } from '../Box';
import { Icon } from '../Icon';
import { Text } from '../Text';

import README from './README.mdx';
import { SectionHeader } from './SectionHeader';
import type { SectionHeaderProps } from './SectionHeader.types';

const noopClick = () => undefined;

const meta: Meta<SectionHeaderProps> = {
  title: 'React Components/SectionHeader',
  component: SectionHeader,
  parameters: {
    docs: {
      page: README,
    },
  },
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
        'When true, the full row is clickable with pressed opacity feedback',
    },
  },
  decorators: [
    (Story) => (
      <Box
        className="w-full max-w-md"
        backgroundColor={BoxBackgroundColor.BackgroundDefault}
      >
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
    isInteractive: false,
  },
  render: (args: SectionHeaderProps) => (
    <SectionHeader
      {...args}
      {...(args.isInteractive ? { onClick: noopClick } : {})}
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
        <Box className="size-6 shrink-0 rounded-full bg-primary-default" />
      }
    />
  ),
};

export const EndAccessory: Story = {
  render: () => (
    <SectionHeader
      title="Notifications"
      endAccessory={
        <Box className="size-6 shrink-0 rounded-full bg-error-default" />
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
    <SectionHeader title="How it works" endIconName={IconName.ArrowRight}>
      <Text variant={TextVariant.BodySm} color={TextColor.TextAlternative}>
        Add mUSD and earn up to{' '}
        <Text
          asChild
          variant={TextVariant.BodySm}
          color={TextColor.SuccessDefault}
        >
          <span>4% APY</span>
        </Text>{' '}
        (variable). Your balance is dollar-backed and ready to spend, trade, or
        send anytime.
      </Text>
    </SectionHeader>
  ),
};

export const IsInteractive: Story = {
  render: () => (
    <SectionHeader title="Assets" isInteractive onClick={noopClick} />
  ),
};
