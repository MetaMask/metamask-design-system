import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { IconName } from '../../../Icon';
import { ButtonBaseSize } from '../../../../primitives/ButtonBase';
import ButtonTertiary from './ButtonTertiary';
import { DEFAULT_BUTTONTERTIARY_PROPS } from './ButtonTertiary.constants';
import type { ButtonTertiaryProps } from './ButtonTertiary.types';

const meta: Meta<ButtonTertiaryProps> = {
  title: 'Components/ButtonTertiary',
  component: ButtonTertiary,
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

type Story = StoryObj<ButtonTertiaryProps>;
const ButtonTertiaryStory: React.FC<ButtonTertiaryProps> = ({
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
      <ButtonTertiary isInverse={isInverse} {...props} />
    </View>
  );
};

export const Default: Story = {
  args: {
    children: 'Sample ButtonTertiary Text',
    size: DEFAULT_BUTTONTERTIARY_PROPS.size,
    isLoading: DEFAULT_BUTTONTERTIARY_PROPS.isLoading,
    loadingText: 'Loading',
    startIconName: IconName.Add,
    endIconName: IconName.AddSquare,
    isDisabled: DEFAULT_BUTTONTERTIARY_PROPS.isDisabled,
    isFullWidth: DEFAULT_BUTTONTERTIARY_PROPS.isFullWidth,
    isInverse: DEFAULT_BUTTONTERTIARY_PROPS.isInverse,
    isDanger: DEFAULT_BUTTONTERTIARY_PROPS.isDanger,
  },
  render: (args) => <ButtonTertiaryStory {...args} />,
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ButtonTertiary size={ButtonBaseSize.Sm}>ButtonSize Sm</ButtonTertiary>
      <ButtonTertiary size={ButtonBaseSize.Md}>ButtonSize Md</ButtonTertiary>
      <ButtonTertiary size={ButtonBaseSize.Lg}>
        ButtonSize Lg (Default)
      </ButtonTertiary>
    </View>
  ),
};

export const IsLoading: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ButtonTertiary isLoading>ButtonTertiary</ButtonTertiary>
      <ButtonTertiary isLoading loadingText="With Loading Text">
        ButtonTertiary
      </ButtonTertiary>
    </View>
  ),
};

export const WithStartAccessory: Story = {
  args: {
    children: 'Start Acccessory',
    startIconName: IconName.Add,
  },
};

export const WithEndAccessory: Story = {
  args: {
    children: 'End Accessory',
    endIconName: IconName.AddSquare,
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
      <ButtonTertiary>ButtonTertiary</ButtonTertiary>
      <ButtonTertiary isFullWidth>ButtonTertiary</ButtonTertiary>
    </View>
  ),
};

export const isDanger: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ButtonTertiary isDanger>ButtonTertiary</ButtonTertiary>
      <ButtonTertiaryStory isDanger isInverse>
        ButtonTertiary
      </ButtonTertiaryStory>
    </View>
  ),
};

export const isInverse: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ButtonTertiaryStory isInverse>ButtonTertiary</ButtonTertiaryStory>
      <ButtonTertiaryStory isInverse isDanger>
        ButtonTertiary
      </ButtonTertiaryStory>
    </View>
  ),
};

export const WithLongText: Story = {
  render: () => (
    <ButtonTertiary
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
    </ButtonTertiary>
  ),
};
