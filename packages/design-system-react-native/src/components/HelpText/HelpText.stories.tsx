import {
  BoxFlexDirection,
  HelpTextSeverity,
  TextColor,
} from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { Box } from '../Box';

import { HelpText } from './HelpText';
import type { HelpTextProps } from './HelpText.types';

const meta: Meta<HelpTextProps> = {
  title: 'Components/HelpText',
  component: HelpText,
  argTypes: {
    severity: {
      control: 'select',
      options: Object.keys(HelpTextSeverity),
      mapping: HelpTextSeverity,
      description: 'Optional semantic severity. When set, overrides `color`.',
    },
    showIcon: {
      control: 'boolean',
      description:
        'When true and `severity` is set, shows a leading IconAlert.',
    },
    color: {
      control: 'select',
      options: Object.keys(TextColor),
      mapping: TextColor,
      description: 'Optional text color. Ignored when `severity` is provided.',
    },
    children: {
      control: 'text',
      description: 'The content of the help text.',
    },
  },
};

export default meta;

type Story = StoryObj<HelpTextProps>;

export const Default: Story = {
  args: {
    children: 'Helper message',
    showIcon: false,
  },
};

export const Severity: Story = {
  render: () => (
    <Box flexDirection={BoxFlexDirection.Column} gap={2}>
      {Object.values(HelpTextSeverity).map((severity) => (
        <HelpText key={severity} severity={severity}>
          {severity} severity message
        </HelpText>
      ))}
    </Box>
  ),
};

export const ShowIcon: Story = {
  render: () => (
    <Box flexDirection={BoxFlexDirection.Column} gap={2}>
      {Object.values(HelpTextSeverity).map((severity) => (
        <HelpText key={severity} severity={severity} showIcon>
          {severity} severity message
        </HelpText>
      ))}
    </Box>
  ),
};

export const Color: Story = {
  render: () => (
    <Box flexDirection={BoxFlexDirection.Column} gap={2}>
      <HelpText color={TextColor.TextDefault}>Default text color</HelpText>
      <HelpText color={TextColor.TextAlternative}>
        Alternative text color
      </HelpText>
      <HelpText color={TextColor.PrimaryDefault}>Primary text color</HelpText>
    </Box>
  ),
};
