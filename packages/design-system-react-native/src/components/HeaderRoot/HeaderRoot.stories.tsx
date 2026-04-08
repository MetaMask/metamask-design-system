import React from 'react';

import { Box, BoxAlignItems, BoxFlexDirection } from '../Box';
import { Icon, IconColor, IconName } from '../Icon';
import { Text, TextVariant } from '../Text';

import { HeaderRoot } from './HeaderRoot';
import type { HeaderRootProps } from './HeaderRoot.types';

const HeaderRootMeta = {
  title: 'Components/HeaderRoot',
  component: HeaderRoot,
  argTypes: {
    title: {
      control: 'text',
    },
    twClassName: {
      control: 'text',
    },
  },
};

export default HeaderRootMeta;

export const Default = {
  render: (args: HeaderRootProps) => <HeaderRoot {...args} />,
  args: {
    title: 'Explore',
    twClassName: undefined,
  },
};

export const Title = {
  render: () => (
    <HeaderRoot
      title={
        <Text
          variant={TextVariant.HeadingLg}
          twClassName="text-primary-default"
        >
          Custom node title
        </Text>
      }
    />
  ),
};

export const TitleAccessory = {
  render: () => (
    <HeaderRoot
      title="Settings"
      titleAccessory={
        <Icon
          name={IconName.Info}
          color={IconColor.IconAlternative}
          twClassName="ml-1"
        />
      }
    />
  ),
};

export const Children = {
  render: () => (
    <HeaderRoot
      twClassName="bg-default"
      endButtonIconProps={[
        {
          iconName: IconName.Menu,
          onPress: () => console.log('Menu pressed'),
        },
        {
          iconName: IconName.Card,
          onPress: () => console.log('Card pressed'),
        },
        {
          iconName: IconName.Copy,
          onPress: () => console.log('Copy pressed'),
        },
      ]}
    >
      <Box
        flexDirection={BoxFlexDirection.Row}
        alignItems={BoxAlignItems.Center}
        gap={1}
      >
        <Text variant={TextVariant.BodyMd} twClassName="text-default">
          Imported Account 1
        </Text>
        <Icon
          name={IconName.ArrowDown}
          color={IconColor.IconDefault}
          twClassName="text-default"
        />
      </Box>
    </HeaderRoot>
  ),
};

export const EndAccessory = {
  render: () => (
    <HeaderRoot
      title="Page Title"
      endAccessory={<Text variant={TextVariant.BodyMd}>Custom end</Text>}
    />
  ),
};

export const EndButtonIconProps = {
  render: () => (
    <HeaderRoot
      title="Rewards"
      endButtonIconProps={[
        {
          iconName: IconName.Setting,
          onPress: () => console.log('Settings pressed'),
        },
      ]}
    />
  ),
};

export const EndButtonIconPropsMultiple = {
  render: () => (
    <HeaderRoot
      title="Search"
      endButtonIconProps={[
        {
          iconName: IconName.Search,
          onPress: () => console.log('Search pressed'),
        },
        {
          iconName: IconName.Close,
          onPress: () => console.log('Close pressed'),
        },
      ]}
    />
  ),
};
