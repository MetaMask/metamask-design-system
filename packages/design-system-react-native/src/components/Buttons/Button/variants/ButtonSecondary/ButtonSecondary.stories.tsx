import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { IconName } from '../../../../Icon';
import { ButtonSize } from '../../Button.types';
import ButtonSecondary from './ButtonSecondary';
import { DEFAULT_BUTTONSECONDARY_PROPS } from './ButtonSecondary.constants';
import type { ButtonSecondaryProps } from './ButtonSecondary.types';

const meta: Meta<ButtonSecondaryProps> = {
  title: 'Components/Button Secondary',
  component: ButtonSecondary,
  argTypes: {
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

type Story = StoryObj<ButtonSecondaryProps>;
const ButtonSecondaryStory: React.FC<ButtonSecondaryProps> = ({
  isInverse,
  ...props
}) => {
  const tw = useTailwind();
  return (
    <View
      style={[
        tw`${isInverse ? `bg-primary-default` : 'bg-background-default'}`,
      ]}
    >
      <ButtonSecondary isInverse={isInverse} {...props} />
    </View>
  );
};

export const Default: Story = {
  args: {
    children: 'Sample ButtonSecondary Text',
    size: DEFAULT_BUTTONSECONDARY_PROPS.size,
    isLoading: DEFAULT_BUTTONSECONDARY_PROPS.isLoading,
    loadingText: 'Loading',
    startIconName: IconName.Add,
    endIconName: IconName.AddSquare,
    isDisabled: DEFAULT_BUTTONSECONDARY_PROPS.isDisabled,
    isFullWidth: DEFAULT_BUTTONSECONDARY_PROPS.isFullWidth,
  },
  render: (args) => <ButtonSecondaryStory {...args} />,
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ButtonSecondary size={ButtonSize.Sm}>ButtonSize Sm</ButtonSecondary>
      <ButtonSecondary size={ButtonSize.Md}>ButtonSize Md</ButtonSecondary>
      <ButtonSecondary size={ButtonSize.Lg}>
        ButtonSize Lg (Default)
      </ButtonSecondary>
    </View>
  ),
};

export const IsLoading: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ButtonSecondary isLoading>ButtonSecondary</ButtonSecondary>
      <ButtonSecondary isLoading loadingText="With Loading Text">
        ButtonSecondary
      </ButtonSecondary>
    </View>
  ),
};

export const WithStartAccessory: Story = {
  render: () => (
    <ButtonSecondary startIconName={IconName.Add}>
      ButtonSecondary
    </ButtonSecondary>
  ),
};

export const WithEndAccessory: Story = {
  render: () => (
    <ButtonSecondary endIconName={IconName.Add}>
      ButtonSecondary
    </ButtonSecondary>
  ),
};

export const WithStartAndEndAccessory: Story = {
  render: () => (
    <ButtonSecondary
      startIconName={IconName.Add}
      endIconName={IconName.AddSquare}
    >
      ButtonSecondary
    </ButtonSecondary>
  ),
};

export const isDisabled: Story = {
  render: () => <ButtonSecondary isDisabled>ButtonSecondary</ButtonSecondary>,
};

export const isFullWidth: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ButtonSecondary>ButtonSecondary</ButtonSecondary>
      <ButtonSecondary isFullWidth>ButtonSecondary</ButtonSecondary>
    </View>
  ),
};

export const isDanger: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ButtonSecondary isDanger>ButtonSecondary</ButtonSecondary>
      <ButtonSecondaryStory isDanger isInverse>
        ButtonSecondary
      </ButtonSecondaryStory>
    </View>
  ),
};

export const isInverse: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ButtonSecondaryStory isInverse>ButtonSecondary</ButtonSecondaryStory>
      <ButtonSecondaryStory isInverse isDanger>
        ButtonSecondary
      </ButtonSecondaryStory>
    </View>
  ),
};

export const WithLongText: Story = {
  render: () => (
    <ButtonSecondary
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
    </ButtonSecondary>
  ),
};
