import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import HeaderBase from './HeaderBase';
import type { HeaderBaseProps } from './HeaderBase.types';

import {
  Box,
  Text,
  TextVariant,
  ButtonIcon,
  ButtonIconSize,
  IconName,
} from '@metamask/design-system-react-native';

const meta: Meta<HeaderBaseProps> = {
  title: 'Components/HeaderBase',
  component: HeaderBase,
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

export default meta;

type Story = StoryObj<HeaderBaseProps>;

const noop = (): void => undefined;

export const Default: Story = {
  args: {
    children: 'Header Title',
  },
  render: (args) => <HeaderBase {...args} />,
};

export const TwClassName: Story = {
  render: () => (
    <HeaderBase twClassName="bg-info-default px-4">
      Header with Custom Styles
    </HeaderBase>
  ),
};

export const StartButtonIconProps: Story = {
  render: () => (
    <HeaderBase
      startButtonIconProps={{
        iconName: IconName.ArrowLeft,
        onPress: noop,
      }}
    >
      With Start Button
    </HeaderBase>
  ),
};

export const EndButtonIconProps: Story = {
  render: () => (
    <HeaderBase
      endButtonIconProps={[
        {
          iconName: IconName.Close,
          onPress: noop,
        },
      ]}
    >
      With End Button
    </HeaderBase>
  ),
};

export const MultipleEndButtonIconProps: Story = {
  render: () => (
    <HeaderBase
      endButtonIconProps={[
        {
          iconName: IconName.Close,
          onPress: noop,
        },
        {
          iconName: IconName.Search,
          onPress: noop,
        },
        {
          iconName: IconName.Setting,
          onPress: noop,
        },
      ]}
    >
      Multiple End Buttons
    </HeaderBase>
  ),
};

export const StartAccessory: Story = {
  render: () => (
    <HeaderBase
      startAccessory={
        <ButtonIcon
          iconName={IconName.ArrowLeft}
          size={ButtonIconSize.Md}
          onPress={noop}
        />
      }
    >
      With Start Accessory
    </HeaderBase>
  ),
};

export const EndAccessory: Story = {
  render: () => (
    <HeaderBase
      endAccessory={
        <ButtonIcon
          iconName={IconName.Close}
          size={ButtonIconSize.Md}
          onPress={noop}
        />
      }
    >
      With End Accessory
    </HeaderBase>
  ),
};

export const BothAccessories: Story = {
  render: () => (
    <HeaderBase
      startAccessory={
        <ButtonIcon
          iconName={IconName.ArrowLeft}
          size={ButtonIconSize.Md}
          onPress={noop}
        />
      }
      endAccessory={
        <ButtonIcon
          iconName={IconName.Close}
          size={ButtonIconSize.Md}
          onPress={noop}
        />
      }
    >
      Both Accessories
    </HeaderBase>
  ),
};

export const Children: Story = {
  render: () => (
    <HeaderBase
      startButtonIconProps={{
        iconName: IconName.ArrowLeft,
        onPress: noop,
      }}
    >
      <Box twClassName="items-center">
        <Text variant={TextVariant.HeadingSm}>Custom Title</Text>
        <Text variant={TextVariant.BodySm}>Subtitle text</Text>
      </Box>
    </HeaderBase>
  ),
};
