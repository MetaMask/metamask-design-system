import type { Meta, StoryObj } from '@storybook/react-native';
import { ScrollView } from 'react-native';

import {
  TextVariant,
  TextColor,
  FontWeight,
  BoxFlexDirection,
  BoxFlexWrap,
  BoxAlignItems,
} from '../../../types';
import { Box } from '../../Box';
import { Text } from '../../Text';

import { Maskicon } from './Maskicon';
import type { MaskiconProps } from './Maskicon.types';

const meta: Meta<MaskiconProps> = {
  title: 'Temp Components/Maskicon',
  component: Maskicon,
  argTypes: {
    size: {
      control: 'number',
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
  'eip155:1:0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8', // CAIP-10 Ethereum
  'bip122:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', // CAIP-10 Bitcoin
  'solana:mainnet:4Nd1m3NnENa8h8Xte1Xr7s9jcvKqqm21z3FvY9hKg4s7', // CAIP-10 Solana
];

export const Default: Story = {
  args: {
    size: 32,
    address: ethereumAddress,
  },
  render: (args) => {
    return <Maskicon {...args} />;
  },
};

export const Address: Story = {
  render: () => (
    <ScrollView>
      <Box padding={4} gap={6}>
        {/* Legacy addresses section */}
        <Box>
          <Text variant={TextVariant.HeadingMd} twClassName="mb-2">
            Legacy Format Addresses
          </Text>
          <Box
            flexDirection={BoxFlexDirection.Row}
            flexWrap={BoxFlexWrap.Wrap}
            gap={4}
          >
            {sampleAccountAddresses.map((address) => (
              <Box key={address} alignItems={BoxAlignItems.Center} gap={2}>
                <Maskicon address={address} size={48} />
                <Box twClassName="max-w-[100px]">
                  <Text
                    variant={TextVariant.BodyXs}
                    numberOfLines={1}
                    ellipsizeMode="middle"
                  >
                    {address.includes(':')
                      ? `${address.split(':').slice(0, -1).join(':')}:...${address.slice(-6)}`
                      : `${address.slice(0, 10)}...${address.slice(-4)}`}
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Different networks section */}
        <Box>
          <Text variant={TextVariant.HeadingMd} twClassName="mb-2">
            Different Networks
          </Text>
          <Box
            flexDirection={BoxFlexDirection.Row}
            flexWrap={BoxFlexWrap.Wrap}
            gap={4}
          >
            <Box gap={2}>
              <Text variant={TextVariant.BodyMd} fontWeight={FontWeight.Medium}>
                Ethereum
              </Text>
              <Box
                flexDirection={BoxFlexDirection.Row}
                alignItems={BoxAlignItems.Center}
                gap={2}
              >
                <Maskicon address={ethereumAddress} size={48} />
                <Text variant={TextVariant.BodyXs}>
                  {`${ethereumAddress.slice(0, 10)}...${ethereumAddress.slice(-4)}`}
                </Text>
              </Box>
            </Box>
            <Box gap={2}>
              <Text variant={TextVariant.BodyMd} fontWeight={FontWeight.Medium}>
                Bitcoin
              </Text>
              <Box
                flexDirection={BoxFlexDirection.Row}
                alignItems={BoxAlignItems.Center}
                gap={2}
              >
                <Maskicon address={bitcoinAddress} size={48} />
                <Text variant={TextVariant.BodyXs}>
                  {`${bitcoinAddress.slice(0, 10)}...${bitcoinAddress.slice(-4)}`}
                </Text>
              </Box>
            </Box>
            <Box gap={2}>
              <Text variant={TextVariant.BodyMd} fontWeight={FontWeight.Medium}>
                Solana
              </Text>
              <Box
                flexDirection={BoxFlexDirection.Row}
                alignItems={BoxAlignItems.Center}
                gap={2}
              >
                <Maskicon address={solanaAddress} size={48} />
                <Text variant={TextVariant.BodyXs}>
                  {`${solanaAddress.slice(0, 10)}...${solanaAddress.slice(-4)}`}
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* CAIP-10 consistency demonstration */}
        <Box>
          <Text variant={TextVariant.HeadingMd} twClassName="mb-2">
            CAIP-10 Format Consistency (Same Address, Different Networks)
          </Text>
          <Text
            variant={TextVariant.BodySm}
            color={TextColor.TextAlternative}
            twClassName="mb-3"
          >
            These should all generate the same icon since they represent the
            same address on different networks
          </Text>
          <Box gap={4}>
            <Box gap={2}>
              <Text variant={TextVariant.BodyMd} fontWeight={FontWeight.Medium}>
                Ethereum Address Across Networks
              </Text>
              <Box
                flexDirection={BoxFlexDirection.Row}
                flexWrap={BoxFlexWrap.Wrap}
                gap={2}
              >
                <Box alignItems={BoxAlignItems.Center} gap={1}>
                  <Maskicon address={ethereumAddress} size={48} />
                  <Text variant={TextVariant.BodyXs}>
                    {`${ethereumAddress.slice(0, 10)}...${ethereumAddress.slice(-4)}`}
                  </Text>
                </Box>
                <Box alignItems={BoxAlignItems.Center} gap={1}>
                  <Maskicon address={`eip155:1:${ethereumAddress}`} size={48} />
                  <Text variant={TextVariant.BodyXs}>
                    {`eip155:1:${ethereumAddress.slice(0, 6)}...${ethereumAddress.slice(-4)}`}
                  </Text>
                </Box>
                <Box alignItems={BoxAlignItems.Center} gap={1}>
                  <Maskicon
                    address={`eip155:8453:${ethereumAddress}`}
                    size={48}
                  />
                  <Text variant={TextVariant.BodyXs}>
                    {`eip155:8453:${ethereumAddress.slice(0, 6)}...${ethereumAddress.slice(-4)}`}
                  </Text>
                </Box>
                <Box alignItems={BoxAlignItems.Center} gap={1}>
                  <Maskicon
                    address={`eip155:59144:${ethereumAddress}`}
                    size={48}
                  />
                  <Text variant={TextVariant.BodyXs}>
                    {`eip155:59144:${ethereumAddress.slice(0, 6)}...${ethereumAddress.slice(-4)}`}
                  </Text>
                </Box>
                <Box alignItems={BoxAlignItems.Center} gap={1}>
                  <Maskicon
                    address={`eip155:137:${ethereumAddress}`}
                    size={48}
                  />
                  <Text variant={TextVariant.BodyXs}>
                    {`eip155:137:${ethereumAddress.slice(0, 6)}...${ethereumAddress.slice(-4)}`}
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box gap={2}>
              <Text variant={TextVariant.BodyMd} fontWeight={FontWeight.Medium}>
                Solana Address Formats
              </Text>
              <Box
                flexDirection={BoxFlexDirection.Row}
                flexWrap={BoxFlexWrap.Wrap}
                gap={2}
              >
                <Box alignItems={BoxAlignItems.Center} gap={1}>
                  <Maskicon address={solanaAddress} size={48} />
                  <Text variant={TextVariant.BodyXs}>
                    {`${solanaAddress.slice(0, 10)}...${solanaAddress.slice(-4)}`}
                  </Text>
                </Box>
                <Box alignItems={BoxAlignItems.Center} gap={1}>
                  <Maskicon
                    address={`solana:mainnet:${solanaAddress}`}
                    size={48}
                  />
                  <Text variant={TextVariant.BodyXs}>
                    {`solana:mainnet:${solanaAddress.slice(0, 6)}...${solanaAddress.slice(-4)}`}
                  </Text>
                </Box>
                <Box alignItems={BoxAlignItems.Center} gap={1}>
                  <Maskicon
                    address={`solana:testnet:${solanaAddress}`}
                    size={48}
                  />
                  <Text variant={TextVariant.BodyXs}>
                    {`solana:testnet:${solanaAddress.slice(0, 6)}...${solanaAddress.slice(-4)}`}
                  </Text>
                </Box>
                <Box alignItems={BoxAlignItems.Center} gap={1}>
                  <Maskicon
                    address={`solana:devnet:${solanaAddress}`}
                    size={48}
                  />
                  <Text variant={TextVariant.BodyXs}>
                    {`solana:devnet:${solanaAddress.slice(0, 6)}...${solanaAddress.slice(-4)}`}
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ScrollView>
  ),
};

export const Size: Story = {
  render: () => (
    <Box
      flexDirection={BoxFlexDirection.Row}
      alignItems={BoxAlignItems.Center}
      gap={4}
    >
      <Maskicon address={sampleAccountAddresses[0]} size={16} />
      <Maskicon address={sampleAccountAddresses[1]} size={24} />
      <Maskicon address={sampleAccountAddresses[2]} size={32} />
      <Maskicon address={sampleAccountAddresses[3]} size={48} />
      <Maskicon address={sampleAccountAddresses[4]} size={64} />
    </Box>
  ),
};
