import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import Animated from 'react-native-reanimated';

import { Box } from '../Box';
import { Text, TextColor, TextVariant } from '../Text';
import { TitleStandard } from '../TitleStandard';

import { HeaderStandardAnimated } from './HeaderStandardAnimated';
import { useHeaderStandardAnimated } from './useHeaderStandardAnimated';

const meta = {
  title: 'Components/HeaderStandardAnimated',
  component: HeaderStandardAnimated,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    twClassName: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <Box twClassName="w-full flex-1 bg-background-default">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof HeaderStandardAnimated>;

export default meta;

type Story = StoryObj<typeof HeaderStandardAnimated>;

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

const DefaultStory = () => {
  const { scrollY, onScroll, setTitleSectionHeight, titleSectionHeightSv } =
    useHeaderStandardAnimated();

  return (
    <Box twClassName="flex-1 bg-default">
      <HeaderStandardAnimated
        scrollY={scrollY}
        titleSectionHeight={titleSectionHeightSv}
        title="Market"
        onBack={() => undefined}
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
};

const WithSubtitleStory = () => {
  const { scrollY, onScroll, setTitleSectionHeight, titleSectionHeightSv } =
    useHeaderStandardAnimated();

  return (
    <Box twClassName="flex-1 bg-default">
      <HeaderStandardAnimated
        scrollY={scrollY}
        titleSectionHeight={titleSectionHeightSv}
        title="Market"
        subtitle="Perpetual futures"
        onBack={() => undefined}
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
};

export const Default: Story = {
  render: () => <DefaultStory />,
};

export const Subtitle: Story = {
  render: () => <WithSubtitleStory />,
};
