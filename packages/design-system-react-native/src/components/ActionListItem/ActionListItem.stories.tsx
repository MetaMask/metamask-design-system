import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { Box, BoxBackgroundColor } from '../Box';
import { Icon, IconName } from '../Icon';
import { Text, TextVariant } from '../Text';

import { ActionListItem } from './ActionListItem';
import type { ActionListItemProps } from './ActionListItem.types';

const SAMPLE_ACTIONLISTITEM_PROPS: ActionListItemProps = {
  label: 'Settings',
  description: 'Manage your account preferences',
};

const meta: Meta<ActionListItemProps> = {
  title: 'Components Temp / ActionListItem',
  component: ActionListItem,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    iconName: {
      options: IconName,
      control: { type: 'select' },
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
    onPress: { action: 'pressed' },
    twClassName: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <Box
        backgroundColor={BoxBackgroundColor.BackgroundAlternative}
        padding={4}
      >
        <Text variant={TextVariant.BodySm}>Content behind list item</Text>
        <Box padding={2} />
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<ActionListItemProps>;

export const Default: Story = {
  args: {
    ...SAMPLE_ACTIONLISTITEM_PROPS,
  },
};

export const IconNameStory: Story = {
  name: 'IconName',
  args: {
    ...SAMPLE_ACTIONLISTITEM_PROPS,
    iconName: IconName.Setting,
  },
};

export const StartAccessory: Story = {
  args: {
    ...SAMPLE_ACTIONLISTITEM_PROPS,
    startAccessory: <Icon name={IconName.Security} />,
  },
};

export const EndAccessory: Story = {
  args: {
    ...SAMPLE_ACTIONLISTITEM_PROPS,
    endAccessory: <Icon name={IconName.ArrowRight} />,
  },
};

export const IsDisabled: Story = {
  args: {
    ...SAMPLE_ACTIONLISTITEM_PROPS,
    iconName: IconName.Setting,
    isDisabled: true,
  },
};

export const Label: Story = {
  args: {
    label: 'Simple label without description',
    iconName: IconName.Apps,
  },
};

export const Description: Story = {
  args: {
    ...SAMPLE_ACTIONLISTITEM_PROPS,
    iconName: IconName.Setting,
    endAccessory: <Icon name={IconName.ArrowRight} />,
  },
};

export const TwClassName: Story = {
  args: {
    ...SAMPLE_ACTIONLISTITEM_PROPS,
    twClassName: 'rounded-lg',
  },
};
