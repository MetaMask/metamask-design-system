import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { AvatarTokenSize } from '../../types';
import { AvatarToken } from './AvatarToken';
import { SAMPLE_AVATARTOKEN_URIS } from './AvatarToken.dev';
import README from './README.mdx';

const meta: Meta<typeof AvatarToken> = {
  title: 'React Components/AvatarToken',
  component: AvatarToken,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    name: {
      control: 'text',
      description:
        'Required name of the token. Used as alt text for image and first letter is used as fallback if no fallbackText provided',
    },
    src: {
      control: 'text',
      description:
        'Optional URL for the token image. When provided, displays the image instead of fallback text',
    },
    imageProps: {
      control: 'object',
      description:
        'Optional prop to pass to the underlying img element. Useful for overriding the default alt text',
    },
    size: {
      control: 'select',
      options: Object.keys(AvatarTokenSize),
      mapping: AvatarTokenSize,
      description:
        'Optional prop to control the size of the avatar. Defaults to AvatarTokenSize.Md',
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
      description: 'Optional prop to add a border around the AvatarToken',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AvatarToken>;

export const Default: Story = {
  args: {
    src: SAMPLE_AVATARTOKEN_URIS[0],
    name: 'Bitcoin',
    fallbackText: 'BTC',
  },
};

export const Src: Story = {
  render: () => (
    <div className="flex gap-2">
      <AvatarToken
        name="Bitcoin"
        fallbackText="BTC"
        src={SAMPLE_AVATARTOKEN_URIS[0]}
      />
      <AvatarToken
        name="Ethereum"
        fallbackText="ETH"
        src={SAMPLE_AVATARTOKEN_URIS[1]}
      />
      <AvatarToken
        name="Floki"
        fallbackText="FLOKI"
        src={SAMPLE_AVATARTOKEN_URIS[2]}
      />
    </div>
  ),
};

export const Name: Story = {
  render: () => (
    <div className="flex gap-2">
      <AvatarToken name="Bitcoin" src={SAMPLE_AVATARTOKEN_URIS[0]} />
      <AvatarToken name="Ethereum" src={SAMPLE_AVATARTOKEN_URIS[1]} />
      <AvatarToken name="USDC" />
    </div>
  ),
};

export const FallbackText: Story = {
  render: () => (
    <div className="flex gap-2">
      <AvatarToken name="Ethereum" fallbackText="ETH" />
      <AvatarToken name="Bitcoin" fallbackText="BTC" />
      <AvatarToken name="USDC" fallbackText="USDC" />
    </div>
  ),
};

export const Size: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <AvatarToken name="Ethereum" fallbackText="E" size={AvatarTokenSize.Xs} />
      <AvatarToken
        name="Ethereum"
        fallbackText="ETH"
        size={AvatarTokenSize.Sm}
      />
      <AvatarToken
        name="Ethereum"
        fallbackText="ETH"
        size={AvatarTokenSize.Md}
      />
      <AvatarToken
        name="Ethereum"
        fallbackText="ETH"
        size={AvatarTokenSize.Lg}
      />
      <AvatarToken
        name="Ethereum"
        fallbackText="ETH"
        size={AvatarTokenSize.Xl}
      />
    </div>
  ),
};

export const HasBorder: Story = {
  render: () => (
    <div className="flex gap-2 bg-primary-muted p-2">
      <AvatarToken
        name="Bitcoin"
        fallbackText="BTC"
        src={SAMPLE_AVATARTOKEN_URIS[0]}
      />
      <AvatarToken
        name="Ethereum"
        fallbackText="ETH"
        src={SAMPLE_AVATARTOKEN_URIS[1]}
        hasBorder
      />
    </div>
  ),
};
