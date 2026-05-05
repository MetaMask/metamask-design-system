import { TagSeverity } from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';

import { IconName } from '../Icon';

import { Tag } from './Tag';
import type { TagProps } from './Tag.types';

const meta: Meta<TagProps> = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {},
  argTypes: {
    severity: {
      control: 'select',
      options: Object.values(TagSeverity),
    },
    children: {
      control: 'text',
    },
    startIconName: {
      control: 'select',
      options: Object.values(IconName),
    },
    endIconName: {
      control: 'select',
      options: Object.values(IconName),
    },
  },
};

export default meta;
type Story = StoryObj<TagProps>;

export const Default: Story = {
  args: {
    children: 'Tag',
    severity: TagSeverity.Neutral,
  },
};

export const Severity: Story = {
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

export const StartIconName: Story = {
  render: () => <Tag startIconName={IconName.Warning}>Tag</Tag>,
};

export const EndIconName: Story = {
  render: () => <Tag endIconName={IconName.ArrowRight}>Tag</Tag>,
};

export const StartAccessory: Story = {
  render: () => (
    <Tag startAccessory={<Text testID="tag-story-start-accessory">→</Text>}>
      Tag
    </Tag>
  ),
};

export const EndAccessory: Story = {
  render: () => (
    <Tag endAccessory={<Text testID="tag-story-end-accessory">←</Text>}>
      Tag
    </Tag>
  ),
};

export const StartAndEndIconNames: Story = {
  render: () => (
    <Tag startIconName={IconName.Warning} endIconName={IconName.ArrowRight}>
      Tag
    </Tag>
  ),
};
