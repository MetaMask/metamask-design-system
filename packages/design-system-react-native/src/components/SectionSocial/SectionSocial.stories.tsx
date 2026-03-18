import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { BoxBackgroundColor } from '../../types';
import { Box } from '../Box';
import { Text } from '../Text';

import { SectionSocial } from './SectionSocial';
import type { SectionSocialProps } from './SectionSocial.types';

const SAMPLE_AVATAR_URI =
  'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880';
const SAMPLE_SOURCE_URI =
  'https://www.redditstatic.com/shreddit/assets/favicon/76x76.png';

const meta: Meta<SectionSocialProps> = {
  title: 'Components/SectionSocial',
  component: SectionSocial,
  argTypes: {
    description: { control: 'text' },
    attributionName: { control: 'text' },
    attributionTimestamp: { control: 'text' },
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
type Story = StoryObj<SectionSocialProps>;

export const Default: Story = {
  args: {
    description:
      "BREAKING: Elon Musk has reportedly become the first person in history to hit a $1 TRILLION net worth. Meanwhile, Bitcoin's market cap sits around $1.35 TRILLION.",
    attributionName: '@eth_taco',
    attributionTimestamp: '1m ago',
    attributionAvatar: { uri: SAMPLE_AVATAR_URI },
    source: { uri: SAMPLE_SOURCE_URI },
  },
};

export const DescriptionOnly: Story = {
  args: {
    description: 'Section with description only. No attribution row.',
  },
};

export const AttributionName: Story = {
  args: {
    description: 'Post content.',
    attributionName: '@CryptoMichNL',
  },
};

export const AttributionTimestamp: Story = {
  args: {
    description: 'Post content.',
    attributionTimestamp: '2h ago',
  },
};

export const AttributionNameAndTimestamp: Story = {
  args: {
    description:
      "This is the best chart in #Crypto & #Bitcoin The representation of the current status of the markets can't be explained by a better chart.",
    attributionName: '@CryptoMichNL',
    attributionTimestamp: '1m ago',
  },
};

export const FullAttribution: Story = {
  args: {
    description:
      "BREAKING: Elon Musk has reportedly become the first person in history to hit a $1 TRILLION net worth. Meanwhile, Bitcoin's market cap sits around $1.35 TRILLION.",
    attributionName: '@eth_taco',
    attributionTimestamp: '1m ago',
    attributionAvatar: { uri: SAMPLE_AVATAR_URI },
    source: { uri: SAMPLE_SOURCE_URI },
  },
};

export const WithAvatarAndSource: Story = {
  args: {
    description: 'Social post with avatar and source logo.',
    attributionName: '@handle',
    attributionTimestamp: '5m ago',
    attributionAvatar: { uri: SAMPLE_AVATAR_URI },
    source: { uri: SAMPLE_SOURCE_URI },
  },
};

export const Children: Story = {
  args: {
    description: 'Description above the attribution and children.',
    attributionName: '@eth_taco',
    attributionTimestamp: '1m ago',
    children: (
      <Box>
        <Text>Custom child content below attribution</Text>
      </Box>
    ),
  },
};
