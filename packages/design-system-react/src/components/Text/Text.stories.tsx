import {
  FontFamily,
  FontStyle,
  FontWeight,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { OverflowWrap, TextAlign, TextTransform } from '../../types';

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
        'Optional prop to control the font weight of the text. Normal: 400, Medium: 500, Bold: 600',
    },
    fontFamily: {
      control: 'select',
      options: Object.keys(FontFamily),
      mapping: FontFamily,
      description:
        'Optional prop to adjust the font family. Default: Inter, Hero: Grotzec Cond',
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
  render: (args) => (
    <div className="space-y-4">
      <Text {...args} variant={TextVariant.DisplayXl}>
        DisplayXl
      </Text>
      <Text {...args} variant={TextVariant.DisplayLg}>
        DisplayLg
      </Text>
      <Text {...args} variant={TextVariant.DisplayMd}>
        DisplayMd
      </Text>
      <Text {...args} variant={TextVariant.HeadingLg}>
        HeadingLg
      </Text>
      <Text {...args} variant={TextVariant.HeadingMd}>
        HeadingMd
      </Text>
      <Text {...args} variant={TextVariant.HeadingSm}>
        HeadingSm
      </Text>
      <Text {...args} variant={TextVariant.BodyLg}>
        BodyLg
      </Text>
      <Text {...args} variant={TextVariant.BodyMd}>
        BodyMd
      </Text>
      <Text {...args} variant={TextVariant.BodySm}>
        BodySm
      </Text>
      <Text {...args} variant={TextVariant.BodyXs}>
        BodyXs
      </Text>
      <Text {...args} variant={TextVariant.PageHeading}>
        PageHeading
      </Text>
      <Text {...args} variant={TextVariant.SectionHeading}>
        SectionHeading
      </Text>
      <Text {...args} variant={TextVariant.ButtonLabelMd} className="block">
        ButtonLabelMd
      </Text>
      <Text {...args} variant={TextVariant.ButtonLabelLg} className="block">
        ButtonLabelLg
      </Text>
      <Text {...args} variant={TextVariant.AmountDisplayLg} className="block">
        AmountDisplayLg
      </Text>
    </div>
  ),
};

export const Color: Story = {
  render: (args) => (
    <div>
      <Text {...args} color={TextColor.TextDefault} className="p-4">
        TextDefault
      </Text>
      <Text {...args} color={TextColor.TextAlternative} className="p-4">
        TextAlternative
      </Text>
      <Text {...args} color={TextColor.TextMuted} className="p-4">
        TextMuted
      </Text>
      <Text {...args} color={TextColor.PrimaryDefault} className="p-4">
        PrimaryDefault
      </Text>
      <Text {...args} color={TextColor.PrimaryDefaultHover} className="p-4">
        PrimaryDefaultHover
      </Text>
      <Text {...args} color={TextColor.PrimaryDefaultPressed} className="p-4">
        PrimaryDefaultPressed
      </Text>
      <Text
        {...args}
        color={TextColor.PrimaryInverse}
        className="bg-primary-default p-4"
      >
        PrimaryInverse on bg-primary-default
      </Text>
      <Text {...args} color={TextColor.ErrorDefault} className="p-4">
        ErrorDefault
      </Text>
      <Text {...args} color={TextColor.ErrorDefaultHover} className="p-4">
        ErrorDefaultHover
      </Text>
      <Text {...args} color={TextColor.ErrorDefaultPressed} className="p-4">
        ErrorDefaultPressed
      </Text>
      <Text
        {...args}
        color={TextColor.ErrorInverse}
        className="bg-error-default p-4"
      >
        ErrorInverse on bg-error-default
      </Text>
      <Text {...args} color={TextColor.SuccessDefault} className="p-4">
        SuccessDefault
      </Text>
      <Text {...args} color={TextColor.SuccessDefaultHover} className="p-4">
        SuccessDefaultHover
      </Text>
      <Text {...args} color={TextColor.SuccessDefaultPressed} className="p-4">
        SuccessDefaultPressed
      </Text>
      <Text
        {...args}
        color={TextColor.SuccessInverse}
        className="bg-success-default p-4"
      >
        SuccessInverse on bg-success-default
      </Text>
      <Text {...args} color={TextColor.WarningDefault} className="p-4">
        WarningDefault
      </Text>
      <Text {...args} color={TextColor.WarningDefaultHover} className="p-4">
        WarningDefaultHover
      </Text>
      <Text {...args} color={TextColor.WarningDefaultPressed} className="p-4">
        WarningDefaultPressed
      </Text>
      <Text
        {...args}
        color={TextColor.WarningInverse}
        className="bg-warning-default p-4"
      >
        WarningInverse on bg-warning-default
      </Text>
      <Text {...args} color={TextColor.InfoDefault} className="p-4">
        InfoDefault
      </Text>
      <Text
        {...args}
        color={TextColor.InfoInverse}
        className="bg-info-default p-4"
      >
        InfoInverse on bg-info-default
      </Text>
    </div>
  ),
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: false, // Showcasing all text colors including muted variant
          },
        ],
      },
    },
  },
};

export const FontWeightStory: Story = {
  render: (args) => (
    <div className="space-y-4">
      <Text {...args} fontWeight={FontWeight.Regular}>
        Regular (400)
      </Text>
      <Text {...args} fontWeight={FontWeight.Medium}>
        Medium (500)
      </Text>
      <Text {...args} fontWeight={FontWeight.Bold}>
        Bold (600)
      </Text>
    </div>
  ),
  name: 'Font Weight',
};

export const FontFamilyStory: Story = {
  render: (args) => (
    <div className="space-y-4">
      <Text {...args} fontFamily={FontFamily.Default}>
        Default (Inter)
      </Text>
      <Text {...args} fontFamily={FontFamily.Hero}>
        Hero (Grotzec Cond)
      </Text>
    </div>
  ),
  name: 'Font Family',
};

export const FontStyleStory: Story = {
  render: (args) => (
    <div className="space-y-4">
      <Text {...args} fontStyle={FontStyle.Normal}>
        Normal
      </Text>
      <Text {...args} fontStyle={FontStyle.Italic}>
        Italic
      </Text>
    </div>
  ),
  name: 'Font Style',
};

export const TextTransformStory: Story = {
  render: (args) => (
    <div className="space-y-4">
      <Text {...args} textTransform={TextTransform.Uppercase}>
        uppercase
      </Text>
      <Text {...args} textTransform={TextTransform.Lowercase}>
        lowercase
      </Text>
      <Text {...args} textTransform={TextTransform.Capitalize}>
        capitalize
      </Text>
    </div>
  ),
  name: 'Text Transform',
};

export const TextAlignStory: Story = {
  render: (args) => (
    <div className="space-y-4">
      <Text {...args} textAlign={TextAlign.Left}>
        Left aligned
      </Text>
      <Text {...args} textAlign={TextAlign.Center}>
        Center aligned
      </Text>
      <Text {...args} textAlign={TextAlign.Right}>
        Right aligned
      </Text>
      <Text {...args} textAlign={TextAlign.Justify}>
        Justify aligned
      </Text>
    </div>
  ),
  name: 'Text Align',
};

export const OverflowWrapStory: Story = {
  render: (args) => (
    <div className="w-48 border border-warning-default">
      <Text {...args} overflowWrap={OverflowWrap.Normal}>
        Normal: 0x39013f961c378f02c2b82a6e1d31e9812786fd9d
      </Text>
      <Text {...args} overflowWrap={OverflowWrap.Anywhere}>
        Break-word: 0x39013f961c378f02c2b82a6e1d31e9812786fd9d
      </Text>
    </div>
  ),
  name: 'Overflow Wrap',
};

export const Ellipsis: Story = {
  render: (args) => (
    <div className="w-48 border border-primary-default">
      <Text {...args} ellipsis>
        Ellipsis: 0x39013f961c378f02c2b82a6e1d31e9812786fd9d
      </Text>
      <Text {...args} ellipsis={false}>
        No Ellipsis: 0x39013f961c378f02c2b82a6e1d31e9812786fd9d
      </Text>
    </div>
  ),
};

export const AsChild: Story = {
  render: (args) => (
    <div className="space-y-4">
      <Text {...args} asChild className="block">
        <span>Text rendered as span</span>
      </Text>
      <Text {...args} asChild className="block">
        <button
          type="button"
          onClick={() => {
            // eslint-disable-next-line no-alert
            alert('button-clicked');
          }}
        >
          Text rendered as button
        </button>
      </Text>
      <Text {...args} asChild className="border border-default bg-default">
        <input
          type="text"
          placeholder="Rendered as input"
          defaultValue="Text component as input"
        />
      </Text>
    </div>
  ),
};
