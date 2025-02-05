import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { IconName } from '../../components/Icon';
import ButtonBase from './ButtonBase';
import { DEFAULT_BUTTONBASE_PROPS } from './ButtonBase.constants';
import type { ButtonBaseProps } from './ButtonBase.types';
import { ButtonBaseSize } from './ButtonBase.types';

const meta: Meta<ButtonBaseProps> = {
  title: 'Primitives/ButtonBase',
  component: ButtonBase,
  argTypes: {
    children: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ButtonBaseSize,
    },
    isLoading: {
      control: 'boolean',
    },
    loadingText: {
      control: 'text',
    },
    startIconName: {
      control: 'select',
      options: IconName,
    },
    endIconName: {
      control: 'select',
      options: IconName,
    },
    isDisabled: {
      control: 'boolean',
    },
    isFullWidth: {
      control: 'boolean',
    },
    twClassName: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<ButtonBaseProps>;

export const Default: Story = {
  args: {
    children: 'ButtonBase',
    size: DEFAULT_BUTTONBASE_PROPS.size,
    isLoading: DEFAULT_BUTTONBASE_PROPS.isLoading,
    loadingText: 'Loading',
    startIconName: IconName.Add,
    endIconName: IconName.AddSquare,
    isDisabled: DEFAULT_BUTTONBASE_PROPS.isDisabled,
    isFullWidth: DEFAULT_BUTTONBASE_PROPS.isFullWidth,
  },
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ButtonBase size={ButtonBaseSize.Sm}>ButtonBaseSize Sm</ButtonBase>
      <ButtonBase size={ButtonBaseSize.Md}>ButtonBaseSize Md</ButtonBase>
      <ButtonBase size={ButtonBaseSize.Lg}>
        ButtonBaseSize Lg (Default)
      </ButtonBase>
    </View>
  ),
};

export const IsLoading: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ButtonBase isLoading>ButtonBase</ButtonBase>
      <ButtonBase isLoading loadingText="With Loading Text">
        ButtonBase
      </ButtonBase>
    </View>
  ),
};

export const WithStartAccessory: Story = {
  render: () => (
    <ButtonBase startIconName={IconName.Add}>ButtonBase</ButtonBase>
  ),
};

export const WithEndAccessory: Story = {
  render: () => <ButtonBase endIconName={IconName.Add}>ButtonBase</ButtonBase>,
};

export const WithStartAndEndAccessory: Story = {
  render: () => (
    <ButtonBase startIconName={IconName.Add} endIconName={IconName.AddSquare}>
      ButtonBase
    </ButtonBase>
  ),
};

export const isDisabled: Story = {
  render: () => <ButtonBase isDisabled>ButtonBase</ButtonBase>,
};

export const isFullWidth: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ButtonBase>ButtonBase</ButtonBase>
      <ButtonBase isFullWidth>ButtonBase</ButtonBase>
    </View>
  ),
};

export const WithLongText: Story = {
  render: () => (
    <View style={{ paddingHorizontal: 32 }}>
      <ButtonBase
        startIconName={IconName.Add}
        endIconName={IconName.ArrowRight}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </ButtonBase>
    </View>
  ),
};
