import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { ButtonVariant, TextVariant } from '@metamask/design-system-shared';

import { Box, BoxFlexDirection } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';

import README from './README.mdx';
import { Skeleton } from './Skeleton';
import type { SkeletonProps } from './Skeleton.types';

const meta: Meta<SkeletonProps> = {
  title: 'React Components/Skeleton',
  component: Skeleton,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    height: { control: 'text' },
    width: { control: 'text' },
    hideChildren: { control: 'boolean' },
    autoPlay: { control: 'boolean' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<SkeletonProps>;

export const Default: Story = {
  args: {
    width: 240,
    height: 16,
  },
};

export const Sizes: Story = {
  render: () => (
    <Box flexDirection={BoxFlexDirection.Column} gap={3}>
      <Skeleton width={80} height={12} />
      <Skeleton width={160} height={16} />
      <Skeleton width={240} height={20} />
      <Skeleton width="100%" height={32} />
    </Box>
  ),
};

export const HideChildren: Story = {
  args: {
    hideChildren: true,
  },
  render: (args) => (
    <Skeleton {...args}>
      <Text variant={TextVariant.HeadingMd}>
        This text dictates the skeleton's layout dimensions
      </Text>
    </Skeleton>
  ),
};

export const ToggleHideChildren: Story = {
  render: () => {
    const [hideChildren, setHideChildren] = useState(true);
    return (
      <Box flexDirection={BoxFlexDirection.Column} gap={4}>
        <Button
          variant={ButtonVariant.Primary}
          onClick={() => setHideChildren(!hideChildren)}
        >
          Toggle hideChildren ({String(hideChildren)})
        </Button>
        <Skeleton hideChildren={hideChildren}>
          <Text variant={TextVariant.HeadingMd}>
            Loaded content appears once hideChildren = false
          </Text>
        </Skeleton>
      </Box>
    );
  },
};

export const AutoPlay: Story = {
  render: () => (
    <Box flexDirection={BoxFlexDirection.Column} gap={3}>
      <Text variant={TextVariant.BodySm}>autoPlay = true (default)</Text>
      <Skeleton width={240} height={16} />
      <Text variant={TextVariant.BodySm}>autoPlay = false</Text>
      <Skeleton width={240} height={16} autoPlay={false} />
    </Box>
  ),
};
