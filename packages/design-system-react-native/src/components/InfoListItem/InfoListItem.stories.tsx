import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import { IconColor, IconName, IconSize } from '../../types';
import { InfoListItem } from './InfoListItem';
import type { InfoListItemProps } from './InfoListItem.types';

const meta: Meta<InfoListItemProps> = {
  title: 'Components/InfoListItem',
  component: InfoListItem,
  args: {
    title: 'Label',
    subtitle: 'Secondary text',
    value: 'Value',
    supporting: 'Supporting text',
    startIconProps: { name: IconName.Info },
  },
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    value: { control: 'text' },
    supporting: { control: 'text' },
    titleProps: { control: 'object' },
    subtitleProps: { control: 'object' },
    valueProps: { control: 'object' },
    supportingProps: { control: 'object' },
    startIconProps: { control: 'object' },
    titleStartAccessory: { control: false },
    titleEndAccessory: { control: false },
    subtitleStartAccessory: { control: false },
    subtitleEndAccessory: { control: false },
    valueStartAccessory: { control: false },
    valueEndAccessory: { control: false },
    supportingStartAccessory: { control: false },
    supportingEndAccessory: { control: false },
    twClassName: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<InfoListItemProps>;

const StoryWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const tw = useTailwind();
  return <View style={tw`p-4`}>{children}</View>;
};

export const Default: Story = {
  render: (args) => (
    <StoryWrapper>
      <InfoListItem {...args} />
    </StoryWrapper>
  ),
};

export const StartIconProps: Story = {
  render: (args) => (
    <StoryWrapper>
      <InfoListItem
        {...args}
        title="With custom icon"
        subtitle="Size and color overridden via startIconProps"
        startIconProps={{
          name: IconName.Security,
          size: IconSize.Lg,
          color: IconColor.PrimaryDefault,
        }}
      />
    </StoryWrapper>
  ),
};

export const WithoutStartIcon: Story = {
  render: (args) => (
    <StoryWrapper>
      <InfoListItem {...args} title="No start icon" subtitle="startIconProps omitted" startIconProps={undefined} />
    </StoryWrapper>
  ),
};
