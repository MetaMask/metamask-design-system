import {
  AvatarTokenSize,
  ButtonIconSize,
  FontWeight,
  IconName,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { AvatarToken } from '../AvatarToken';
import { Box } from '../Box';
import { ButtonIcon } from '../ButtonIcon';
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
    description: (
      <Box className="flex flex-row items-center gap-1">
        <Text
          variant={TextVariant.BodySm}
          fontWeight={FontWeight.Medium}
          color={TextColor.TextAlternative}
        >
          0x1234...5678
        </Text>
        <ButtonIcon
          iconName={IconName.Copy}
          size={ButtonIconSize.Xs}
          ariaLabel="Copy address"
          onClick={() => console.log('Copy address pressed')}
        />
      </Box>
    ),
  },
};

export const Title: Story = {
  args: {
    avatar: undefined,
    title: 'Settings',
  },
};

export const TitleProps: Story = {
  args: {
    title: 'Ethereum',
    titleProps: {
      'data-testid': 'header-subpage-title',
    },
  },
};

export const DescriptionProps: Story = {
  args: {
    title: ETH_TITLE,
    description: '0x1234...5678',
    descriptionProps: {
      'data-testid': 'header-subpage-description',
    },
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
      <ButtonIcon
        iconName={IconName.ArrowLeft}
        ariaLabel="Go back"
        onClick={() => console.log('Back pressed')}
      />
    ),
  },
};

export const EndAccessory: Story = {
  args: {
    avatar: ETH_AVATAR,
    title: ETH_TITLE,
    description: ETH_DESCRIPTION,
    onBack: () => console.log('Back pressed'),
    endAccessory: (
      <Box className="flex flex-row gap-2">
        <ButtonIcon
          iconName={IconName.Notification}
          ariaLabel="Create price alert"
          onClick={() => console.log('Price alert pressed')}
        />
        <ButtonIcon
          iconName={IconName.Share}
          ariaLabel="Share token"
          onClick={() => console.log('Share pressed')}
        />
      </Box>
    ),
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
        Verified
      </Text>
    ),
    onBack: () => console.log('Back pressed'),
    onClose: () => console.log('Close pressed'),
  },
};
