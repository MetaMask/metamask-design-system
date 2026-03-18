import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { BoxBackgroundColor, TextVariant } from '../../types';
import { SAMPLE_AVATARGROUP_AVATARFAVICONPROPSARR } from '../AvatarGroup/AvatarGroup.dev';
import { AvatarGroupVariant } from '../AvatarGroup';
import { Box } from '../Box';
import { Icon, IconName, IconSize } from '../Icon';
import { Text } from '../Text';

import { SectionInsights } from './SectionInsights';
import type { SectionInsightsProps } from './SectionInsights.types';

const meta: Meta<SectionInsightsProps> = {
  title: 'Components/SectionInsights',
  component: SectionInsights,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    attribution: { control: 'text' },
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
type Story = StoryObj<SectionInsightsProps>;

export const Default: Story = {
  args: {
    title: 'Insight Title',
    description: 'Optional description for the insight section.',
    attribution: 'Source name or attribution text',
    children: <Text>Insight content goes here.</Text>,
  },
};

export const Title: Story = {
  args: {
    title: 'Section with title only',
  },
};

export const TitleStartAccessory: Story = {
  args: {
    title: 'Section with start accessory',
    titleStartAccessory: <Icon name={IconName.Info} size={IconSize.Md} />,
  },
};

export const TitleProps: Story = {
  args: {
    title: 'Custom title typography',
    titleProps: {
      variant: TextVariant.HeadingMd,
      testID: 'section-insights-title',
    },
  },
};

export const Attribution: Story = {
  args: {
    title: 'Insight with attribution',
    description: 'Description text.',
    attribution: 'example.com',
  },
};

export const AttributionFaviconAvatarGroupProps: Story = {
  args: {
    title: 'Insight with favicon attribution',
    description: 'Description with favicon sources below.',
    attribution: 'Uniswap, OpenSea, etherscan.io',
    attributionFaviconAvatarGroupProps: {
      variant: AvatarGroupVariant.Favicon,
      avatarPropsArr: SAMPLE_AVATARGROUP_AVATARFAVICONPROPSARR.slice(0, 3),
    },
  },
};

export const Children: Story = {
  args: {
    title: 'Section with children',
    description: 'Description above the children.',
    attribution: 'Data source',
    children: (
      <Box>
        <Text>Custom child content below attribution</Text>
      </Box>
    ),
  },
};
