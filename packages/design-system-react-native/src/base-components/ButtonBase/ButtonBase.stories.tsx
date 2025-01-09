import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { IconName } from '../../components/Icons/Icon';
import ButtonBase from './ButtonBase';
import { DEFAULT_BUTTONBASE_PROPS } from './ButtonBase.constants';
import type { ButtonBaseProps } from './ButtonBase.types';
import { ButtonBaseSize } from './ButtonBase.types';

const meta: Meta<ButtonBaseProps> = {
  title: 'Base Components/Button Base',
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
    children: 'Sample ButtonBase Text',
    size: DEFAULT_BUTTONBASE_PROPS.size,
    isLoading: DEFAULT_BUTTONBASE_PROPS.isLoading,
    loadingText: DEFAULT_BUTTONBASE_PROPS.loadingText,
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
      <ButtonBase size={ButtonBaseSize.Md}>
        ButtonBaseSize Md (Default)
      </ButtonBase>
      <ButtonBase size={ButtonBaseSize.Lg}>ButtonBaseSize Lg</ButtonBase>
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
