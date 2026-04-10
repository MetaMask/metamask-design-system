import { IconAlertSeverity } from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { Box, BoxAlignItems } from '../Box';

import { HeaderAlert } from './HeaderAlert';
import type { HeaderAlertProps } from './HeaderAlert.types';

const meta: Meta<HeaderAlertProps> = {
  title: 'Components/HeaderAlert',
  component: HeaderAlert,
  argTypes: {
    severity: {
      control: 'select',
      options: Object.values(IconAlertSeverity),
    },
    twClassName: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<HeaderAlertProps>;

export const Default: Story = {
  args: {
    severity: IconAlertSeverity.Info,
    onBack: () => null,
    onClose: () => null,
  },
};

export const Severity: Story = {
  render: () => (
    <Box gap={4}>
      {Object.values(IconAlertSeverity).map((severity) => (
        <Box key={severity} alignItems={BoxAlignItems.Center} gap={2}>
          <HeaderAlert
            severity={severity}
            onBack={() => null}
            onClose={() => null}
            iconAlertProps={{ testID: `header-alert-icon-${severity}` }}
          />
        </Box>
      ))}
    </Box>
  ),
};
