import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import EthSVG from '../../assets/token-icons/eth.svg';
import { AvatarToken, AvatarTokenSize } from '../AvatarToken';
import { Box } from '../Box';
import { IconName } from '../Icon';

import { HeaderSubpage } from './HeaderSubpage';
import type { HeaderSubpageProps } from './HeaderSubpage.types';

const ETH_TITLE = 'Ethereum';
const ETH_DESCRIPTION = 'ETH';

const StoryHeaderAvatar = () => (
  <AvatarToken src={EthSVG} size={AvatarTokenSize.Lg} name={ETH_TITLE} />
);

const meta: Meta<HeaderSubpageProps> = {
  title: 'Components/HeaderSubpage',
  component: HeaderSubpage,
  args: {
    avatar: <StoryHeaderAvatar />,
    title: ETH_TITLE,
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Primary identity label in the header row.',
    },
    description: {
      control: 'text',
      description:
        'Secondary line below the title (ListItem `description`, not `subtitle`).',
    },
  },
  decorators: [
    (Story) => (
      <Box twClassName="w-full bg-background-default">
        <Story />
      </Box>
    ),
  ],
};

export default meta;

type Story = StoryObj<HeaderSubpageProps>;

export const Default: Story = {};

export const Description: Story = {
  args: {
    description: ETH_DESCRIPTION,
  },
};

export const OnBack: Story = {
  args: {
    description: ETH_DESCRIPTION,
    onBack: () => null,
  },
};

export const OnClose: Story = {
  args: {
    description: ETH_DESCRIPTION,
    onClose: () => null,
  },
};

export const BackAndClose: Story = {
  args: {
    description: ETH_DESCRIPTION,
    onBack: () => null,
    onClose: () => null,
  },
};

export const EndButtonIconProps: Story = {
  args: {
    description: ETH_DESCRIPTION,
    onBack: () => null,
    onClose: () => null,
    endButtonIconProps: [
      {
        iconName: IconName.Search,
        onPress: () => null,
      },
    ],
  },
};
