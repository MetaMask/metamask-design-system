import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';
import { Text } from '../text';
import README from './README.mdx';

const meta: Meta<typeof Tabs> = {
  title: 'React Components/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The default selected tab value when initially rendered',
    },
    value: {
      control: 'text',
      description: 'The controlled value of the tab to activate',
    },
    onValueChange: {
      description: 'Callback that fires when the tab value changes',
    },
    className: {
      control: 'text',
      description: 'Additional class names to apply',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = React.useState('tokens');

    return (
      <Tabs value={value} onValueChange={setValue} className="w-[500px]">
        <TabsList className="flex flex-row w-full">
          <TabsTrigger value="tokens" className="flex-1 text-center">
            Tokens
          </TabsTrigger>
          <TabsTrigger value="nfts" className="flex-1 text-center">
            NFTs
          </TabsTrigger>
          <TabsTrigger value="activity" className="flex-1 text-center">
            Activity
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tokens">
          <Text>View and manage your token balances.</Text>
        </TabsContent>
        <TabsContent value="nfts">
          <Text>Browse and manage your NFT collection.</Text>
        </TabsContent>
        <TabsContent value="activity">
          <Text>Track your recent transactions and wallet activity.</Text>
        </TabsContent>
      </Tabs>
    );
  },
};
