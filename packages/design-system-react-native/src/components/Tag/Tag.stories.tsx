import { BoxFlexDirection, TagSeverity } from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { Box } from '../Box';
import { Icon, IconColor, IconName, IconSize } from '../Icon';

import { Tag } from './Tag';
import type { TagProps } from './Tag.types';

const meta: Meta<TagProps> = {
  title: 'Components/Tag',
  component: Tag,
  decorators: [
    (Story) => (
      <Box twClassName="p-4">
        <Story />
      </Box>
    ),
  ],
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
    <Box flexDirection={BoxFlexDirection.Column} gap={2}>
      <Tag severity={TagSeverity.Neutral}>Neutral</Tag>
      <Tag severity={TagSeverity.Success}>Success</Tag>
      <Tag severity={TagSeverity.Danger}>Danger</Tag>
      <Tag severity={TagSeverity.Warning}>Warning</Tag>
      <Tag severity={TagSeverity.Info}>Info</Tag>
    </Box>
  ),
};

export const StartIconName: Story = {
  render: () => <Tag startIconName={IconName.Warning}>Tag</Tag>,
};

export const EndIconName: Story = {
  render: () => <Tag endIconName={IconName.ArrowDown}>Tag</Tag>,
};

export const StartAccessory: Story = {
  render: () => (
    <Tag
      startAccessory={
        <Icon
          name={IconName.Warning}
          size={IconSize.Xs}
          color={IconColor.IconDefault}
          testID="tag-story-start-accessory"
        />
      }
    >
      Tag
    </Tag>
  ),
};

export const EndAccessory: Story = {
  render: () => (
    <Tag
      endAccessory={
        <Icon
          name={IconName.ArrowDown}
          size={IconSize.Xs}
          color={IconColor.IconDefault}
          testID="tag-story-end-accessory"
        />
      }
    >
      Tag
    </Tag>
  ),
};

export const StartAndEndIconNames: Story = {
  render: () => (
    <Tag startIconName={IconName.Warning} endIconName={IconName.ArrowDown}>
      Tag
    </Tag>
  ),
};
