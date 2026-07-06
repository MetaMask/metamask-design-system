import {
  BoxFlexDirection,
  HelpTextSeverity,
  TextColor,
} from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Box } from '../Box';

import { HelpText } from './HelpText';
import type { HelpTextProps } from './HelpText.types';
import README from './README.mdx';

const meta: Meta<HelpTextProps> = {
  title: 'React Components/HelpText',
  component: HelpText,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    severity: {
      control: 'select',
      options: [undefined, ...Object.keys(HelpTextSeverity)],
      mapping: HelpTextSeverity,
      description: 'Optional semantic severity. When set, overrides `color`.',
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
    className: {
      control: 'text',
      description:
        'Optional CSS class to merge with the component’s default classes.',
    },
  },
};

export default meta;

type Story = StoryObj<HelpTextProps>;

export const Default: Story = {
  args: {
    children: 'Helper message',
  },
};

export const Severity: Story = {
  render: () => (
    <Box flexDirection={BoxFlexDirection.Column} gap={2}>
      {Object.keys(HelpTextSeverity).map((severityKey) => (
        <HelpText
          key={severityKey}
          severity={
            HelpTextSeverity[severityKey as keyof typeof HelpTextSeverity]
          }
        >
          {severityKey} severity message
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
