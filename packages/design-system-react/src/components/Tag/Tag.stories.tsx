import { TagSeverity } from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { IconName } from '../../types';

import { Tag } from './Tag';
import type { TagProps } from './Tag.types';
import README from './README.mdx';

const meta: Meta<TagProps> = {
  title: 'React Components/Tag',
  component: Tag,
  parameters: {
    docs: {
      page: README,
    },
  },
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
      <Tag severity={TagSeverity.Success} className="mt-2">
        Success
      </Tag>
      <Tag severity={TagSeverity.Error} className="mt-2">
        Error
      </Tag>
      <Tag severity={TagSeverity.Warning} className="mt-2">
        Warning
      </Tag>
      <Tag severity={TagSeverity.Info} className="mt-2">
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
    <Tag startAccessory={<span data-testid="tag-story-start-accessory">→</span>}>
      Tag
    </Tag>
  ),
};

export const EndAccessory: Story = {
  render: () => (
    <Tag endAccessory={<span data-testid="tag-story-end-accessory">←</span>}>
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
