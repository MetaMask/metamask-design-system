import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { IconName } from '../../../Icon';
import { ButtonBaseSize } from '../../../../primitives/ButtonBase';
import ButtonPrimary from './ButtonPrimary';
import { DEFAULT_BUTTONPRIMARY_PROPS } from './ButtonPrimary.constants';
import type { ButtonPrimaryProps } from './ButtonPrimary.types';

const meta: Meta<ButtonPrimaryProps> = {
  title: 'Components/ButtonPrimary',
  component: ButtonPrimary,
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

type Story = StoryObj<ButtonPrimaryProps>;
const ButtonPrimaryStory: React.FC<ButtonPrimaryProps> = ({
  isInverse,
  ...props
}) => {
  const tw = useTailwind();
  return (
    <View
      style={[
        tw`${isInverse ? `bg-primary-default p-4` : 'bg-background-default'}`,
      ]}
    >
      <ButtonPrimary isInverse={isInverse} {...props} />
    </View>
  );
};

export const Default: Story = {
  args: {
    children: 'Sample ButtonPrimary Text',
    size: DEFAULT_BUTTONPRIMARY_PROPS.size,
    isLoading: DEFAULT_BUTTONPRIMARY_PROPS.isLoading,
    loadingText: 'Loading',
    startIconName: IconName.Add,
    endIconName: IconName.AddSquare,
    isDisabled: DEFAULT_BUTTONPRIMARY_PROPS.isDisabled,
    isFullWidth: DEFAULT_BUTTONPRIMARY_PROPS.isFullWidth,
    isInverse: DEFAULT_BUTTONPRIMARY_PROPS.isInverse,
    isDanger: DEFAULT_BUTTONPRIMARY_PROPS.isDanger,
  },
  render: (args) => <ButtonPrimaryStory {...args} />,
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ButtonPrimary size={ButtonBaseSize.Sm}>ButtonSize Sm</ButtonPrimary>
      <ButtonPrimary size={ButtonBaseSize.Md}>ButtonSize Md</ButtonPrimary>
      <ButtonPrimary size={ButtonBaseSize.Lg}>
        ButtonSize Lg (Default)
      </ButtonPrimary>
    </View>
  ),
};

export const IsLoading: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ButtonPrimary isLoading>ButtonPrimary</ButtonPrimary>
      <ButtonPrimary isLoading loadingText="With Loading Text">
        ButtonPrimary
      </ButtonPrimary>
    </View>
  ),
};

export const WithStartAccessory: Story = {
  args: {
    children: 'Start Accessory',
    startIconName: IconName.Add,
  },
};

export const WithEndAccessory: Story = {
  args: {
    children: 'End Accessory',
    endIconName: IconName.Add,
  },
};

export const WithStartAndEndAccessory: Story = {
  args: {
    children: 'Start and End Accessory',
    startIconName: IconName.Add,
    endIconName: IconName.AddSquare,
  },
};

export const isDisabled: Story = {
  args: {
    children: 'isDisabled',
    isDisabled: true,
  },
};

export const isFullWidth: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ButtonPrimary>ButtonPrimary</ButtonPrimary>
      <ButtonPrimary isFullWidth>ButtonPrimary</ButtonPrimary>
    </View>
  ),
};

export const isDanger: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ButtonPrimary isDanger>ButtonPrimary</ButtonPrimary>
      <ButtonPrimaryStory isDanger isInverse>
        ButtonPrimary
      </ButtonPrimaryStory>
    </View>
  ),
};

export const isInverse: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ButtonPrimaryStory isInverse>ButtonPrimary</ButtonPrimaryStory>
      <ButtonPrimaryStory isInverse isDanger>
        ButtonPrimary
      </ButtonPrimaryStory>
    </View>
  ),
};

export const WithLongText: Story = {
  render: () => (
    <ButtonPrimary
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
    </ButtonPrimary>
  ),
};
