import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { IconName } from '../Icon';

import { Tag } from './Tag';
import { TagSeverity } from '@metamask/design-system-shared';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Variants: Story = {
  render: () => (
    <>
      <Tag severity={TagSeverity.Neutral}>Neutral</Tag>
      <Tag severity={TagSeverity.Success} twClassName="mt-2">
        Success
      </Tag>
      <Tag severity={TagSeverity.Error} twClassName="mt-2">
        Error
      </Tag>
      <Tag severity={TagSeverity.Warning} twClassName="mt-2">
        Warning
      </Tag>
      <Tag severity={TagSeverity.Info} twClassName="mt-2">
        Info
      </Tag>
    </>
  ),
};

export const NoIcon: Story = {
  render: () => <Tag>Tag</Tag>,
};

export const StartIcon: Story = {
  render: () => (
    <Tag startIconName={IconName.Warning}>Tag</Tag>
  ),
};

export const EndIcon: Story = {
  render: () => (
    <Tag endIconName={IconName.ArrowRight}>Tag</Tag>
  ),
};

const renderStartAndEndIcons = () => (
  <Tag startIconName={IconName.Warning} endIconName={IconName.ArrowRight}>
    Tag
  </Tag>
);

export const StartAndEndIcons: Story = {
  render: renderStartAndEndIcons,
};
