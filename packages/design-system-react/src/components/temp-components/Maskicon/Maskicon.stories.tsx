import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Maskicon } from './Maskicon';
import type { MaskiconProps } from './Maskicon.types';
import README from './README.mdx';

const meta: Meta<MaskiconProps> = {
  title: 'React Temp Components/Maskicon',
  component: Maskicon,
  parameters: {
    docs: {
      page: README,
    },
  },
  args: {
    address: '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8',
    size: 32,
  },
  argTypes: {
    address: {
      control: 'text',
      description:
        'Required address used as a unique identifier to generate the Maskicon.',
    },
    size: {
      control: 'number',
      description: 'Optional prop to control the size of the Maskicon.',
    },
    className: {
      control: 'text',
      description:
        'Optional prop for additional CSS classes to be applied to the Maskicon component.',
    },
  },
};

export default meta;
type Story = StoryObj<MaskiconProps>;

const sampleAccountAddresses = [
  '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8', // Standard Ethereum address
  '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', // Bitcoin address
  '4Nd1m3NnENa8h8Xte1Xr7s9jcvKqqm21z3FvY9hKg4s7', // Solana address
  'eip155:1:0xabc', // CAIP-10 formatted address
  'bip122:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', // CAIP-10 Bitcoin address
  'solana:mainnet:4Nd1m3NnENa8h8Xte1Xr7s9jcvKqqm21z3FvY9hKg4s7', // CAIP-10 Solana address
];

export const Default: Story = {};

export const Address: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {sampleAccountAddresses.map((address) => (
        <Maskicon key={address} address={address} size={32} />
      ))}
    </div>
  ),
};

export const Size: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Maskicon address={sampleAccountAddresses[0]} size={16} />
      <Maskicon address={sampleAccountAddresses[1]} size={24} />
      <Maskicon address={sampleAccountAddresses[2]} size={32} />
      <Maskicon address={sampleAccountAddresses[3]} size={48} />
      <Maskicon address={sampleAccountAddresses[4]} size={64} />
    </div>
  ),
};
