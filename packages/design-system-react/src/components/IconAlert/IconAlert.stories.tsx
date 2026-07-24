import {
  BoxAlignItems,
  BoxBackgroundColor,
  BoxFlexDirection,
  BoxFlexWrap,
  IconAlertSeverity,
  IconSize,
} from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Box } from '../Box';
import type { BoxProps } from '../Box';

import { IconAlert } from './IconAlert';
import type { IconAlertProps } from './IconAlert.types';
import README from './README.mdx';

const meta: Meta<IconAlertProps> = {
  title: 'React Components/IconAlert',
  component: IconAlert,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    severity: {
      control: 'select',
      options: Object.keys(IconAlertSeverity),
      mapping: IconAlertSeverity,
      description:
        'Maps to a fixed icon and theme color for alerts and messaging.',
    },
    size: {
      control: 'select',
      options: Object.keys(IconSize),
      mapping: IconSize,
      description: 'Optional icon size.',
    },
    className: {
      control: 'text',
      description:
        'Optional CSS class to merge with the component’s default classes.',
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
