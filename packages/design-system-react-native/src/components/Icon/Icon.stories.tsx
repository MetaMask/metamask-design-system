import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { ScrollView, View } from 'react-native';

import { IconColor, IconName, IconSize } from '../../types';

import { Icon } from './Icon';
import type { IconProps } from './Icon.types';

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
            ? color.replace('inverse', 'default').replace('text', 'bg')
            : 'bg-default'
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
    name: IconName.Add,
    size: IconSize.Md,
    color: IconColor.IconDefault,
  },
  render: (args) => <IconStory {...args} />,
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      {Object.values(IconSize).map((size) => (
        <View key={size}>
          <Icon name={IconName.Add} size={size as IconSize} />
        </View>
      ))}
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
          <IconStory name={IconName.Add} color={color} size={IconSize.Md} />
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
            <Icon name={iconName} />
          </View>
        ))}
      </View>
    </ScrollView>
  ),
};
