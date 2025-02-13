import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'React Components/Tabs',
  component: Tabs,
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
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  ),
};

export const MultipleOptions: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Profile</TabsTrigger>
        <TabsTrigger value="tab2">Settings</TabsTrigger>
        <TabsTrigger value="tab3">Messages</TabsTrigger>
        <TabsTrigger value="tab4">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        View and edit your profile information.
      </TabsContent>
      <TabsContent value="tab2">Configure your account settings.</TabsContent>
      <TabsContent value="tab3">
        View your messages and conversations.
      </TabsContent>
      <TabsContent value="tab4">
        Manage your notification preferences.
      </TabsContent>
    </Tabs>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState('tab1');

    return (
      <div className="space-y-4">
        <div>Current tab: {value}</div>
        <Tabs value={value} onValueChange={setValue} className="w-[400px]">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            This is a controlled tabs example. The current value is managed by
            state.
          </TabsContent>
          <TabsContent value="tab2">
            Try clicking between tabs to see the state update.
          </TabsContent>
        </Tabs>
      </div>
    );
  },
};
