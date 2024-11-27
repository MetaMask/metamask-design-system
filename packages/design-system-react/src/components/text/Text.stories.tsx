import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Text } from './Text';
import {
  TextVariant,
  FontWeight,
  FontStyle,
  TextTransform,
  TextAlign,
  OverflowWrap,
  TextColor,
} from './Text.types';
import README from './README.mdx';
const meta: Meta<typeof Text> = {
  title: 'React Components/Text',
  component: Text,
  parameters: {
    docs: {
      page: README,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'The quick orange fox jumped over the lazy dog.',
  },
};

export const Variant: Story = {
  render: () => (
    <div className="space-y-4">
      <Text variant={TextVariant.DisplayLg}>DisplayLg</Text>
      <Text variant={TextVariant.DisplayMd}>DisplayMd</Text>
      <Text variant={TextVariant.HeadingLg}>HeadingLg</Text>
      <Text variant={TextVariant.HeadingMd}>HeadingMd</Text>
      <Text variant={TextVariant.HeadingSm}>HeadingSm</Text>
      <Text variant={TextVariant.BodyLg}>BodyLg</Text>
      <Text variant={TextVariant.BodyMd}>BodyMd</Text>
      <Text variant={TextVariant.BodySm}>BodySm</Text>
      <Text variant={TextVariant.BodyXs}>BodyXs</Text>
    </div>
  ),
};

export const Color: Story = {
  render: () => (
    <div>
      <Text color={TextColor.TextDefault} className="p-4">
        TextDefault
      </Text>
      <Text color={TextColor.TextAlternative} className="p-4">
        TextAlternative
      </Text>
      <Text color={TextColor.TextMuted} className="p-4">
        TextMuted
      </Text>
      <Text color={TextColor.PrimaryDefault} className="p-4">
        PrimaryDefault
      </Text>
      <Text color={TextColor.PrimaryInverse} className="bg-primary-default p-4">
        PrimaryInverse on bg-primary-default
      </Text>
      <Text color={TextColor.ErrorDefault} className="p-4">
        ErrorDefault
      </Text>
      <Text color={TextColor.ErrorInverse} className="bg-error-default p-4">
        ErrorInverse on bg-error-default
      </Text>
      <Text color={TextColor.SuccessDefault} className="p-4">
        SuccessDefault
      </Text>
      <Text color={TextColor.SuccessInverse} className="bg-success-default p-4">
        SuccessInverse on bg-success-default
      </Text>
      <Text color={TextColor.WarningDefault} className="p-4">
        WarningDefault
      </Text>
      <Text color={TextColor.WarningInverse} className="bg-warning-default p-4">
        WarningInverse on bg-warning-default
      </Text>
      <Text color={TextColor.InfoDefault} className="p-4">
        InfoDefault
      </Text>
      <Text color={TextColor.InfoInverse} className="bg-info-default p-4">
        InfoInverse on bg-info-default
      </Text>
    </div>
  ),
};

export const FontWeightStory: Story = {
  render: () => (
    <div className="space-y-4">
      <Text fontWeight={FontWeight.Normal}>Normal (400)</Text>
      <Text fontWeight={FontWeight.Medium}>Medium (500)</Text>
      <Text fontWeight={FontWeight.Bold}>Bold (700)</Text>
    </div>
  ),
};
FontWeightStory.storyName = 'Font Weight';

export const FontStyleStory: Story = {
  render: () => (
    <div className="space-y-4">
      <Text fontStyle={FontStyle.Normal}>Normal</Text>
      <Text fontStyle={FontStyle.Italic}>Italic</Text>
    </div>
  ),
};
FontStyleStory.storyName = 'Font Style';

export const TextTransformStory: Story = {
  render: () => (
    <div className="space-y-4">
      <Text textTransform={TextTransform.Uppercase}>uppercase</Text>
      <Text textTransform={TextTransform.Lowercase}>lowercase</Text>
      <Text textTransform={TextTransform.Capitalize}>capitalize</Text>
    </div>
  ),
};
TextTransformStory.storyName = 'Text Transform';

export const TextAlignStory: Story = {
  render: () => (
    <div className="space-y-4">
      <Text textAlign={TextAlign.Left}>Left aligned</Text>
      <Text textAlign={TextAlign.Center}>Center aligned</Text>
      <Text textAlign={TextAlign.Right}>Right aligned</Text>
      <Text textAlign={TextAlign.Justify}>Justify aligned</Text>
    </div>
  ),
};
TextAlignStory.storyName = 'Text Align';

export const OverflowWrapStory: Story = {
  render: () => (
    <div className="w-[200px] border border-warning">
      <Text overflowWrap={OverflowWrap.Normal}>
        Normal: 0x39013f961c378f02c2b82a6e1d31e9812786fd9d
      </Text>
      <Text overflowWrap={OverflowWrap.Anywhere}>
        Break-word: 0x39013f961c378f02c2b82a6e1d31e9812786fd9d
      </Text>
    </div>
  ),
};
OverflowWrapStory.storyName = 'OverflowWrap';

export const Ellipsis: Story = {
  render: () => (
    <div className="w-1/3 border border-primary">
      <Text ellipsis>Ellipsis: 0x39013f961c378f02c2b82a6e1d31e9812786fd9d</Text>
      <Text>No Ellipsis: 0x39013f961c378f02c2b82a6e1d31e9812786fd9d</Text>
    </div>
  ),
};

export const AsChild: Story = {
  render: () => (
    <div className="space-y-4">
      <Text asChild className="block">
        <span>Text rendered as span</span>
      </Text>
      <Text asChild className="block">
        <button type="button" onClick={action('button-clicked')}>
          Text rendered as button
        </button>
      </Text>
      <Text asChild className="bg-default border border-default">
        <input
          type="text"
          placeholder="Rendered as input"
          defaultValue="Text component as input"
        />
      </Text>
    </div>
  ),
};
