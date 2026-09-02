import React from 'react';
import { View } from 'react-native';

import { Box } from '../Box';
import { ButtonIcon, ButtonIconSize } from '../ButtonIcon';
import { IconName } from '../Icon';
import { Text, TextVariant } from '../Text';

import { HeaderBase } from './HeaderBase';

const HeaderBaseMeta = {
  title: 'Components/HeaderBase',
  component: HeaderBase,
  decorators: [
    (Story: React.ComponentType) => (
      <View>
        <Story />
        <Box twClassName="p-4">
          <Text variant={TextVariant.BodyMd}>Content below header</Text>
        </Box>
      </View>
    ),
  ],
  argTypes: {
    children: {
      control: 'text',
    },
    twClassName: {
      control: 'text',
    },
    includesTopInset: {
      control: 'boolean',
    },
  },
};

export default HeaderBaseMeta;

export const Default = {
  args: {
    children: 'Header title',
  },
};

export const TwClassName = {
  render: () => (
    <HeaderBase twClassName="bg-info-default px-4">
      Header with custom styles
    </HeaderBase>
  ),
};

export const StartButtonIconProps = {
  render: () => (
    <HeaderBase
      startButtonIconProps={{
        iconName: IconName.ArrowLeft,
        onPress: () => console.log('Back pressed'),
      }}
    >
      With start button
    </HeaderBase>
  ),
};

export const EndButtonIconProps = {
  render: () => (
    <HeaderBase
      endButtonIconProps={[
        {
          iconName: IconName.Close,
          onPress: () => console.log('Close pressed'),
        },
      ]}
    >
      With end button
    </HeaderBase>
  ),
};

export const MultipleEndButtonIconProps = {
  render: () => (
    <HeaderBase
      endButtonIconProps={[
        {
          iconName: IconName.Close,
          onPress: () => console.log('Close pressed'),
        },
        {
          iconName: IconName.Search,
          onPress: () => console.log('Search pressed'),
        },
        {
          iconName: IconName.Setting,
          onPress: () => console.log('Settings pressed'),
        },
      ]}
    >
      Multiple end buttons
    </HeaderBase>
  ),
};

export const StartAccessory = {
  render: () => (
    <HeaderBase
      startAccessory={
        <ButtonIcon
          iconName={IconName.ArrowLeft}
          size={ButtonIconSize.Md}
          onPress={() => console.log('Back pressed')}
        />
      }
    >
      With start accessory
    </HeaderBase>
  ),
};

export const EndAccessory = {
  render: () => (
    <HeaderBase
      endAccessory={
        <ButtonIcon
          iconName={IconName.Close}
          size={ButtonIconSize.Md}
          onPress={() => console.log('Close pressed')}
        />
      }
    >
      With end accessory
    </HeaderBase>
  ),
};

export const BothAccessories = {
  render: () => (
    <HeaderBase
      startAccessory={
        <ButtonIcon
          iconName={IconName.ArrowLeft}
          size={ButtonIconSize.Md}
          onPress={() => console.log('Back pressed')}
        />
      }
      endAccessory={
        <ButtonIcon
          iconName={IconName.Close}
          size={ButtonIconSize.Md}
          onPress={() => console.log('Close pressed')}
        />
      }
    >
      Both accessories
    </HeaderBase>
  ),
};

export const Children = {
  render: () => (
    <HeaderBase
      startButtonIconProps={{
        iconName: IconName.ArrowLeft,
        onPress: () => console.log('Back pressed'),
      }}
    >
      <Box twClassName="items-center">
        <Text variant={TextVariant.HeadingSm}>Custom title</Text>
        <Text variant={TextVariant.BodySm}>Subtitle text</Text>
      </Box>
    </HeaderBase>
  ),
};
