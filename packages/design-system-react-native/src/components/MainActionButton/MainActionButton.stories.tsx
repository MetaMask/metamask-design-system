import { BoxFlexDirection } from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';

import { Box } from '../Box';
import { IconName } from '../Icon';

import { MainActionButton } from './MainActionButton';
import type { MainActionButtonProps } from './MainActionButton.types';

const meta: Meta<MainActionButtonProps> = {
  title: 'Components/MainActionButton',
  component: MainActionButton,
  args: {
    iconName: IconName.Add,
    label: 'Add',
  },
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
    onPressIn: {
      action: 'pressIn',
      description: 'Callback fired when a press gesture starts.',
    },
    onPressOut: {
      action: 'pressOut',
      description: 'Callback fired when a press gesture ends.',
    },
  },
};

export default meta;

type Story = StoryObj<MainActionButtonProps>;

export const Default: Story = {
  render: (args) => (
    <Box marginTop={4} marginLeft={4} style={{ width: 85 }}>
      <MainActionButton {...args} />
    </Box>
  ),
};

export const IsDisabled: Story = {
  args: {
    isDisabled: true,
  },
  parameters: {
    actions: {
      disable: true,
    },
  },
  render: (args) => (
    <Box marginTop={4} marginLeft={4} style={{ width: 85 }}>
      <MainActionButton {...args} />
    </Box>
  ),
};

export const IconNameAndLabel: Story = {
  parameters: {
    actions: {
      disable: true,
    },
  },
  render: () => (
    <Box
      flexDirection={BoxFlexDirection.Row}
      gap={2}
      marginTop={4}
      paddingHorizontal={4}
    >
      <MainActionButton
        iconName={IconName.AttachMoney}
        label="Buy"
        twClassName="flex-1"
      />
      <MainActionButton
        iconName={IconName.SwapVertical}
        label="Swap"
        twClassName="flex-1"
      />
      <MainActionButton
        iconName={IconName.Send}
        label="Send"
        twClassName="flex-1"
      />
      <MainActionButton
        iconName={IconName.Received}
        label="Receive"
        twClassName="flex-1"
      />
    </Box>
  ),
};
