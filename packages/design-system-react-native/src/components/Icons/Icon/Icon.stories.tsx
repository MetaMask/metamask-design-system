import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { ScrollView, View } from 'react-native';

import Icon from './Icon';
import {
  DEFAULT_ICON_ICONSIZE,
  DEFAULT_ICON_ICONNAME,
  DEFAULT_ICON_ICONCOLOR,
} from './Icon.constants';
import type { IconProps } from './Icon.types';
import { IconName, IconColor, IconSize } from './Icon.types';

const meta: Meta<IconProps> = {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: 'select',
      options: IconName,
    },
    size: {
      control: 'select',
      options: IconSize,
    },
    color: {
      control: 'select',
      options: IconColor,
    },
    twClassName: {
      control: 'text',
    },
  },
};

export default meta;

const IconStory: React.FC<IconProps> = ({ color, ...props }) => {
  const tw = useTailwind();
  return (
    <View
      style={[
        tw`${
          color?.endsWith('-inverse')
            ? `bg-${color.replace('inverse', 'default')}`
            : 'bg-background-default'
        }`,
      ]}
    >
      <Icon color={color} {...props} />
    </View>
  );
};

type Story = StoryObj<IconProps>;

export const Default: Story = {
  args: {
    name: DEFAULT_ICON_ICONNAME,
    size: DEFAULT_ICON_ICONSIZE,
    color: DEFAULT_ICON_ICONCOLOR,
  },
  render: (args) => <IconStory {...args} />,
};

export const Sizes: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', alignItems: 'flex-end', padding: 16 }}>
      <Icon
        name={DEFAULT_ICON_ICONNAME}
        size={IconSize.Xs}
        style={{ marginRight: 8 }}
      />
      <Icon
        name={DEFAULT_ICON_ICONNAME}
        size={IconSize.Sm}
        style={{ marginRight: 8 }}
      />
      <Icon
        name={DEFAULT_ICON_ICONNAME}
        size={IconSize.Md}
        style={{ marginRight: 8 }}
      />
      <Icon
        name={DEFAULT_ICON_ICONNAME}
        size={IconSize.Lg}
        style={{ marginRight: 8 }}
      />
      <Icon
        name={DEFAULT_ICON_ICONNAME}
        size={IconSize.Xl}
        style={{ marginRight: 8 }}
      />
    </View>
  ),
};

export const Colors: Story = {
  render: () => (
    <View
      style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 16, gap: 8 }}
    >
      {Object.values(IconColor).map((color) => (
        <View key={color} style={{ alignItems: 'center', gap: 8 }}>
          <IconStory
            name={DEFAULT_ICON_ICONNAME}
            color={color}
            size={DEFAULT_ICON_ICONSIZE}
          />
        </View>
      ))}
    </View>
  ),
};

export const AllIcons: Story = {
  render: () => (
    <ScrollView>
      <View style={{ flexWrap: 'wrap', flexDirection: 'row', padding: 16 }}>
        {Object.values(IconName).map((iconName) => (
          <View
            key={iconName}
            style={{ width: 60, alignItems: 'center', margin: 8 }}
          >
            <Icon name={iconName} size={DEFAULT_ICON_ICONSIZE} />
          </View>
        ))}
      </View>
    </ScrollView>
  ),
};
