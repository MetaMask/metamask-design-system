import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextVariant } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const variants: { name: string; variant: TextVariant }[] = [
  { name: 'DisplayMd', variant: TextVariant.DisplayMd },
  { name: 'HeadingLg', variant: TextVariant.HeadingLg },
  { name: 'HeadingMd', variant: TextVariant.HeadingMd },
  { name: 'HeadingSm', variant: TextVariant.HeadingSm },
  { name: 'BodyLg', variant: TextVariant.BodyLg },
  { name: 'BodyMd', variant: TextVariant.BodyMd },
  { name: 'BodySm', variant: TextVariant.BodySm },
  { name: 'BodyXs', variant: TextVariant.BodyXs },
];

// Update the AllTypography story to use the CSF3.0 Story format
export const Default: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      {variants.map(({ name, variant }) => (
        <div key={variant}>
          <Text className="text-default" variant={variant}>
            {name}
          </Text>
        </div>
      ))}
    </div>
  ),
};
