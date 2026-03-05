import type { Meta, StoryObj } from '@storybook/react-native';

import { BoxFlexDirection } from '../../types';
import { Box } from '../Box';
import { IconName } from '../Icon';

import { MainActionButton } from './MainActionButton';
import type { MainActionButtonProps } from './MainActionButton.types';

const meta: Meta<MainActionButtonProps> = {
  title: 'Components/MainActionButton',
  component: MainActionButton,
  parameters: {
    docs: {
      description: {
        component:
          'MainActionButton is a compact vertical action button. Core action props are iconName, label, onPress, and isDisabled.',
      },
    },
  },
  argTypes: {
    iconName: {
      control: 'select',
      options: IconName,
      description: 'Icon displayed above the action label.',
    },
    label: {
      control: 'text',
      description: 'Single-line label displayed below the icon.',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Disables press interactions and applies disabled styles.',
    },
    onPress: {
      action: 'pressed',
      description: 'Callback fired when the action button is pressed.',
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
  parameters: {
    actions: {
      disable: true,
    },
  },
};

export const IconNameAndLabel: Story = {
  parameters: {
    actions: {
      disable: true,
    },
  },
  render: () => (
    <Box flexDirection={BoxFlexDirection.Row} gap={4} paddingHorizontal={4}>
      <MainActionButton
        iconName={IconName.BuySell}
        label="Buy/Sell"
        twClassName="flex-1"
      />
      <MainActionButton
        iconName={IconName.SwapHorizontal}
        label="Swap"
        twClassName="flex-1"
      />
      <MainActionButton
        iconName={IconName.Receive}
        label="Receive"
        twClassName="flex-1"
      />
      <MainActionButton
        iconName={IconName.Send}
        label="Send"
        twClassName="flex-1"
      />
    </Box>
  ),
};
