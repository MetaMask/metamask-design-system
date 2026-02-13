import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { View } from 'react-native';

import { Box } from '../Box';
import { Button, ButtonVariant } from '../Button';
import { Text } from '../Text';

import Skeleton from './Skeleton';
import type { SkeletonProps } from './Skeleton.types';

const meta: Meta<SkeletonProps> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  argTypes: {
    height: {
      control: { type: 'number' },
    },
    width: {
      control: { type: 'number' },
    },
    hideChildren: {
      control: { type: 'boolean' },
    },
    autoPlay: {
      control: { type: 'boolean' },
    },
    twClassName: {
      control: 'text',
    },
  },
  decorators: [
    (Story) => (
      <Box twClassName="p-4">
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<SkeletonProps>;

export const Default: Story = {
  args: {
    width: 300,
    height: 32,
  },
};

export const WidthHeight: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      <Skeleton height={32} width={300} />
      <Skeleton height={16} width={250} />
      <Skeleton height={16} width={250} />
    </View>
  ),
};

export const HideChildren: Story = {
  render: () => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
      <View>
        <Button
          variant={ButtonVariant.Secondary}
          onPress={() => setIsLoaded(!isLoaded)}
          style={{ marginBottom: 16 }}
        >
          Toggle Loading
        </Button>
        {isLoaded ? (
          <Text>Content to load</Text>
        ) : (
          <Skeleton hideChildren style={{ alignSelf: 'flex-start' }}>
            <Text>Content to load</Text>
          </Skeleton>
        )}
      </View>
    );
  },
};

export const TwClassName: Story = {
  render: () => <Skeleton height={32} width={300} twClassName="rounded-lg" />,
};

export const AutoPlayDisabled: Story = {
  render: () => <Skeleton height={32} width={300} autoPlay={false} />,
};
