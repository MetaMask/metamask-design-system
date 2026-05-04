import { IconAlertSeverity } from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { Box } from '../Box';
import { Icon, IconColor, IconName, IconSize } from '../Icon';
import { Text } from '../Text';

import { TitleAlert } from './TitleAlert';
import type { TitleAlertProps } from './TitleAlert.types';

const meta: Meta<TitleAlertProps> = {
  title: 'Components/TitleAlert',
  component: TitleAlert,
  argTypes: {
    severity: {
      control: 'select',
      options: Object.values(IconAlertSeverity),
    },
    title: {
      control: 'text',
    },
    twClassName: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <Box twClassName="w-full bg-background-default p-4">
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
    twClassName: '',
  },
  render: (args) => <TitleAlert {...args} />,
};

export const Severities: Story = {
  render: () => (
    <Box twClassName="gap-6">
      <TitleAlert
        severity={IconAlertSeverity.Info}
        title="Informational title"
      />
      <TitleAlert severity={IconAlertSeverity.Success} title="Success title" />
      <TitleAlert severity={IconAlertSeverity.Warning} title="Warning title" />
      <TitleAlert severity={IconAlertSeverity.Error} title="Error title" />
    </Box>
  ),
};

export const WithTitleAccessories: Story = {
  render: () => (
    <TitleAlert
      severity={IconAlertSeverity.Warning}
      title="High price impact"
      titleStartAccessory={
        <Icon
          name={IconName.Info}
          size={IconSize.Sm}
          color={IconColor.IconAlternative}
        />
      }
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

export const CustomTitleNode: Story = {
  render: () => (
    <TitleAlert
      severity={IconAlertSeverity.Error}
      title={<Text testID="title-alert-custom-title">Custom title node</Text>}
    />
  ),
};
