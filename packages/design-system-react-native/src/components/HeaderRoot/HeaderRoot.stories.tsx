/* eslint-disable no-console */
import React from 'react';

import { Box, BoxAlignItems } from '../Box';
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
    title: 'Header Title',
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
      endButtonIconProps={[
        {
          iconName: IconName.Close,
          onPress: () => console.log('Close pressed'),
        },
      ]}
    >
      <Box alignItems={BoxAlignItems.Start}>
        <Text variant={TextVariant.HeadingSm}>Custom Title</Text>
        <Text variant={TextVariant.BodySm}>Subtitle text</Text>
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
      title="Search"
      endButtonIconProps={[
        {
          iconName: IconName.Close,
          onPress: () => console.log('Close pressed'),
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
