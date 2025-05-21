import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { ScrollView, View } from 'react-native';

import { Text, TextColor, TextVariant } from '../Text';

import { Box } from './Box';
import { BoxBackgroundColor, BoxBorderColor } from './Box.types';

const meta = {
  title: 'Component Library/Box',
  component: Box,
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  render: () => (
    <ScrollView>
      <Box
        backgroundColor={BoxBackgroundColor.BackgroundDefault}
        padding={4}
        borderColor={BoxBorderColor.BorderDefault}
      >
        <Text variant={TextVariant.BodyMd} color={TextColor.TextDefault}>
          Box with default styling (padding-4)
        </Text>
      </Box>
    </ScrollView>
  ),
};

export const WithAlternativeBackground: Story = {
  render: () => (
    <ScrollView>
      <Box
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        padding={6}
        borderColor={BoxBorderColor.BorderDefault}
      >
        <Text variant={TextVariant.BodyMd} color={TextColor.TextDefault}>
          Box with alternative background (padding-6)
        </Text>
      </Box>
    </ScrollView>
  ),
};

export const WithPrimaryColor: Story = {
  render: () => (
    <ScrollView>
      <Box
        backgroundColor={BoxBackgroundColor.PrimaryDefault}
        padding={8}
        borderColor={BoxBorderColor.None}
      >
        <Text variant={TextVariant.BodyMd} color={TextColor.TextDefault}>
          Box with primary color (padding-8)
        </Text>
      </Box>
    </ScrollView>
  ),
};

export const WithBorder: Story = {
  render: () => (
    <ScrollView>
      <Box
        backgroundColor={BoxBackgroundColor.Transparent}
        padding={2}
        borderColor={BoxBorderColor.BorderDefault}
      >
        <Text variant={TextVariant.BodyMd} color={TextColor.TextDefault}>
          Box with border (padding-2)
        </Text>
      </Box>
    </ScrollView>
  ),
};

export const PaddingVariations: Story = {
  render: () => (
    <ScrollView>
      <View style={{ gap: 16 }}>
        <Box padding={0} borderColor={BoxBorderColor.BorderDefault}>
          <Text variant={TextVariant.BodyMd}>padding: 0</Text>
        </Box>
        <Box padding={1} borderColor={BoxBorderColor.BorderDefault}>
          <Text variant={TextVariant.BodyMd}>padding: 1</Text>
        </Box>
        <Box padding={2} borderColor={BoxBorderColor.BorderDefault}>
          <Text variant={TextVariant.BodyMd}>padding: 2</Text>
        </Box>
        <Box padding={4} borderColor={BoxBorderColor.BorderDefault}>
          <Text variant={TextVariant.BodyMd}>padding: 4</Text>
        </Box>
        <Box padding={6} borderColor={BoxBorderColor.BorderDefault}>
          <Text variant={TextVariant.BodyMd}>padding: 6</Text>
        </Box>
        <Box padding={8} borderColor={BoxBorderColor.BorderDefault}>
          <Text variant={TextVariant.BodyMd}>padding: 8</Text>
        </Box>
        <Box padding={12} borderColor={BoxBorderColor.BorderDefault}>
          <Text variant={TextVariant.BodyMd}>padding: 12</Text>
        </Box>
      </View>
    </ScrollView>
  ),
};
