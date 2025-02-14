import React, { useState } from 'react';
import { View } from 'react-native';
import type { Meta } from '@storybook/react-native';
import Text from '../Text';
import { TextVariant } from '../Text';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
};

export default meta;

export const Default = {
  render: () => {
    const [value, setValue] = useState('tokens');

    return (
      <View style={{ padding: 16 }}>
        <Tabs value={value} onValueChange={setValue}>
          <TabsList>
            <TabsTrigger value="tokens">Tokens</TabsTrigger>
            <TabsTrigger value="nfts">NFTs</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>
          <TabsContent value="tokens">
            <Text variant={TextVariant.BodyMd}>
              View and manage your token balances.
            </Text>
          </TabsContent>
          <TabsContent value="nfts">
            <Text variant={TextVariant.BodyMd}>
              Browse and manage your NFT collection.
            </Text>
          </TabsContent>
          <TabsContent value="activity">
            <Text variant={TextVariant.BodyMd}>
              Track your recent transactions and wallet activity.
            </Text>
          </TabsContent>
        </Tabs>
      </View>
    );
  },
};
