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
  },
};

export default meta;
type Story = StoryObj<typeof AvatarFavicon>;

export const Default: Story = {
  args: {
    src: 'https://opensea.io/static/images/favicon/favicon.ico',
    name: 'OpenSea',
    fallbackText: 'OS',
  },
};

export const Src: Story = {
  render: () => (
    <div className="flex gap-2">
      <AvatarFavicon
        name="OpenSea"
        fallbackText="OS"
        src="https://opensea.io/static/images/favicon/favicon.ico"
      />
      <AvatarFavicon
        name="Uniswap"
        fallbackText="UNI"
        src="https://app.uniswap.org/favicon.png"
      />
      <AvatarFavicon
        name="Aave"
        fallbackText="AAVE"
        src="https://app.aave.com/favicon.ico"
      />
    </div>
  ),
};

export const Name: Story = {
  render: () => (
    <div className="flex gap-2">
      <AvatarFavicon
        name="OpenSea"
        src="https://opensea.io/static/images/favicon/favicon.ico"
      />
      <AvatarFavicon name="Uniswap" src="https://app.uniswap.org/favicon.png" />
      <AvatarFavicon name="Aave" />
    </div>
  ),
};

export const FallbackText: Story = {
  render: () => (
    <div className="flex gap-2">
      <AvatarFavicon name="OpenSea" fallbackText="OS" />
      <AvatarFavicon name="Uniswap" fallbackText="UNI" />
      <AvatarFavicon name="Aave" fallbackText="AAVE" />
    </div>
  ),
};

export const Size: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <AvatarFavicon
        name="OpenSea"
        fallbackText="O"
        size={AvatarFaviconSize.Xs}
      />
      <AvatarFavicon
        name="OpenSea"
        fallbackText="OS"
        size={AvatarFaviconSize.Sm}
      />
      <AvatarFavicon
        name="OpenSea"
        fallbackText="OS"
        size={AvatarFaviconSize.Md}
      />
      <AvatarFavicon
        name="OpenSea"
        fallbackText="OS"
        size={AvatarFaviconSize.Lg}
      />
      <AvatarFavicon
        name="OpenSea"
        fallbackText="OS"
        size={AvatarFaviconSize.Xl}
      />
    </div>
  ),
};
