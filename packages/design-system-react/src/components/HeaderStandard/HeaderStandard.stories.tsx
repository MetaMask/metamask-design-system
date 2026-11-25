import {
  BoxAlignItems,
  BoxBackgroundColor,
  BoxFlexDirection,
  IconName,
  TextVariant,
} from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Box } from '../Box';
import { Text } from '../Text';

import { HeaderStandard } from './HeaderStandard';
import type { HeaderStandardProps } from './HeaderStandard.types';
import README from './README.mdx';

const noopClick = () => undefined;

const meta: Meta<HeaderStandardProps> = {
  title: 'React Components/HeaderStandard',
  component: HeaderStandard,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    className: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <Box
        className="w-full max-w-md"
        backgroundColor={BoxBackgroundColor.BackgroundDefault}
      >
        <Story />
      </Box>
    ),
  ],
};

export default meta;

type Story = StoryObj<HeaderStandardProps>;

export const Default: Story = {
  args: {
    title: 'Header title',
  },
};

export const Subtitle: Story = {
  args: {
    title: 'Settings',
    subtitle: 'Account settings',
    onBack: noopClick,
  },
};

export const OnBack: Story = {
  args: {
    title: 'Settings',
    onBack: noopClick,
  },
};

export const OnClose: Story = {
  args: {
    title: 'Modal title',
    onClose: noopClick,
  },
};

export const BackAndClose: Story = {
  args: {
    title: 'Settings',
    onBack: noopClick,
    onClose: noopClick,
  },
};

export const EndButtonIconProps: Story = {
  args: {
    title: 'Search',
    onBack: noopClick,
    onClose: noopClick,
    endButtonIconProps: [
      {
        iconName: IconName.Search,
        ariaLabel: 'Search',
        onClick: noopClick,
      },
    ],
  },
};

export const Children: Story = {
  render: () => (
    <HeaderStandard onClose={noopClick}>
      <Box
        flexDirection={BoxFlexDirection.Column}
        alignItems={BoxAlignItems.Center}
      >
        <Text variant={TextVariant.HeadingSm}>Custom title</Text>
        <Text variant={TextVariant.BodySm}>Subtitle text</Text>
      </Box>
    </HeaderStandard>
  ),
};
