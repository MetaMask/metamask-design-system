import { IconAlertSeverity } from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { IconSize } from '../../types';
import {
  Box,
  BoxAlignItems,
  BoxBackgroundColor,
  BoxFlexDirection,
  BoxFlexWrap,
} from '../Box';
import type { BoxProps } from '../Box';

import { IconAlert } from './IconAlert';
import type { IconAlertProps } from './IconAlert.types';

const meta: Meta<IconAlertProps> = {
  title: 'Components/IconAlert',
  component: IconAlert,
  argTypes: {
    severity: {
      control: 'select',
      options: Object.values(IconAlertSeverity),
    },
    size: {
      control: 'select',
      options: Object.values(IconSize),
    },
  },
};

export default meta;

const IconAlertStoryWrapper: React.FC<BoxProps> = ({ children, ...props }) => (
  <Box
    backgroundColor={BoxBackgroundColor.BackgroundDefault}
    padding={4}
    {...props}
  >
    {children}
  </Box>
);

type Story = StoryObj<IconAlertProps>;

export const Default: Story = {
  args: {
    severity: IconAlertSeverity.Info,
  },
  render: (args) => (
    <IconAlertStoryWrapper>
      <IconAlert {...args} />
    </IconAlertStoryWrapper>
  ),
};

export const Severity: Story = {
  render: () => (
    <IconAlertStoryWrapper
      flexDirection={BoxFlexDirection.Row}
      flexWrap={BoxFlexWrap.Wrap}
      gap={4}
    >
      {Object.values(IconAlertSeverity).map((severity) => (
        <Box key={severity} alignItems={BoxAlignItems.Center} gap={2}>
          <IconAlert severity={severity} size={IconSize.Xl} />
        </Box>
      ))}
    </IconAlertStoryWrapper>
  ),
};

export const Size: Story = {
  render: () => (
    <IconAlertStoryWrapper gap={4}>
      {Object.values(IconSize).map((size) => (
        <IconAlert key={size} severity={IconAlertSeverity.Info} size={size} />
      ))}
    </IconAlertStoryWrapper>
  ),
};
