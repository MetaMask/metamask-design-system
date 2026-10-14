import {
  FontFamily,
  FontStyle,
  FontWeight,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View, ScrollView } from 'react-native';

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
  render: (args) => (
    <ScrollView>
      {Object.keys(TextVariant).map((variantKey) => (
        <TextStory
          key={variantKey}
          {...args}
          variant={TextVariant[variantKey as keyof typeof TextVariant]}
        >
          {variantKey}
        </TextStory>
      ))}
    </ScrollView>
  ),
};

export const Color: Story = {
  render: (args) => (
    <ScrollView>
      {Object.keys(TextColor).map((colorKey) => (
        <TextStory
          key={colorKey}
          {...args}
          color={TextColor[colorKey as keyof typeof TextColor]}
        >
          {colorKey}
        </TextStory>
      ))}
    </ScrollView>
  ),
};

export const FontWeightStory: Story = {
  render: (args) => (
    <View>
      <TextStory {...args} fontWeight={FontWeight.Regular}>
        Regular (400)
      </TextStory>
      <TextStory {...args} fontWeight={FontWeight.Medium}>
        Medium (500)
      </TextStory>
      <TextStory {...args} fontWeight={FontWeight.Bold}>
        Bold (600)
      </TextStory>
    </View>
  ),
  name: 'Font Weight',
};

export const FontFamilyStory: Story = {
  render: (args) => (
    <View style={{ gap: 24 }}>
      <TextStory {...args} fontFamily={FontFamily.Default}>
        Default (Inter)
      </TextStory>
      <TextStory {...args} fontFamily={FontFamily.Accent}>
        Accent (Grotzec Cond)
      </TextStory>
      <TextStory {...args} fontFamily={FontFamily.Hero}>
        Hero (Grotzec Cond)
      </TextStory>
    </View>
  ),
  name: 'Font Family',
};

export const FontStyleStory: Story = {
  render: (args) => (
    <View>
      <TextStory {...args} fontStyle={FontStyle.Normal}>
        Normal
      </TextStory>
      <TextStory {...args} fontStyle={FontStyle.Italic}>
        Italic
      </TextStory>
    </View>
  ),
  name: 'Font Style',
};
