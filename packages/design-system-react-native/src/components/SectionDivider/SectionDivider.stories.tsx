import { BoxFlexDirection, TextVariant } from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { Box } from '../Box';
import { Text } from '../Text';

import { SectionDivider } from './SectionDivider';
import type { SectionDividerProps } from './SectionDivider.types';

const meta: Meta<typeof SectionDivider> = {
  title: 'Components/SectionDivider',
  component: SectionDivider,
};

export default meta;
type Story = StoryObj<typeof SectionDivider>;

function DefaultStoryTemplate(args: SectionDividerProps) {
  return (
    <Box flexDirection={BoxFlexDirection.Column} gap={2}>
      <Text variant={TextVariant.BodyMd}>Above</Text>
      <SectionDivider {...args} />
      <Text variant={TextVariant.BodyMd}>Below</Text>
    </Box>
  );
}

export const Default: Story = {
  render: DefaultStoryTemplate,
};
