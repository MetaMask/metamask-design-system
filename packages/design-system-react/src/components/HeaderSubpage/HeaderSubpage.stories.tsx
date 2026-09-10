import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { AvatarToken, AvatarTokenSize } from '../AvatarToken';
import { Box } from '../Box';
import { IconName } from '../Icon';
import { Text, TextVariant, FontWeight, TextColor } from '../Text';

import { HeaderSubpage } from './HeaderSubpage';
import type { HeaderSubpageProps } from './HeaderSubpage.types';
import README from './README.mdx';

const ETH_TITLE = 'Ethereum';
const ETH_DESCRIPTION = 'ETH';

const StoryHeaderContent = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => (
  <Box className="flex flex-row items-center gap-3">
    <AvatarToken
      src="https://cryptologos.cc/logos/ethereum-eth-logo.svg"
      size={AvatarTokenSize.Lg}
      name={title}
    />
    <Box>
      <Text variant={TextVariant.BodyMd} fontWeight={FontWeight.Medium}>
        {title}
      </Text>
      {description && (
        <Text
          variant={TextVariant.BodySm}
          fontWeight={FontWeight.Normal}
          color={TextColor.TextAlternative}
        >
          {description}
        </Text>
      )}
    </Box>
  </Box>
);

const meta: Meta<HeaderSubpageProps> = {
  title: 'React Components/HeaderSubpage',
  component: HeaderSubpage,
  parameters: {
    docs: {
      page: README,
    },
  },
  args: {
    children: <StoryHeaderContent title={ETH_TITLE} />,
  },
  decorators: [
    (Story) => (
      <Box className="w-full bg-background-default">
        <Story />
      </Box>
    ),
  ],
};

export default meta;

type Story = StoryObj<HeaderSubpageProps>;

export const Default: Story = {};

export const WithDescription: Story = {
  args: {
    children: (
      <StoryHeaderContent title={ETH_TITLE} description={ETH_DESCRIPTION} />
    ),
  },
};

export const OnBack: Story = {
  args: {
    children: (
      <StoryHeaderContent title={ETH_TITLE} description={ETH_DESCRIPTION} />
    ),
    onBack: () => console.log('Back pressed'),
  },
};

export const OnClose: Story = {
  args: {
    children: (
      <StoryHeaderContent title={ETH_TITLE} description={ETH_DESCRIPTION} />
    ),
    onClose: () => console.log('Close pressed'),
  },
};

export const BackAndClose: Story = {
  args: {
    children: (
      <StoryHeaderContent title={ETH_TITLE} description={ETH_DESCRIPTION} />
    ),
    onBack: () => console.log('Back pressed'),
    onClose: () => console.log('Close pressed'),
  },
};

export const EndButtonIconProps: Story = {
  args: {
    children: (
      <StoryHeaderContent title={ETH_TITLE} description={ETH_DESCRIPTION} />
    ),
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

export const CustomStartAccessory: Story = {
  args: {
    children: (
      <StoryHeaderContent title={ETH_TITLE} description={ETH_DESCRIPTION} />
    ),
    startAccessory: (
      <Text variant={TextVariant.BodyMd} fontWeight={FontWeight.Medium}>
        Custom
      </Text>
    ),
    onClose: () => console.log('Close pressed'),
  },
};

export const CustomEndAccessory: Story = {
  args: {
    children: (
      <StoryHeaderContent title={ETH_TITLE} description={ETH_DESCRIPTION} />
    ),
    onBack: () => console.log('Back pressed'),
    endAccessory: (
      <Text variant={TextVariant.BodyMd} fontWeight={FontWeight.Medium}>
        Done
      </Text>
    ),
  },
};

export const TitleOnly: Story = {
  args: {
    children: (
      <Text variant={TextVariant.HeadingSm} fontWeight={FontWeight.Bold}>
        Settings
      </Text>
    ),
    onBack: () => console.log('Back pressed'),
  },
};
