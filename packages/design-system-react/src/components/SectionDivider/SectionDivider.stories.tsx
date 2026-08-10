import {
  BoxBorderColor,
  BoxFlexDirection,
  TextVariant,
} from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Box } from '../Box';
import { Text } from '../Text';

import README from './README.mdx';
import { SectionDivider } from './SectionDivider';
import type { SectionDividerProps } from './SectionDivider.types';

const meta: Meta<SectionDividerProps> = {
  title: 'React Components/SectionDivider',
  component: SectionDivider,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    borderWidth: {
      control: 'select',
      options: [0, 1, 2, 4, 8],
    },
    borderColor: {
      control: 'select',
      options: Object.values(BoxBorderColor),
    },
    marginVertical: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
  },
};

export default meta;
type Story = StoryObj<SectionDividerProps>;

function SectionContext(args: SectionDividerProps) {
  return (
    <Box flexDirection={BoxFlexDirection.Column} gap={2}>
      <Text variant={TextVariant.BodyMd}>Above</Text>
      <SectionDivider {...args} />
      <Text variant={TextVariant.BodyMd}>Below</Text>
    </Box>
  );
}

export const Default: Story = {
  render: SectionContext,
};

export const BorderWidth: Story = {
  render: () => (
    <Box flexDirection={BoxFlexDirection.Column} gap={4}>
      <Box flexDirection={BoxFlexDirection.Column} gap={2}>
        <Text variant={TextVariant.BodySm}>borderWidth={0}</Text>
        <SectionDivider borderWidth={0} marginVertical={0} />
      </Box>
      <Box flexDirection={BoxFlexDirection.Column} gap={2}>
        <Text variant={TextVariant.BodySm}>borderWidth={1} (default)</Text>
        <SectionDivider borderWidth={1} marginVertical={0} />
      </Box>
      <Box flexDirection={BoxFlexDirection.Column} gap={2}>
        <Text variant={TextVariant.BodySm}>borderWidth={2}</Text>
        <SectionDivider borderWidth={2} marginVertical={0} />
      </Box>
      <Box flexDirection={BoxFlexDirection.Column} gap={2}>
        <Text variant={TextVariant.BodySm}>borderWidth={4}</Text>
        <SectionDivider borderWidth={4} marginVertical={0} />
      </Box>
    </Box>
  ),
};

export const BorderColor: Story = {
  render: () => (
    <Box flexDirection={BoxFlexDirection.Column} gap={4}>
      <Box flexDirection={BoxFlexDirection.Column} gap={2}>
        <Text variant={TextVariant.BodySm}>BorderMuted (default)</Text>
        <SectionDivider
          borderColor={BoxBorderColor.BorderMuted}
          marginVertical={0}
        />
      </Box>
      <Box flexDirection={BoxFlexDirection.Column} gap={2}>
        <Text variant={TextVariant.BodySm}>BorderDefault</Text>
        <SectionDivider
          borderColor={BoxBorderColor.BorderDefault}
          marginVertical={0}
        />
      </Box>
    </Box>
  ),
};

export const MarginVertical: Story = {
  render: () => (
    <Box flexDirection={BoxFlexDirection.Column}>
      <Text variant={TextVariant.BodySm}>marginVertical={0}</Text>
      <SectionDivider marginVertical={0} />
      <Text variant={TextVariant.BodySm}>marginVertical={5} (default)</Text>
      <SectionDivider marginVertical={5} />
      <Text variant={TextVariant.BodySm}>marginVertical={8}</Text>
      <SectionDivider marginVertical={8} />
    </Box>
  ),
};
