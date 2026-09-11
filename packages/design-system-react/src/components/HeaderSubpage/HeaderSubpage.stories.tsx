import {
  AvatarTokenSize,
  FontWeight,
  IconName,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { AvatarToken } from '../AvatarToken';
import { Text } from '../Text';

import { HeaderSubpage } from './HeaderSubpage';
import type { HeaderSubpageProps } from './HeaderSubpage.types';
import README from './README.mdx';

const ETH_TITLE = 'Ethereum';
const ETH_DESCRIPTION = 'ETH';
const ETH_AVATAR = (
  <AvatarToken
    src="https://cryptologos.cc/logos/ethereum-eth-logo.svg"
    size={AvatarTokenSize.Lg}
    name={ETH_TITLE}
  />
);

const meta: Meta<HeaderSubpageProps> = {
  title: 'React Components/HeaderSubpage',
  component: HeaderSubpage,
  parameters: {
    docs: {
      page: README,
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'landmark-no-duplicate-banner',
            // Storybook renders light + dark themes simultaneously,
            // duplicating the <header> "banner" landmark. A single
            // HeaderSubpage is correct in production.
            enabled: false,
          },
          {
            id: 'landmark-unique',
            // Same reason — duplicated by the theme decorator.
            enabled: false,
          },
        ],
      },
    },
  },
  args: {
    avatar: ETH_AVATAR,
    title: ETH_TITLE,
  },
};

export default meta;

type Story = StoryObj<HeaderSubpageProps>;

export const Default: Story = {};

export const Description: Story = {
  args: {
    avatar: ETH_AVATAR,
    title: ETH_TITLE,
    description: ETH_DESCRIPTION,
  },
};

export const OnBack: Story = {
  args: {
    avatar: ETH_AVATAR,
    title: ETH_TITLE,
    description: ETH_DESCRIPTION,
    onBack: () => console.log('Back pressed'),
  },
};

export const OnClose: Story = {
  args: {
    avatar: ETH_AVATAR,
    title: ETH_TITLE,
    description: ETH_DESCRIPTION,
    onClose: () => console.log('Close pressed'),
  },
};

export const BackAndClose: Story = {
  args: {
    avatar: ETH_AVATAR,
    title: ETH_TITLE,
    description: ETH_DESCRIPTION,
    onBack: () => console.log('Back pressed'),
    onClose: () => console.log('Close pressed'),
  },
};

export const EndButtonIconProps: Story = {
  args: {
    avatar: ETH_AVATAR,
    title: ETH_TITLE,
    description: ETH_DESCRIPTION,
    onBack: () => console.log('Back pressed'),
    onClose: () => console.log('Close pressed'),
    endButtonIconProps: [
      {
        iconName: IconName.Search,
        ariaLabel: 'Search',
        onClick: () => console.log('Search pressed'),
      },
    ],
  },
};

export const StartAccessory: Story = {
  args: {
    avatar: ETH_AVATAR,
    title: ETH_TITLE,
    description: ETH_DESCRIPTION,
    startAccessory: (
      <Text variant={TextVariant.BodyMd} fontWeight={FontWeight.Medium}>
        Edit
      </Text>
    ),
    onClose: () => console.log('Close pressed'),
  },
};

export const EndAccessory: Story = {
  args: {
    avatar: ETH_AVATAR,
    title: ETH_TITLE,
    description: ETH_DESCRIPTION,
    onBack: () => console.log('Back pressed'),
    endAccessory: (
      <Text variant={TextVariant.BodyMd} fontWeight={FontWeight.Medium}>
        Save
      </Text>
    ),
  },
};

export const TitleOnly: Story = {
  args: {
    avatar: undefined,
    title: 'Settings',
    onBack: () => console.log('Back pressed'),
  },
};

export const TitleEndAccessory: Story = {
  args: {
    avatar: ETH_AVATAR,
    title: ETH_TITLE,
    description: ETH_DESCRIPTION,
    titleEndAccessory: (
      <Text
        variant={TextVariant.BodySm}
        fontWeight={FontWeight.Medium}
        color={TextColor.TextAlternative}
      >
        Badge
      </Text>
    ),
    onBack: () => console.log('Back pressed'),
    onClose: () => console.log('Close pressed'),
  },
};

export const NoContent: Story = {
  args: {
    avatar: undefined,
    title: undefined,
    onBack: () => console.log('Back pressed'),
    onClose: () => console.log('Close pressed'),
  },
};
