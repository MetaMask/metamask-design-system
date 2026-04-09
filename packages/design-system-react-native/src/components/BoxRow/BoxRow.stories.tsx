import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import { Box } from '../Box';
import { ButtonIcon } from '../ButtonIcon';
import { IconName } from '../Icon';
import { TextColor, TextVariant } from '../Text';

import { BoxRow } from './BoxRow';
import type { BoxRowProps } from './BoxRow.types';

const meta: Meta<BoxRowProps> = {
  title: 'Components/BoxRow',
  component: BoxRow,
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
    startAccessory: { control: false },
    endAccessory: { control: false },
  },
};

export default meta;
type Story = StoryObj<BoxRowProps>;

export const Default: Story = {
  render: (args) => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
        <BoxRow {...args} />
      </View>
    );
  },
};

export const StartAccessory: Story = {
  render: (args) => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
        <BoxRow
          {...args}
          startAccessory={
            <Box twClassName="w-6 h-6 rounded-full bg-primary-default" />
          }
        >
          {args.children}
        </BoxRow>
      </View>
    );
  },
};

export const EndAccessory: Story = {
  render: (args) => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
        <BoxRow
          {...args}
          endAccessory={<ButtonIcon iconName={IconName.Info} />}
        >
          {args.children}
        </BoxRow>
      </View>
    );
  },
};

export const StartAndEndAccessories: Story = {
  render: (args) => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
        <BoxRow
          {...args}
          startAccessory={<Box twClassName="w-5 h-5 rounded bg-icon-default" />}
          endAccessory={<ButtonIcon iconName={IconName.Info} />}
        >
          {args.children}
        </BoxRow>
      </View>
    );
  },
};
