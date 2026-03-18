import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import { ButtonIcon } from '../ButtonIcon';
import { Box } from '../Box';
import { IconName } from '../Icon';
import { TextColor, TextVariant } from '../Text';

import { Attribution } from './Attribution';
import type { AttributionProps } from './Attribution.types';

const meta: Meta<AttributionProps> = {
  title: 'Components/Attribution',
  component: Attribution,
  args: {
    children: 'Powered by MetaMask',
  },
  argTypes: {
    children: { control: 'text' },
    textProps: { control: 'object' },
    startAccessory: { control: false },
    endAccessory: { control: false },
  },
};

export default meta;
type Story = StoryObj<AttributionProps>;

export const Default: Story = {
  render: (args) => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
        <Attribution {...args} />
      </View>
    );
  },
};

export const StartAccessory: Story = {
  render: (args) => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
        <Attribution
          {...args}
          startAccessory={
            <Box twClassName="w-6 h-6 rounded-full bg-primary-default" />
          }
        >
          {args.children}
        </Attribution>
      </View>
    );
  },
};

export const EndAccessory: Story = {
  render: (args) => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
        <Attribution
          {...args}
          endAccessory={<ButtonIcon iconName={IconName.Info} />}
        >
          {args.children}
        </Attribution>
      </View>
    );
  },
};

export const StartAndEndAccessories: Story = {
  render: (args) => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
        <Attribution
          {...args}
          startAccessory={<Box twClassName="w-5 h-5 rounded bg-icon-default" />}
          endAccessory={<ButtonIcon iconName={IconName.Info} />}
        >
          {args.children}
        </Attribution>
      </View>
    );
  },
};

export const TextPropsOverride: Story = {
  render: (args) => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
        <Attribution
          {...args}
          textProps={{
            variant: TextVariant.BodyMd,
            color: TextColor.TextDefault,
          }}
        >
          Custom variant and color
        </Attribution>
      </View>
    );
  },
};
