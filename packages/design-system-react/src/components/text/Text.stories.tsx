import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import {
  TextVariant,
  FontWeight,
  FontFamily,
  FontStyle,
  TextTransform,
  TextAlign,
  OverflowWrap,
  TextColor,
} from '../../types';
import README from './README.mdx';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'React Components/Text',
  component: Text,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description:
        'The text content or elements to be rendered within the component.',
    },
    variant: {
      control: 'select',
      options: Object.keys(TextVariant),
      mapping: TextVariant,
      description:
        'Optional prop to change the font size of the component. The Text component uses responsive font sizes. Different variants map to specific HTML elements by default.',
    },
    color: {
      control: 'select',
      options: Object.keys(TextColor),
      mapping: TextColor,
      description:
        'Optional prop that sets the color of the text using predefined theme colors.',
    },
    fontWeight: {
      control: 'select',
      options: Object.keys(FontWeight),
      mapping: FontWeight,
      description:
        'Optional prop to control the font weight of the text. Normal: 400, Medium: 500, Bold: 700',
    },
    fontFamily: {
      control: 'select',
      options: Object.keys(FontFamily),
      mapping: FontFamily,
      description:
        'Optional prop to adjust the font family. Default: CentraNo1, Accent: MMSans, Hero: MMPoly',
    },
    fontStyle: {
      control: 'select',
      options: Object.keys(FontStyle),
      mapping: FontStyle,
      description: 'Optional prop to control the font style of the text.',
    },
    textTransform: {
      control: 'select',
      options: Object.keys(TextTransform),
      mapping: TextTransform,
      description: 'Optional prop to apply text transformation to the content.',
    },
    textAlign: {
      control: 'select',
      options: Object.keys(TextAlign),
      mapping: TextAlign,
      description:
        'Optional prop to control the text alignment within its container.',
    },
    overflowWrap: {
      control: 'select',
      options: Object.keys(OverflowWrap),
      mapping: OverflowWrap,
      description:
        'Optional prop to determine how text should wrap when it reaches the edge of its container.',
    },
    ellipsis: {
      control: 'boolean',
      description:
        'Optional prop that when true, adds an ellipsis (...) when text overflows its container.',
    },
    asChild: {
      control: 'boolean',
      description:
        'Optional boolean that determines if the component should merge its props onto its immediate child instead of rendering a default DOM element.',
    },
    className: {
      control: 'text',
      description:
        'Optional prop for additional CSS classes to be applied to the Text component.',
    },
    style: {
      control: 'object',
      description: 'Optional prop for inline styles.',
    },
  },
  args: {
    children: 'The quick orange fox jumped over the lazy dog.',
    variant: TextVariant.BodyMd,
    color: TextColor.TextDefault,
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
      <Text fontWeight={FontWeight.Regular}>Regular (400)</Text>
      <Text fontWeight={FontWeight.Medium}>Medium (500)</Text>
      <Text fontWeight={FontWeight.Bold}>Bold (700)</Text>
    </div>
  ),
  name: 'Font Weight',
};

export const FontFamilyStory: Story = {
  render: () => (
    <div className="space-y-4">
      <Text fontFamily={FontFamily.Default}>Default (CentraNo1)</Text>
      <Text fontFamily={FontFamily.Accent}>Accent (MMSans)</Text>
      <Text fontFamily={FontFamily.Hero}>Hero (MMPoly)</Text>
    </div>
  ),
  name: 'Font Family',
};

export const FontStyleStory: Story = {
  render: () => (
    <div className="space-y-4">
      <Text fontStyle={FontStyle.Normal}>Normal</Text>
      <Text fontStyle={FontStyle.Italic}>Italic</Text>
    </div>
  ),
  name: 'Font Style',
};

export const TextTransformStory: Story = {
  render: () => (
    <div className="space-y-4">
      <Text textTransform={TextTransform.Uppercase}>uppercase</Text>
      <Text textTransform={TextTransform.Lowercase}>lowercase</Text>
      <Text textTransform={TextTransform.Capitalize}>capitalize</Text>
    </div>
  ),
  name: 'Text Transform',
};

export const TextAlignStory: Story = {
  render: () => (
    <div className="space-y-4">
      <Text textAlign={TextAlign.Left}>Left aligned</Text>
      <Text textAlign={TextAlign.Center}>Center aligned</Text>
      <Text textAlign={TextAlign.Right}>Right aligned</Text>
      <Text textAlign={TextAlign.Justify}>Justify aligned</Text>
    </div>
  ),
  name: 'Text Align',
};

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
  name: 'Overflow Wrap',
};

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
        <button
          type="button"
          onClick={() => {
            // eslint-disable-next-line no-alert, no-restricted-globals
            alert('button-clicked');
          }}
        >
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
