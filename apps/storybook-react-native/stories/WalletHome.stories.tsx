import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-native';
import { ScrollView, View, Text as RNText } from 'react-native';
import { useTailwind } from '@metamask/design-system-twrnc-preset';

/**
 * Using DSRN components in this story breaks storybook see issue  https://github.com/MetaMask/metamask-design-system/issues/652
 */
import { Text } from '@metamask/design-system-react-native';

const meta: Meta = {
  title: 'Examples/Wallet Home',
  component: () => null,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

const WalletHome: React.FC = () => {
  const tw = useTailwind();

  return (
    <ScrollView style={tw`bg-background-default flex-1`}>
      {/* Header */}
      <View style={tw`bg-background-default border-border-muted border-b p-4`}>
        {/* Change "<RNText" to "<Text" below to replicate issue */}
        <RNText style={tw`text-primary-default`}>DeFi Account</RNText>
      </View>
    </ScrollView>
  );
};

export const Default: Story = {
  render: () => <WalletHome />,
};
