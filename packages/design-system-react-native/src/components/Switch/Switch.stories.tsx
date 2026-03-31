import type { Meta, StoryObj } from '@storybook/react-native';
import { useState } from 'react';
import { View } from 'react-native';

import { Switch } from './Switch';
import type { SwitchProps } from './Switch.types';

const meta: Meta<SwitchProps> = {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    isOn: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<SwitchProps>;

const SwitchStory: React.FC<
  Omit<SwitchProps, 'onValueChange'> & { initialValue?: boolean }
> = ({ initialValue, isOn: isOnProp, ...args }) => {
  const [isOn, setIsOn] = useState(initialValue ?? isOnProp ?? false);
  return <Switch {...args} isOn={isOn} onValueChange={setIsOn} />;
};

export const Default: Story = {
  render: (args) => <SwitchStory {...args} />,
  args: {
    isOn: false,
    label: 'Enable feature',
  },
};

export const IsOn: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <SwitchStory isOn={false} label="Off" />
      <SwitchStory isOn label="On" />
    </View>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <SwitchStory isOn={false} label="Enabled (Off)" />
      <SwitchStory isOn={false} isDisabled label="Disabled (Off)" />
      <SwitchStory isOn label="Enabled (On)" />
      <SwitchStory isOn isDisabled label="Disabled (On)" />
    </View>
  ),
};

export const Label: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <SwitchStory isOn={false} />
      <SwitchStory isOn={false} label="Switch with label" />
    </View>
  ),
};

export const WithoutLabel: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <SwitchStory isOn={false} />
      <SwitchStory isOn />
    </View>
  ),
};
