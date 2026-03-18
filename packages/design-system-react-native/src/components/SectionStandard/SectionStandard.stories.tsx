import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { BoxBackgroundColor, TextVariant } from '../../types';
import { Box } from '../Box';
import { Icon, IconName, IconSize } from '../Icon';
import { Text } from '../Text';

import { SectionStandard } from './SectionStandard';
import type { SectionStandardProps } from './SectionStandard.types';

const meta: Meta<SectionStandardProps> = {
  title: 'Components/SectionStandard',
  component: SectionStandard,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    onPressTitle: { action: 'pressed' },
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
type Story = StoryObj<SectionStandardProps>;

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
      variant: TextVariant.HeadingSm,
      testID: 'section-title',
    },
  },
};

export const OnPressTitle: Story = {
  args: {
    title: 'Pressable title with arrow',
    onPressTitle: () => {},
  },
};

export const TitleAndDescription: Story = {
  args: {
    title: 'Section Title',
    description:
      'Description text with default BodyMd and TextAlternative color.',
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
