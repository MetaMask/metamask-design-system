import { SensitiveTextLength } from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { TextColor, TextVariant } from '../Text';

import README from './README.mdx';
import { SensitiveText } from './SensitiveText';
import type { SensitiveTextProps } from './SensitiveText.types';

const meta: Meta<SensitiveTextProps> = {
  title: 'React Components/SensitiveText',
  component: SensitiveText,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    isHidden: {
      control: 'boolean',
      description:
        'Whether the text content should be hidden. When true, content is replaced with bullet characters.',
    },
    length: {
      control: 'select',
      options: Object.keys(SensitiveTextLength),
      mapping: SensitiveTextLength,
      description:
        'The number of bullet characters to display when hidden. Can be a predefined SensitiveTextLength or a custom numeric string.',
    },
    variant: {
      control: 'select',
      options: Object.keys(TextVariant),
      mapping: TextVariant,
      description: 'Text variant inherited from Text.',
    },
    color: {
      control: 'select',
      options: Object.keys(TextColor),
      mapping: TextColor,
      description: 'Text color inherited from Text.',
    },
    children: { control: 'text' },
    className: {
      control: 'text',
      description: 'Optional CSS classes forwarded to the underlying Text.',
    },
  },
  args: {
    isHidden: false,
    length: SensitiveTextLength.Short,
    variant: TextVariant.BodyMd,
    color: TextColor.TextDefault,
    children: 'Sensitive Information',
  },
};

export default meta;

type Story = StoryObj<SensitiveTextProps>;

export const Default: Story = {};

export const IsHidden: Story = {
  args: {
    isHidden: true,
  },
};

export const Length: Story = {
  args: {
    isHidden: true,
  },
  render: (args) => (
    <div className="flex flex-col gap-2">
      <SensitiveText {...args} length={SensitiveTextLength.Short}>
        Length &quot;short&quot; (6 characters)
      </SensitiveText>
      <SensitiveText {...args} length={SensitiveTextLength.Medium}>
        Length &quot;medium&quot; (9 characters)
      </SensitiveText>
      <SensitiveText {...args} length={SensitiveTextLength.Long}>
        Length &quot;long&quot; (12 characters)
      </SensitiveText>
      <SensitiveText {...args} length={SensitiveTextLength.ExtraLong}>
        Length &quot;extra long&quot; (20 characters)
      </SensitiveText>
      <SensitiveText {...args} length="15">
        Length &quot;15&quot; (15 characters)
      </SensitiveText>
    </div>
  ),
};
