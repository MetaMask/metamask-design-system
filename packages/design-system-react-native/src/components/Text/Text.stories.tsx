import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View, ScrollView } from 'react-native';

import {
  TextVariant,
  TextColor,
  FontWeight,
  FontFamily,
  FontStyle,
} from '../../types';

import { Text } from './Text';
import type { TextProps } from './Text.types';

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
        tw`${
          color?.endsWith('-inverse')
            ? color.replace('inverse', 'default').replace('text', 'bg')
            : 'bg-default'
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
      <Text fontFamily={FontFamily.Default}>Default (Geist)</Text>
      <Text fontFamily={FontFamily.Accent}>Accent (MM Sans)</Text>
      <Text fontFamily={FontFamily.Hero}>Hero (MM Poly)</Text>
    </View>
  ),
  name: 'Font Family',
};

export const AllVariantsWithFontFamilies: Story = {
  render: () => {
    const tw = useTailwind();
    return (
      <ScrollView style={tw`p-4`}>
        <View style={tw`mb-8`}>
          <Text variant={TextVariant.HeadingSm} twClassName="mb-4">
            Default Font Family (Geist)
          </Text>
          <View style={tw`gap-2`}>
            <Text
              variant={TextVariant.DisplayLg}
              fontFamily={FontFamily.Default}
            >
              DisplayLg - The quick orange fox
            </Text>
            <Text
              variant={TextVariant.DisplayMd}
              fontFamily={FontFamily.Default}
            >
              DisplayMd - The quick orange fox
            </Text>
            <Text
              variant={TextVariant.HeadingLg}
              fontFamily={FontFamily.Default}
            >
              HeadingLg - The quick orange fox
            </Text>
            <Text
              variant={TextVariant.HeadingMd}
              fontFamily={FontFamily.Default}
            >
              HeadingMd - The quick orange fox
            </Text>
            <Text
              variant={TextVariant.HeadingSm}
              fontFamily={FontFamily.Default}
            >
              HeadingSm - The quick orange fox
            </Text>
            <Text variant={TextVariant.BodyLg} fontFamily={FontFamily.Default}>
              BodyLg - The quick orange fox
            </Text>
            <Text variant={TextVariant.BodyMd} fontFamily={FontFamily.Default}>
              BodyMd - The quick orange fox
            </Text>
            <Text variant={TextVariant.BodySm} fontFamily={FontFamily.Default}>
              BodySm - The quick orange fox
            </Text>
            <Text variant={TextVariant.BodyXs} fontFamily={FontFamily.Default}>
              BodyXs - The quick orange fox
            </Text>
          </View>
        </View>

        <View style={tw`mb-8`}>
          <Text variant={TextVariant.HeadingSm} twClassName="mb-4">
            Accent Font Family (MM Sans)
          </Text>
          <View style={tw`gap-2`}>
            <Text
              variant={TextVariant.DisplayLg}
              fontFamily={FontFamily.Accent}
            >
              DisplayLg - The quick orange fox
            </Text>
            <Text
              variant={TextVariant.DisplayMd}
              fontFamily={FontFamily.Accent}
            >
              DisplayMd - The quick orange fox
            </Text>
            <Text
              variant={TextVariant.HeadingLg}
              fontFamily={FontFamily.Accent}
            >
              HeadingLg - The quick orange fox
            </Text>
            <Text
              variant={TextVariant.HeadingMd}
              fontFamily={FontFamily.Accent}
            >
              HeadingMd - The quick orange fox
            </Text>
            <Text
              variant={TextVariant.HeadingSm}
              fontFamily={FontFamily.Accent}
            >
              HeadingSm - The quick orange fox
            </Text>
            <Text variant={TextVariant.BodyLg} fontFamily={FontFamily.Accent}>
              BodyLg - The quick orange fox
            </Text>
            <Text variant={TextVariant.BodyMd} fontFamily={FontFamily.Accent}>
              BodyMd - The quick orange fox
            </Text>
            <Text variant={TextVariant.BodySm} fontFamily={FontFamily.Accent}>
              BodySm - The quick orange fox
            </Text>
            <Text variant={TextVariant.BodyXs} fontFamily={FontFamily.Accent}>
              BodyXs - The quick orange fox
            </Text>
          </View>
        </View>

        <View style={tw`mb-8`}>
          <Text variant={TextVariant.HeadingSm} twClassName="mb-4">
            Hero Font Family (MM Poly) - Always renders with regular weight
          </Text>
          <View style={tw`gap-2`}>
            <Text variant={TextVariant.DisplayLg} fontFamily={FontFamily.Hero}>
              DisplayLg - THE QUICK ORANGE FOX
            </Text>
            <Text variant={TextVariant.DisplayMd} fontFamily={FontFamily.Hero}>
              DisplayMd - THE QUICK ORANGE FOX
            </Text>
            <Text variant={TextVariant.HeadingLg} fontFamily={FontFamily.Hero}>
              HeadingLg - THE QUICK ORANGE FOX
            </Text>
            <Text variant={TextVariant.HeadingMd} fontFamily={FontFamily.Hero}>
              HeadingMd - THE QUICK ORANGE FOX
            </Text>
            <Text variant={TextVariant.HeadingSm} fontFamily={FontFamily.Hero}>
              HeadingSm - THE QUICK ORANGE FOX
            </Text>
            <Text variant={TextVariant.BodyLg} fontFamily={FontFamily.Hero}>
              BodyLg - THE QUICK ORANGE FOX
            </Text>
            <Text variant={TextVariant.BodyMd} fontFamily={FontFamily.Hero}>
              BodyMd - THE QUICK ORANGE FOX
            </Text>
            <Text variant={TextVariant.BodySm} fontFamily={FontFamily.Hero}>
              BodySm - THE QUICK ORANGE FOX
            </Text>
            <Text variant={TextVariant.BodyXs} fontFamily={FontFamily.Hero}>
              BodyXs - THE QUICK ORANGE FOX
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  },
  name: 'All Variants with Font Families',
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
