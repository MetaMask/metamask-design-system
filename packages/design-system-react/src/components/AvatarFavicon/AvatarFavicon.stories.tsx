import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { AvatarFaviconSize } from '../../types';
import { AvatarFavicon } from './AvatarFavicon';
import README from './README.mdx';

const meta: Meta<typeof AvatarFavicon> = {
  title: 'React Components/AvatarFavicon',
  component: AvatarFavicon,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    name: {
      control: 'text',
      description:
        'Required name of the dapp. Used as alt text for image and first letter is used as fallback if no fallbackText provided',
    },
    src: {
      control: 'text',
      description:
        'Optional URL for the dapp favicon/logo. When provided, displays the image instead of fallback text',
    },
    imageProps: {
      control: 'object',
      description:
        'Optional prop to pass to the underlying img element. Useful for overriding the default alt text',
    },
    size: {
      control: 'select',
      options: Object.keys(AvatarFaviconSize),
      mapping: AvatarFaviconSize,
      description:
        'Optional prop to control the size of the avatar. Defaults to AvatarFaviconSize.Md',
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
      description: 'Optional prop to add a border around the AvatarFavicon',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AvatarFavicon>;

export const Default: Story = {
  args: {
    src: '/images/favicons/metamask.svg',
    name: 'MetaMask Portfolio',
    fallbackText: 'MP',
  },
};

export const Src: Story = {
  render: () => (
    <div className="flex gap-2">
      <AvatarFavicon
        name="MetaMask Portfolio"
        fallbackText="MM"
        src="/images/favicons/metamask.svg"
      />
      <AvatarFavicon
        name="OpenSea"
        fallbackText="OS"
        src="/images/favicons/opensea.ico"
      />
      <AvatarFavicon
        name="Uniswap"
        fallbackText="UNI"
        src="/images/favicons/uniswap.png"
      />
    </div>
  ),
};

export const Name: Story = {
  render: () => (
    <div className="flex gap-2">
      <AvatarFavicon
        name="MetaMask Portfolio"
        src="/images/favicons/metamask.svg"
      />
      <AvatarFavicon name="OpenSea" src="/images/favicons/opensea.ico" />
      <AvatarFavicon name="Aave" src="/images/favicons/aave.ico" />
    </div>
  ),
};

export const FallbackText: Story = {
  render: () => (
    <div className="flex gap-2">
      <AvatarFavicon name="MetaMask Portfolio" fallbackText="MM" />
      <AvatarFavicon name="OpenSea" fallbackText="OS" />
      <AvatarFavicon name="Uniswap" fallbackText="UNI" />
    </div>
  ),
};

export const Size: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <AvatarFavicon
        name="MetaMask Portfolio"
        fallbackText="MM"
        size={AvatarFaviconSize.Xs}
      />
      <AvatarFavicon
        name="MetaMask Portfolio"
        fallbackText="MM"
        size={AvatarFaviconSize.Sm}
      />
      <AvatarFavicon
        name="MetaMask Portfolio"
        fallbackText="MM"
        size={AvatarFaviconSize.Md}
      />
      <AvatarFavicon
        name="MetaMask Portfolio"
        fallbackText="MM"
        size={AvatarFaviconSize.Lg}
      />
      <AvatarFavicon
        name="MetaMask Portfolio"
        fallbackText="MM"
        size={AvatarFaviconSize.Xl}
      />
    </div>
  ),
};

export const HasBorder: Story = {
  render: () => (
    <div className="flex gap-2 p-2 bg-primary-muted">
      <AvatarFavicon
        name="MetaMask Portfolio"
        src="/images/favicons/metamask.svg"
      />
      <AvatarFavicon
        name="OpenSea"
        src="/images/favicons/opensea.ico"
        hasBorder
      />
    </div>
  ),
};
