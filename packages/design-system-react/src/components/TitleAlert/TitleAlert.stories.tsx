import {
  BoxBackgroundColor,
  BoxFlexDirection,
  IconAlertSeverity,
} from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Box } from '../Box';
import { Text } from '../Text';

import README from './README.mdx';
import { TitleAlert } from './TitleAlert';
import type { TitleAlertProps } from './TitleAlert.types';

const SAMPLE_DESCRIPTION =
  'You are swapping at an unfavorable rate. Review before you continue.';

const meta: Meta<TitleAlertProps> = {
  title: 'React Components/TitleAlert',
  component: TitleAlert,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    severity: {
      control: 'select',
      options: Object.values(IconAlertSeverity),
      description: 'Alert tone for the IconAlert above the title',
    },
    title: {
      control: 'text',
      description:
        'Title row; strings use HeadingLg + TextDefault (merged with titleProps)',
    },
    description: {
      control: 'text',
      description:
        'Optional copy below the title; strings use BodySm medium + TextAlternative (merged with descriptionProps)',
    },
  },
  decorators: [
    (Story) => (
      <Box
        className="w-full max-w-md"
        backgroundColor={BoxBackgroundColor.BackgroundDefault}
        padding={4}
      >
        <Story />
      </Box>
    ),
  ],
};

export default meta;

type Story = StoryObj<TitleAlertProps>;

export const Default: Story = {
  args: {
    severity: IconAlertSeverity.Warning,
    title: 'High price impact',
    description: SAMPLE_DESCRIPTION,
  },
};

export const Severity: Story = {
  render: () => (
    <Box flexDirection={BoxFlexDirection.Column} gap={6} className="w-full">
      <TitleAlert
        severity={IconAlertSeverity.Info}
        title="Informational title"
        description={SAMPLE_DESCRIPTION}
      />
      <TitleAlert
        severity={IconAlertSeverity.Success}
        title="Success title"
        description={SAMPLE_DESCRIPTION}
      />
      <TitleAlert
        severity={IconAlertSeverity.Warning}
        title="Warning title"
        description={SAMPLE_DESCRIPTION}
      />
      <TitleAlert
        severity={IconAlertSeverity.Danger}
        title="Error title"
        description={SAMPLE_DESCRIPTION}
      />
    </Box>
  ),
};

export const Title: Story = {
  render: () => (
    <TitleAlert
      severity={IconAlertSeverity.Danger}
      title={<Text>Custom title node</Text>}
      description={SAMPLE_DESCRIPTION}
    />
  ),
};

export const Description: Story = {
  render: () => (
    <TitleAlert
      severity={IconAlertSeverity.Warning}
      title="High price impact"
      description={<Text>Custom description node</Text>}
    />
  ),
};
