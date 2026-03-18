import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { BoxBackgroundColor, FontWeight, TextVariant } from '../../types';
import { Box } from '../Box';
import { Icon, IconName, IconSize } from '../Icon';
import { Text } from '../Text';

import { SectionBase } from './SectionBase';
import type { SectionBaseProps } from './SectionBase.types';

const meta: Meta<SectionBaseProps> = {
  title: 'Components/SectionBase',
  component: SectionBase,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    twClassName: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <Box
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        padding={4}
      >
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<SectionBaseProps>;

export const Default: Story = {
  args: {
    title: 'Section Title',
    description: 'Optional description text for the section.',
    children: <Text>Section content goes here.</Text>,
  },
};

export const Title: Story = {
  args: {
    title: 'Section with title only',
  },
};

export const Description: Story = {
  args: {
    description: 'Section with description only.',
  },
};

export const TitleAndDescription: Story = {
  args: {
    title: 'Section Title',
    description:
      'Description text with default BodyMd and TextAlternative color.',
  },
};

export const Accessories: Story = {
  args: {
    title: 'Section with accessories',
    titleStartAccessory: <Icon name={IconName.Info} size={IconSize.Sm} />,
    titleEndAccessory: <Icon name={IconName.Add} size={IconSize.Sm} />,
    description: 'Start and end accessories around the title.',
  },
};

export const Children: Story = {
  args: {
    title: 'Section with children',
    description: 'Description above the children.',
    children: (
      <Box>
        <Text>Custom child content</Text>
      </Box>
    ),
  },
};

export const CustomTitleNode: Story = {
  args: {
    title: (
      <Text variant={TextVariant.BodyMd} fontWeight={FontWeight.Bold}>
        Custom title node
      </Text>
    ),
    description: 'When title is a node, titleProps are not applied.',
  },
};
