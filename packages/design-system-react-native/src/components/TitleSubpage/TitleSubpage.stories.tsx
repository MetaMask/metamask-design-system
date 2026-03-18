import React from 'react';

import { AvatarToken, AvatarTokenSize } from '../AvatarToken';
import { SAMPLE_AVATARTOKEN_URIS } from '../AvatarToken/AvatarToken.dev';
import { Box, BoxAlignItems, BoxFlexDirection } from '../Box';
import { Icon, IconColor, IconName, IconSize } from '../Icon';
import { Text, TextVariant } from '../Text';

import TitleSubpage from './TitleSubpage';

const TitleSubpageMeta = {
  title: 'Components/TitleSubpage',
  component: TitleSubpage,
  argTypes: {
    title: {
      control: 'text',
    },
    bottomLabel: {
      control: 'text',
    },
  },
};

export default TitleSubpageMeta;

export const Default = {
  args: {
    title: 'Token Name',
    bottomLabel: '$1,234.56',
  },
};

export const TitleOnly = {
  render: () => <TitleSubpage title="Token Name" />,
};

export const WithBottomLabel = {
  render: () => <TitleSubpage title="Token Name" bottomLabel="$1,234.56" />,
};

export const WithStartAccessory = {
  render: () => (
    <TitleSubpage
      startAccessory={
        <AvatarToken
          src={SAMPLE_AVATARTOKEN_URIS[0]}
          size={AvatarTokenSize.Lg}
        />
      }
      title="Wrapped Ethereum"
      bottomLabel="$3,456.78"
    />
  ),
};

export const WithTitleAccessory = {
  render: () => (
    <TitleSubpage
      title="Token Name"
      titleAccessory={
        <Box twClassName="ml-2">
          <Icon
            name={IconName.Info}
            size={IconSize.Sm}
            color={IconColor.IconAlternative}
          />
        </Box>
      }
      bottomLabel="$1,234.56"
    />
  ),
};

export const WithBottomAccessory = {
  render: () => (
    <TitleSubpage
      title="Token Name"
      bottomAccessory={
        <Box
          flexDirection={BoxFlexDirection.Row}
          alignItems={BoxAlignItems.Center}
          gap={1}
        >
          <Icon name={IconName.Gas} size={IconSize.Xs} />
          <Text variant={TextVariant.BodySm}>~$0.50 fee</Text>
        </Box>
      }
    />
  ),
};

export const FullExample = {
  render: () => (
    <TitleSubpage
      startAccessory={
        <AvatarToken
          src={SAMPLE_AVATARTOKEN_URIS[0]}
          size={AvatarTokenSize.Lg}
        />
      }
      title="Wrapped Ethereum"
      titleAccessory={
        <Box twClassName="ml-1">
          <Icon name={IconName.Info} size={IconSize.Sm} />
        </Box>
      }
      bottomLabel="$3,456.78"
    />
  ),
};

export const NoStartAccessory = {
  render: () => (
    <TitleSubpage title="Token Name" bottomLabel="+$123.45 (1.2%)" />
  ),
};
