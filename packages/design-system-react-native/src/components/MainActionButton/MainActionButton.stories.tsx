import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { IconName } from '../Icon';

import { MainActionButton } from './MainActionButton';
import type { MainActionButtonProps } from './MainActionButton.types';

const meta: Meta<MainActionButtonProps> = {
  title: 'Components/MainActionButton',
  component: MainActionButton,
  argTypes: {
    iconName: {
      control: 'select',
      options: IconName,
    },
    label: {
      control: 'text',
    },
    isDisabled: {
      control: 'boolean',
    },
    twClassName: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<MainActionButtonProps>;

export const Default: Story = {
  args: {
    iconName: IconName.Add,
    label: 'Add',
    isDisabled: false,
  },
};

export const IsDisabled: Story = {
  args: {
    iconName: IconName.Add,
    label: 'Add',
    isDisabled: true,
  },
};

export const RowLayout: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 16 }}>
      <MainActionButton iconName={IconName.BuySell} label="Buy/Sell" />
      <MainActionButton iconName={IconName.SwapHorizontal} label="Swap" />
      <MainActionButton iconName={IconName.Receive} label="Receive" />
      <MainActionButton iconName={IconName.Send} label="Send" />
    </View>
  ),
};
