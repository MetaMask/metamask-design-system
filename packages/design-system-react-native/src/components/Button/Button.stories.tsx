import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { IconName } from '../Icon';
import Button from './Button';
import { DEFAULT_BUTTON_PROPS } from './Button.constants';
import { ButtonSize, ButtonVariant } from './Button.types';
import type { ButtonProps } from './Button.types';

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ButtonVariant,
      control: {
        type: 'select',
      },
    },
    children: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ButtonSize,
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
    isDanger: {
      control: 'boolean',
    },
    isInverse: {
      control: 'boolean',
    },
    twClassName: {
      control: 'text',
    },
  },
};
export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    variant: ButtonVariant.Primary,
    children: 'Sample Button Text',
    size: DEFAULT_BUTTON_PROPS.size,
    isLoading: DEFAULT_BUTTON_PROPS.isLoading,
    loadingText: DEFAULT_BUTTON_PROPS.loadingText,
    startIconName: IconName.Add,
    endIconName: IconName.AddSquare,
    isDisabled: DEFAULT_BUTTON_PROPS.isDisabled,
    isFullWidth: DEFAULT_BUTTON_PROPS.isFullWidth,
  },
};

export const Variants: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Button variant={ButtonVariant.Primary}>ButtonVariant Primary</Button>
      <Button variant={ButtonVariant.Secondary}>ButtonVariant Secondary</Button>
      <Button variant={ButtonVariant.Tertiary}>ButtonVariant Tertiary</Button>
    </View>
  ),
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Button variant={ButtonVariant.Primary} size={ButtonSize.Sm}>
        ButtonSize Sm
      </Button>
      <Button variant={ButtonVariant.Primary} size={ButtonSize.Md}>
        ButtonSize Md
      </Button>
      <Button variant={ButtonVariant.Primary} size={ButtonSize.Lg}>
        ButtonSize Lg (Default)
      </Button>
    </View>
  ),
};

export const IsLoading: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Button variant={ButtonVariant.Primary} isLoading>
        Button
      </Button>
      <Button
        variant={ButtonVariant.Primary}
        isLoading
        loadingText="With Loading Text"
      >
        Button
      </Button>
    </View>
  ),
};

export const WithStartAccessory: Story = {
  render: () => (
    <Button variant={ButtonVariant.Primary} startIconName={IconName.Add}>
      Button
    </Button>
  ),
};

export const WithEndAccessory: Story = {
  render: () => (
    <Button variant={ButtonVariant.Primary} endIconName={IconName.Add}>
      Button
    </Button>
  ),
};

export const WithStartAndEndAccessory: Story = {
  render: () => (
    <Button
      variant={ButtonVariant.Primary}
      startIconName={IconName.Add}
      endIconName={IconName.AddSquare}
    >
      Button
    </Button>
  ),
};

export const isDisabled: Story = {
  render: () => (
    <Button variant={ButtonVariant.Primary} isDisabled>
      Button
    </Button>
  ),
};

export const isFullWidth: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Button variant={ButtonVariant.Primary}>Button</Button>
      <Button variant={ButtonVariant.Primary} isFullWidth>
        Button
      </Button>
    </View>
  ),
};

export const WithLongText: Story = {
  render: () => (
    <Button
      variant={ButtonVariant.Primary}
      startIconName={IconName.Add}
      endIconName={IconName.AddSquare}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Button>
  ),
};
