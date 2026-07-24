import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { Box, BoxBackgroundColor } from '../Box';
import { Icon, IconName } from '../Icon';
import { Text, TextVariant } from '../Text';

import { ActionListItem } from './ActionListItem';
import type { ActionListItemProps } from './ActionListItem.types';

const meta: Meta<ActionListItemProps> = {
  title: 'Components/ActionListItem',
  component: ActionListItem,
  args: {
    label: 'Settings',
    description: 'Manage your account preferences',
  },
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
};

export default meta;
type Story = StoryObj<ActionListItemProps>;

export const Default: Story = {};

export const IconNameStory: Story = {
  name: 'IconName',
  args: {
    iconName: IconName.Setting,
  },
};

export const StartAccessory: Story = {
  args: {
    startAccessory: <Icon name={IconName.Security} />,
  },
};

export const EndAccessory: Story = {
  args: {
    endAccessory: <Icon name={IconName.ArrowRight} />,
  },
};

export const IsDisabled: Story = {
  args: {
    iconName: IconName.Setting,
    isDisabled: true,
  },
};

export const Label: Story = {
  args: {
    label: 'Simple label without description',
    description: undefined,
    iconName: IconName.Apps,
  },
};

export const Description: Story = {
  args: {
    iconName: IconName.Setting,
    endAccessory: <Icon name={IconName.ArrowRight} />,
  },
};

export const TwClassName: Story = {
  args: {
    twClassName: 'rounded-lg',
  },
};

const BACKGROUND_EXAMPLES = [
  {
    label: 'Background default',
    backgroundColor: BoxBackgroundColor.BackgroundDefault,
  },
  {
    label: 'Background alternative',
    backgroundColor: BoxBackgroundColor.BackgroundAlternative,
  },
  {
    label: 'Background section',
    backgroundColor: BoxBackgroundColor.BackgroundSection,
  },
  {
    label: 'Background subsection',
    backgroundColor: BoxBackgroundColor.BackgroundSubsection,
  },
] as const;

export const Backgrounds: Story = {
  render: (args) => (
    <Box twClassName="gap-4">
      {BACKGROUND_EXAMPLES.map(({ label, backgroundColor }) => (
        <Box key={label} backgroundColor={backgroundColor} padding={4}>
          <Text variant={TextVariant.BodySm}>{label}</Text>
          <ActionListItem {...args} />
        </Box>
      ))}
    </Box>
  ),
};
