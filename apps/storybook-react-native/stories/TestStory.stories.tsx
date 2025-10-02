import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text } from 'react-native';

// Minimal test component
const TestComponent = () => <Text>Hello Test</Text>;

const meta: Meta<typeof TestComponent> = {
  title: 'Test/Simple',
  component: TestComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};