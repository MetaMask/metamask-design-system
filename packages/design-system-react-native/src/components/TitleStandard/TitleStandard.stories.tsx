import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import { Box } from '../Box';
import { BoxHorizontal } from '../BoxHorizontal';
import { Icon, IconColor, IconName, IconSize } from '../Icon';
import { TextVariant } from '../Text';

import { TitleStandard } from './TitleStandard';
import type { TitleStandardProps } from './TitleStandard.types';

const meta: Meta<TitleStandardProps> = {
  title: 'Components/TitleStandard',
  component: TitleStandard,
  argTypes: {
    title: { control: 'text' },
    topLabel: { control: 'text' },
    bottomLabel: { control: 'text' },
    twClassName: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<TitleStandardProps>;

export const Default: Story = {
  args: {
    topLabel: 'Send',
    title: '$4.42',
  },
  render: (args) => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
        <TitleStandard {...args} />
      </View>
    );
  },
};

export const Title: Story = {
  args: {
    title: '$1,234.56',
  },
  render: (args) => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
        <TitleStandard {...args} />
      </View>
    );
  },
};

export const TopLabel: Story = {
  args: {
    topLabel: 'Total Balance',
    title: '$5,432.10',
  },
  render: (args) => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
        <TitleStandard {...args} />
      </View>
    );
  },
};

export const BottomLabel: Story = {
  args: {
    topLabel: 'Send',
    title: '$4.42',
    bottomLabel: '0.002 ETH',
  },
  render: (args) => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
        <TitleStandard {...args} />
      </View>
    );
  },
};

export const TitleAccessory: Story = {
  render: () => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
        <TitleStandard
          topLabel="Balance"
          title="$4.42"
          titleAccessory={
            <Box twClassName="ml-2">
              <Icon
                name={IconName.Info}
                size={IconSize.Sm}
                color={IconColor.IconAlternative}
              />
            </Box>
          }
        />
      </View>
    );
  },
};

export const TopAccessory: Story = {
  render: (args) => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
        <TitleStandard
          {...args}
          topAccessory={
            <BoxHorizontal
              startAccessory={
                <Icon name={IconName.Arrow2Up} size={IconSize.Sm} />
              }
              textProps={{ variant: TextVariant.BodySm }}
            >
              Sending to
            </BoxHorizontal>
          }
          title="0x1234...5678"
        />
      </View>
    );
  },
};

export const BottomAccessory: Story = {
  render: (args) => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
        <TitleStandard
          {...args}
          topLabel="Send"
          title="$4.42"
          bottomAccessory={
            <BoxHorizontal
              startAccessory={<Icon name={IconName.Gas} size={IconSize.Xs} />}
              textProps={{ variant: TextVariant.BodySm }}
            >
              ~$0.50 fee
            </BoxHorizontal>
          }
        />
      </View>
    );
  },
};

export const FullExample: Story = {
  render: (args) => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
        <TitleStandard
          {...args}
          topLabel="Send"
          title="$4.42"
          titleAccessory={
            <Box twClassName="ml-1">
              <Icon name={IconName.Info} size={IconSize.Sm} />
            </Box>
          }
          bottomLabel="0.002 ETH"
        />
      </View>
    );
  },
};
