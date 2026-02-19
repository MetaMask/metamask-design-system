import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { TextVariant, TextColor } from '../Text';

import { SensitiveText } from './SensitiveText';
import { SensitiveTextLength } from './SensitiveText.constants';
import type { SensitiveTextProps } from './SensitiveText.types';

const meta: Meta<SensitiveTextProps> = {
  title: 'Components/SensitiveText',
  component: SensitiveText,
  argTypes: {
    isHidden: { control: 'boolean' },
    length: { control: 'select', options: SensitiveTextLength },
    variant: { control: 'select', options: TextVariant },
    color: { control: 'select', options: TextColor },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<SensitiveTextProps>;

export const Default: Story = {
  args: {
    isHidden: false,
    length: SensitiveTextLength.Short,
    variant: TextVariant.BodyMd,
    color: TextColor.TextDefault,
    children: 'Sensitive Information',
  },
};

export const IsHidden: Story = {
  render: () => (
    <>
      <SensitiveText variant={TextVariant.BodyMd}>
        Visible: Sensitive Information
      </SensitiveText>
      <SensitiveText variant={TextVariant.BodyMd} isHidden>
        Hidden: Sensitive Information
      </SensitiveText>
    </>
  ),
};

export const Length: Story = {
  render: () => (
    <>
      {Object.entries(SensitiveTextLength).map(([key, value]) => (
        <SensitiveText
          key={key}
          variant={TextVariant.BodyMd}
          isHidden
          length={value}
        >
          {`Hidden (${key})`}
        </SensitiveText>
      ))}
      <SensitiveText variant={TextVariant.BodyMd} isHidden length="15">
        Hidden (Custom: 15)
      </SensitiveText>
    </>
  ),
};
