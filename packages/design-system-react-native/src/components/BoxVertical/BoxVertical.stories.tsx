import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import { Box } from '../Box';
import { ButtonIcon } from '../ButtonIcon';
import { IconName } from '../Icon';
import { TextColor, TextVariant } from '../Text';

import { BoxVertical } from './BoxVertical';
import type { BoxVerticalProps } from './BoxVertical.types';

const meta: Meta<BoxVerticalProps> = {
  title: 'Components/BoxVertical',
  component: BoxVertical,
  args: {
    children: 'Label with optional accessories',
    textProps: {
      variant: TextVariant.BodyMd,
      color: TextColor.TextDefault,
    },
  },
  argTypes: {
    children: { control: 'text' },
    textProps: { control: 'object' },
    topAccessory: { control: false },
    bottomAccessory: { control: false },
  },
};

export default meta;
type Story = StoryObj<BoxVerticalProps>;

export const Default: Story = {
  render: (args) => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
        <BoxVertical {...args} />
      </View>
    );
  },
};

export const TopAccessory: Story = {
  render: (args) => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
        <BoxVertical
          {...args}
          topAccessory={
            <Box twClassName="w-6 h-6 rounded-full bg-primary-default" />
          }
        >
          {args.children}
        </BoxVertical>
      </View>
    );
  },
};

export const BottomAccessory: Story = {
  render: (args) => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
        <BoxVertical
          {...args}
          bottomAccessory={<ButtonIcon iconName={IconName.Info} />}
        >
          {args.children}
        </BoxVertical>
      </View>
    );
  },
};

export const TopAndBottomAccessories: Story = {
  render: (args) => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
        <BoxVertical
          {...args}
          topAccessory={<Box twClassName="w-5 h-5 rounded bg-icon-default" />}
          bottomAccessory={<ButtonIcon iconName={IconName.Info} />}
        >
          {args.children}
        </BoxVertical>
      </View>
    );
  },
};
