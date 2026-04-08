import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import { Box } from '../Box';
import { ButtonIcon } from '../ButtonIcon';
import { IconName } from '../Icon';
import { TextColor, TextVariant } from '../Text';

import { BoxColumn } from './BoxColumn';
import type { BoxColumnProps } from './BoxColumn.types';

const meta: Meta<BoxColumnProps> = {
  title: 'Components/BoxColumn',
  component: BoxColumn,
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
type Story = StoryObj<BoxColumnProps>;

export const Default: Story = {
  render: (args) => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
        <BoxColumn {...args} />
      </View>
    );
  },
};

export const TopAccessory: Story = {
  render: (args) => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
        <BoxColumn
          {...args}
          topAccessory={
            <Box twClassName="w-6 h-6 rounded-full bg-primary-default" />
          }
        >
          {args.children}
        </BoxColumn>
      </View>
    );
  },
};

export const BottomAccessory: Story = {
  render: (args) => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
        <BoxColumn
          {...args}
          bottomAccessory={<ButtonIcon iconName={IconName.Info} />}
        >
          {args.children}
        </BoxColumn>
      </View>
    );
  },
};

export const TopAndBottomAccessories: Story = {
  render: (args) => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
        <BoxColumn
          {...args}
          topAccessory={<Box twClassName="w-5 h-5 rounded bg-icon-default" />}
          bottomAccessory={<ButtonIcon iconName={IconName.Info} />}
        >
          {args.children}
        </BoxColumn>
      </View>
    );
  },
};
