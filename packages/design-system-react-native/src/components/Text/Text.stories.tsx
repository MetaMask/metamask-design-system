import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View, ScrollView } from 'react-native';

import Text from './Text';
import type { TextProps } from './Text.types';
import {
  TextVariant,
  FontWeight,
  FontStyle,
  TextColor,
  FontFamily,
} from './Text.types';

const meta: Meta<TextProps> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    variant: {
      control: 'select',
      options: TextVariant,
    },
    color: {
      control: 'select',
      options: TextColor,
    },
    fontWeight: {
      control: 'select',
      options: FontWeight,
    },
    fontFamily: {
      control: 'select',
      options: FontFamily,
    },
    fontStyle: {
      control: 'select',
      options: FontStyle,
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

const TextStory: React.FC<TextProps> = ({ color, ...props }) => {
  const tw = useTailwind();
  return (
    <View
      style={[
        tw`p-4 ${
          color?.endsWith('-inverse')
            ? color.replace('inverse', 'default').replace('text', 'bg')
            : 'bg-background-default'
        }`,
      ]}
    >
      <Text color={color} {...props} />
    </View>
  );
};

export const Default: Story = {
  args: {
    variant: TextVariant.BodyMd,
    color: TextColor.TextDefault,
    fontWeight: FontWeight.Regular,
    fontFamily: FontFamily.Default,
    fontStyle: FontStyle.Normal,
    children: 'The quick orange fox jumped over the lazy dog.',
    twClassName: '',
  },
  render: (args) => <TextStory {...args} />,
};

export const Variant: Story = {
  render: () => (
    <ScrollView>
      {Object.keys(TextVariant).map((variantKey) => (
        <TextStory
          key={variantKey}
          variant={TextVariant[variantKey as keyof typeof TextVariant]}
        >
          {variantKey}
        </TextStory>
      ))}
    </ScrollView>
  ),
};

export const Color: Story = {
  render: () => (
    <ScrollView>
      {Object.keys(TextColor).map((colorKey) => (
        <TextStory
          key={colorKey}
          color={TextColor[colorKey as keyof typeof TextColor]}
        >
          {colorKey}
        </TextStory>
      ))}
    </ScrollView>
  ),
};

export const FontWeightStory: Story = {
  render: () => (
    <View>
      <Text fontWeight={FontWeight.Regular}>Regular (400)</Text>
      <Text fontWeight={FontWeight.Medium}>Medium (500)</Text>
      <Text fontWeight={FontWeight.Bold}>Bold (700)</Text>
    </View>
  ),
  name: 'Font Weight',
};

export const FontFamilyStory: Story = {
  render: () => (
    <View>
      <Text fontFamily={FontFamily.Default}>Default (Centra No 1)</Text>
      <Text fontFamily={FontFamily.Accent}>Accent (MM Sans)</Text>
      <Text fontFamily={FontFamily.Hero}>Hero (MM Poly)</Text>
    </View>
  ),
  name: 'Font Family',
};

export const FontStyleStory: Story = {
  render: () => (
    <View>
      <Text fontStyle={FontStyle.Normal}>Normal</Text>
      <Text fontStyle={FontStyle.Italic}>Italic</Text>
    </View>
  ),
  name: 'Font Style',
};
