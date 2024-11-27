import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import Text from './Text';
import type { TextProps } from './Text.types';
import { TextVariant, FontWeight, FontStyle, TextColor } from './Text.types';

const meta: Meta<TextProps> = {
  title: 'Components/Text',
  component: Text,
  args: {
    variant: TextVariant.BodyMd,
    color: TextColor.TextDefault,
    fontWeight: FontWeight.Normal,
    fontStyle: FontStyle.Normal,
    children: 'The quick orange fox jumped over the lazy dog.',
    twClassName: '',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(TextVariant),
    },
    color: {
      control: 'select',
      options: Object.values(TextColor),
    },
    fontWeight: {
      control: 'select',
      options: Object.values(FontWeight),
    },
    fontStyle: {
      control: 'select',
      options: Object.values(FontStyle),
    },
    children: {
      control: 'text',
    },
    twClassName: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<TextProps>;

export const Default: Story = {
  args: {
    variant: TextVariant.BodyMd,
    color: TextColor.TextDefault,
    fontWeight: FontWeight.Normal,
    fontStyle: FontStyle.Normal,
    children: 'The quick orange fox jumped over the lazy dog.',
    twClassName: '',
  },
  render: (args) => <Text {...args} />,
};

export const Variant: Story = {
  render: () => (
    <View>
      <Text variant={TextVariant.DisplayMd}>DisplayMd</Text>
      <Text variant={TextVariant.HeadingLg}>HeadingLg</Text>
      <Text variant={TextVariant.HeadingMd}>HeadingMd</Text>
      <Text variant={TextVariant.HeadingSm}>HeadingSm</Text>
      <Text variant={TextVariant.BodyLg}>BodyLg</Text>
      <Text variant={TextVariant.BodyMd}>BodyMd</Text>
      <Text variant={TextVariant.BodySm}>BodySm</Text>
      <Text variant={TextVariant.BodyXs}>BodyXs</Text>
    </View>
  ),
};

export const Color: Story = {
  render: () => (
    <View>
      <Text color={TextColor.TextDefault} twClassName="p-4">
        TextDefault
      </Text>
      <Text color={TextColor.TextAlternative} twClassName="p-4">
        TextAlternative
      </Text>
      <Text color={TextColor.TextMuted} twClassName="p-4">
        TextMuted
      </Text>
      <Text color={TextColor.PrimaryDefault} twClassName="p-4">
        PrimaryDefault
      </Text>
      <Text
        color={TextColor.PrimaryInverse}
        twClassName="bg-primary-default p-4"
      >
        PrimaryInverse on bg-primary-default
      </Text>
      <Text color={TextColor.ErrorDefault} twClassName="p-4">
        ErrorDefault
      </Text>
      <Text color={TextColor.ErrorInverse} twClassName="bg-error-default p-4">
        ErrorInverse on bg-error-default
      </Text>
      <Text color={TextColor.SuccessDefault} twClassName="p-4">
        SuccessDefault
      </Text>
      <Text
        color={TextColor.SuccessInverse}
        twClassName="bg-success-default p-4"
      >
        SuccessInverse on bg-success-default
      </Text>
      <Text color={TextColor.WarningDefault} twClassName="p-4">
        WarningDefault
      </Text>
      <Text
        color={TextColor.WarningInverse}
        twClassName="bg-warning-default p-4"
      >
        WarningInverse on bg-warning-default
      </Text>
      <Text color={TextColor.InfoDefault} twClassName="p-4">
        InfoDefault
      </Text>
      <Text color={TextColor.InfoInverse} twClassName="bg-info-default p-4">
        InfoInverse on bg-info-default
      </Text>
    </View>
  ),
};

export const FontWeightStory: Story = {
  render: () => (
    <View>
      <Text fontWeight={FontWeight.Normal}>Normal (400)</Text>
      <Text fontWeight={FontWeight.Medium}>Medium (500)</Text>
      <Text fontWeight={FontWeight.Bold}>Bold (700)</Text>
    </View>
  ),
};
FontWeightStory.storyName = 'Font Weight';

export const FontStyleStory: Story = {
  render: () => (
    <View>
      <Text fontStyle={FontStyle.Normal}>Normal</Text>
      <Text fontStyle={FontStyle.Italic}>Italic</Text>
    </View>
  ),
};
FontStyleStory.storyName = 'Font Style';
