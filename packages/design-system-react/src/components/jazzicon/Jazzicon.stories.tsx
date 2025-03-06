import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Jazzicon } from './Jazzicon';
import type { JazziconProps } from './Jazzicon.types';
import README from './README.mdx';

const meta: Meta<JazziconProps> = {
  title: 'React Components/Jazzicon',
  component: Jazzicon,
  argTypes: {
    size: {
      control: 'number',
      description: 'Optional prop to control the size of the Jazzicon.',
    },
    className: {
      control: 'text',
      description:
        'Optional prop for additional CSS classes to be applied to the AvatarBase component',
    },
  },
};

export default meta;
type Story = StoryObj<JazziconProps>;
const sampleAccountAddresses = [
  '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8', // Standard Ethereum address
  '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', // Bitcoin address
  '4Nd1m3NnENa8h8Xte1Xr7s9jcvKqqm21z3FvY9hKg4s7', // Solana address
  'eip155:1:0xabc', // CAIP-10 formatted address
  'bip122:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', // CAIP-10 Bitcoin address
  'solana:mainnet:4Nd1m3NnENa8h8Xte1Xr7s9jcvKqqm21z3FvY9hKg4s7', // CAIP-10 Solana address
  '0xD78CBcA88eCd65c6128511e46a518CDc6c66fC74',
  '0xCFc8b1d1031ef2ecce3a98d5D79ce4D75Edb06bA',
  '0xDe53fa2E659b6134991bB56F64B691990e5C44E7',
  '0x8AceA3A9748294d1B5C25a08EFE37b756AafDFdd',
  '0xEC5CE72f2e18B0017C88F7B12d3308119C5Cf129',
  '0xeC56Da21c90Af6b50E4Ba5ec252bD97e735290fc',
];
export const Default: Story = {
  args: {
    size: 32,
  },
  render: (args) => {
    return (
      <Jazzicon {...args} address={args.address || sampleAccountAddresses[0]} />
    );
  },
};

export const SampleAddresses: Story = {
  render: () => (
    <div className="flex gap-2">
      {sampleAccountAddresses.map((addressKey) => (
        <Jazzicon address={addressKey} key={addressKey} size={32} />
      ))}
    </div>
  ),
};
