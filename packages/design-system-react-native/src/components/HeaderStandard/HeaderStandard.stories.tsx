import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { Box } from '../Box';
import { IconName } from '../Icon';
import { Text, TextVariant } from '../Text';

import { HeaderStandard } from './HeaderStandard';
import type { HeaderStandardProps } from './HeaderStandard.types';

const meta: Meta<HeaderStandardProps> = {
  title: 'Components/HeaderStandard',
  component: HeaderStandard,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    twClassName: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <Box twClassName="w-full bg-background-default">
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<HeaderStandardProps>;

export const Default: Story = {
  args: {
    title: 'Header Title',
  },
};

export const Subtitle: Story = {
  args: {
    title: 'Settings',
    subtitle: 'Account Settings',
    onBack: () => null,
  },
};

export const OnBack: Story = {
  args: {
    title: 'Settings',
    onBack: () => null,
  },
};

export const OnClose: Story = {
  args: {
    title: 'Modal Title',
    onClose: () => null,
  },
};

export const BackAndClose: Story = {
  args: {
    title: 'Settings',
    onBack: () => null,
    onClose: () => null,
  },
};

export const EndButtonIconProps: Story = {
  args: {
    title: 'Search',
    onBack: () => null,
    onClose: () => null,
    endButtonIconProps: [
      {
        iconName: IconName.Search,
        onPress: () => null,
      },
    ],
  },
};

export const Children: Story = {
  render: () => (
    <HeaderStandard onClose={() => null}>
      <Box twClassName="items-center">
        <Text variant={TextVariant.HeadingSm}>Custom Title</Text>
        <Text variant={TextVariant.BodySm}>Subtitle text</Text>
      </Box>
    </HeaderStandard>
  ),
};
