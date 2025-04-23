import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { AvatarNetworkSize } from '../../types';
import { AvatarNetwork } from './AvatarNetwork';
import { SAMPLE_AVATARNETWORK_URIS } from './AvatarNetwork.dev';
import README from './README.mdx';

const meta: Meta<typeof AvatarNetwork> = {
  title: 'React Components/AvatarNetwork',
  component: AvatarNetwork,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    name: {
      control: 'text',
      description:
        'Required name of the network. Used as alt text for image and first letter is used as fallback if no fallbackText provided',
    },
    src: {
      control: 'text',
      description:
        'Optional URL for the network image. When provided, displays the image instead of fallback text',
    },
    imageProps: {
      control: 'object',
      description:
        'Optional prop to pass to the underlying img element. Useful for overriding the default alt text',
    },
    size: {
      control: 'select',
      options: Object.keys(AvatarNetworkSize),
      mapping: AvatarNetworkSize,
      description:
        'Optional prop to control the size of the avatar. Defaults to AvatarNetworkSize.Md',
    },
    fallbackText: {
      control: 'text',
      description:
        'Optional text to display when no image is provided. If not provided, first letter of name will be used',
    },
    fallbackTextProps: {
      control: 'object',
      description:
        'Optional props to be passed to the Text component when rendering fallback text. Only used when src is not provided',
    },
    className: {
      control: 'text',
      description:
        'Optional additional CSS classes to be applied to the component',
    },
    hasBorder: {
      control: 'boolean',
      description: 'Optional prop to add a border around the AvatarNetwork',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AvatarNetwork>;

export const Default: Story = {
  args: {
    src: SAMPLE_AVATARNETWORK_URIS[0],
    name: 'Arbitrum',
    fallbackText: 'ARB',
  },
};

export const Src: Story = {
  render: () => (
    <div className="flex gap-2">
      <AvatarNetwork
        name="Arbitrum"
        fallbackText="ARB"
        src={SAMPLE_AVATARNETWORK_URIS[0]}
      />
      <AvatarNetwork
        name="Avalanche"
        fallbackText="AVA"
        src={SAMPLE_AVATARNETWORK_URIS[1]}
      />
      <AvatarNetwork
        name="BNB"
        fallbackText="BNB"
        src={SAMPLE_AVATARNETWORK_URIS[2]}
      />
    </div>
  ),
};

export const Name: Story = {
  render: () => (
    <div className="flex gap-2">
      <AvatarNetwork name="Arbitrum" src={SAMPLE_AVATARNETWORK_URIS[0]} />
      <AvatarNetwork name="Avalanche" src={SAMPLE_AVATARNETWORK_URIS[1]} />
      <AvatarNetwork name="Polygon" />
    </div>
  ),
};

export const FallbackText: Story = {
  render: () => (
    <div className="flex gap-2">
      <AvatarNetwork name="Ethereum" fallbackText="ETH" />
      <AvatarNetwork name="Avalanche" fallbackText="AVA" />
      <AvatarNetwork name="Polygon" fallbackText="POL" />
    </div>
  ),
};

export const Size: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <AvatarNetwork
        name="Ethereum"
        fallbackText="E"
        size={AvatarNetworkSize.Xs}
      />
      <AvatarNetwork
        name="Ethereum"
        fallbackText="ETH"
        size={AvatarNetworkSize.Sm}
      />
      <AvatarNetwork
        name="Ethereum"
        fallbackText="ETH"
        size={AvatarNetworkSize.Md}
      />
      <AvatarNetwork
        name="Ethereum"
        fallbackText="ETH"
        size={AvatarNetworkSize.Lg}
      />
      <AvatarNetwork
        name="Ethereum"
        fallbackText="ETH"
        size={AvatarNetworkSize.Xl}
      />
    </div>
  ),
};

export const HasBorder: Story = {
  render: () => (
    <div className="flex gap-2 bg-primary-muted p-2">
      <AvatarNetwork name="Arbitrum" src={SAMPLE_AVATARNETWORK_URIS[0]} />
      <AvatarNetwork
        name="Avalanche"
        src={SAMPLE_AVATARNETWORK_URIS[1]}
        hasBorder
      />
    </div>
  ),
};
