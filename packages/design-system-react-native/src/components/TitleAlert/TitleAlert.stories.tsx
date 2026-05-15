import { IconAlertSeverity } from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { Box, BoxBackgroundColor, BoxFlexDirection } from '../Box';
import type { BoxProps } from '../Box';
import { Icon, IconColor, IconName, IconSize } from '../Icon';
import { Text } from '../Text';

import { TitleAlert } from './TitleAlert';
import type { TitleAlertProps } from './TitleAlert.types';

const SAMPLE_DESCRIPTION =
  'You are swapping at an unfavorable rate. Review before you continue.';

const TitleAlertStoryWrapper: React.FC<BoxProps> = ({ children, ...props }) => (
  <Box
    backgroundColor={BoxBackgroundColor.BackgroundDefault}
    padding={4}
    twClassName="w-full"
    {...props}
  >
    {children}
  </Box>
);

const meta: Meta<TitleAlertProps> = {
  title: 'Components/TitleAlert',
  component: TitleAlert,
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
      <TitleAlertStoryWrapper>
        <Story />
      </TitleAlertStoryWrapper>
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
    <Box flexDirection={BoxFlexDirection.Column} gap={6} twClassName="w-full">
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
        severity={IconAlertSeverity.Error}
        title="Error title"
        description={SAMPLE_DESCRIPTION}
      />
    </Box>
  ),
};

export const Title: Story = {
  render: () => (
    <TitleAlert
      severity={IconAlertSeverity.Error}
      title={<Text>Custom title node</Text>}
      description={SAMPLE_DESCRIPTION}
    />
  ),
};

export const TitleStartAccessory: Story = {
  render: () => (
    <TitleAlert
      severity={IconAlertSeverity.Warning}
      title="High price impact"
      description={SAMPLE_DESCRIPTION}
      titleStartAccessory={
        <Icon
          name={IconName.Ai}
          size={IconSize.Sm}
          color={IconColor.IconAlternative}
        />
      }
    />
  ),
};

export const TitleEndAccessory: Story = {
  render: () => (
    <TitleAlert
      severity={IconAlertSeverity.Warning}
      title="High price impact"
      description={SAMPLE_DESCRIPTION}
      titleEndAccessory={
        <Icon
          name={IconName.Info}
          size={IconSize.Sm}
          color={IconColor.IconAlternative}
        />
      }
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
