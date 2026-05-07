import type { Meta, StoryObj } from '@storybook/react-native';
import type { ComponentType } from 'react';
import React from 'react';
import Animated from 'react-native-reanimated';

import { Box } from '../Box';
import { IconName } from '../Icon';
import { Text, TextColor, TextVariant } from '../Text';
import { TitleStandard } from '../TitleStandard';

import { HeaderStandardAnimated } from './HeaderStandardAnimated';
import type { HeaderStandardAnimatedProps } from './HeaderStandardAnimated.types';
import { useHeaderStandardAnimated } from './useHeaderStandardAnimated';

type ScrollStoryArgs = Omit<
  HeaderStandardAnimatedProps,
  'scrollY' | 'titleSectionHeight' | 'children'
>;

const meta: Meta<ScrollStoryArgs> = {
  title: 'Components/HeaderStandardAnimated',
  component:
    HeaderStandardAnimated as unknown as ComponentType<ScrollStoryArgs>,
  parameters: {
    docs: {
      description: {
        component:
          'Scroll-linked header: the center title animates with scroll position. Use `useHeaderStandardAnimated` for `scrollY`, `titleSectionHeight`, and `onScroll`, and attach `onScroll` to `Animated.ScrollView`. Use `HeaderStandard` when you do not need this behavior.',
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <Box twClassName="w-full flex-1 bg-background-default">
        <Story />
      </Box>
    ),
  ],
};

export default meta;

type Story = StoryObj<ScrollStoryArgs>;

const SampleContent = ({ itemCount = 20 }: { itemCount?: number }) => (
  <>
    {Array.from({ length: itemCount }).map((_, index) => (
      <Box key={index} twClassName="p-4 mb-2 bg-muted rounded-lg mx-4">
        <Text variant={TextVariant.BodyMd}>Item {index + 1}</Text>
        <Text variant={TextVariant.BodySm}>
          This is sample content to demonstrate scrolling behavior.
        </Text>
      </Box>
    ))}
  </>
);

function ScrollDemo(args: ScrollStoryArgs) {
  const { scrollY, onScroll, setTitleSectionHeight, titleSectionHeightSv } =
    useHeaderStandardAnimated();

  return (
    <Box twClassName="flex-1 bg-default">
      <HeaderStandardAnimated
        {...args}
        scrollY={scrollY}
        titleSectionHeight={titleSectionHeightSv}
      />
      <Animated.ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <Box
          onLayout={(e) => setTitleSectionHeight(e.nativeEvent.layout.height)}
        >
          <TitleStandard
            topAccessory={
              <Text
                variant={TextVariant.BodySm}
                color={TextColor.TextAlternative}
              >
                Perps
              </Text>
            }
            title="ETH-PERP"
            twClassName="px-4 pt-1 pb-3"
          />
        </Box>
        <SampleContent />
      </Animated.ScrollView>
    </Box>
  );
}

export const Default: Story = {
  args: {
    title: 'Market',
  },
  render: (args) => <ScrollDemo {...args} />,
};

export const Subtitle: Story = {
  args: {
    title: 'Market',
    subtitle: 'Perpetual futures',
    onBack: () => undefined,
  },
  render: (args) => <ScrollDemo {...args} />,
};

export const OnBack: Story = {
  args: {
    title: 'Settings',
    onBack: () => undefined,
  },
  render: (args) => <ScrollDemo {...args} />,
};

export const OnClose: Story = {
  args: {
    title: 'Modal Title',
    onClose: () => undefined,
  },
  render: (args) => <ScrollDemo {...args} />,
};

export const BackAndClose: Story = {
  args: {
    title: 'Settings',
    onBack: () => undefined,
    onClose: () => undefined,
  },
  render: (args) => <ScrollDemo {...args} />,
};

export const EndButtonIconProps: Story = {
  args: {
    title: 'Search',
    onBack: () => undefined,
    onClose: () => undefined,
    endButtonIconProps: [
      {
        iconName: IconName.Search,
        onPress: () => undefined,
      },
    ],
  },
  render: (args) => <ScrollDemo {...args} />,
};
