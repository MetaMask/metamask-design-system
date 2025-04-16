import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { BadgeNetwork } from './BadgeNetwork';
import README from './README.mdx';

const meta: Meta<typeof BadgeNetwork> = {
  title: 'React Components/BadgeNetwork',
  component: BadgeNetwork,
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
  },
};

export default meta;
type Story = StoryObj<typeof BadgeNetwork>;

export const Default: Story = {
  args: {
    src: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    name: 'Ethereum',
    fallbackText: 'ETH',
  },
};

export const Src: Story = {
  render: () => (
    <div className="flex gap-2">
      <BadgeNetwork
        name="Ethereum"
        fallbackText="ETH"
        src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
      />
      <BadgeNetwork
        name="Avalanche"
        fallbackText="AVA"
        src="https://cryptologos.cc/logos/avalanche-avax-logo.png"
      />
      <BadgeNetwork
        name="Polygon"
        fallbackText="POL"
        src="https://cryptologos.cc/logos/polygon-matic-logo.png"
      />
    </div>
  ),
};

export const Name: Story = {
  render: () => (
    <div className="flex gap-2">
      <BadgeNetwork
        name="Ethereum"
        src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
      />
      <BadgeNetwork
        name="Avalanche"
        src="https://cryptologos.cc/logos/avalanche-avax-logo.png"
      />
      <BadgeNetwork name="Polygon" />
    </div>
  ),
};

export const FallbackText: Story = {
  render: () => (
    <div className="flex gap-2">
      <BadgeNetwork name="Ethereum" fallbackText="ETH" />
      <BadgeNetwork name="Avalanche" fallbackText="AVA" />
      <BadgeNetwork name="Polygon" fallbackText="POL" />
    </div>
  ),
};
