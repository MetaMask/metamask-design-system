import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import { AvatarToken, AvatarTokenSize } from '../AvatarToken';
import { SAMPLE_AVATARTOKEN_URIS } from '../AvatarToken/AvatarToken.dev';
import { Box } from '../Box';
import { BoxHorizontal } from '../BoxHorizontal';
import { Icon, IconColor, IconName, IconSize } from '../Icon';
import { TextVariant } from '../Text';

import { TitleSubpage } from './TitleSubpage';
import type { TitleSubpageProps } from './TitleSubpage.types';

const meta: Meta<TitleSubpageProps> = {
  title: 'Components/TitleSubpage',
  component: TitleSubpage,
  argTypes: {
    title: { control: 'text' },
    bottomLabel: { control: 'text' },
    twClassName: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<TitleSubpageProps>;

export const Default: Story = {
  args: {
    title: 'Token Name',
    bottomLabel: '$1,234.56',
  },
  render: (args) => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
        <TitleSubpage {...args} />
      </View>
    );
  },
};

export const Title: Story = {
  args: {
    title: 'Token Name',
  },
  render: (args) => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
        <TitleSubpage {...args} />
      </View>
    );
  },
};

export const StartAccessory: Story = {
  render: () => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
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
      </View>
    );
  },
};

export const TitleAccessory: Story = {
  render: () => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
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
      </View>
    );
  },
};

export const BottomAccessory: Story = {
  render: () => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
        <TitleSubpage
          title="Token Name"
          bottomAccessory={
            <BoxHorizontal
              startAccessory={<Icon name={IconName.Gas} size={IconSize.Xs} />}
              textProps={{ variant: TextVariant.BodySm }}
            >
              ~$0.50 fee
            </BoxHorizontal>
          }
        />
      </View>
    );
  },
};

export const FullExample: Story = {
  render: () => {
    const tw = useTailwind();
    return (
      <View style={tw`p-4`}>
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
      </View>
    );
  },
};
