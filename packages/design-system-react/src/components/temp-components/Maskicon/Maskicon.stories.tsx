import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { TextVariant, TextColor, FontWeight } from '../../../types';
import { Box } from '../../Box';
import { Text } from '../../Text';

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

// Sample addresses for different networks
const ethereumAddress = '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8';
const bitcoinAddress = '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa';
const solanaAddress = '4Nd1m3NnENa8h8Xte1Xr7s9jcvKqqm21z3FvY9hKg4s7';

// Legacy format addresses (for backward compatibility)
const sampleAccountAddresses = [
  ethereumAddress,
  bitcoinAddress,
  solanaAddress,
  'eip155:1:0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8', // Short CAIP-10 formatted address
  'bip122:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', // CAIP-10 Bitcoin
  'solana:mainnet:4Nd1m3NnENa8h8Xte1Xr7s9jcvKqqm21z3FvY9hKg4s7', // CAIP-10 Solana
];

export const Default: Story = {};

export const Address: Story = {
  render: () => (
    <Box className="flex flex-col gap-6">
      {/* Legacy addresses section */}
      <Box>
        <Text variant={TextVariant.HeadingMd} className="mb-2">
          Legacy Format Addresses
        </Text>
        <Box className="flex gap-4">
          {sampleAccountAddresses.map((address) => (
            <Box key={address} className="flex flex-col items-center gap-2">
              <Maskicon address={address} size={48} />
              <Text
                variant={TextVariant.BodyXs}
                className="max-w-[100px] truncate font-mono"
              >
                {address.includes(':')
                  ? `${address.split(':').slice(0, -1).join(':')}:...${address.slice(-6)}`
                  : `${address.slice(0, 10)}...${address.slice(-4)}`}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Different networks section */}
      <Box>
        <Text variant={TextVariant.HeadingMd} className="mb-2">
          Different Networks
        </Text>
        <Box className="flex flex-wrap gap-4">
          <Box className="flex flex-col gap-2">
            <Text variant={TextVariant.BodyMd} fontWeight={FontWeight.Medium}>
              Ethereum
            </Text>
            <Box className="flex items-center gap-2">
              <Maskicon address={ethereumAddress} size={48} />
              <Text variant={TextVariant.BodyXs} className="font-mono">
                {`${ethereumAddress.slice(0, 10)}...${ethereumAddress.slice(-4)}`}
              </Text>
            </Box>
          </Box>
          <Box className="flex flex-col gap-2">
            <Text variant={TextVariant.BodyMd} fontWeight={FontWeight.Medium}>
              Bitcoin
            </Text>
            <Box className="flex items-center gap-2">
              <Maskicon address={bitcoinAddress} size={48} />
              <Text variant={TextVariant.BodyXs} className="font-mono">
                {`${bitcoinAddress.slice(0, 10)}...${bitcoinAddress.slice(-4)}`}
              </Text>
            </Box>
          </Box>
          <Box className="flex flex-col gap-2">
            <Text variant={TextVariant.BodyMd} fontWeight={FontWeight.Medium}>
              Solana
            </Text>
            <Box className="flex items-center gap-2">
              <Maskicon address={solanaAddress} size={48} />
              <Text variant={TextVariant.BodyXs} className="font-mono">
                {`${solanaAddress.slice(0, 10)}...${solanaAddress.slice(-4)}`}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* CAIP-10 consistency demonstration */}
      <Box>
        <Text variant={TextVariant.HeadingMd} className="mb-2">
          CAIP-10 Format Consistency (Same Address, Different Networks)
        </Text>
        <Text
          variant={TextVariant.BodySm}
          color={TextColor.TextAlternative}
          className="mb-3"
        >
          These should all generate the same icon since they represent the same
          address on different networks
        </Text>
        <Box className="flex flex-wrap gap-4">
          <Box className="flex flex-col gap-2">
            <Text variant={TextVariant.BodyMd} fontWeight={FontWeight.Medium}>
              Ethereum Address Across Networks
            </Text>
            <Box className="flex gap-2">
              <Box className="flex flex-col items-center gap-1">
                <Maskicon address={ethereumAddress} size={48} />
                <Text variant={TextVariant.BodyXs} className="font-mono">
                  {`${ethereumAddress.slice(0, 10)}...${ethereumAddress.slice(-4)}`}
                </Text>
              </Box>
              <Box className="flex flex-col items-center gap-1">
                <Maskicon address={`eip155:1:${ethereumAddress}`} size={48} />
                <Text variant={TextVariant.BodyXs} className="font-mono">
                  {`eip155:1:${ethereumAddress.slice(0, 6)}...${ethereumAddress.slice(-4)}`}
                </Text>
              </Box>
              <Box className="flex flex-col items-center gap-1">
                <Maskicon
                  address={`eip155:8453:${ethereumAddress}`}
                  size={48}
                />
                <Text variant={TextVariant.BodyXs} className="font-mono">
                  {`eip155:8453:${ethereumAddress.slice(0, 6)}...${ethereumAddress.slice(-4)}`}
                </Text>
              </Box>
              <Box className="flex flex-col items-center gap-1">
                <Maskicon
                  address={`eip155:59144:${ethereumAddress}`}
                  size={48}
                />
                <Text variant={TextVariant.BodyXs} className="font-mono">
                  {`eip155:59144:${ethereumAddress.slice(0, 6)}...${ethereumAddress.slice(-4)}`}
                </Text>
              </Box>
              <Box className="flex flex-col items-center gap-1">
                <Maskicon address={`eip155:137:${ethereumAddress}`} size={48} />
                <Text variant={TextVariant.BodyXs} className="font-mono">
                  {`eip155:137:${ethereumAddress.slice(0, 6)}...${ethereumAddress.slice(-4)}`}
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="mt-4 flex flex-wrap gap-4">
          <Box className="flex flex-col gap-2">
            <Text variant={TextVariant.BodyMd} fontWeight={FontWeight.Medium}>
              Solana Address Formats
            </Text>
            <Box className="flex gap-2">
              <Box className="flex flex-col items-center gap-1">
                <Maskicon address={solanaAddress} size={48} />
                <Text variant={TextVariant.BodyXs} className="font-mono">
                  {`${solanaAddress.slice(0, 10)}...${solanaAddress.slice(-4)}`}
                </Text>
              </Box>
              <Box className="flex flex-col items-center gap-1">
                <Maskicon
                  address={`solana:mainnet:${solanaAddress}`}
                  size={48}
                />
                <Text variant={TextVariant.BodyXs} className="font-mono">
                  {`solana:mainnet:${solanaAddress.slice(0, 6)}...${solanaAddress.slice(-4)}`}
                </Text>
              </Box>
              <Box className="flex flex-col items-center gap-1">
                <Maskicon
                  address={`solana:testnet:${solanaAddress}`}
                  size={48}
                />
                <Text variant={TextVariant.BodyXs} className="font-mono">
                  {`solana:testnet:${solanaAddress.slice(0, 6)}...${solanaAddress.slice(-4)}`}
                </Text>
              </Box>
              <Box className="flex flex-col items-center gap-1">
                <Maskicon
                  address={`solana:devnet:${solanaAddress}`}
                  size={48}
                />
                <Text variant={TextVariant.BodyXs} className="font-mono">
                  {`solana:devnet:${solanaAddress.slice(0, 6)}...${solanaAddress.slice(-4)}`}
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  ),
};

export const Size: Story = {
  render: () => (
    <Box className="flex items-center gap-4">
      <Maskicon address={sampleAccountAddresses[0]} size={16} />
      <Maskicon address={sampleAccountAddresses[1]} size={24} />
      <Maskicon address={sampleAccountAddresses[2]} size={32} />
      <Maskicon address={sampleAccountAddresses[3]} size={48} />
      <Maskicon address={sampleAccountAddresses[4]} size={64} />
    </Box>
  ),
};
