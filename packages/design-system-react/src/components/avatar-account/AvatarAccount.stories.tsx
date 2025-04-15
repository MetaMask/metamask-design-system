import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { AvatarAccountVariant, AvatarAccountSize } from '../../types';
import { AvatarAccount } from './AvatarAccount';
import README from './README.mdx';

const meta: Meta<typeof AvatarAccount> = {
  title: 'React Components/AvatarAccount',
  component: AvatarAccount,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(AvatarAccountVariant),
      mapping: AvatarAccountVariant,
      description:
        'Optional prop to control the variant of the avatar account. Defaults to AvatarAccountVariant.Jazzicon',
    },
    size: {
      control: 'select',
      options: Object.keys(AvatarAccountSize),
      mapping: AvatarAccountSize,
      description:
        'Optional prop to control the size of the avatar. Defaults to AvatarAccountSize.Md',
    },
    address: {
      control: 'text',
      description:
        'Required address used as a unique identifier to generate the AvatarAccount art',
    },
    className: {
      control: 'text',
      description:
        'Optional additional CSS classes to be applied to the component',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AvatarAccount>;

export const Default: Story = {
  args: {
    variant: AvatarAccountVariant.Jazzicon,
    size: AvatarAccountSize.Md,
    address: '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8',
  },
};

export const Address: Story = {
  render: () => (
    <div className="flex gap-2">
      <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />
      <AvatarAccount
        address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
        variant={AvatarAccountVariant.Blockies}
      />
      <AvatarAccount address="0xb9b81f6bd23B953c5257C3b5E2F0c03B07E944eB" />
      <AvatarAccount
        address="0xb9b81f6bd23B953c5257C3b5E2F0c03B07E944eB"
        variant={AvatarAccountVariant.Blockies}
      />
    </div>
  ),
};

export const Variant: Story = {
  render: () => (
    <div className="flex gap-2">
      <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />
      <AvatarAccount
        address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
        variant={AvatarAccountVariant.Blockies}
      />
    </div>
  ),
};

export const Size: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <AvatarAccount
        address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
        size={AvatarAccountSize.Xs}
      />
      <AvatarAccount
        address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
        size={AvatarAccountSize.Sm}
      />
      <AvatarAccount
        address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
        size={AvatarAccountSize.Md}
      />
      <AvatarAccount
        address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
        size={AvatarAccountSize.Lg}
      />
      <AvatarAccount
        address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
        size={AvatarAccountSize.Xl}
      />
    </div>
  ),
};
